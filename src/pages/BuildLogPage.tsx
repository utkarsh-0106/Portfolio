import { motion, useReducedMotion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { buildLogEntries, type BuildLogKind } from '@/data/buildLog';
import { PageShell } from '@/components/layout/PageShell';
import { SystemLabel } from '@/components/ui/SystemLabel';
import { cn } from '@/lib/cn';
import { useMemo, useState } from 'react';

const filters: Array<'All' | BuildLogKind> = ['All', 'Project', 'Experience'];

export function BuildLogPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const reduceMotion = useReducedMotion();

  const entries = useMemo(
    () =>
      filter === 'All'
        ? buildLogEntries
        : buildLogEntries.filter((entry) => entry.kind === filter),
    [filter]
  );

  return (
    <>
      <Seo
        title="Build Log"
        description="A documented record of Utkarsh Maheshwari's projects and engineering experience."
        path="/build-log"
      />
      <PageShell>
      <main className="pb-24 pt-12 sm:pt-16">
        <section aria-labelledby="build-log-title" className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(78,161,255,0.10),transparent_68%)]" />

          <Reveal>
            <div className="relative max-w-3xl">
              <SystemLabel>Build Log / Documented Work</SystemLabel>
              <h1
                id="build-log-title"
                className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
              >
                Work that moved
                <span className="text-accent-500"> the system forward.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                A chronological view of projects and engineering experience already
                documented in this portfolio. No invented launch dates, metrics, or
                activity — just the work represented by the source data.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Build log filter">
              {filters.map((item) => {
                const active = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(item)}
                    className={cn(
                      'rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all',
                      active
                        ? 'border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--text)]'
                        : 'border-soft text-muted hover:border-[var(--border-accent)] hover:text-[var(--text)]'
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-accent-500/70 via-[var(--border)] to-transparent sm:left-1/2 sm:-translate-x-1/2"
            />

            <div className="space-y-7 sm:space-y-10">
              {entries.map((entry, index) => {
                const left = index % 2 === 0;

                return (
                  <motion.article
                    key={entry.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.55,
                      delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.18),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-4 sm:grid-cols-[1fr_40px_1fr] sm:gap-6"
                  >
                    <div className={cn('hidden sm:block', left ? 'sm:order-1' : 'sm:order-3')}>
                      {left && <BuildLogCard entry={entry} />}
                    </div>

                    <div className="relative z-10 flex justify-center sm:order-2">
                      <span className="mt-5 grid h-3.5 w-3.5 place-items-center rounded-full border border-accent-500 bg-[var(--bg)] shadow-[0_0_0_5px_var(--bg),0_0_20px_rgba(78,161,255,0.22)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                      </span>
                    </div>

                    <div className="sm:order-1 sm:hidden">
                      <BuildLogCard entry={entry} />
                    </div>

                    <div className={cn('hidden sm:block', left ? 'sm:order-3' : 'sm:order-1')}>
                      {!left && <BuildLogCard entry={entry} />}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="mt-16 border-t border-soft pt-7">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-[var(--text)]"
              >
                Explore the systems
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </PageShell>
    </>
  );
}

function BuildLogCard({ entry }: { entry: (typeof buildLogEntries)[number] }) {
  return (
    <div className="group rounded-2xl border border-soft bg-[var(--bg-card)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-accent)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-500">
          <CalendarDays size={12} />
          {entry.period}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-subtle">
          {entry.kind}
        </span>
      </div>

      <h2 className="mt-5 font-display text-xl font-semibold tracking-[-0.025em]">
        {entry.title}
      </h2>

      {entry.organization && (
        <p className="mt-1 text-sm font-medium text-muted">{entry.organization}</p>
      )}

      <p className="mt-4 text-sm leading-6 text-muted">{entry.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-soft bg-[var(--bg)] px-2 py-1 font-mono text-[9px] text-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={entry.href}
        className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[var(--text)] transition-colors hover:text-accent-500"
      >
        {entry.kind === 'Project' ? 'Open system' : 'View experience'}
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
