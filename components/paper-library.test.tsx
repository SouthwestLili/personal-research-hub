import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import { papers } from '@/content/papers';
import { PaperLibrary } from './paper-library';

it('filters papers by topic and can clear the filter', async () => {
  const user = userEvent.setup();
  render(<PaperLibrary papers={papers} />);

  await user.click(screen.getByRole('button', { name: /Game Theory/ }));
  expect(screen.getAllByTestId('paper-card')).toHaveLength(2);
  expect(
    screen.queryByText(
      'QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning',
    ),
  ).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'All papers' }));
  expect(
    screen.getByText(
      'QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning',
    ),
  ).toBeInTheDocument();
});
