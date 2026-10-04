export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}
