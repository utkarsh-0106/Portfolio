import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Database, Layers3, Network, Server, Sparkles, Terminal, Wrench } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { displayedSkillCategories, type Skill, type SkillCategory } from '@/data/skills';
import { projectConnections } from '@/data/skillProjectConnections';
import { SkillIcon } from '@/components/ui/SkillIcon';

const categoryMeta: Record<string, { label: string; icon: typeof Server }> = {
  Programming: { label: 'Languages', icon: Terminal },
  Backend: { label: 'Backend', icon: Server },
  Frontend: { label: 'Frontend', icon: Layers3 },
  Database: { label: 'Databases', icon: Database },
  'AI & ML': { label: 'AI / ML', icon: Sparkles },
  'Core CS': { label: 'Core CS', icon: Network },
  'Tools & Deployment': { label: 'DevOps / Tools', icon: Wrench },
};

const descriptions: Record<string, string> = {
 'C++': 'A systems-oriented language I use for DSA and problem solving.',
  Python: 'A practical language I use across backend services and data-driven applications.',
  JavaScript: 'The runtime language behind interactive web applications and Node.js work.',
  TypeScript: 'Typed JavaScript used to keep frontend and application code easier to reason about.',
  SQL: 'The query language I use when working with relational application data.',
  FastAPI: 'A Python framework for building typed, high-performance HTTP APIs.',
  'Node.js': 'A JavaScript runtime used for backend services and application APIs.',
  'Express.js': 'A lightweight Node.js framework used to structure HTTP APIs.',
  Flask: 'A lightweight Python web framework used in the CineMatch project.',
  'REST APIs': 'HTTP interfaces that connect application clients with backend services.',
  JWT: 'A token format used for stateless authentication in backend applications.',
  React: 'A component-based UI library used across the portfolio and application work.',
  RAG: 'A retrieval pattern that grounds generated answers in relevant source content.',
  LangChain: 'A framework used to compose retrieval and LLM application workflows.',
  Ollama: 'A local runtime used to run language models during AI application development.',
  Qwen3: 'A local language model used by JANGO for grounded response generation.',
  'Scikit-learn': 'A Python machine-learning toolkit used for predictive features in analytics work.',
  Pandas: 'A Python data library used for tabular data transformation and analysis.',
  NumPy: 'A numerical Python library used alongside data and machine-learning workflows.',
  Streamlit: 'A Python framework used to turn data workflows into interactive applications.',
  SQLite: 'A lightweight relational database used by JANGO and analytics work.',
  ChromaDB: 'A vector store used by JANGO for embedding-based document retrieval.',
  Git: 'Version control used to manage and iterate on software projects.',
  GitHub: 'The code-hosting platform used for project repositories and collaboration.',
  Vercel: 'A deployment platform used for frontend hosting.',
  Render: 'A deployment platform used for application services.',
};

function normalizeCategory(category: SkillCategory) {
  return categoryMeta[category.title]?.label ?? category.title;
}

export function SkillWorkbench() {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(displayedSkillCategories[1]?.title ?? displayedSkillCategories[0]?.title);
  const [selectedName, setSelectedName] = useState('FastAPI');

  const active = displayedSkillCategories.find((category) => category.title === activeCategory) ?? displayedSkillCategories[0];
  const selected: Skill = useMemo(
    () => active?.skills.find((skill) => skill.name === selectedName) ?? active?.skills[0],
    [active, selectedName]
  );

  const relatedProjects = selected
    ? projectConnections.filter((project) => project.stack.includes(selected.name))
    : [];

  const selectCategory = (title: string) => {
    setActiveCategory(title);
    const category = displayedSkillCategories.find((item) => item.title === title);
    if (category && !category.skills.some((skill) => skill.name === selectedName)) {
      setSelectedName(category.skills[0]?.name ?? '');
    }
  };

  if (!active || !selected) return null;

  return (
    <section aria-label="Interactive engineering stack" className="relative overflow-hidden rounded-[1.75rem] border border-soft bg-card/60 p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 engineering-grid opacity-30" aria-hidden />
      <div className="relative">
        <div className="flex flex-col gap-5 border-b border-soft pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-500">Stack interface</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Select a system layer.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Explore the technologies by the role they play, then open the projects where the stack is evidenced.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{active.skills.length} technologies loaded</div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Skill categories">
          {displayedSkillCategories.map((category) => {
            const meta = categoryMeta[category.title] ?? { label: category.title, icon: Terminal };
            const Icon = meta.icon;
            const activeTab = category.title === active.title;
            return (
              <button
                key={category.title}
                type="button"
                role="tab"
                aria-selected={activeTab}
                onClick={() => selectCategory(category.title)}
                className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                  activeTab
                    ? 'border-accent-500/40 bg-accent-500/10 text-[var(--text)]'
                    : 'border-soft bg-subtle text-muted hover:border-strong hover:text-[var(--text)]'
                }`}
              >
                <Icon size={14} className={activeTab ? 'text-accent-500' : 'text-subtle'} aria-hidden />
                {meta.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-soft bg-subtle/70 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{normalizeCategory(active)}</p>
                <p className="mt-1 text-sm text-muted">{active.description}</p>
              </div>
              <span className="font-mono text-[10px] text-subtle">{String(active.skills.length).padStart(2, '0')}</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {active.skills.map((skill, index) => {
                const selectedSkill = skill.name === selected.name;
                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedName(skill.name)}
                    initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: reduce ? 0 : index * 0.025 }}
                    whileHover={reduce ? undefined : { y: -2 }}
                    className={`group flex min-h-[72px] items-center gap-2.5 rounded-xl border p-3 text-left transition-colors ${
                      selectedSkill
                        ? 'border-accent-500/50 bg-accent-500/10'
                        : 'border-soft bg-card/50 hover:border-strong'
                    }`}
                    aria-pressed={selectedSkill}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-1 ring-soft ${selectedSkill ? 'bg-accent-500/10 text-accent-500' : 'bg-subtle text-[var(--text)]'}`}>
                      <SkillIcon path={skill.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 text-xs font-medium leading-4">{skill.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.aside
            key={selected.name}
            initial={{ opacity: 0, x: reduce ? 0 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-accent-500/20 bg-accent-500/[0.035] p-5"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-500">
                <SkillIcon path={selected.icon} className="h-6 w-6" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-500">Selected</span>
            </div>
            <h4 className="mt-5 font-display text-2xl font-semibold tracking-tight">{selected.name}</h4>
            <p className="mt-2 text-sm leading-6 text-muted">{descriptions[selected.name] ?? 'A technology represented in the current portfolio skill set.'}</p>

            <div className="mt-6 border-t border-soft pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Evidence in shipped work</p>
              {relatedProjects.length ? (
                <div className="mt-3 space-y-2">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-soft bg-card/60 px-3.5 py-3 text-sm transition-colors hover:border-accent-500/30"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={15} className="text-subtle transition-colors group-hover:text-accent-500" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-6 text-muted">No specific shipped-project mapping is listed in the current portfolio data.</p>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
