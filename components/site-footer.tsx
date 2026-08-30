import Link from 'next/link';
import { siteProfile } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="site-container flex flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-end">
        <div>
          <p className="font-heading text-lg text-foreground">{siteProfile.name}</p>
          <p>{siteProfile.descriptor}</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} {siteProfile.name}</p>
        </div>
        <p>
          <Link href="/timeline" className="text-link">A research journey, recorded carefully.</Link>
        </p>
      </div>
    </footer>
  );
}
