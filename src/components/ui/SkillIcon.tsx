interface SkillIconProps {
  path: string;
  className?: string;
}

export function SkillIcon({ path, className }: SkillIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      width="28"
      height="28"
    >
      <path d={path} />
    </svg>
  );
}
