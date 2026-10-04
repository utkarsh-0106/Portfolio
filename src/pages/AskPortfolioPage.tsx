import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BrainCircuit, Database, ShieldCheck } from 'lucide-react';
import { Seo } from '@/components/Seo';
import AskProfileVisual from '@/components/AskProfileVisual';
import { AskPortfolio } from '@/components/AskPortfolio';

const systemSignals = [
  { icon: Database, label: 'Knowledge', value: 'Verified portfolio data' },
  { icon: ShieldCheck, label: 'Grounding', value: 'Deterministic retrieval' },
  { icon: BrainCircuit, label: 'Mode', value: 'Portfolio intelligence' },
];

const AskPortfolioPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Portfolio AI"
        description="Ask grounded questions about Utkarsh Maheshwari's projects, architecture, technical stack, and engineering experience."
        path="/ask"
      />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-soft bg-card/25 p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 engineering-grid opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

        <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <section>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-accent-500/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
                Portfolio Intelligence
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                Verified knowledge
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-6xl lg:text-7xl">
              Ask the system
              <span className="block text-muted">about the engineer.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Explore Utkarsh&apos;s projects, architecture, technical stack,
              experience, and engineering decisions through the portfolio&apos;s
              grounded assistant.
            </p>

            <div className="mt-7 grid gap-2 sm:grid-cols-3">
              {systemSignals.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-soft bg-base/50 p-3">
                  <Icon size={15} className="text-accent-500" />
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {label}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <AskPortfolio />
            </div>
          </section>

          <section className="relative min-h-[430px] overflow-hidden rounded-2xl border border-soft bg-base/45 p-4 sm:p-6">
            <div className="absolute left-5 top-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Assistant interface
            </div>
            <Link
              to="/ask"
              className="absolute right-5 top-5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-accent-400"
            >
              Open full view <ArrowUpRight size={12} />
            </Link>
            <div className="pt-8">
              <AskProfileVisual />
            </div>
          </section>
        </div>
      </section>
    </main>
    </>
  );
};

export default AskPortfolioPage;
