import { type ReactNode } from 'react';
import { AmbientBackground } from '@/components/fx/AmbientBackground';
import { cn } from '@/lib/cn';

export function PageShell({
  children,
  className,
  contained = true,
}: {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <AmbientBackground />
      <div className={cn('relative', contained && 'container-page py-20 sm:py-28', className)}>
        {children}
      </div>
    </div>
  );
}
