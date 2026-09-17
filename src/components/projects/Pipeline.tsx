import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Pipeline({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <ol className={cn('flex flex-col gap-0', className)}>
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="grid h-8 min-w-[2rem] place-items-center rounded-lg border border-soft bg-subtle font-mono text-[11px] text-accent-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-sm font-medium">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <span className="ml-4 flex h-6 items-center text-subtle" aria-hidden>
              <ArrowRight size={14} className="rotate-90" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
