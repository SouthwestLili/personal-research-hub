import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { generateMetadata } from '@/app/papers/[slug]/page';

describe('public metadata', () => {
  it('uses the research-hub identity and removes starter metadata', () => {
    const layout = readFileSync(resolve(process.cwd(), 'app/layout.tsx'), 'utf8');
    expect(layout).toContain('Personal Research Hub · Lili Wang');
    expect(layout).toContain('Research activities, paper notes, and academic interests of Lili Wang.');
    expect(layout).not.toContain('Untitled site');
    expect(layout).not.toContain('Your site is taking shape');
  });

  it('derives paper-specific title and description', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: 'qmix-monotonic-value-function-factorisation',
      }),
    });
    expect(metadata.title).toBe(
      'QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning',
    );
    expect(metadata.description).toContain('cooperative multi-agent reinforcement learning');
  });
});
