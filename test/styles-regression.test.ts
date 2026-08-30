import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, it } from 'vitest';

const css = readFileSync(resolve(process.cwd(), 'app/globals.css'), 'utf8');
const header = readFileSync(
  resolve(process.cwd(), 'components/site-header.tsx'),
  'utf8',
);

it('preserves reduced-motion and visible focus support', () => {
  expect(css).toContain('@media (prefers-reduced-motion: reduce)');
  expect(css).toContain('focus-visible:outline-2');
  expect(css).toContain('outline-offset');
  expect(header).toContain('lg:hidden');
  expect(header).toContain('min-h-11 min-w-11');
});

it('defines distinct light and dark academic themes', () => {
  expect(css).toContain(':root');
  expect(css).toContain('.dark');
  expect(css).toContain('--milestone:');
  expect(css).toContain('--container-reading: 68ch');
});
