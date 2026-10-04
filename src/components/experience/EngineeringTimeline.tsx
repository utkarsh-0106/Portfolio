import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, CalendarDays, ChevronRight, Code2, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { experiences, type ExperienceItem } from '@/data/experience';

const knownTech = [
  'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Firebase', 'Next.js', 'Redux',
  'Git', 'REST APIs', 'Python', 'Streamlit', 'React', 'Vercel', 'Render',
];

function techsFrom(item: ExperienceItem) {
  const haystack = `${item.description} ${item.highlights.join(' ')}`;
  return knownTech.filter((tech) => haystack.includes(tech));
}

function iconFor(type: ExperienceItem['type']) {
  return type === 'Internship' || type === 'Apprenticeship' ? Briefcase : Trophy;
}

export function EngineeringTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-label="Engineering experience timeline" className="relative mt-14">
      <div className="pointer-events-none absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 sm:block sm:left-1/2 sm:-translate-x-1/2" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[11px] top-2 hidden w-px origin-top bg-gradient-to-b from-accent-500 via-accent-400/60 to-transparent sm:block sm:left-1/2 sm:-translate-x-1/2"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: reducedMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: 'calc(100% - 1rem)' }}
      />

      <div className="space-y-7 sm:space-y-10">
        {experiences.map((exp, index) => {
          const primary = exp.type === 'Internship' || exp.type === 'Apprenticeship';
          const techs = techsFrom(exp);
          const Icon = iconFor(exp.type);
          const left = index % 2 === 0;

          return (
            <motion.article
              key={`${exp.title}-${exp.org}-${index}`}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.06 }}
              className="relative sm:grid sm:grid-cols-[1fr_64px_1fr] sm:items-start"
            >
              <div className={left ? 'sm:col-start-1 sm:row-start-1 sm:pr-8' : 'sm:col-start-3 sm:row-start-1 sm:pl-8'}>
                <div className="group rounded-2xl border border-soft bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-accent-500/30 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-500">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-subtle">/</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[var(--text)]">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{exp.org}</p>
                    </div>
                    <Icon size={18} className="shrink-0 text-accent-400" aria-hidden />
                  </div>

                  <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                    <CalendarDays size={13} aria-hidden />
                    <span>{exp.period}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">{exp.description}</p>

                  <div className="mt-5 border-t border-soft pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">Engineering responsibilities</p>
                    <ul className="mt-3 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm leading-6 text-muted">
                          <ChevronRight size={14} className="mt-1 shrink-0 text-accent-500" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {techs.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {techs.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute left-0 top-5 flex h-6 w-6 items-center justify-center sm:relative sm:col-start-2 sm:row-start-1 sm:top-0 sm:h-8 sm:w-16">
                <span className={`relative z-10 h-3 w-3 rounded-full border-2 border-[var(--bg)] ${primary ? 'bg-accent-500 shadow-[0_0_18px_rgba(168,85,247,0.55)]' : 'bg-[var(--text)]'}`} />
              </div>

              <div className="hidden sm:col-start-3 sm:row-start-1 sm:block sm:self-center sm:pl-8">
                {!left && <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">Engineering timeline</div>}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
        <Code2 size={14} aria-hidden />
        <span>Experience is presented from verified portfolio records.</span>
      </div>
    </section>
  );
}
