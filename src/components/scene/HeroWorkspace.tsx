import { Code2, Database, Coffee, Lightbulb, Terminal } from 'lucide-react';

import { PortraitTreatment } from '@/components/media/PortraitTreatment';

interface HeroWorkspaceProps {
  photo: string;
  name: string;
}

const books = [
  { label: 'DSA', rotate: '-rotate-6' },
  { label: 'APIs', rotate: 'rotate-2' },
  { label: 'SYSTEM', rotate: 'rotate-6' },
];

export function HeroWorkspace({ photo, name }: HeroWorkspaceProps) {
  return (
    <div className="hero-workspace relative mx-auto w-full max-w-[680px]">
      <div className="hero-workspace__ambient" aria-hidden />

      <div className="hero-workspace__city" aria-hidden>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-workspace__wall-copy" aria-hidden>
        <span>BUILD</span>
        <span>THINK</span>
        <span>SHIP</span>
      </div>

      <div className="hero-workspace__window" aria-hidden>
        <div className="hero-workspace__window-glow" />
        <div className="hero-workspace__cityline" />
      </div>

      <div className="hero-workspace__desk">
        <div className="hero-workspace__monitor">
          <div className="hero-workspace__monitor-top">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="font-mono text-[8px] text-white/35">backend.ts</span>
          </div>

          <div className="hero-workspace__code">
            <span className="text-blue-300/80">async</span>{' '}
            <span className="text-violet-300/90">function</span>{' '}
            <span className="text-white/80">buildSystem</span>
            <span className="text-white/35">() {'{'}</span>
            <br />
            <span className="pl-3 text-white/40">return</span>{' '}
            <span className="text-blue-200/80">reliable</span>
            <br />
            <span className="pl-6 text-white/35">.api()</span>
            <br />
            <span className="pl-6 text-white/35">.data()</span>
            <br />
            <span className="pl-6 text-white/35">.ai()</span>
            <br />
            <span className="text-white/35">{'}'}</span>
          </div>

          <div className="hero-workspace__monitor-stand" />
        </div>

        <div className="hero-workspace__laptop">
          <div className="hero-workspace__laptop-screen">
            <div className="flex items-center justify-between">
              <Terminal size={10} className="text-blue-300/70" />
              <span className="font-mono text-[7px] text-white/30">~/projects</span>
            </div>
            <div className="mt-2 space-y-1 font-mono text-[7px] leading-none">
              <div className="text-violet-300/70">$ git status</div>
              <div className="text-emerald-300/60">clean workspace</div>
              <div className="text-white/30">$ npm run build</div>
            </div>
          </div>
          <div className="hero-workspace__laptop-base" />
        </div>

        <div className="hero-workspace__portrait">
          <PortraitTreatment
            src={photo}
            alt={name}
          />
        </div>

        <div className="hero-workspace__books" aria-hidden>
          {books.map((book) => (
            <div
              key={book.label}
              className={`hero-workspace__book ${book.rotate}`}
            >
              {book.label}
            </div>
          ))}
        </div>

        <div className="hero-workspace__notebook">
          <div className="hero-workspace__notebook-title">LEARN / BUILD</div>
          <div className="hero-workspace__notebook-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="hero-workspace__mug" aria-hidden>
          <Coffee size={20} strokeWidth={1.5} />
        </div>

        <div className="hero-workspace__plant" aria-hidden>
          <span className="leaf leaf-1" />
          <span className="leaf leaf-2" />
          <span className="leaf leaf-3" />
          <span className="leaf leaf-4" />
          <div className="plant-pot" />
        </div>
      </div>

      <div className="hero-workspace__floating-card hero-workspace__floating-card--api">
        <Code2 size={14} />
        <div>
          <span>Backend</span>
          <strong>APIs</strong>
        </div>
      </div>

      <div className="hero-workspace__floating-card hero-workspace__floating-card--ai">
        <Database size={14} />
        <div>
          <span>AI Engineering</span>
          <strong>RAG / LLMs</strong>
        </div>
      </div>

      <div className="hero-workspace__idea">
        <Lightbulb size={14} />
        <span>Ideas → Code → Impact</span>
      </div>
    </div>
  );
}
