import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import ResearchPage from './page';

it('presents all five publication-safe research directions', () => {
  render(<ResearchPage />);

  expect(
    screen.getByRole('heading', {
      name: 'Game-Theoretic AI & Strategic Decision-Making',
    }),
  ).toBeInTheDocument();

  for (const direction of [
    'Game-Theoretic AI',
    'Learning & Adaptation',
    'Incomplete Information',
    'Computational Research',
    'AI Safety & Robustness',
  ]) {
    expect(screen.getByRole('heading', { name: direction })).toBeInTheDocument();
  }
});
