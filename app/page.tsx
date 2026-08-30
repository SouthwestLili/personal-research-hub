import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ActivityItem } from '@/components/activity-item';
import { CurrentResearch } from '@/components/current-research';
import { PaperCard } from '@/components/paper-card';
import { papers } from '@/content/papers';
import { siteProfile } from '@/content/site';
import { getPublicActivities } from '@/lib/public-content';

export default function HomePage() {
  const recentActivities = getPublicActivities().slice(0, 4);
  const featuredPapers = papers.filter((paper) => paper.featured).slice(0, 2);

  return (
    <main>
      <section className="site-container grid items-start gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="eyebrow">Personal Research Hub</p>
          <h1 className="display-title mt-6">{siteProfile.name}</h1>
          <p className="mt-5 text-lg font-medium text-primary sm:text-xl">
            {siteProfile.descriptor}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {siteProfile.introduction}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Research interests">
            {siteProfile.interests.slice(0, 4).map((interest) => (
              <li key={interest} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-4" aria-label="Current research and latest activity">
          <CurrentResearch />
          <div className="paper-panel rounded-xl px-5">
            <p className="eyebrow pt-5">Latest Activity</p>
            <ActivityItem activity={recentActivities[0]} />
          </div>
        </aside>
      </section>

      <section className="site-container grid gap-12 pb-16 pt-8 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Research journal</p>
              <h2 className="section-title mt-3">Recent Activities</h2>
            </div>
            <Link href="/timeline" className="text-link hidden items-center gap-2 text-sm sm:inline-flex">
              Full timeline <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-7">
            {recentActivities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        <div>
          <div>
            <p className="eyebrow">Knowledge archive</p>
            <h2 className="section-title mt-3">Featured Papers</h2>
          </div>
          <div className="mt-7 grid gap-5">
            {featuredPapers.map((paper) => (
              <PaperCard key={paper.slug} paper={paper} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
