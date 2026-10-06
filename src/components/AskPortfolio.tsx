import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

type Source = {
  id: string;
  label: string;
  path?: string;
};

type MessageSource = {
  text: string;
  url: string;
};

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  sources: MessageSource[];
};

type ProjectCard = {
  title: string;
  year?: string;
  description: string;
  technologies: string[];
  url: string;
};

const technologyGroups = {
  Languages: [
    'C++',
    'C',
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'SQL',
  ],
  Backend: [
    'FastAPI',
    'Spring Boot',
    'Node.js',
    'Express.js',
    'Flask',
    'REST APIs',
    'JWT',
  ],
  Frontend: [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
  ],
  Database: ['MongoDB', 'MySQL', 'SQLite', 'ChromaDB'],
  'AI / ML': [
    'RAG',
    'LangChain',
    'Ollama',
    'Qwen3',
    'Scikit-learn',
    'Pandas',
    'NumPy',
  ],
  'Core CS': [
    'Data Structures',
    'Algorithms',
    'OOP',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
  ],
  Tools: [
    'GitHub',
    'VS Code',
    'Vercel',
    'Render',
    'Cloudflare',
    'Postman',
  ],
};

// const projectNames = [
//   'JANGO',
//   'Institutional Performance Analytics System',
//   'AI Developer Toolbox',
//   'CineMatch',
//   'DSA Progress Tracker',
// ];

