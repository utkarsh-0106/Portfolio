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
          HERO
      ====================================================== */}
      <section className="reference-hero relative">

        <div className="reference-hero-grid" />
        <div className="reference-glow reference-glow-one" />
        <div className="reference-glow reference-glow-two" />

        <div className="reference-hero-content">

          {/* =================================================
              LEFT — TEXT CONTENT
          ================================================== */}
          <div className="reference-copy">

            <Reveal>
              <div className="reference-eyebrow">
                <span className="reference-eyebrow-dot" />
                <span>CSE UNDERGRAD | CLASS OF 2027</span>
                <span className="hidden sm:inline text-subtle">•</span>
                <span className="text-accent-500">OPEN TO ENGINEERING ROLES</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="reference-title">
                <span>Backend</span>
                <span className="reference-title-accent">
                  Systems.
                </span>
                <span>Practical AI.</span>
                <span className="reference-title-gradient">
                  Built End-to-End.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="reference-description">
                I&apos;m Utkarsh Maheshwari, a Computer Science undergraduate
                focused on backend engineering and AI. I build reliable APIs,
                data-driven systems, and AI-powered applications using Python,
                C++, JavaScript, and modern backend technologies.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="reference-actions">
                <Link
                  to="/projects"
                  className="reference-button primary"
                >
                  Explore Projects
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="reference-button secondary"
                >
                  Let&apos;s Connect
                </Link>
              </div>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-button secondary resume-cta-final"
              >
                View Resume
              </a>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="reference-stats">
                {profile.heroStats.map((stat, index) => (
                  <div
                    className="reference-stat"
                    key={stat.label}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>

                    {index < profile.heroStats.length - 1 && (
                      <span className="reference-stat-divider" />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="reference-social">
                <span>Connect with me</span>

                <div className="reference-social-links">

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>

                  <a
                    href={profile.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    className="leetcode-link"
                  >
                    LC
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>

                </div>
              </div>
            </Reveal>

          </div>


          {/* =================================================
              RIGHT — HERO WORKSPACE
          ================================================== */}
          <div className="reference-art">

            <div className="reference-art-frame">

              <img
                src="/hero-workspace.png"
                alt="Illustrated developer workspace representing Utkarsh Maheshwari"
                className="reference-art-image"
              />

            </div>


            {/* Floating technology cards */}
            <div className="reference-tech-stack">

              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className={`reference-tech-card ${technology.className}`}
                >
                  <span className="reference-tech-icon">
                    {technology.icon}
                  </span>

                  <span>{technology.name}</span>
                </div>
              ))}

            </div>


            {/* Quote */}
            <div className="reference-quote">
              <span>“A better tomorrow,</span>
              <span>built with code.”</span>
              <small>— Utkarsh Maheshwari</small>
            </div>

          </div>

        </div>


        {/* Scroll indicator */}
        <div className="reference-scroll">
          <span>Scroll to explore</span>
          <span className="reference-scroll-arrow">↓</span>
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
