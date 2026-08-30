import type { Metadata } from 'next';
import { ResearchTimeline } from '@/components/research-timeline';
import { getPublicActivities } from '@/lib/public-content';

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'A chronological record of research activity by Lili Wang.',
};

export default function TimelinePage() {
  return (
    <main className="page-shell">
      <header className="max-w-3xl">
        <p className="eyebrow">Research activity journal</p>
        <h1 className="page-title mt-5">Research Timeline</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A chronological record of reading, discussion, and milestones. Meeting activity is visible, while confidential content remains private.
        </p>
      </header>
      <section className="mt-14" aria-label="Chronological research activity">
        <ResearchTimeline activities={getPublicActivities()} />
      </section>
    </main>
  );
}
