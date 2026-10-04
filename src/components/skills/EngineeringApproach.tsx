import { Reveal } from '@/components/Reveal';

const approaches = [
  {
    id: '01',
    title: 'Fundamentals',
    text: 'Strong focus on DSA, algorithms, OOP, DBMS, OS, and networking.',
  },
  {
    id: '02',
    title: 'Backend First',
    text: 'Design APIs, authentication, data models, and application logic.',
  },
  {
    id: '03',
    title: 'Build with AI',
    text: 'Use RAG, LLMs, and retrieval systems to build useful AI applications.',
  },
  {
    id: '04',
    title: 'Ship & Improve',
    text: 'Test, debug, deploy, and continuously improve the system.',
  },
];

export function EngineeringApproach() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {approaches.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.05}>
          <article className="glass-panel h-full rounded-2xl p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-accent-500">{item.id}</p>
            <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
