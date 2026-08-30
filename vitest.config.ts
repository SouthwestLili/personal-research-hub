import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': import.meta.dirname,
      'next/link': `${import.meta.dirname}/test/next-link.tsx`,
      'next/navigation': `${import.meta.dirname}/test/next-navigation.ts`,
    },
  },
});
