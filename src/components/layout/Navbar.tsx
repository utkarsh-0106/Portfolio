import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { navLinks, profile } from '@/data/profile';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-soft bg-base backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-3">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--text)] font-mono text-sm font-bold text-[var(--bg)] transition-transform group-hover:scale-105">
            U.
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight sm:block">Utkarsh</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks
            .filter((link) => link.path !== '/certifications')
            .map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors',
                  isActive ? 'text-[var(--text)]' : 'text-muted hover:text-[var(--text)]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-accent-500 to-violet-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] xl:grid"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] xl:grid"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <ButtonLink to="/contact" size="sm" className="hidden sm:inline-flex">
            Let's Build <ArrowRight size={14} />
          </ButtonLink>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-soft bg-base backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-card text-[var(--text)]'
                        : 'text-muted hover:bg-card hover:text-[var(--text)]'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <ButtonLink to="/contact" className="mt-2">
                Let's Build <ArrowRight size={14} />
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
