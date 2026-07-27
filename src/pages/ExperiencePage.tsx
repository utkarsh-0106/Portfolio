import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { experiences, type ExperienceItem } from '@/data/experience';

const typeColor: Record<ExperienceItem['type'], string> = {
  Training: 'text-accent-500 dark:text-accent-400',
  Hackathon: 'text-amber-500',
  'Technical Learning': 'text-emerald-500',
  'Academic Project': 'text-rose-500',
};

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="Utkarsh Maheshwari's journey — training, hackathons, technical learning, and academic projects that show real growth."
        path="/experience"
      />
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of growth, not job titles."
          description="Training, hackathons, technical learning, and academic projects — each one a step toward being a more complete engineer."
        />

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-soft sm:left-1/2" aria-hidden />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.title}-${i}`} delay={i * 0.04}>
                <div className={`relative pl-8 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-[calc(50%+2rem)]' : 'sm:pl-[calc(50%+2rem)]'}`}>
                  {/* node */}
                  <span
                    className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-[var(--bg)] bg-[var(--text)] sm:left-1/2 sm:-translate-x-1/2`}
                    aria-hidden
                  />
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="surface-card rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-mono text-xs uppercase tracking-[0.15em] ${typeColor[exp.type]}`}>
                        {exp.type}
                      </span>
                      <span className="text-subtle">·</span>
                      <span className="font-mono text-xs text-subtle">{exp.period}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted">{exp.org}</p>
                    <p className="mt-3 text-sm text-muted text-pretty">{exp.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500 dark:bg-accent-400" />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
