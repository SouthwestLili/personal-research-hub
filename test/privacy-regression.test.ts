import { expect, it } from 'vitest';
import { activities } from '@/content/activities';
import { getPublicActivities, sanitizeActivities } from '@/lib/public-content';
import type { Activity } from '@/content/types';

it('keeps private and hidden fixture values out of production projections', () => {
  const output = JSON.stringify(getPublicActivities());

  expect(output).not.toContain('Never render');
  expect(output).not.toContain('must disappear');
  expect(output).not.toContain('/secret');
  expect(output).not.toContain('PRIVATE');
});

it('drops a synthetic private record before serialization', () => {
  const raw: Activity[] = [
    ...activities,
    {
      id: 'private-test-only',
      date: '2026-08-31',
      type: 'SUPERVISOR_MEETING',
      visibility: 'PRIVATE',
      publicTitle: 'Synthetic confidential marker',
      publicSummary: 'Synthetic private detail',
      href: '/synthetic-secret',
    },
  ];
  const output = JSON.stringify(sanitizeActivities(raw));
  expect(output).not.toContain('Synthetic confidential marker');
  expect(output).not.toContain('Synthetic private detail');
  expect(output).not.toContain('/synthetic-secret');
});

it('ships activity-only entries with only their public projection fields', () => {
  for (const activity of getPublicActivities()) {
    if (activity.visibility === 'ACTIVITY_ONLY') {
      expect(Object.keys(activity).sort()).toEqual(
        ['id', 'date', 'type', 'visibility', 'publicTitle', 'publicSummary'].sort(),
      );
    }
  }
});
