import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import ResearchPage from './page';

it('presents all five publication-safe research directions', () => {
  render(<ResearchPage />);

  for (const direction of [
    'Multi-Agent Systems',
    'Reinforcement Learning',
    'Online Learning',
    'Game Theory',
    'AI Robustness',
  ]) {
    expect(screen.getByRole('heading', { name: direction })).toBeInTheDocument();
  }
});
