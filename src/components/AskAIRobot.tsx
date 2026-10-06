import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Global AI entry point.
 * This is intentionally a compact premium "AI core" rather than a mascot.
 */
export default function AskAIRobot() {
  const location = useLocation();

  if (location.pathname === '/ask') return null;

  return (
    <Link
      to="/ask"
      aria-label="Open Portfolio AI"
      className="ai-core-link group"
    >
      <div className="ai-core-bubble" aria-hidden="true">
        <span className="ai-core-kicker">Portfolio AI</span>
        <strong>Ask me anything.</strong>
        <span>Projects, systems, experience &amp; tech stack.</span>
      </div>

      <div className="ai-core-orb" aria-hidden="true">
        <span className="ai-core-ring" />
        <span className="ai-core-face">
          <span className="ai-core-eye" />
          <span className="ai-core-eye" />
        </span>
        <span className="ai-core-label">
          AI <ArrowUpRight size={8} />
        </span>
      </div>
    </Link>
  );
}
