import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 24, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
