import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { Seo } from '@/components/Seo';
import { profile } from '@/data/profile';
import { buildLogPreview } from '@/data/buildLog';

const technologies = [
  { name: 'React', icon: '⚛', className: 'hero-tech-react' },
  { name: 'Node.js', icon: '⬡', className: 'hero-tech-node' },
  { name: 'Python', icon: '🐍', className: 'hero-tech-python' },
  { name: 'AI / ML', icon: '✦', className: 'hero-tech-ai' },
  { name: 'System Design', icon: '◉', className: 'hero-tech-system' },
];


export function HomePage() {
  return (
    <>
      <Seo
        title="Backend Engineer & AI Builder"
        description="Portfolio of Utkarsh Maheshwari — a Computer Science undergraduate building reliable APIs, data-driven systems, and AI-powered applications."
        path="/"
      />
      <main className="reference-home">

      {/* =====================================================
          CINEMATIC HERO
      ====================================================== */}
      <section className="cinematic-hero">
        <div className="cinematic-hero-backdrop" aria-hidden="true" />
        <div className="cinematic-hero-grid" aria-hidden="true" />
        <div className="cinematic-hero-glow cinematic-hero-glow-left" aria-hidden="true" />
        <div className="cinematic-hero-glow cinematic-hero-glow-right" aria-hidden="true" />

        <div className="cinematic-hero-inner">
          <div className="cinematic-copy">
            <Reveal>
              <div className="cinematic-eyebrow">
                <span className="cinematic-eyebrow-dot" />
                <span>CSE UNDERGRAD</span>
                <span className="cinematic-separator">|</span>
                <span>CLASS OF 2027</span>
                <span className="cinematic-separator">|</span>
                <span className="cinematic-eyebrow-accent">OPEN TO ENGINEERING ROLES</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="cinematic-title">
                <span>Backend</span>
                <span>Systems.</span>
                <span className="cinematic-title-gold">Practical AI.</span>
                <span>Built End-to-End.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="cinematic-description">
                I&apos;m Utkarsh Maheshwari, a Computer Science undergraduate focused on
                backend engineering and AI. I build reliable APIs, data-driven systems,
                and AI-powered applications using Python, C++, JavaScript, and modern backend technologies.
              </p>
            </Reveal>

            <Reveal delay={0.21}>
              <div className="cinematic-actions">
                <Link to="/projects" className="cinematic-button cinematic-button-primary">
                  Explore Projects <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="cinematic-button cinematic-button-secondary">
                  Let&apos;s Connect
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.27}>
              <div className="cinematic-stats">
                {profile.heroStats.slice(0, 4).map((stat, index) => (
                  <div className="cinematic-stat" key={stat.label}>
                    <span className="cinematic-stat-icon">
                      {['⌘', '▣', '✦', '★'][index]}
                    </span>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.33}>
              <div className="cinematic-social-row">
                <span>Connect with me</span>
                <div className="cinematic-social-links">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                  <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="cinematic-lc">LC</a>
                  <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="cinematic-visual">
            <div className="cinematic-orbit cinematic-orbit-one" aria-hidden="true" />
            <div className="cinematic-orbit cinematic-orbit-two" aria-hidden="true" />
            <div className="cinematic-image-wrap">
              <img
                src="/hero-cinematic.png"
                alt="Utkarsh Maheshwari working with a futuristic AI assistant in a cinematic engineering workspace"
                className="cinematic-image"
              />
              <div className="cinematic-image-vignette" aria-hidden="true" />
            </div>

            <div className="cinematic-tech-stack" aria-label="Technology stack">
              {technologies.slice(0, 5).map((technology, index) => (
                <div key={technology.name} className={`cinematic-tech cinematic-tech-${index + 1}`}>
                  <span>{technology.icon}</span>
                  <strong>{technology.name}</strong>
                </div>
              ))}
            </div>


          </div>
        </div>

        <div className="cinematic-hero-bottom">
          <div className="cinematic-scroll-hint">
            <span className="cinematic-scroll-icon">↓</span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="cinematic-feature-grid">
            <Link to="/skills" className="cinematic-feature-card">
              <span className="cinematic-feature-icon">⌁</span>
              <span><strong>Backend Systems</strong><small>Scalable APIs, databases and system design.</small></span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/ask" className="cinematic-feature-card">
              <span className="cinematic-feature-icon">✦</span>
              <span><strong>AI Applications</strong><small>LLMs, RAG, and data-driven intelligence.</small></span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="cinematic-feature-card">
              <span className="cinematic-feature-icon">◇</span>
              <span><strong>End-to-End Projects</strong><small>From idea to deployment.</small></span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/build-log" className="cinematic-feature-card">
              <span className="cinematic-feature-icon">↗</span>
              <span><strong>Continuous Learning</strong><small>Consistent build log and documentation.</small></span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNICAL FOUNDATION
      ====================================================== */}
      <section className="reference-foundation">

        <div>
          <span className="reference-section-kicker">
            TECHNICAL FOUNDATION
          </span>

          <h2>Tools behind the work.</h2>
        </div>

        <div className="reference-foundation-link">
          <Link to="/skills">
            View all skills
            <ExternalLink size={15} />
          </Link>
        </div>

        <div className="reference-foundation-grid">

          <Link
            to="/skills"
            className="reference-foundation-card"
          >
            <span>Python</span>
            <small>Backend & automation</small>
          </Link>

          <Link
            to="/skills"
            className="reference-foundation-card"
          >
            <span>FastAPI</span>
            <small>Reliable APIs</small>
          </Link>

          <Link
            to="/skills"
            className="reference-foundation-card"
          >
            <span>C++ / DSA</span>
            <small>Problem solving</small>
          </Link>

          <Link
            to="/skills"
            className="reference-foundation-card"
          >
            <span>AI / RAG</span>
            <small>Intelligent systems</small>
          </Link>

          <Link
            to="/skills"
            className="reference-foundation-card"
          >
            <span>System Design</span>
            <small>Architecture</small>
          </Link>

        </div>

      </section>
      {/* =====================================================
          BUILD LOG
      ====================================================== */}
      <section className="reference-foundation">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="reference-section-kicker">BUILD LOG</span>
            <h2>Work, documented.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Projects and engineering experience already represented in the
              portfolio, presented as a record rather than invented activity.
            </p>
          </div>

          <div className="reference-foundation-link">
            <Link to="/build-log">
              Open build log
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-soft bg-[var(--border)] md:grid-cols-2">
          {buildLogPreview.slice(0, 4).map((entry, index) => (
            <Link
              key={entry.id}
              to={entry.href}
              className="group bg-[var(--bg-card)] p-5 transition-colors hover:bg-[var(--bg-elevated)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-500">
                  {entry.period}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-subtle">
                  0{index + 1} / {entry.kind}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em]">
                {entry.title}
              </h3>

              {entry.organization && (
                <p className="mt-1 text-xs text-muted">{entry.organization}</p>
              )}

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
                {entry.summary}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[var(--text)]">
                {entry.kind === 'Project' ? 'Open system' : 'View experience'}
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>


      </main>
    </>
  );
}
