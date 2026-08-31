import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { getPublicActivities } from '@/lib/public-content';
import type { PublicActivity } from '@/content/types';
import { ResearchTimeline } from './research-timeline';

it('shows private meetings safely and labels the active activity types', () => {
  const activities = getPublicActivities();
  const privateMeetings = activities.filter(
    (activity) => activity.type === 'SUPERVISOR_MEETING',
  );
  render(<ResearchTimeline activities={activities} />);

  expect(screen.getAllByText('Supervisor Research Meeting')).toHaveLength(
    privateMeetings.length * 2,
  );
  expect(
    screen.queryByRole('link', { name: /Supervisor Research Meeting/ }),
  ).not.toBeInTheDocument();
  expect(screen.getAllByText('Research discussion · Private')).toHaveLength(
    privateMeetings.length,
  );
  expect(
    screen.queryByText(/Stackelberg Games, Online Learning & Incomplete Types/),
  ).not.toBeInTheDocument();

  const privateCards = document.querySelectorAll('[data-visibility="private"]');
  expect(privateCards.length).toBe(privateMeetings.length);
  expect(privateCards[0]).toHaveClass('cursor-default', 'opacity-70');

  for (const label of [
    'Supervisor Research Meeting',
    'Research Group Meeting',
    'Group Paper Reading',
  ]) {
    expect(screen.getAllByText(label).length).toBeGreaterThan(0);
  }
});

it('shows a pointer and hover affordance only when an activity has a link', () => {
  const linkedActivity: PublicActivity = {
    id: 'linked-paper',
    date: '2026-08-30',
    type: 'GROUP_READING',
    visibility: 'PUBLIC',
    publicTitle: 'Linked paper discussion',
    href: '/papers/linked-paper',
  };
  const { container } = render(
    <ResearchTimeline activities={[linkedActivity]} />,
  );

  expect(container.querySelector('[data-visibility="public"]')).toHaveClass(
    'cursor-pointer',
  );
  expect(screen.getByRole('link', { name: /Linked paper discussion/ })).toHaveClass(
    'cursor-pointer',
  );
});

it('orders timeline dates newest first', () => {
  const { container } = render(
    <ResearchTimeline activities={getPublicActivities()} />,
  );
  const dates = [...container.querySelectorAll('time')].map((time) =>
    time.getAttribute('datetime'),
  );
  const titles = [...container.querySelectorAll('h3')].map(
    (heading) => heading.textContent,
  );
  expect(dates[0]).toBe('2026-08-26');
  expect(dates).toEqual([...dates].sort((a, b) => (b ?? '').localeCompare(a ?? '')));
  expect(titles.indexOf('HCI Research Presentation & Lab Collaboration')).toBeLessThan(
    titles.indexOf('AI Transparency, Autonomy & Trust Calibration'),
  );
  expect(titles.indexOf('AI Transparency, Autonomy & Trust Calibration')).toBeLessThan(
    titles.indexOf('HCII Montreal Conference Recap & Paper Discussion'),
  );
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
