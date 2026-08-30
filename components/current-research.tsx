import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { currentResearch } from '@/content/research';

export function CurrentResearch() {
  return (
    <section className="paper-panel relative overflow-hidden rounded-xl p-6 sm:p-8">
      <div className="absolute inset-y-0 left-0 w-1 bg-primary" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <h2 className="eyebrow">Current Research</h2>
          <h3 className="mt-4 font-heading text-3xl tracking-[-0.02em] sm:text-4xl">
            {currentResearch.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            {currentResearch.description}
          </p>
        </div>
        <Link href="/research" className="text-link inline-flex items-center gap-2 text-sm font-medium">
          Explore research <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
