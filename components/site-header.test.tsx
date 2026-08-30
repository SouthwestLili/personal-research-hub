import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { SiteHeader } from './site-header';

it('exposes the five primary destinations', () => {
  render(<SiteHeader />);

  for (const name of ['Home', 'Research', 'Papers', 'Timeline', 'About']) {
    expect(screen.getAllByRole('link', { name }).length).toBeGreaterThan(0);
  }
  expect(screen.queryByRole('link', { name: 'Dashboard' })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Toggle color theme' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Open navigation' })).toBeInTheDocument();
});
