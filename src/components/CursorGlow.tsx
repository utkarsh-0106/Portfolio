import { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduce) return;

    const move = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const { x, y } = targetRef.current;
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x - 160}px, ${y - 160}px, 0)`;
        }
      });
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[320px] w-[320px] -translate-x-[200px] -translate-y-[200px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform md:block"
      style={{
        opacity: visible ? 0.35 : 0,
        background:
          'radial-gradient(circle, rgba(79,140,255,0.12) 0%, rgba(124,108,255,0.06) 40%, transparent 70%)',
        filter: 'blur(18px)',
      }}
    />
  );
}
