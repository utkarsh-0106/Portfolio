import { Provider } from 'ai';

export interface ProviderConfig {
  provider: string;
  apiKey?: string;
  model?: string;
}

export const getProviderConfig = (): ProviderConfig => {
  const provider = process.env.AI_PROVIDER || 'ollama';
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || 'qwen3:8b-opencode';

  return {
    provider,
    apiKey,
    model
  };
};

export const getProvider = (): Provider => {
  const config = getProviderConfig();

  switch (config.provider.toLowerCase()) {
    case 'ollama':
      return new Provider({
        model: config.model,
        apiKey: config.apiKey,
        api: 'https://api.ollama.com/api/chat'
      });
    default:
      throw new Error(`Unsupported provider: ${config.provider}`);
  }
};