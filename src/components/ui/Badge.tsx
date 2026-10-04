import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'rounded-md border border-soft bg-subtle px-2 py-1 font-mono text-[11px] text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
