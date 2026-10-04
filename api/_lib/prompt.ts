/**
 * Prompt construction for /api/ask.
 *
 * The guardrails live here rather than in the provider layer so every provider
 * receives an identical contract. Everything is derived from the portfolio
 * knowledge base, so the prompt cannot drift from the site's own copy.
 */

import { assistantIdentity } from '../../src/data/portfolioAssistant';
import type { ChatTurn } from './providers';

/** Hard instruction set sent with every request. */
export function buildSystemPrompt(): string {
  return [
    `You are the AI assistant for ${assistantIdentity.owner}'s portfolio.`,
    `${assistantIdentity.role}. ${assistantIdentity.focus}`,
    '',
    'Answer ONLY from the verified portfolio context supplied with the question.',
    '',
    'Never invent personal experience, technologies, projects, metrics, employers, dates,',
    'responsibilities, achievements, or qualifications. Do not guess.',
    '',
    `If the context does not contain the answer, reply with this sentence and nothing more:`,
    `"${assistantIdentity.refusal}"`,
    'You may add one short sentence pointing to the closest related area of the portfolio.',
    '',
    'When a project is discussed, keep these separate:',
    '- what the project does',
    '- what technologies are used',
    '- what is explicitly verified',
    '- what is not documented',
    'Lines marked "Not documented" mean the portfolio does not state this. Report them as',
    'not documented. Never describe a technology, employer, or credential that is absent',
    'from the context, even if you know it in general.',
    '',
    assistantIdentity.groundingNote,
    '',
    'Style: answer in two to five short sentences, or a short bullet list. Plain text, no',
    'markdown headings, no preamble, no sign-off, no links, and no invented details.',
  ].join('\n');
}

/**
 * The final user message carries the retrieved context so the model never has to
 * guess what it is allowed to know. Question and context are length-capped by
 * the endpoint before reaching this point.
 */
export function buildUserMessage(question: string, context: string): string {
  return [
    'VERIFIED PORTFOLIO CONTEXT',
    '"""',
    context,
    '"""',
    '',
    `QUESTION: ${question}`,
  ].join('\n');
}

/** Prior turns, oldest first, trimmed and capped by the endpoint. */
export function buildHistoryMessages(history: ChatTurn[]): ChatTurn[] {
  return history.map((turn) => ({ role: turn.role, content: turn.content }));
}
