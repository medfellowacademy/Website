'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // On mount: read saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem('mfa-theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
      setTheme('dark');
    }
  }, []);

  function applyTheme(t: Theme) {
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    localStorage.setItem('mfa-theme', next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
