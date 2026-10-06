import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';
export type ColorTheme = 'silver-gold' | 'iron-man';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = 'um-theme';
const COLOR_STORAGE_KEY = 'um-color-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window === 'undefined') return 'silver-gold';
    const stored = window.localStorage.getItem(COLOR_STORAGE_KEY) as ColorTheme | null;
    return stored === 'iron-man' || stored === 'silver-gold' ? stored : 'silver-gold';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.colorTheme = colorTheme;
    window.localStorage.setItem(STORAGE_KEY, theme);
    window.localStorage.setItem(COLOR_STORAGE_KEY, colorTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleColorTheme = () => setColorTheme((t) => (t === 'silver-gold' ? 'iron-man' : 'silver-gold'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorTheme, toggleColorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
