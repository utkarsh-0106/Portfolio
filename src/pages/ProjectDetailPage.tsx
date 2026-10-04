import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Github,
  PlayCircle,
  User,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PageShell } from '@/components/layout/PageShell';
import { ProjectCover } from '@/components/media/ProjectCover';
import { ProjectVideo } from '@/components/media/ProjectVideo';
import { Pipeline } from '@/components/projects/Pipeline';
import { SystemLabel } from '@/components/ui/SystemLabel';
import { HudFrame } from '@/components/ui/HudFrame';
import { getProject } from '@/data/projects';
import { findSections, jangoPipeline, projectDisplay } from '@/lib/projectView';

const caseStudyOrder = [
  { key: 'problem', headings: ['Problem', 'Business Problem', 'Technical Problem'] },
  { key: 'architecture', headings: ['Architecture'] },
  { key: 'stack', headings: ['Tech Stack', 'Technology Stack'] },
  { key: 'features', headings: ['Features', 'Key Features'] },
  { key: 'decisions', headings: ['Engineering Decisions'] },
  { key: 'challenges', headings: ['Challenges'] },
];

function section(project: ReturnType<typeof getProject>, headings: string[]) {
  if (!project) return undefined;
  return findSections(project, headings)[0];
}

function linkIcon(type: string) {
  if (type === 'github') return <Github size={15} />;
  if (type === 'video') return <PlayCircle size={15} />;
  return <ArrowUpRight size={15} />;
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  const display = projectDisplay(project);
  const problem = section(project, ['Problem', 'Business Problem', 'Technical Problem']);
  const architecture = section(project, ['Architecture']);
  const decisions = section(project, ['Engineering Decisions']);
  const features = section(project, ['Features', 'Key Features']);
  const learnings = section(project, ['Learning', 'Key Learnings']);
  const usedHeadings = new Set(caseStudyOrder.flatMap((item) => item.headings));
  const extraSections = project.sections.filter(
    (item) =>
      !usedHeadings.has(item.heading) &&
      !['Learning', 'Key Learnings', 'Future Improvements'].includes(item.heading),
  );

  const systemSignals = [
    ['YEAR', project.year],
    ['ROLE', project.role],
    ['STACK', `${project.tags.length} technologies`],
    ['MEDIA', project.video ? 'Demo available' : `${project.gallery.length} visuals`],
  ];

  return (
    <>
      <Seo
        title={display.name}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        image={project.cover}
      />

      <PageShell>
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={14} /> Back to systems
          </Link>
        </Reveal>

        <header className="relative mt-8 overflow-hidden rounded-[2rem] border border-soft bg-[var(--surface)] p-6 sm:p-8 lg:p-12">
          <div className="pointer-events-none absolute inset-0 engineering-grid opacity-40" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal>
                <SystemLabel>System / {project.year}</SystemLabel>
              </Reveal>
              <Reveal delay={0.04}>
                <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs text-subtle">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {project.year}</span>
                  <span className="inline-flex items-center gap-1.5"><User size={13} /> {project.role}</span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
                  {display.name}
                </h1>
              </Reveal>
              {display.subtitle && (
                <Reveal delay={0.1}>
                  <p className="mt-3 max-w-2xl text-lg text-muted">{display.subtitle}</p>
                </Reveal>
              )}
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Button key={link.label} href={link.url} variant={link.type === 'github' ? 'primary' : 'secondary'}>
                      {linkIcon(link.type)} {link.label}
                    </Button>
                  ))}
                  {project.video && (
                    <Button href="#project-demo" variant="secondary">
                      <PlayCircle size={16} /> Watch Demo
                    </Button>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <HudFrame className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <ProjectCover src={project.cover} title={display.name} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">System preview</div>
                    <div className="mt-1 text-sm font-medium text-white">{project.tagline}</div>
                  </div>
                </div>
              </HudFrame>
            </Reveal>
          </div>
        </header>

        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {systemSignals.map(([label, value]) => (
              <div key={label} className="border-y border-soft px-4 py-4 sm:border-y-0 sm:border-l first:sm:border-l-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{label}</div>
                <div className="mt-1 text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <main className="min-w-0 space-y-16">
            {problem && (
              <Reveal>
                <section id="problem" className="scroll-mt-24">
                  <SystemLabel>01 / Problem</SystemLabel>
                  <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight">Why this system exists.</h2>
                  <div className="mt-6 max-w-3xl space-y-4">
                    {problem.body.map((paragraph) => <p key={paragraph} className="leading-7 text-muted">{paragraph}</p>)}
                  </div>
                </section>
              </Reveal>
            )}

            {architecture && (
              <Reveal>
                <section id="architecture" className="scroll-mt-24">
                  <SystemLabel>02 / Architecture</SystemLabel>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">How the system works.</h2>
                  <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                    <div className="rounded-2xl border border-soft bg-[var(--surface)] p-6">
                      <div className="space-y-4">
                        {project.slug === 'jango' ? (
                          <Pipeline steps={jangoPipeline} />
                        ) : (
                          architecture.body.map((paragraph, index) => (
                            <div key={paragraph} className="flex gap-4 border-b border-soft pb-4 last:border-0 last:pb-0">
                              <span className="font-mono text-xs text-accent-500">0{index + 1}</span>
                              <p className="text-sm leading-6 text-muted">{paragraph}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-soft bg-[var(--surface)] p-6">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Core stack</div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                      </div>
                    </div>
                  </div>
                </section>
              </Reveal>
            )}

            {features && (
              <Reveal>
                <section id="features" className="scroll-mt-24">
                  <SystemLabel>03 / Capabilities</SystemLabel>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">What I actually built.</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {features.body.map((feature, index) => (
                      <div key={feature} className="rounded-2xl border border-soft bg-[var(--surface)] p-5">
                        <CheckCircle2 size={17} className="text-accent-500" />
                        <p className="mt-4 text-sm leading-6 text-muted">{feature}</p>
                        <span className="mt-5 block font-mono text-[10px] text-subtle">CAPABILITY / 0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {decisions && (
              <Reveal>
                <section id="decisions" className="scroll-mt-24">
                  <SystemLabel>04 / Engineering Decisions</SystemLabel>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Trade-offs behind the build.</h2>
                  <div className="mt-6 space-y-3">
                    {decisions.body.map((decision, index) => (
                      <div key={decision} className="grid gap-4 rounded-2xl border border-soft bg-[var(--surface)] p-5 sm:grid-cols-[64px_1fr]">
                        <span className="font-mono text-xs text-accent-500">DEC.0{index + 1}</span>
                        <p className="text-sm leading-6 text-muted">{decision}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {project.video && (
              <Reveal>
                <section id="project-demo" className="scroll-mt-24">
                  <SystemLabel>05 / Build Demo</SystemLabel>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">See the system in motion.</h2>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-soft">
                    <ProjectVideo src={project.video} title={`${display.name} project demo`} />
                  </div>
                </section>
              </Reveal>
            )}

            {extraSections.map((item) => (
              <Reveal key={item.heading}>
                <section>
                  <SystemLabel>{item.heading}</SystemLabel>
                  <div className="mt-5 max-w-3xl space-y-4">
                    {item.body.map((paragraph) => <p key={paragraph} className="leading-7 text-muted">{paragraph}</p>)}
                  </div>
                </section>
              </Reveal>
            ))}

            {learnings && (
              <Reveal>
                <section>
                  <SystemLabel>Engineering takeaway</SystemLabel>
                  <div className="mt-4 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
                    {learnings.body.map((paragraph) => <p key={paragraph} className="leading-7 text-muted">{paragraph}</p>)}
                  </div>
                </section>
              </Reveal>
            )}

            {project.gallery.length > 0 && (
              <Reveal>
                <section>
                  <SystemLabel>System archive</SystemLabel>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <div key={image} className="overflow-hidden rounded-2xl border border-soft">
                        <div className="aspect-[16/10]"><ProjectCover src={image} title={`${display.name} ${index + 1}`} /></div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </main>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <HudFrame>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Case study index</div>
              <nav className="mt-4 space-y-1">
                {[
                  ['problem', '01 / Problem'],
                  ['architecture', '02 / Architecture'],
                  ['features', '03 / Capabilities'],
                  ['decisions', '04 / Decisions'],
                  ...(project.video ? [['project-demo', '05 / Demo']] : []),
                ].map(([href, label]) => (
                  <a key={href} href={`#${href}`} className="block rounded-lg px-3 py-2 text-xs text-muted transition-colors hover:bg-[var(--surface-strong)] hover:text-[var(--text)]">
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 border-t border-soft pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Technologies</div>
                <div className="mt-3 flex flex-wrap gap-1.5">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
              </div>
            </HudFrame>
          </aside>
        </div>

        <div className="mt-16 border-t border-soft pt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-[var(--text)]">
            <ArrowLeft size={14} /> Explore all systems
          </Link>
        </div>
      </PageShell>
    </>
  );
}