const cleanText = (value: string) =>
  value
    .replace(/\*\*/g, '')
    .replace(/^[-•]\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();

const isTechnologyQuestion = (question: string) =>
  /\b(technolog|tech stack|skills?|languages?|frameworks?|tools?|database|backend|frontend|ai|ml)\b/i.test(
    question,
  );

const isProjectListQuestion = (question: string, sources: MessageSource[]) =>
  sources.length > 1 ||
  /\b(what projects|projects have|all projects|project list|projects built)\b/i.test(
    question,
  );

const isSingleProjectQuestion = (
  question: string,
  sources: MessageSource[],
) =>
  sources.length === 1 &&
  /\b(tell me|about|explain|describe|how does|architecture|features|what is)\b/i.test(
    question,
  );

function extractTechnologies(text: string) {
  const technologyLine =
    text.match(/technolog(?:y|ies)\s*:\s*(.+?)(?=$|\n)/i)?.[1] ?? '';

  if (!technologyLine) {
    return [];
  }

  return technologyLine
    .split(',')
    .map((item) => cleanText(item))
    .filter(Boolean);
}

function parseProjectCards(
  content: string,
  sources: MessageSource[],
): ProjectCard[] {
  const normalized = content.replace(/\r/g, '');
  const cards: ProjectCard[] = [];

  sources.forEach((source, index) => {
    const label = source.text;
    const start = normalized.toLowerCase().indexOf(label.toLowerCase());

    if (start === -1) {
      return;
    }

    const remaining = normalized.slice(start);

    let end = remaining.length;

    sources.slice(index + 1).forEach((nextSource) => {
      const nextIndex = remaining
        .toLowerCase()
        .indexOf(nextSource.text.toLowerCase());

      if (nextIndex > 0) {
        end = Math.min(end, nextIndex);
      }
    });

    const block = remaining.slice(0, end).trim();
    const lines = block
      .split('\n')
      .map(cleanText)
      .filter(Boolean);

    const firstLine = lines[0] || label;
    const year = firstLine.match(/\((20\d{2})\)/)?.[1];

    const technologyIndex = lines.findIndex((line) =>
      /^technolog(?:y|ies)\s*:/i.test(line),
    );

    const technologies =
      technologyIndex >= 0
        ? extractTechnologies(lines[technologyIndex])
        : [];

    const descriptionLines = lines
      .slice(1, technologyIndex >= 0 ? technologyIndex : undefined)
      .filter((line) => !/^technolog(?:y|ies)\s*:/i.test(line));

    cards.push({
      title: label,
      year,
      description:
        descriptionLines.join(' ') ||
        'A documented project in Utkarsh Maheshwari’s portfolio.',
      technologies,
      url: source.url,
    });
  });

  return cards;
}

function renderTechnologyResponse() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          Technical Stack
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
          Technologies used across the portfolio
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(technologyGroups).map(([group, technologies]) => (
          <div
            key={group}
            className="rounded-xl border border-soft bg-base/50 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <Cpu size={13} className="text-accent-500" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {group}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-soft bg-card px-2.5 py-1 text-xs text-[var(--text)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderProjectCards(cards: ProjectCard[]) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          Projects
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
          {cards.length} documented projects
        </h3>
      </div>

      <div className="space-y-3">
        {cards.map((project) => (
          <a
            key={`${project.title}-${project.url}`}
            href={project.url}
            className="group block rounded-xl border border-soft bg-base/50 p-4 transition hover:border-accent-500/40 hover:bg-card/70"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-sm font-semibold text-[var(--text)]">
                    {project.title}
                  </h3>

                  {project.year && (
                    <span className="text-xs text-muted">
                      {project.year}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-soft px-2 py-1 text-[10px] text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-soft text-muted transition group-hover:border-accent-500/50 group-hover:text-accent-500">
                <ArrowUpRight size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function renderProjectDetail(
  content: string,
  source: MessageSource,
) {
  const lines = content
    .replace(/\r/g, '')
    .split('\n')
    .map(cleanText)
    .filter(Boolean);

  const titleLine = lines[0] || source.text;
  const year = titleLine.match(/\((20\d{2})\)/)?.[1];
  const title = source.text;

  const sections: Array<{ title: string; content: string }> = [];
  let currentSection = '';
  let currentContent: string[] = [];

  const sectionPattern =
    /^(tagline|summary|problem|features?|capabilities|architecture|document flow|what .*taught|engineering takeaways|technologies?)\s*:/i;

  lines.slice(1).forEach((line) => {
    const match = line.match(sectionPattern);

    if (match) {
      if (currentSection && currentContent.length > 0) {
        sections.push({
          title: currentSection,
          content: currentContent.join(' '),
        });
      }

      currentSection = match[1];
      currentContent = [line.slice(match[0].length).trim()];
      return;
    }

    currentContent.push(line);
  });

  if (currentSection && currentContent.length > 0) {
    sections.push({
      title: currentSection,
      content: currentContent.join(' '),
    });
  }

  const technologies =
    extractTechnologies(content).length > 0
      ? extractTechnologies(content)
      : [];

  const fallbackSummary =
    lines
      .slice(1)
      .filter(
        (line) =>
          !/^technolog(?:y|ies)\s*:/i.test(line) &&
          !sectionPattern.test(line),
      )
      .join(' ') ||
    'A documented project from Utkarsh Maheshwari’s portfolio.';

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-soft bg-base/50 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
              Project
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              {title}
            </h2>

            {year && (
              <p className="mt-1 text-xs text-muted">
                {year} · Engineering Project
              </p>
            )}
          </div>

          <a
            href={source.url}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-soft text-muted transition hover:border-accent-500/50 hover:text-accent-500"
            aria-label={`Open ${title}`}
          >
            <ExternalLink size={13} />
          </a>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          {fallbackSummary}
        </p>
      </div>

      {technologies.length > 0 && (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Cpu size={13} className="text-accent-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Technology
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-soft bg-base/50 px-2.5 py-1.5 text-xs text-[var(--text)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}

      {sections.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {sections.map((section) => (
            <div
              key={`${section.title}-${section.content}`}
              className="rounded-xl border border-soft bg-base/50 p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {section.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function renderGeneralResponse(content: string) {
  const paragraphs = content
    .replace(/\r/g, '')
    .split(/\n+/)
    .map(cleanText)
    .filter(Boolean);

  return (
    <div className="space-y-3">
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${paragraph}-${index}`}
          className="text-sm leading-6 text-[var(--text)]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function AssistantResponse({
  message,
}: {
  message: InternalMessage;
}) {
  const { content, sources, responseType } = message;

  if (responseType === 'technology') {
    return renderTechnologyResponse();
  }

  if (responseType === 'project-list') {
    const cards = parseProjectCards(content, sources);

    if (cards.length > 0) {
      return renderProjectCards(cards);
    }
  }

  if (responseType === 'project-detail' && sources.length === 1) {
    return renderProjectDetail(content, sources[0]);
  }

  return renderGeneralResponse(content);
}

type ResponseType =
  | 'technology'
  | 'project-list'
  | 'project-detail'
  | 'general';

type InternalMessage = Message & {
  responseType?: ResponseType;
};

export function AskPortfolio() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<InternalMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const suggestedQuestions = [
    'How was JANGO built?',
    'What projects have I built?',
    'What is my backend stack?',
  ];

  const askSuggestedQuestion = (question: string) => {
    if (loading) return;
    setInput(question);
    window.setTimeout(() => {
      const form = document.getElementById('portfolio-ask-form') as HTMLFormElement | null;
      form?.requestSubmit();
    }, 0);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const question = input.trim();

    if (question.length < 3 || loading) {
      return;
    }

    const userMessage: InternalMessage = {
      id: Date.now(),
      role: 'user',
      content: question,
      sources: [],
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get an answer.');
      }

      const sources: Source[] = Array.isArray(data.sources)
        ? data.sources
        : [];

      const responseSources = sources.map((source) => ({
        text: source.label,
        url: source.path ?? '#',
      }));

      const responseType: ResponseType = isTechnologyQuestion(question)
        ? 'technology'
        : isProjectListQuestion(question, responseSources)
          ? 'project-list'
          : isSingleProjectQuestion(question, responseSources)
            ? 'project-detail'
            : 'general';

      const assistantMessage: InternalMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content:
          data.answer || data.error || 'No response received.',
        responseType,
        sources: responseSources,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const assistantMessage: InternalMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content:
          error instanceof Error
            ? error.message
            : 'An error occurred while processing your question.',
        sources: [],
      };

      setMessages((current) => [...current, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const container = document.getElementById('chat-container');

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <section className="mx-auto max-w-3xl">
      <div
        id="chat-container"
        className="mb-4 max-h-[620px] min-h-[260px] overflow-y-auto rounded-2xl border border-soft bg-card/40 p-4"
      >
        {messages.length === 0 ? (
          <div className="grid min-h-[220px] place-items-center text-center">
            <div>
              <div className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-soft bg-base">
                <Sparkles size={15} className="text-accent-500" />
              </div>

              <p className="mt-4 text-sm font-medium text-[var(--text)]">
                Query the verified knowledge base.
              </p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Projects, technologies, architecture, experience, and engineering decisions.
              </p>

              <div className="mx-auto mt-5 grid max-w-xl gap-2 text-left sm:grid-cols-3">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => askSuggestedQuestion(question)}
                    className="group rounded-xl border border-soft bg-card/60 p-3 text-left transition hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-card"
                  >
                    <span className="text-[11px] leading-4 text-[var(--text)]">{question}</span>
                    <ArrowRight size={12} className="mt-3 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === 'user'
                    ? 'ml-auto max-w-[88%]'
                    : 'max-w-[96%]'
                }
              >
                {message.role === 'user' ? (
                  <>
                    <div className="mb-1.5 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      You
                    </div>

                    <div className="rounded-xl border border-soft bg-base px-4 py-3 text-sm leading-6 text-[var(--text)]">
                      {message.content}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-soft bg-base">
                        <Sparkles size={10} className="text-accent-500" />
                      </span>
                      Portfolio Assistant
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 size={11} />
                        Verified
                      </span>
                    </div>

                    <div className="rounded-xl border border-soft bg-base p-4 sm:p-5">
                      <AssistantResponse
                        message={message}
                      />

                      {message.sources.length > 0 && (
                        <div className="mt-5 border-t border-soft pt-4">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                            Verified Sources
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {message.sources.map((source) => (
                              <a
                                key={`${source.text}-${source.url}`}
                                href={source.url}
                                className="inline-flex items-center gap-1.5 rounded-full border border-soft bg-card px-2.5 py-1.5 text-xs text-muted transition hover:border-accent-500/50 hover:text-[var(--text)]"
                              >
                                {source.text}
                                <ExternalLink size={10} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
            Retrieving verified portfolio information…
          </div>
        )}
      </div>

      <form id="portfolio-ask-form" onSubmit={handleSubmit} className="relative flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Ask about a project, technology, or engineering decision…"
          disabled={loading}
          className="min-w-0 flex-1 rounded-xl border border-soft bg-card px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-accent-500 disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={loading || input.trim().length < 3}
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Thinking…' : 'Ask ↗'}
        </button>
      </form>

      <div className="mt-3 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
        <span className={focused ? 'text-accent-400' : ''}>
          {loading ? 'Retrieving verified context' : focused ? 'Listening for your question' : 'Ready'}
        </span>
        <span>Grounded answers only</span>
      </div>
    </section>
  );
}
