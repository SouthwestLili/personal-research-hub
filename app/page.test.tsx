import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { currentResearch } from '@/content/research';
import { siteProfile } from '@/content/site';
import HomePage from './page';

it('introduces Lili Wang and her academic focus', () => {
  render(<HomePage />);

  expect(
    screen.getByRole('heading', { name: 'Lili Wang' }),
  ).toBeInTheDocument();
  expect(screen.getByText(siteProfile.descriptor)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Current Research' }),
  ).toBeInTheDocument();
  expect(screen.getByText(currentResearch.title)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Recent Activities' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Featured Papers' }),
  ).toBeInTheDocument();
  expect(screen.getByText('Latest Activity')).toBeInTheDocument();
  expect(
    screen.getAllByRole('link', { name: /Read notes for/ }).length,
  ).toBeGreaterThan(0);
});
