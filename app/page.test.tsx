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
  expect(
    screen.getByRole('heading', { name: 'Current Research' }),
  ).toBeInTheDocument();
  expect(
    screen.getByText('Multi-Agent Learning & Strategic Interaction'),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Recent Activities' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Featured Papers' }),
  ).toBeInTheDocument();
  expect(screen.getByText('Latest Activity')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Read notes' }).length).toBeGreaterThan(0);
});
