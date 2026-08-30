'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  useEffect(() => {
    const saved = window.localStorage.getItem('research-hub-theme');
    const initial =
      saved === 'dark' ||
      (saved === null &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('research-hub-theme', next ? 'dark' : 'light');
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className="min-h-11 min-w-11 rounded-full"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <Moon className="dark:hidden" aria-hidden="true" />
      <Sun className="hidden dark:block" aria-hidden="true" />
    </Button>
  );
}
