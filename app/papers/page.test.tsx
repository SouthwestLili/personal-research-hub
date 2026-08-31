import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import PapersPage from './page';

it('wires the reviewed public dataset into the paper library', () => {
  render(<PapersPage />);

  expect(screen.getByRole('heading', { name: 'Paper Library' })).toBeInTheDocument();
  expect(screen.getAllByTestId('paper-card')).toHaveLength(7);
});
