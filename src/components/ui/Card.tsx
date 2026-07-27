import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...rest }: CardProps) {
  return (
    <motion.div
      className={cn(
        'surface-card rounded-2xl p-6 transition-colors duration-300',
        hover && 'hover:border-strong',
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
