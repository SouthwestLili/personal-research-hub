import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { getPublicActivities } from '@/lib/public-content';
import type { PublicActivity } from '@/content/types';
import { ResearchTimeline } from './research-timeline';

it('shows sanitized meetings without links and labels every activity type', () => {
  render(<ResearchTimeline activities={getPublicActivities()} />);

  expect(screen.getByText('Weekly Research Meeting')).toBeInTheDocument();
  expect(
    screen.queryByRole('link', { name: /Weekly Research Meeting/ }),
  ).not.toBeInTheDocument();
  expect(screen.getAllByText('Research discussion · Private').length).toBeGreaterThan(0);

  for (const label of [
    'Supervisor Research Meeting',
    'Research Group Meeting',
    'Group Paper Reading',
    'Independent Paper Reading',
    'Research Activity or Milestone',
  ]) {
    expect(screen.getAllByText(label).length).toBeGreaterThan(0);
  }
});

it('orders timeline dates newest first', () => {
  const { container } = render(
    <ResearchTimeline activities={getPublicActivities()} />,
  );
  const dates = [...container.querySelectorAll('time')].map((time) =>
    time.getAttribute('datetime'),
  );
  expect(dates).toEqual([...dates].sort((a, b) => (b ?? '').localeCompare(a ?? '')));
});

it('orders year groups newest first', () => {
  const multiYear: PublicActivity[] = [
    {
      id: 'older',
      date: '2025-12-01',
      type: 'MILESTONE',
      visibility: 'PUBLIC',
      publicTitle: 'Earlier milestone',
    },
    {
      id: 'newer',
      date: '2026-01-01',
      type: 'MILESTONE',
      visibility: 'PUBLIC',
      publicTitle: 'Newer milestone',
    },
  ];
  const { container } = render(<ResearchTimeline activities={multiYear} />);
  const years = [...container.querySelectorAll('section > h2')].map(
    (heading) => heading.textContent,
  );
  expect(years).toEqual(['2026', '2025']);
});
