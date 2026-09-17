import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { navLinks, profile } from '@/data/profile';

const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l2.268 2.268 3.946-4.32 8.14 8.14-8.14 8.14-3.946-4.32-2.268 2.268 5.406 5.788a1.374 1.374 0 0 0 1.96 0l9.21-9.21a1.374 1.374 0 0 0 0-1.96L14.444.438A1.374 1.374 0 0 0 13.483 0zM4.4 8.4 1.2 11.6a1.2 1.2 0 0 0 0 1.7l3.2 3.2 2.3-2.3-2.35-2.35 2.35-2.35z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-soft">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--text)] font-mono text-sm font-bold text-[var(--bg)]">
                U.
              </span>
              <span className="font-display font-medium tracking-tight">Utkarsh</span>
            </Link>
            <p className="mt-4 text-sm text-muted text-pretty">
              Building reliable systems, APIs, and AI-powered applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-soft pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-subtle">© {year} Utkarsh Maheshwari. All rights reserved.</p>
            <p className="mt-1 text-sm text-subtle">Designed & engineered by Utkarsh</p>
          </div>
          <div className="flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              <LeetCodeIcon />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
