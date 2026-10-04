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
    <div className={cn('relative h-full min-h-full w-full min-w-0 overflow-hidden bg-[#120B1F]', className)}>
      {!failed ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
          className="!m-0 !block !h-full !w-full !max-h-none !max-w-none object-cover object-center"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1A0F2E] via-[#24102f] to-[#05060a] px-6">
          <span className="text-center font-display text-lg font-medium text-white/80">{title}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a]/70 via-transparent to-transparent" />
    </div>
  );
}
