import { ArrowUpRight, BookMarked } from 'lucide-react';
import Link from 'next/link';
import type { Paper } from '@/content/types';

export function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article data-testid="paper-card" className="paper-panel group flex h-full flex-col rounded-xl p-6 transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        <span className="inline-flex items-center gap-2">
          <BookMarked className="size-4 text-primary" aria-hidden="true" />
          {paper.readingType}
        </span>
        <span>{paper.year}</span>
      </div>
      <h3 className="mt-5 font-heading text-2xl leading-tight tracking-[-0.02em]">
        <Link href={`/papers/${paper.slug}`} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3">
          {paper.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">{paper.authors} · {paper.venue}</p>
      <p className="mt-5 flex-1 text-sm leading-6 text-muted-foreground">{paper.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/80 pt-4">
        <span className="text-xs text-muted-foreground">{paper.topics[0]}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read notes <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
