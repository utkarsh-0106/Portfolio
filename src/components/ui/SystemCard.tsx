import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function SystemCard({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('system-card', className)} {...props}>
      <div className="system-card__sheen" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}
