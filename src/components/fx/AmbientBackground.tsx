export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-[-10%] top-[-12%] h-[420px] w-[420px] rounded-full bg-[var(--glow-blue)] blur-[120px]" />
      <div className="absolute right-[-8%] top-[18%] h-[360px] w-[360px] rounded-full bg-[var(--glow-violet)] blur-[130px]" />
      <div className="absolute bottom-[-20%] left-1/3 h-[280px] w-[280px] rounded-full bg-[var(--glow-blue)] opacity-60 blur-[110px]" />
      <div className="absolute right-[18%] top-24 hidden h-40 w-40 motion-safe:animate-orbit md:block">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-accent-500/70" />
      </div>
      <div className="absolute left-[12%] top-[42%] hidden h-1 w-1 rounded-full bg-violet-500/50 motion-safe:animate-float md:block" />
    </div>
  );
}
