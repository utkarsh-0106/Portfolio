import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduce) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden h-[320px] w-[320px] rounded-full opacity-0 transition-opacity duration-500 md:block"
      style={{
        opacity: visible ? 0.35 : 0,
        left: pos.x - 160,
        top: pos.y - 160,
        background:
          'radial-gradient(circle, rgba(79,140,255,0.12) 0%, rgba(124,108,255,0.06) 40%, transparent 70%)',
        filter: 'blur(18px)',
      }}
    />
  );
}
