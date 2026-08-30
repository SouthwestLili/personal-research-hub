import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import AboutPage from './page';

it('presents a concise academic profile without unconfigured links', () => {
  render(<AboutPage />);

  for (const heading of ['About', 'Education', 'Research Interests', 'Current Focus']) {
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  }
  expect(screen.queryByRole('link', { name: /CV/ })).not.toBeInTheDocument();
});
