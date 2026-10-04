import { Seo } from '@/components/Seo';
import { PageShell } from '@/components/layout/PageShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EngineeringTimeline } from '@/components/experience/EngineeringTimeline';

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="Internships, hackathons, and engineering work by Utkarsh Maheshwari."
        path="/experience"
      />

      <PageShell>
        <div className="relative overflow-hidden rounded-[2rem] border border-soft bg-[var(--surface)] px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 engineering-grid opacity-40" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-500">Experience / Engineering Timeline</p>
            <SectionHeading
              className="mt-4"
              title="Where I’ve engineered in the real world."
              description="Internships first, followed by competitions and engineering work — responsibilities and systems, not inflated titles."
            />
          </div>
        </div>

        <EngineeringTimeline />
      </PageShell>
    </>
  );
}
