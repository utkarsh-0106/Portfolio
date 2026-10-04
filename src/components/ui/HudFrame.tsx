import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function HudFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('hud-frame', className)}>{children}</div>;
}
