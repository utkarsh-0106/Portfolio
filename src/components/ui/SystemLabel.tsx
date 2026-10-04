import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function SystemLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('system-label', className)}>{children}</span>;
}
