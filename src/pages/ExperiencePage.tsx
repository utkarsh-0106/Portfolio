import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { PageShell } from '@/components/layout/PageShell';
import { Badge } from '@/components/ui/Badge';
import { experiences, type ExperienceItem } from '@/data/experience';

const knownTech = [
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'Firebase',
  'Next.js',
  'Redux',
  'Git',
  'REST APIs',
  'Python',
  'Streamlit',
  'React',
  'Vercel',
  'Render',
];

function techsFrom(item: ExperienceItem) {
  const haystack = `${item.description} ${item.highlights.join(' ')}`;
  return knownTech.filter((tech) => haystack.includes(tech));
}

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="Internships, hackathons, and engineering work by Utkarsh Maheshwari."
        path="/experience"
      />

      <PageShell>
        <SectionHeading
          eyebrow="Experience"
          title="Here's what I actually engineered."
          description="Internships first, then competitions and engineering work — responsibilities and systems, not inflated titles."
        />

        <div className="relative mt-16">
          <div
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent-500/40 to-transparent sm:left-1/2"
            aria-hidden
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const primary =
                exp.type === 'Internship' || exp.type === 'Apprenticeship';
              const techs = techsFrom(exp);

              return (
                <Reveal key={`${exp.title}-${i}`} delay={i * 0.03}>
                  <div
                    className={`relative pl-8 sm:pl-0 ${
                      i % 2 === 0
                        ? 'sm:pr-[calc(50%+2rem)]'
                        : 'sm:pl-[calc(50%+2rem)]'
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-5 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)] sm:left-1/2 sm:-translate-x-1/2 ${
                        primary ? 'bg-accent-500' : 'bg-[var(--text)]'
                      }`}
                    />

                    <article
                      className={`glass-panel rounded-2xl ${
                        primary ? 'ring-1 ring-accent-500/15' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 p-6">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-500">
                            {exp.type} · {exp.period}
                          </p>

                          <h3 className="mt-2 font-display text-lg font-semibold">
                            {exp.title}
                          </h3>

                          <p className="mt-1 text-sm text-muted">
                            {exp.org}
                          </p>
                        </div>

                        <ChevronDown
                          size={18}
                          className="mt-1 shrink-0 rotate-180 text-subtle"
                        />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <div className="border-t border-soft px-6 pb-6 pt-4">
                          <p className="text-sm leading-7 text-muted">
                            {exp.description}
                          </p>

                          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                            Engineered
                          </p>

                          <ul className="mt-2 space-y-1.5">
                            {exp.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex gap-2 text-sm text-muted"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          {techs.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {techs.map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </PageShell>
    </>
  );
}
