'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('research-hub-theme');
    const initial =
      saved === 'dark' ||
      (saved === null &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('research-hub-theme', next ? 'dark' : 'light');
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className="min-h-11 min-w-11 rounded-full"
      aria-label={dark ? 'Use light theme' : 'Use dark theme'}
      onClick={toggleTheme}
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}
