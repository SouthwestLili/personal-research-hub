import { publicActivities } from '@/content/activities';
import { papers } from '@/content/papers';
import type { Activity, Paper, PublicActivity } from '@/content/types';

export function sanitizeActivities(records: Activity[]): PublicActivity[] {
  return records
    .filter((record) => record.visibility !== 'PRIVATE')
    .map((record) =>
      record.visibility === 'ACTIVITY_ONLY'
        ? {
            id: record.id,
            date: record.date,
            type: record.type,
            visibility: 'ACTIVITY_ONLY' as const,
            publicTitle: record.publicTitle,
            publicSummary: 'Research discussion · Private',
          }
        : (record as PublicActivity),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublicActivities(): PublicActivity[] {
  return [...publicActivities].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((paper) => paper.slug === slug);
}
