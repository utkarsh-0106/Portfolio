import { motion } from 'framer-motion';
import { Reveal, staggerContainer } from '@/components/Reveal';
import { SkillItem } from '@/components/skills/SkillItem';
import type { SkillCategory } from '@/data/skills';
import { cn } from '@/lib/cn';

export function SkillCategoryCard({
  category,
  delay = 0,
  className,
}: {
  category: SkillCategory;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="glass-panel h-full rounded-2xl p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-medium">{category.title}</h3>
          <span className="shrink-0 font-mono text-xs text-subtle">
            {category.skills.length} {category.skills.length === 1 ? 'tool' : 'tools'}
          </span>
        </div>
        <p className="mt-1.5 max-w-sm text-sm text-muted text-pretty">{category.description}</p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className={cn(
            'mt-6 grid grid-cols-2 gap-2.5',
            category.skills.length > 6 && 'sm:grid-cols-3'
          )}
        >
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </Reveal>
  );
}
