import { motion } from 'framer-motion';
import { Server, Brain, Code2, Target } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { PageShell } from '@/components/layout/PageShell';
import { PortraitTreatment } from '@/components/media/PortraitTreatment';
import { profile } from '@/data/profile';

const journey = [
  {
    period: '2023 — 2027',
    title: 'Computer Science undergraduate',
    text: 'Building a foundation in DSA, OOP, DBMS, operating systems, and networks while shipping end-to-end software.',
  },
  {
    period: '2023 — 2024',
    title: 'First systems',
    text: 'Shipped Track-n-Test, CineMatch, and Institutional Performance Analytics — tools for tracking, recommendation, and data-driven analysis.',
  },
  {
    period: '2025 — 2026',
    title: 'Backend and internships',
    text: 'Moved into production-shaped API work: Node.js services, authentication, and full-stack delivery across two internships.',
  },
  {
    period: '2026',
    title: 'AI engineering',
    text: 'Built Jango, a RAG document assistant with FastAPI, ChromaDB, LangChain, and local Qwen3 inference.',
  },
];

const exploring = [
  {
    icon: Server,
    title: 'Backend Engineering',
    text: 'Reliable APIs, authentication, and data models that stay maintainable as products grow.',
  },
  {
    icon: Brain,
    title: 'AI Engineering',
    text: 'Practical RAG pipelines — retrieval, grounded answers, and local LLM inference.',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    text: 'Consistent DSA practice and structured debugging of real application logic.',
  },
  {
    icon: Code2,
    title: 'System Design',
    text: 'Clear module boundaries, API design, and architecture that can be reasoned about.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Utkarsh Maheshwari — Computer Science undergraduate focused on backend engineering and AI."
        path="/about"
      />
      <PageShell>
        <SectionHeading
          eyebrow="About"
          title="Backend Engineering × AI."
          description="Building reliable systems, APIs, and AI-powered applications."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass-panel overflow-hidden p-3">
              <PortraitTreatment
                src="/about-workspace.png"
                alt="Utkarsh Maheshwari"
                className="aspect-[4/5]"
              />
              <div className="p-5">
                <p className="font-display text-xl font-semibold">{profile.name}</p>
                <p className="mt-1 text-sm text-muted">{profile.title}</p>
                <p className="mt-1 text-sm text-muted">Graduating 2027</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="space-y-8">
              <p className="text-lg leading-8 text-muted">
                I am a Computer Science undergraduate graduating in 2027, focused on backend
                engineering and AI. I care about systems that stay reliable: APIs, data models, and
                retrieval pipelines that can be tested and reasoned about.
              </p>
              <p className="leading-8 text-muted">
                My work sits at the intersection of problem solving and end-to-end software
                development — from DSA practice to FastAPI services, RAG applications, and the
                frontends that sit on top of them.
              </p>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-soft bg-subtle p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Focus</dt>
                  <dd className="mt-1 text-sm">{profile.focus}</dd>
                </div>
                <div className="rounded-xl border border-soft bg-subtle p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Based in</dt>
                  <dd className="mt-1 text-sm">{profile.city}</dd>
                </div>
              </dl>

              <div className="about-exploring mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-500">
                  Currently Exploring
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span>Backend Architecture</span>
                  <span>RAG &amp; LLM Applications</span>
                  <span>System Design</span>
                  <span>Problem Solving</span>
                </div>
              </div>

              <div className="about-approach mt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-500">
                  Engineering Approach
                </p>

                <div className="about-approach-grid mt-3">
                  <div>
                    <strong>01</strong>
                    <h3>Design deliberately</h3>
                    <p>Clear APIs, data models, and maintainable structure.</p>
                  </div>

                  <div>
                    <strong>02</strong>
                    <h3>Build with evidence</h3>
                    <p>Testing, validation, and measurable system behavior.</p>
                  </div>

                  <div>
                    <strong>03</strong>
                    <h3>Ship end-to-end</h3>
                    <p>From backend logic to usable interfaces and deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Engineering journey" title="How the work accumulated." />
          <div className="relative mt-12 space-y-6">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent-500/40 to-transparent sm:left-1/2" aria-hidden />
            {journey.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div
                  className={`relative pl-8 sm:pl-0 ${
                    index % 2 === 0 ? 'sm:pr-[calc(50%+1.5rem)]' : 'sm:pl-[calc(50%+1.5rem)]'
                  }`}
                >
                  <span className="absolute left-0 top-5 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)] bg-accent-500 sm:left-1/2 sm:-translate-x-1/2" />
                  <article className="glass-panel rounded-2xl p-6">
                    <p className="font-mono text-xs text-subtle">{item.period}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Currently exploring"
            title="Where the next systems are going."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {exploring.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <motion.article whileHover={{ y: -3 }} className="glass-panel h-full rounded-2xl p-6">
                  <item.icon size={20} className="text-accent-500" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
