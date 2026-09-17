import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/Reveal';
import { PageShell } from '@/components/layout/PageShell';
import { SkillCategoryCard } from '@/components/skills/SkillCategoryCard';
import { SkillFlow } from '@/components/skills/SkillFlow';
import { EngineeringApproach } from '@/components/skills/EngineeringApproach';
import { displayedSkillCategories } from '@/data/skills';

const projectConnections = [
  {
    slug: 'jango',
    title: 'Jango',
    stack: [
      'FastAPI',
      'JWT',
      'SQLAlchemy',
      'SQLite',
      'LangChain',
      'ChromaDB',
      'Ollama',
      'Qwen3',
      'React',
    ],
  },
  {
    slug: 'institutional-performance-analytics-system',
    title: 'Institutional Performance Analytics System',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly'],
  },
  {
    slug: 'ai-developer-toolbox',
    title: 'AI Developer Toolbox',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'REST APIs', 'Vercel', 'Render'],
  },
  {
    slug: 'cinematch',
    title: 'CineMatch',
    stack: ['Python', 'Flask', 'Pandas', 'Scikit-learn', 'Render'],
  },
];

export function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills"
        description="The technologies Utkarsh Maheshwari works with — programming, backend, frontend, databases, AI/ML, core CS, and tools."
        path="/skills"
      />
      <PageShell>
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The stack, organized
              <br className="hidden sm:block" /> by what it does.
            </>
          }
          description="Not a buzzword list — these are the tools I have actually shipped with, grouped by the job they do."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {displayedSkillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              delay={index * 0.04}
              className={
                category.title === 'Tools & Deployment' && displayedSkillCategories.length % 2 === 1
                  ? 'md:col-span-2'
                  : undefined
              }
            />
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="How I build"
            title="A stack that compounds."
            description="From fundamentals to APIs, data, retrieval, and interfaces — then back to system design."
          />
          <div className="mt-10">
            <SkillFlow />
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="In practice"
            title="Skills connected to shipped work."
            description="The same tools appear in projects I have actually built."
          />
          <div className="mt-10 grid gap-4">
            {projectConnections.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="glass-panel group flex flex-col gap-4 rounded-2xl p-5 transition-colors hover:border-strong sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-accent-500">
                    View project <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Engineering approach"
            title="How I work through a system."
            description="Concise principles — not inflated claims."
          />
          <div className="mt-10">
            <EngineeringApproach />
          </div>
        </div>

        <Reveal>
          <div className="glass-panel mt-24 flex flex-col items-start justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-500">Next</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a system to build?
              </h2>
              <p className="mt-2 max-w-md text-muted">
                If you are hiring for backend engineering or AI-adjacent product work, I would like to
                hear about it.
              </p>
            </div>
            <ButtonLink to="/contact" size="lg">
              Let's talk <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </Reveal>
      </PageShell>
    </>
  );
}
