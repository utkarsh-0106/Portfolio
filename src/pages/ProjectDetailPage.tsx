import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, PlayCircle, Calendar, User } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PageShell } from '@/components/layout/PageShell';
import { ProjectCover } from '@/components/media/ProjectCover';
import { Pipeline } from '@/components/projects/Pipeline';
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

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  const display = projectDisplay(project);
  const usedHeadings = new Set(caseStudyOrder.flatMap((item) => item.headings));
  const extraSections = project.sections.filter(
    (section) =>
      !usedHeadings.has(section.heading) &&
      section.heading !== 'Learning' &&
      section.heading !== 'Key Learnings' &&
      section.heading !== 'Future Improvements'
  );

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
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
        </Reveal>

        <header className="mt-8 max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-subtle">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} /> {project.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User size={13} /> {project.role}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
              {display.name}
            </h1>
            {display.subtitle && <p className="mt-2 text-lg text-muted">{display.subtitle}</p>}
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-lg text-muted text-pretty">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.url}
                  variant={link.type === 'github' ? 'primary' : 'secondary'}
                >
                  {link.type === 'github' && <Github size={16} />}
                  {link.type === 'live' && <ExternalLink size={16} />}
                  {link.type === 'video' && <PlayCircle size={16} />}
                  {link.label}
                </Button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Reveal>
        </header>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-soft">
            <div className="aspect-[16/9]">
              <ProjectCover src={project.cover} title={display.name} />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <Reveal>
              <section>
                <h2 className="font-display text-xl font-semibold tracking-tight">Solution</h2>
                <p className="mt-3 leading-relaxed text-muted">{project.tagline}</p>
              </section>
            </Reveal>

            {caseStudyOrder.map((block) => {
              const sections = findSections(project, block.headings);
              if (sections.length === 0) return null;
              return sections.map((section) => (
                <Reveal key={section.heading}>
                  <section>
                    <h2 className="font-display text-xl font-semibold tracking-tight">{section.heading}</h2>
                    <div className="mt-3 space-y-3">
                      {section.body.map((para) => (
                        <p key={para} className="leading-relaxed text-muted text-pretty">
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ));
            })}

            {project.slug === 'jango' && (
              <Reveal>
                <section>
                  <h2 className="font-display text-xl font-semibold tracking-tight">RAG pipeline</h2>
                  <p className="mt-3 text-sm text-muted">
                    Document flow as implemented in Jango: ingest, embed, retrieve, then generate with Qwen3.
                  </p>
                  <div className="glass-panel mt-5 rounded-2xl p-6">
                    <Pipeline steps={jangoPipeline} />
                  </div>
                </section>
              </Reveal>
            )}

            {extraSections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="font-display text-xl font-semibold tracking-tight">{section.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((para) => (
                      <p key={para} className="leading-relaxed text-muted text-pretty">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Links</h3>
                <ul className="mt-4 space-y-3">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--text)]"
                      >
                        {link.type === 'github' && <Github size={15} />}
                        {link.type === 'live' && <ExternalLink size={15} />}
                        {link.type === 'video' && <PlayCircle size={15} />}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="glass-panel rounded-2xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Tech stack</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="font-display text-xl font-semibold tracking-tight">Gallery</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <Reveal key={img} delay={i * 0.04}>
                  <div className="overflow-hidden rounded-2xl border border-soft">
                    <div className="aspect-[16/10]">
                      <ProjectCover src={img} title={`${display.name} ${i + 1}`} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal>
          <div className="mt-16 border-t border-soft pt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--text)]"
            >
              <ArrowLeft size={16} /> Back to all projects
            </Link>
          </div>
        </Reveal>
      </PageShell>
    </>
  );
}
