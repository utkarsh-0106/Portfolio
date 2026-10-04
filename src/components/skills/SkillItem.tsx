import { motion, useReducedMotion } from 'framer-motion';
import { SkillIcon } from '@/components/ui/SkillIcon';
import type { Skill } from '@/data/skills';

export function SkillItem({ skill }: { skill: Skill }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={reduce ? undefined : { y: -2 }}
      className="group flex items-center gap-3 rounded-xl border border-soft bg-subtle px-3 py-2.5 transition-colors hover:border-strong"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-card text-[var(--text)] ring-1 ring-soft transition-colors group-hover:text-accent-500">
        <SkillIcon path={skill.icon} className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium leading-tight">{skill.name}</span>
    </motion.div>
  );
}
