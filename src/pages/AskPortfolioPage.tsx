import React from 'react';
import AskProfileVisual from '@/components/AskProfileVisual';
import { AskPortfolio } from '@/components/AskPortfolio';

const AskPortfolioPage: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section>
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              ASK AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
              Ask about my work.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Explore my projects, engineering experience, technical skills,
              and approach through my portfolio assistant.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Verified portfolio information
            </div>
          </div>

          <AskPortfolio />
        </section>

        <section className="min-h-[520px]">
          <AskProfileVisual />
        </section>
      </div>
    </main>
  );
};

export default AskPortfolioPage;
