'use client';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
      style={{
        background: isDark ? '#152218' : '#e8f2ea',
        color: isDark ? '#7ed9a2' : '#15401E',
        border: `1px solid ${isDark ? '#2a4a30' : '#C6DFC9'}`,
      }}
    >
      <span
        className="absolute inset-0 rounded-lg transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0, background: 'radial-gradient(circle at center, #1E3A5F 0%, transparent 70%)' }}
      />
      {isDark ? (
        <Sun className="w-4 h-4 relative z-10 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-4 h-4 relative z-10 transition-transform duration-300" />
      )}
    </button>
  );
}
