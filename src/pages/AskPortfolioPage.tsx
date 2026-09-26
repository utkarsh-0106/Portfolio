import React from 'react';
import { motion } from 'framer-motion';
import AskProfileVisual from '@/components/AskProfileVisual';
import { AskPortfolio } from '@/components/AskPortfolio';

const AskPortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="flex-1 md:w-1/2">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text)]">ASK AI</h2>
          <h1 className="text-4xl font-bold text-[var(--text)] mt-1">Ask about my work.</h1>
          <p className="mt-2 text-[var(--text)]">
            Explore my projects, engineering experience, technical skills, and approach through my portfolio assistant.
          </p>
          <div className="mt-4 flex items-center">
            <span className="text-green-500">●</span>
            <span className="text-[var(--text)] ml-1">VERIFIED PORTFOLIO INFORMATION</span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--text)]">● PORTFOLIO ASSISTANT</h2>
          <span className="text-[var(--text)]">Online</span>
        </div>
        <div className="mb-6">
          <p className="text-[var(--text)]">Ask me anything about my work.</p>
        </div>
        <div className="space-y-4">
          <div className="text-[var(--text)]">
            <p className="text-sm">What projects has Utkarsh built?</p>
            <p className="text-sm">Tell me about JANGO.</p>
            <p className="text-sm">What technologies does Utkarsh use?</p>
            <p className="text-sm">What internships has Utkarsh completed?</p>
            <p className="text-sm">How does Utkarsh approach backend engineering?</p>
          </div>
          <form className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a question..."
                className="flex-1 rounded-xl border border-soft bg-card px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-accent-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
              >
                Ask
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 md:w-1/2">
        <AskProfileVisual />
      </div>
    </div>
  );
};

export default AskPortfolioPage;
