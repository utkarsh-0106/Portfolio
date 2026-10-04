import { cn } from '@/lib/cn';

interface PortraitTreatmentProps {
  src: string;
  alt: string;
  className?: string;
}

export function PortraitTreatment({
  src,
  alt,
  className,
}: PortraitTreatmentProps) {
  return (
    <div className={cn('portrait-treatment relative', className)}>
      <div className="portrait-treatment__glow" aria-hidden />
      <div className="portrait-treatment__frame">
        <div className="portrait-treatment__image-wrap">
          <img
            src={src}
            alt={alt}
            className="portrait-treatment__image"
            loading="eager"
            fetchPriority="high"
          />
          <div className="portrait-treatment__blue" aria-hidden />
          <div className="portrait-treatment__violet" aria-hidden />
          <div className="portrait-treatment__grain" aria-hidden />
          <div className="portrait-treatment__vignette" aria-hidden />
        </div>
      </div>

      <div className="portrait-treatment__scanline" aria-hidden />
      <div className="portrait-treatment__corner portrait-treatment__corner--tl" aria-hidden />
      <div className="portrait-treatment__corner portrait-treatment__corner--br" aria-hidden />
    </div>
  );
}
