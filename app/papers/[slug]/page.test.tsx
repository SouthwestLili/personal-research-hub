import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import PaperPage from './page';

it('renders the complete reviewed QMIX reading note', async () => {
  const page = await PaperPage({
    params: Promise.resolve({ slug: 'qmix-monotonic-value-function-factorisation' }),
  });
  render(page);

  for (const heading of [
    'Paper Information',
    'Summary',
    'Core Idea',
    'Method',
    'Key Takeaways',
    'Questions',
    'My Thoughts',
    'Connection to My Research',
  ]) {
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  }
});

it('uses the not-found boundary for an unknown paper slug', async () => {
  await expect(
    PaperPage({ params: Promise.resolve({ slug: 'not-a-public-paper' }) }),
  ).rejects.toThrow('NEXT_NOT_FOUND');
});
