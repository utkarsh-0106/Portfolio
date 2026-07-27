import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" aria-hidden />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative font-mono text-[7rem] font-bold leading-none tracking-tighter text-transparent sm:text-[10rem]"
          style={{ WebkitTextStroke: '1.5px var(--text-subtle)' }}
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          This page wandered off.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative mt-3 max-w-md text-muted text-pretty"
        >
          The page you are looking for does not exist or may have moved. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <ButtonLink to="/" size="lg">
            <Home size={16} /> Back home
          </ButtonLink>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={16} /> Browse projects
          </Link>
        </motion.div>
      </section>
    </>
  );
}
