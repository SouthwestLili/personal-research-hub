import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import { papers } from '@/content/papers';
import { PaperLibrary } from './paper-library';

it('filters papers by topic and can clear the filter', async () => {
  const user = userEvent.setup();
  render(<PaperLibrary papers={papers} />);

  await user.click(screen.getByRole('button', { name: /Bayesian Persuasion/ }));
  expect(screen.getAllByTestId('paper-card')).toHaveLength(1);
  expect(
    screen.queryByText(
      'Multi-agent Reinforcement Learning in Bayesian Stackelberg Markov Games for Adaptive Moving Target Defense',
    ),
  ).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'All papers' }));
  expect(
    screen.getByText(
      'Multi-agent Reinforcement Learning in Bayesian Stackelberg Markov Games for Adaptive Moving Target Defense',
    ),
  ).toBeInTheDocument();
});
