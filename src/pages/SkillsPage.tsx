import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '@/components/Reveal';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { skillCategories } from '@/data/skills';

export function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills"
        description="The technologies Utkarsh Maheshwari works with — programming, backend, frontend, databases, AI/ML, core CS, and tools."
        path="/skills"
      />
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Skills"
          title="The stack, organized by what it does."
          description="Not a buzzword list — these are the tools I have actually shipped with, grouped by the job they do."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.05}>
              <div className="surface-card h-full rounded-2xl p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium">{cat.title}</h3>
                  <span className="font-mono text-xs text-subtle">
                    {cat.skills.length} tools
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted text-pretty">{cat.description}</p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-3 rounded-xl border border-soft bg-subtle px-3.5 py-3 transition-colors hover:border-strong"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card text-[var(--text)] ring-1 ring-soft transition-colors group-hover:text-accent-500 dark:group-hover:text-accent-400">
                        <SkillIcon path={skill.icon} className="h-7 w-7" />
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
