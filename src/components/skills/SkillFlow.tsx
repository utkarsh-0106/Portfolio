import { ArrowDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const stages = [
  'C++ / DSA',
  'Python / Backend',
  'FastAPI / REST APIs',
  'SQL / Databases',
  'RAG / LLM Applications',
  'React / Frontend',
  'System Design',
];

export function SkillFlow() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center">
      {stages.map((stage, index) => (
        <Reveal key={stage} delay={index * 0.04} className="flex w-full flex-col items-center">
          {index > 0 && (
            <ArrowDown size={16} className="my-2 text-accent-500/70" aria-hidden />
          )}
          <div className="w-full rounded-xl border border-soft bg-subtle px-4 py-3 text-center">
            <p className="text-sm font-medium">{stage}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
