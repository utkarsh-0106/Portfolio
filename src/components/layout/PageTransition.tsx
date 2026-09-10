import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -8 }}
        transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pt-16"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
