import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  PlayCircle,
  Radio,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import { jangoPipeline, projectDisplay, sectionParagraphs } from '@/lib/projectView';
import { ProjectCover } from '@/components/media/ProjectCover';
import { cn } from '@/lib/cn';

function ProjectLinkIcon({ type }: { type: Project['links'][number]['type'] }) {
  if (type === 'github') return <Github size={13} />;
  if (type === 'video') return <PlayCircle size={13} />;
  return <ExternalLink size={13} />;
}

function JangoArchitecture() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F0A1A] p-5 sm:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Jango / retrieval pipeline</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent-2)]"><Radio size={11} /> live view</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-4">
          {jangoPipeline.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="relative"
            >
              <div className="min-h-[76px] rounded-xl border border-white/10 bg-white/[0.025] p-3 transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.05]">
                <div className="font-mono text-[9px] text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-xs font-medium text-white/85">{step}</div>
              </div>
              {index < jangoPipeline.length - 1 && (
                <motion.div
                  aria-hidden
                  className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 bg-[var(--accent)]/40 sm:block"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + 0.15, duration: 0.35 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JobAgentDemo() {
  const fields = ['Name', 'Email', 'Education', 'Skills'];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#f5f7fb] p-4 text-[#111827] sm:p-6">
      <div className="flex items-center justify-between border-b border-black/10 pb-3">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40">Job application</div>
          <div className="mt-1 text-sm font-semibold">Software Engineer Application</div>
        </div>
        <div className="rounded-md bg-black/[0.05] px-2 py-1 font-mono text-[9px] text-black/50">MVP</div>
      </div>
      <div className="mt-4 grid gap-2">
        {fields.map((field, index) => (
          <motion.div
            key={field}
            initial={{ opacity: 0.55 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2.5"
          >
            <div>
              <div className="text-[9px] uppercase tracking-[0.12em] text-black/40">{field}</div>
              <div className="mt-1 text-xs text-black/75">Profile match</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-12 overflow-hidden rounded-full bg-black/10">
                <motion.div
                  className="h-full rounded-full bg-[var(--accent-2)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: index === 3 ? '88%' : '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.15, duration: 0.5 }}
                />
              </div>
              <Check size={13} className="text-[var(--accent-2)]" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-[#111827] px-3 py-2.5 text-white">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">deterministic autofill</span>
        <span className="text-xs font-medium">User-controlled submit</span>
      </div>
    </div>
  );
}

function SystemVisual({ project }: { project: Project }) {
  if (project.slug === 'jango-job-agent') return <JobAgentDemo />;

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#120B1F]">
      {project.video ? (
        <video
          className="h-full w-full object-cover"
          src={project.video}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label={`${projectDisplay(project).name} project preview`}
        />
      ) : (
        <ProjectCover src={project.cover} title={projectDisplay(project).name} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur">system preview</span>
        <Sparkles size={16} className="text-[var(--accent-2)]" />
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-sm font-medium text-white">{projectDisplay(project).name}</div>
        <div className="mt-1 max-w-xl text-xs text-white/55">{project.tagline}</div>
      </div>
    </div>
  );
}

function EvidenceBlock({ project }: { project: Project }) {
  const problem = sectionParagraphs(project, ['Problem', 'Business Problem'])[0];
  const architecture = sectionParagraphs(project, ['Architecture'])[0];
  const decisions = sectionParagraphs(project, ['Engineering Decisions'])[0];
  const features = sectionParagraphs(project, ['Features', 'Key Features'])[0];

  const blocks = [
    problem ? { label: 'Problem', value: problem } : null,
    architecture ? { label: 'How it works', value: architecture } : null,
    decisions ? { label: 'Engineering decision', value: decisions } : null,
    features ? { label: 'What I built', value: features } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {blocks.slice(0, 4).map((block) => (
        <div key={block.label} className="border-l border-[var(--accent)]/35 pl-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle">{block.label}</div>
          <p className="mt-2 text-sm leading-6 text-muted">{block.value}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectSystemsLab({ projects }: { projects: Project[] }) {
  const [selectedSlug, setSelectedSlug] = useState(projects[0]?.slug ?? '');
  const selected = useMemo(() => projects.find((project) => project.slug === selectedSlug) ?? projects[0], [projects, selectedSlug]);
  if (!selected) return null;

  const display = projectDisplay(selected);

  return (
    <section aria-label="Project systems explorer" className="mt-10">
      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Select system</span>
            <span className="font-mono text-[10px] text-subtle">{String(projects.length).padStart(2, '0')}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible">
            {projects.map((project, index) => {
              const item = projectDisplay(project);
              const active = project.slug === selected.slug;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setSelectedSlug(project.slug)}
                  aria-pressed={active}
                  className={cn(
                    'group flex min-w-[180px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-200 lg:min-w-0 lg:w-full',
                    active
                      ? 'border-accent/45 bg-accent/[0.08] text-[var(--text)]'
                      : 'border-transparent text-muted hover:border-soft hover:bg-subtle hover:text-[var(--text)]',
                  )}
                >
                  <span className={cn('font-mono text-[9px]', active ? 'text-accent' : 'text-subtle')}>{String(index + 1).padStart(2, '0')}</span>
                  <span className="truncate text-xs font-medium">{item.name}</span>
                  <span className={cn('ml-auto h-1.5 w-1.5 rounded-full', active ? 'bg-accent shadow-[0_0_12px_var(--accent)]' : 'bg-subtle/40')} />
                </button>
              );
            })}
          </div>
          <div className="mt-6 hidden border-t border-soft pt-5 lg:block">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle">Signal</div>
            <p className="mt-2 text-xs leading-5 text-muted">Problem → architecture → engineering decision → proof.</p>
          </div>
        </aside>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.article
              key={selected.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                    <span>{selected.year}</span><span className="text-accent">/</span><span>{selected.role}</span>
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{display.name}</h2>
                  {display.subtitle && <p className="mt-2 text-sm text-muted">{display.subtitle}</p>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-soft px-3 py-2 text-xs text-muted transition-colors hover:border-accent/40 hover:text-[var(--text)]"
                    >
                      <ProjectLinkIcon type={link.type} />{link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
                <div>
                  <SystemVisual project={selected} />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => <span key={tag} className="rounded-full border border-soft bg-subtle px-2.5 py-1 font-mono text-[10px] text-muted">{tag}</span>)}
                  </div>
                </div>
                <div className="rounded-2xl border border-soft bg-[var(--surface)] p-5 sm:p-6">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle">System brief</div>
                  <p className="mt-3 text-sm leading-6 text-muted">{selected.summary}</p>
                  <div className="mt-6 border-t border-soft pt-5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle">Role</div>
                    <div className="mt-2 text-sm font-medium">{selected.role}</div>
                  </div>
                  <Link
                    to={`/projects/${selected.slug}`}
                    className="mt-6 inline-flex w-full items-center justify-between rounded-xl border border-accent/30 bg-accent/[0.07] px-4 py-3 text-sm font-medium text-[var(--text)] transition-all hover:border-accent/60 hover:bg-accent/[0.12]"
                  >
                    Explore case study <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              {selected.slug === 'jango' && <div className="mt-5"><JangoArchitecture /></div>}

              <div className="mt-8 border-t border-soft pt-7">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">Engineering signal</div>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">How the system earns its place.</h3>
                  </div>
                  <ArrowDown size={16} className="hidden text-subtle sm:block" />
                </div>
                <EvidenceBlock project={selected} />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-soft pt-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle">System {String(projects.findIndex((p) => p.slug === selected.slug) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</div>
                <Link to={`/projects/${selected.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong">
                  View full implementation <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
