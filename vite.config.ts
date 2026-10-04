import { defineConfig, type Plugin } from 'vite';
import { retrieveAssistantContext } from './src/lib/assistantRetrieval';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/

function assistantAskMiddleware(): Plugin {
  return {
    name: 'assistant-ask-local-api',
    configureServer(server) {
      server.middlewares.use('/api/ask', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          let body = '';

          for await (const chunk of req) {
            body += chunk;
          }

          const parsed = JSON.parse(body);
          const question =
            typeof parsed?.question === 'string'
              ? parsed.question.trim()
              : '';

          if (question.length < 3) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                error: 'Please ask a question with at least 3 characters',
              }),
            );
            return;
          }

          const result = retrieveAssistantContext(question);

          if (!result.grounded) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                error: 'No verified information found in the portfolio',
              }),
            );
            return;
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              answer: result.chunks.map((chunk) => chunk.text).join('\n\n'),
              sources: result.sources,
              grounded: true,
            }),
          );
        } catch (error) {
          console.error('Local Ask API error:', error);

          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              error: 'An error occurred while processing your question',
            }),
          );
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    assistantAskMiddleware(),react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
