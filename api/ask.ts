import type { VercelRequest, VercelResponse } from '@vercel/node';
import { retrieveAssistantContext } from '../src/lib/assistantRetrieval';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  const question =
    typeof req.body?.question === 'string'
      ? req.body.question.trim()
      : '';

  if (question.length < 3) {
    return res.status(400).json({
      error: 'Please ask a question with at least 3 characters'
    });
  }

  try {
    const result = retrieveAssistantContext(question);

    if (!result.grounded) {
      return res.status(404).json({
        error: 'No verified information found in the portfolio'
      });
    }

    return res.status(200).json({
      answer: result.chunks.map((chunk) => chunk.text).join('\n\n'),
      sources: result.sources,
      grounded: true
    });
  } catch (error) {
    console.error('Error processing question:', error);

    return res.status(500).json({
      error: 'An error occurred while processing your question'
    });
  }
}
