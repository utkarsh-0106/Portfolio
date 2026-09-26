import { useEffect, useState } from 'react';

type Source = {
  id: string;
  label: string;
  path?: string;
};

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  sources: Array<{
    text: string;
    url: string;
  }>;
};

export function AskPortfolio() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();

    if (question.length < 3 || loading) {
      return;
    }

    const userMessage: Message = {
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

      const sources: Source[] = Array.isArray(data.sources) ? data.sources : [];

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.answer || data.error || 'No response received.',
        sources: sources.map((source) => ({
          text: source.label,
          url: source.path ?? '#',
        })),
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      const assistantMessage: Message = {
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
        className="mb-4 max-h-[520px] min-h-[260px] overflow-y-auto rounded-2xl border border-soft bg-card/40 p-4"
      >
        {messages.length === 0 ? (
          <div className="grid min-h-[220px] place-items-center text-center">
            <div>
              <p className="text-sm font-medium text-[var(--text)]">
                Ask something about my work.
              </p>
              <p className="mt-2 text-sm text-muted">
                Try: "What projects have you built?" or "What technologies do you use?"
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'user' ? 'ml-auto max-w-[85%]' : 'max-w-[90%]'}
              >
                <div className="mb-1 text-xs font-medium text-muted">
                  {message.role === 'user' ? 'You' : 'Portfolio Assistant'}
                </div>

                <div className="rounded-xl border border-soft bg-base p-3 text-sm leading-6 text-[var(--text)]">
                  {message.content}
                </div>

                {message.sources.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {message.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        className="block text-xs text-accent-500 hover:underline"
                      >
                        View {source.text} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="mt-4 text-sm text-muted">
            Searching verified portfolio information...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a question..."
          disabled={loading}
          className="min-w-0 flex-1 rounded-xl border border-soft bg-card px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-accent-500 disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={loading || input.trim().length < 3}
          className="rounded-xl bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Thinking…' : 'Ask'}
        </button>
      </form>
    </section>
  );
}
