import { render, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import PaperPage from './page';

it('embeds and offers a download for a locally hosted public PDF', async () => {
  const page = await PaperPage({
    params: Promise.resolve({ slug: 'bayesian-stackelberg-markov-games-moving-target-defense' }),
  });
  const { container } = render(page);

  expect(within(container).getByTitle('Embedded paper PDF')).toHaveAttribute(
    'src',
    '/papers/bsmg-moving-target-defense.pdf',
  );
  expect(within(container).getByRole('link', { name: /Download PDF/ })).toHaveAttribute(
    'download',
  );
  const layout = within(container).getByTestId('paper-detail-layout');
  const reader = within(container).getByTestId('paper-reader');
  const notes = within(container).getByTestId('paper-notes');
  expect(layout).toHaveClass('xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]');
  expect(
    reader.compareDocumentPosition(notes) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
});

it('uses only the official source for the ACM paper', async () => {
  const page = await PaperPage({
    params: Promise.resolve({ slug: 'imitative-follower-deception-stackelberg-games' }),
  });
  const { container } = render(page);

  expect(within(container).queryByTitle('Embedded paper PDF')).not.toBeInTheDocument();
  expect(within(container).queryByRole('link', { name: /Download PDF/ })).not.toBeInTheDocument();
  expect(within(container).getByRole('link', { name: /Open official paper/ })).toBeInTheDocument();
  expect(within(container).getByTestId('paper-detail-layout')).toHaveClass(
    'max-w-reading',
  );
});

it('uses the not-found boundary for an unknown paper slug', async () => {
  await expect(
    PaperPage({ params: Promise.resolve({ slug: 'not-a-public-paper' }) }),
  ).rejects.toThrow('NEXT_NOT_FOUND');
});
