import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { currentResearch } from '@/content/research';

export function CurrentResearch() {
  return (
    <section className="paper-panel relative overflow-hidden rounded-xl p-4 sm:p-8">
      <div className="absolute inset-y-0 left-0 w-1 bg-primary" aria-hidden="true" />
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <h2 className="eyebrow">Current Research</h2>
          <h3 className="mt-3 font-heading text-2xl tracking-[-0.02em] sm:mt-4 sm:text-4xl">
            {currentResearch.title}
          </h3>
          <p className="mt-4 hidden max-w-xl text-base leading-7 text-muted-foreground sm:block">
            {currentResearch.description}
          </p>
        </div>
        <Link href="/research" className="text-link hidden items-center gap-2 text-sm font-medium sm:inline-flex">
          Explore research <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
