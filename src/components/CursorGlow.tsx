import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

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
      className="pointer-events-none fixed z-[60] hidden md:block h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        opacity: visible ? 0.5 : 0,
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          'radial-gradient(circle, rgba(96,165,250,0.10) 0%, rgba(96,165,250,0) 60%)',
        filter: 'blur(20px)',
      }}
    />
  );
}
