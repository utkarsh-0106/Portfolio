import { Seo } from '@/components/Seo';
import { PageShell } from '@/components/layout/PageShell';
import { SystemLabel } from '@/components/ui/SystemLabel';
import { Reveal } from '@/components/Reveal';
import { ProjectSystemsLab } from '@/components/projects/ProjectSystemsLab';
import { projects } from '@/data/projects';
import { orderedProjects } from '@/lib/projectView';

export function ProjectsPage() {
  const list = orderedProjects(projects);

  return (
    <>
      <Seo
        title="Projects"
        description="Engineering systems built by Utkarsh Maheshwari — RAG, analytics, developer tooling, browser automation, and AI applications."
        path="/projects"
      />
      <PageShell>
        <header className="relative overflow-hidden border-b border-soft pb-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 top-12 h-48 w-48 rounded-full bg-cyan-400/[0.035] blur-3xl" />
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SystemLabel>Projects / systems lab</SystemLabel>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{String(list.length).padStart(2, '0')} systems indexed</span>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="mt-6 max-w-4xl">
              <h1 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Systems I have actually built.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Select a system to inspect the problem, architecture, engineering decisions, and proof behind the build.
              </p>
            </div>
          </Reveal>
        </header>

        <ProjectSystemsLab projects={list} />

        <section className="mt-16 border-t border-soft pt-10">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <SystemLabel>Engineering signal</SystemLabel>
                <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  The project is the proof. The case study explains the engineering.
                </h2>
              </div>
              <p className="text-sm leading-6 text-muted">
                Every system remains connected to its existing project detail page, source repository, and verified data.
              </p>
            </div>
          </Reveal>
        </section>
      </PageShell>
    </>
  );
}
