import { expect, it } from 'vitest';
import { activities } from '@/content/activities';
import { getPublicActivities } from '@/lib/public-content';

it('keeps private and hidden fixture values out of production projections', () => {
  const output = JSON.stringify({ activities, public: getPublicActivities() });

  expect(output).not.toContain('Never render');
  expect(output).not.toContain('must disappear');
  expect(output).not.toContain('/secret');
  expect(output).not.toContain('PRIVATE');
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
