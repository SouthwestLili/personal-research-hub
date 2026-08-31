import { describe, expect, it } from 'vitest';
import { sanitizeActivities } from './public-content';
import { activities } from '@/content/activities';
import type { Activity } from '@/content/types';

const records: Activity[] = [
  {
    id: 'public',
    date: '2026-08-25',
    type: 'INDEPENDENT_READING',
    visibility: 'PUBLIC',
    publicTitle: 'QMIX',
    publicSummary: 'Reading notes',
    href: '/papers/qmix',
  },
  {
    id: 'activity',
    date: '2026-08-28',
    type: 'SUPERVISOR_MEETING',
    visibility: 'ACTIVITY_ONLY',
    publicTitle: 'Weekly Research Meeting',
    publicSummary: 'must disappear',
    href: '/secret',
  },
  {
    id: 'private',
    date: '2026-08-30',
    type: 'RESEARCH_GROUP_MEETING',
    visibility: 'PRIVATE',
    publicTitle: 'Never render',
  },
];

describe('sanitizeActivities', () => {
  it('exports only privacy-safe production projections', () => {
    const activityOnly = activities.filter(
      (item) => item.visibility === 'ACTIVITY_ONLY',
    );

    expect(activityOnly.length).toBeGreaterThan(0);
    for (const item of activityOnly) {
      expect(Object.keys(item).sort()).toEqual(
        [
          'date',
          'id',
          'publicSummary',
          'publicTitle',
          'type',
          'visibility',
        ].sort(),
      );
    }
  });

  it('excludes private records', () => {
    expect(sanitizeActivities(records).map((item) => item.id)).not.toContain(
      'private',
    );
  });

  it('removes links and hidden detail from activity-only records', () => {
    expect(
      sanitizeActivities(records).find((item) => item.id === 'activity'),
    ).toEqual({
      id: 'activity',
      date: '2026-08-28',
      type: 'SUPERVISOR_MEETING',
      visibility: 'ACTIVITY_ONLY',
      publicTitle: 'Weekly Research Meeting',
      publicSummary: 'Research discussion · Private',
    });
  });

  it('orders public output newest first', () => {
    expect(sanitizeActivities(records).map((item) => item.id)).toEqual([
      'activity',
      'public',
    ]);
  });
});
