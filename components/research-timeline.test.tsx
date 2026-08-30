import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { getPublicActivities } from '@/lib/public-content';
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
    'Research Milestone',
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
  expect(dates).toEqual([...dates].sort().reverse());
});
