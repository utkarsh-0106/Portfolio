import { cn } from '@/lib/cn';

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div
      className={cn(
        'group min-w-0 rounded-2xl border border-soft bg-card/45 px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-strong hover:bg-card/65',
        className,
      )}
    >
      <div className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
        {value}
      </div>

      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
        {label}
      </div>
    </div>
  );
}
