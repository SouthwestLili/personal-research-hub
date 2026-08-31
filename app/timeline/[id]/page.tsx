import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ACTIVITY_META } from '@/components/activity-item';
import { PaperNoteSection } from '@/components/paper-note-section';
import { activityDetails } from '@/content/activity-details';
import { getActivityDetail } from '@/lib/public-content';

type ActivityPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return activityDetails.map((activity) => ({ id: activity.id }));
}

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { id } = await params;
  const activity = getActivityDetail(id);
  if (!activity) return { title: 'Research activity not found' };
  return { title: activity.title, description: activity.summary };
}

export default async function ActivityDetailPage({ params }: ActivityPageProps) {
  const { id } = await params;
  const activity = getActivityDetail(id);
  if (!activity) notFound();

  const formattedDate = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${activity.date}T00:00:00Z`));

  return (
    <main className="page-shell">
      <article className="mx-auto max-w-reading">
        <Link href="/timeline" className="text-link inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Research Timeline
        </Link>

        <header className="mt-10">
          <p className="eyebrow">{ACTIVITY_META[activity.type].label} · {formattedDate}</p>
          <h1 className="page-title mt-5 text-balance">{activity.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{activity.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {activity.topics.map((topic) => (
              <span key={topic} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                {topic}
              </span>
            ))}
          </div>
        </header>

        <div className="paper-panel mt-12 rounded-xl p-6 sm:p-10">
          <PaperNoteSection title="Overview">
            {activity.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </PaperNoteSection>
          <PaperNoteSection title="Key Themes">
            <ul className="list-disc space-y-3 pl-5">
              {activity.keyThemes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
          </PaperNoteSection>
          <PaperNoteSection title="Main Takeaways">
            <ul className="list-disc space-y-3 pl-5">
              {activity.mainTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </PaperNoteSection>
          {activity.discussion?.length ? (
            <PaperNoteSection title="Discussion & Limitations">
              <ul className="list-disc space-y-3 pl-5">
                {activity.discussion.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </PaperNoteSection>
          ) : null}
        </div>
      </article>
    </main>
  );
}
