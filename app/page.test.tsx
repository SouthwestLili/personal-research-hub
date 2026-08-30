import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import HomePage from './page';

it('introduces Lili Wang and her academic focus', () => {
  render(<HomePage />);

  expect(
    screen.getByRole('heading', { name: 'Lili Wang' }),
  ).toBeInTheDocument();
  expect(
    screen.getByText('Computer Science · AI & Machine Learning'),
  ).toBeInTheDocument();
});
