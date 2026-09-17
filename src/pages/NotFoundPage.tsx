import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { AmbientBackground } from '@/components/fx/AmbientBackground';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This route does not exist." path="/404" />
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-20 text-center">
        <AmbientBackground />
        <div className="container-page relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[7rem] font-bold leading-none tracking-tighter text-transparent sm:text-[10rem]"
            style={{ WebkitTextStroke: '1.5px var(--text-subtle)' }}
          >
            404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            This route doesn't exist.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mx-auto mt-3 max-w-md text-muted"
          >
            But there's always another system to build.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <ButtonLink to="/" size="lg">
              <ArrowLeft size={16} /> Back Home
            </ButtonLink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
