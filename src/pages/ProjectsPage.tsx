import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { PageShell } from '@/components/layout/PageShell';
import { ProjectCover } from '@/components/media/ProjectCover';
import { staggerContainer, staggerItem } from '@/components/Reveal';
import { projects } from '@/data/projects';
import { orderedProjects, projectDisplay, sectionParagraphs } from '@/lib/projectView';

export function ProjectsPage() {
  const list = orderedProjects(projects);

  return (
    <>
      <Seo
        title="Projects"
        description="Selected engineering projects by Utkarsh Maheshwari — RAG systems, analytics, APIs, and developer tools."
        path="/projects"
      />
      <PageShell>
        <SectionHeading
          eyebrow="Projects"
          title="Systems I have actually built."
          description="Backend-first products: APIs, retrieval, analytics, and tooling — with the engineering details attached."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {list.map((project) => {
            const display = projectDisplay(project);
            const problem = sectionParagraphs(project, ['Problem', 'Business Problem'])[0];
            const built = sectionParagraphs(project, ['Architecture'])[0];
            const features = sectionParagraphs(project, ['Features', 'Key Features']).slice(0, 3);

            return (
              <motion.article key={project.slug} variants={staggerItem} className="h-full">
                <Link
                  to={`/projects/${project.slug}`}
                  className="group glass-panel flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-strong"
                >
                  <div className="relative aspect-[16/9]">
                    <ProjectCover src={project.cover} title={display.name} />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-black/50 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
                        {project.year}
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold leading-snug">{display.name}</h3>
                    {display.subtitle && (
                      <p className="mt-1 text-sm text-muted">{display.subtitle}</p>
                    )}
                    <p className="mt-3 text-sm leading-6 text-muted">{project.tagline}</p>

                    {problem && (
                      <p className="mt-4 text-sm leading-6 text-muted">
                        <span className="text-[var(--text)]">Problem. </span>
                        {problem}
                      </p>
                    )}
                    {built && (
                      <p className="mt-2 text-sm leading-6 text-muted">
                        <span className="text-[var(--text)]">What I built. </span>
                        {built}
                      </p>
                    )}

                    {features.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                      {project.links.map((link) => (
                        <span key={link.label} className="inline-flex items-center gap-1.5 text-xs text-muted">
                          {link.type === 'github' && <Github size={14} />}
                          {link.type === 'live' && <ExternalLink size={14} />}
                          {link.type === 'video' && <PlayCircle size={14} />}
                          {link.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </PageShell>
    </>
  );
}
