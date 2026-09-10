import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/profile';

const technologies = [
  { name: 'React', icon: '⚛', className: 'hero-tech-react' },
  { name: 'Node.js', icon: '⬡', className: 'hero-tech-node' },
  { name: 'Python', icon: '🐍', className: 'hero-tech-python' },
  { name: 'AI / ML', icon: '✦', className: 'hero-tech-ai' },
  { name: 'System Design', icon: '◉', className: 'hero-tech-system' },
];

export function HomePage() {
  return (
    <main className="reference-home">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="reference-hero">

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
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="reference-title">
                <span>Building</span>
                <span className="reference-title-accent">
                  Systems.
                </span>
                <span>Exploring AI.</span>
                <span className="reference-title-gradient">
                  Creating Impact.
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
                    href="https://github.com/utkarsh-0106"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/utkarsh-maheshwari-6b9978266/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>

                  <a
                    href="https://leetcode.com/u/utkarsh_mah0106/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    className="leetcode-link"
                  >
                    LC
                  </a>

                  <a
                    href="mailto:utkarsh.maheshwari0106@gmail.com"
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

    </main>
  );
}
