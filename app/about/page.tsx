import type { Metadata } from 'next';
import { siteProfile } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Academic interests and current focus of Lili Wang.',
};

const linkLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  scholar: 'Google Scholar',
  orcid: 'ORCID',
  cv: 'Download CV',
} as const;

export default function AboutPage() {
  const links = Object.entries(siteProfile.links) as [keyof typeof linkLabels, string][];

  return (
    <main className="page-shell">
      <header className="max-w-3xl">
        <p className="eyebrow">Academic profile</p>
        <h1 className="page-title mt-5">About</h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground">{siteProfile.introduction}</p>
      </header>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        <section className="bg-card p-7 sm:p-9">
          <p className="eyebrow">Background</p>
          <h2 className="mt-4 font-heading text-3xl">Education</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Computer Science</p>
          <p className="text-muted-foreground">Artificial Intelligence &amp; Machine Learning</p>
        </section>

        <section className="bg-card p-7 sm:p-9">
          <p className="eyebrow">Areas of inquiry</p>
          <h2 className="mt-4 font-heading text-3xl">Research Interests</h2>
          <ul className="mt-5 grid gap-2 text-muted-foreground">
            {siteProfile.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </section>

        <section className="bg-card p-7 sm:p-9 md:col-span-2 md:grid md:grid-cols-[0.65fr_1.35fr] md:gap-8">
          <div>
            <p className="eyebrow">Now</p>
            <h2 className="mt-4 font-heading text-3xl">Current Focus</h2>
          </div>
          <p className="mt-5 text-lg leading-8 text-muted-foreground md:mt-0">{siteProfile.currentFocus}</p>
        </section>
      </div>

      {links.length > 0 && (
        <section className="mt-12" aria-labelledby="links-title">
          <h2 id="links-title" className="font-heading text-3xl">Academic Links</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            {links.map(([key, href]) => (
              <a key={key} href={href} className="text-link" target={key === 'cv' ? undefined : '_blank'} rel={key === 'cv' ? undefined : 'noreferrer'}>
                {linkLabels[key]}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
