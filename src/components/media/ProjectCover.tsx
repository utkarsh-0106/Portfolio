import { useState } from 'react';
import { cn } from '@/lib/cn';

export function ProjectCover({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn('relative h-full w-full overflow-hidden bg-[#0a1428]', className)}>
      {!failed && (
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0c1a33] via-[#12102a] to-[#05060a] px-6">
          <span className="text-center font-display text-lg font-medium text-white/80">{title}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a]/70 via-transparent to-transparent" />
    </div>
  );
}
