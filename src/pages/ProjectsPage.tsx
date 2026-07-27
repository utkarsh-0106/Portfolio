import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, PlayCircle } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '@/components/Reveal';
import { projects } from '@/data/projects';

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="Selected projects by Utkarsh Maheshwari — analytics systems, AI toolboxes, recommendation engines, and developer tools."
        path="/projects"
      />
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built, end to end."
          description="A selection of projects that show how I think — from messy data to a shipped, working product."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article key={project.slug} variants={staggerItem}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block surface-card overflow-hidden rounded-2xl transition-colors hover:border-strong"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-subtle">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/50 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
                      {project.year}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug text-balance">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted text-pretty">{project.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-soft bg-subtle px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    {project.links.map((link) => (
                      <span
                        key={link.label}
                        className="inline-flex items-center gap-1.5 text-xs text-muted"
                      >
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
          ))}
        </motion.div>
      </section>
    </>
  );
}
