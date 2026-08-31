import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import ActivityDetailPage from './page';

it('renders the public AI transparency discussion', async () => {
  const page = await ActivityDetailPage({
    params: Promise.resolve({ id: 'ai-transparency-discussion-2026-08-05-2' }),
  });
  render(page);

  expect(
    screen.getByRole('heading', {
      name: 'AI Transparency, Autonomy & Trust Calibration',
    }),
  ).toBeInTheDocument();

  for (const heading of [
    'Overview',
    'Key Themes',
    'Main Takeaways',
    'Discussion & Limitations',
  ]) {
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  }
});

it('does not expose a private meeting through the detail route', async () => {
  await expect(
    ActivityDetailPage({
      params: Promise.resolve({ id: 'supervisor-meeting-2026-08-26' }),
    }),
  ).rejects.toThrow('NEXT_NOT_FOUND');
});
