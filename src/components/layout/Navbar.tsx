import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { navLinks, profile } from '@/data/profile';
import { ButtonLink } from '@/components/ui/Button';
import { SystemLabel } from '@/components/ui/SystemLabel';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { cn } from '@/lib/cn';

const primaryRoutes = ['/about', '/skills', '/projects', '/experience', '/build-log', '/contact'];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = navLinks.filter(
    (link) => primaryRoutes.includes(link.path) || link.path === '/'
  );

  return (
    <>
      <ScrollProgress />

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500',
          scrolled
            ? 'border-soft bg-[color:var(--nav-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl'
            : 'border-transparent bg-transparent'
        )}
      >
        <nav
          className="container-page flex h-[var(--nav-height)] items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none"
          >
            <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-[var(--text)] font-mono text-[11px] font-bold text-[var(--bg)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5">
              U.
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block font-display text-[13px] font-semibold leading-none tracking-tight">
                Utkarsh
              </span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.22em] text-subtle">
                Systems / 2027
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-lg px-3 py-2 text-[12px] font-medium tracking-[0.01em] transition-colors',
                    isActive
                      ? 'text-[var(--text)]'
                      : 'text-muted hover:text-[var(--text)]'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        className="absolute inset-x-3 -bottom-[9px] h-px bg-accent-500 shadow-[0_0_10px_rgba(78,161,255,0.55)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="mr-1 hidden items-center gap-2 xl:flex">
              <SystemLabel>Online</SystemLabel>
            </div>

            <Link
              to="/ask"
              aria-label="Ask AI"
              className="hidden h-9 items-center gap-2 rounded-lg border border-soft bg-[var(--bg-card)] px-3 text-[11px] font-medium text-muted transition-all hover:border-[var(--border-accent)] hover:text-[var(--text)] xl:inline-flex"
            >
              <Sparkles size={13} className="text-accent-500" />
              Ask AI
            </Link>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] xl:grid"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] xl:grid"
            >
              <Linkedin size={16} />
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)]"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <ButtonLink
              to="/contact"
              size="sm"
              className="hidden rounded-lg px-3.5 text-[11px] sm:inline-flex"
            >
              Let&apos;s Build <ArrowUpRight size={13} />
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-card hover:text-[var(--text)] lg:hidden"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-soft bg-[color:var(--nav-surface)] backdrop-blur-2xl lg:hidden"
            >
              <div className="container-page py-4">
                <div className="mb-4 flex items-center justify-between">
                  <SystemLabel>Navigation / {location.pathname === '/' ? 'Home' : location.pathname.slice(1)}</SystemLabel>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-subtle">
                    {String(links.length).padStart(2, '0')} routes
                  </span>
                </div>

                <div className="grid gap-1">
                  {links.map((link, index) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between rounded-xl border px-3.5 py-3 transition-colors',
                          isActive
                            ? 'border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--text)]'
                            : 'border-transparent text-muted hover:border-soft hover:bg-card hover:text-[var(--text)]'
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-[9px] text-subtle">
                              0{index + 1}
                            </span>
                            <span className="text-sm font-medium">{link.label}</span>
                          </span>
                          {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />}
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Link
                    to="/ask"
                    className="flex items-center justify-center gap-2 rounded-xl border border-soft bg-card px-3 py-3 text-xs font-medium text-[var(--text)]"
                  >
                    <Sparkles size={13} className="text-accent-500" />
                    Ask AI
                  </Link>
                  <ButtonLink to="/contact" size="sm" className="rounded-xl">
                    Let&apos;s Build <ArrowUpRight size={13} />
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
