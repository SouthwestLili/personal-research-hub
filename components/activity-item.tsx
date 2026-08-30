import { BookOpen, LockKeyhole, MessageCircleMore, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import type { PublicActivity } from '@/content/types';

const activityMeta = {
  SUPERVISOR_MEETING: { label: 'Supervisor Research Meeting', icon: LockKeyhole },
  RESEARCH_GROUP_MEETING: { label: 'Research Group Meeting', icon: Users },
  GROUP_READING: { label: 'Group Paper Reading', icon: MessageCircleMore },
  INDEPENDENT_READING: { label: 'Independent Paper Reading', icon: BookOpen },
  MILESTONE: { label: 'Research Milestone', icon: Sparkles },
} as const;

export const ACTIVITY_META = activityMeta;

export function ActivityItem({ activity }: { activity: PublicActivity }) {
  const meta = activityMeta[activity.type];
  const Icon = meta.icon;
  const date = new Intl.DateTimeFormat('en-CA', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${activity.date}T00:00:00Z`));

  const content = (
    <>
      <div className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background text-primary">
        <Icon className="size-[1.1rem]" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-medium text-foreground">{activity.publicTitle}</p>
          <time className="text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase" dateTime={activity.date}>
            {date}
          </time>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {meta.label} · {activity.publicSummary}
        </p>
      </div>
    </>
  );

  if (activity.visibility === 'PUBLIC' && activity.href) {
    return (
      <Link href={activity.href} className="group flex gap-4 rounded-lg border-b border-border/70 px-2 py-5 transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2">
        {content}
      </Link>
    );
  }

  return <div className="flex gap-4 border-b border-border/70 px-2 py-5">{content}</div>;
}
