import Link from 'next/link';
import { ACTIVITY_META } from './activity-item';
import type { PublicActivity } from '@/content/types';

export function ResearchTimeline({ activities }: { activities: PublicActivity[] }) {
  const sorted = [...activities].sort((a, b) => b.date.localeCompare(a.date));
  const years = sorted.reduce<Record<string, PublicActivity[]>>((groups, activity) => {
    const year = activity.date.slice(0, 4);
    groups[year] ??= [];
    groups[year].push(activity);
    return groups;
  }, {});

  return (
    <div className="space-y-14">
      {Object.entries(years)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([year, items]) => (
        <section key={year} aria-labelledby={`year-${year}`} className="grid gap-7 md:grid-cols-[7rem_1fr]">
          <h2 id={`year-${year}`} className="font-heading text-4xl text-primary md:sticky md:top-28 md:self-start">{year}</h2>
          <ol className="relative border-l border-border pl-7 sm:pl-10">
            {items.map((activity) => {
              const date = new Date(`${activity.date}T00:00:00Z`);
              const month = new Intl.DateTimeFormat('en-CA', { month: 'short', timeZone: 'UTC' }).format(date);
              const day = new Intl.DateTimeFormat('en-CA', { day: '2-digit', timeZone: 'UTC' }).format(date);
              const meta = ACTIVITY_META[activity.type];
              const Icon = meta.icon;
              const details = (
                <div className="paper-panel rounded-xl p-5 transition-colors group-hover:border-primary/40 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                    <span className="inline-flex items-center gap-2 text-primary"><Icon className="size-4" aria-hidden="true" />{meta.label}</span>
                    {activity.visibility === 'ACTIVITY_ONLY' && <span>Private content</span>}
                  </div>
                  <h3 className="mt-3 font-heading text-2xl tracking-[-0.02em]">{activity.publicTitle}</h3>
                  {activity.publicSummary && <p className="mt-2 leading-6 text-muted-foreground">{activity.publicSummary}</p>}
                </div>
              );

              return (
                <li key={activity.id} className="relative grid gap-4 pb-7 last:pb-0 sm:grid-cols-[4.5rem_1fr]">
                  <span className="absolute -left-[2.05rem] top-4 size-2.5 rounded-full border-2 border-background bg-primary sm:-left-[2.8rem]" aria-hidden="true" />
                  <time dateTime={activity.date} className="pt-3 text-sm text-muted-foreground">
                    <span className="block text-xs font-semibold tracking-[0.12em] uppercase">{month}</span>
                    <span className="font-heading text-2xl text-foreground">{day}</span>
                  </time>
                  {activity.visibility === 'PUBLIC' && activity.href ? (
                    <Link href={activity.href} className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-3">{details}</Link>
                  ) : details}
                </li>
              );
            })}
          </ol>
        </section>
        ))}
    </div>
  );
}
