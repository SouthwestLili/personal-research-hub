import { ArrowRight, Orbit } from 'lucide-react';
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
      <section className="site-container grid min-h-[34rem] items-center gap-12 py-16 lg:grid-cols-[1.18fr_0.82fr] lg:py-24">
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

        <aside className="paper-panel relative rounded-xl p-7 sm:p-9" aria-label="Journal purpose">
          <Orbit className="size-9 text-primary" aria-hidden="true" />
          <p className="mt-8 font-heading text-2xl leading-snug">
            A living record of questions, readings, conversations, and research growth.
          </p>
          <div className="mt-8 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
            <p>Research activity is visible.</p>
            <p>Confidential research stays private.</p>
          </div>
        </aside>
      </section>

      <div className="site-container">
        <CurrentResearch />
      </div>

      <section className="page-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr]">
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
