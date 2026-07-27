import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, PlayCircle, Calendar, User } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { getProject } from '@/data/projects';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/404" replace />;

  return (
    <>
      <Seo
        title={project.title}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        image={project.cover}
      />
      <article className="container-page py-16 sm:py-20">
        {/* Back */}
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-8 max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-subtle">
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {project.year}</span>
              <span className="inline-flex items-center gap-1.5"><User size={13} /> {project.role}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted text-pretty">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.url}
                  variant={link.type === 'github' ? 'primary' : 'secondary'}
                  size="md"
                >
                  {link.type === 'github' && <Github size={16} />}
                  {link.type === 'live' && <ExternalLink size={16} />}
                  {link.type === 'video' && <PlayCircle size={16} />}
                  {link.label}
                </Button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-soft bg-subtle px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </header>

        {/* Cover */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-soft">
            <img
              src={project.cover}
              alt={project.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Sections */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {project.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.03}>
                <section>
                  <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((para, pi) => (
                      <p key={pi} className="text-muted text-pretty leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Reveal>
              <div className="surface-card rounded-2xl p-6">
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
            <Reveal delay={0.05}>
              <div className="surface-card rounded-2xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-soft bg-subtle px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="text-xl font-semibold tracking-tight">Gallery</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="overflow-hidden rounded-2xl border border-soft bg-subtle"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <p className="mt-3 text-xs text-subtle">
              Placeholder images — real screenshots will replace these soon.
            </p>
          </div>
        )}

        {/* Next project */}
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
      </article>
    </>
  );
}
