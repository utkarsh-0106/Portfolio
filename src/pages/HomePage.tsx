import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Button, ButtonLink } from '@/components/ui/Button';
import { profile } from '@/data/profile';

export function HomePage() {
  return (
    <>
      <Seo
        title="Backend Engineer & Full Stack Developer"
        description="Utkarsh Maheshwari — Backend Engineer, Full Stack Developer, and AI enthusiast building scalable backend systems and modern software experiences."
        path="/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" aria-hidden />
        <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div className="absolute -inset-3 rounded-full bg-accent-500/20 blur-2xl" aria-hidden />
            <img
              src={profile.photo}
              alt="Utkarsh Maheshwari"
              loading="eager"
              className="relative h-32 w-32 rounded-full object-cover ring-1 ring-soft sm:h-40 sm:w-40"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-soft bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 rounded-full border border-soft bg-card/40 px-4 py-2 font-mono text-sm text-subtle backdrop-blur"
          >
            {profile.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={profile.resumeUrl} size="lg">
              <Download size={16} /> Download Resume
            </Button>
            <ButtonLink to="/projects" variant="secondary" size="lg">
              View Projects <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" size="lg">
              Let's Connect
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost" size="lg">
              Contact Me
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex items-center gap-3"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-soft text-muted transition-colors hover:border-strong hover:text-[var(--text)]">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-soft text-muted transition-colors hover:border-strong hover:text-[var(--text)]">
              <Linkedin size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-col items-center gap-2 text-subtle"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={16} className="animate-scroll-bounce" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
