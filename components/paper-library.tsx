'use client';

import { useMemo, useState } from 'react';
import type { Paper } from '@/content/types';
import { PaperCard } from './paper-card';

export function PaperLibrary({ papers }: { papers: Paper[] }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    for (const paper of papers) {
      for (const topic of paper.topics) {
        counts.set(topic, (counts.get(topic) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [papers]);

  const visiblePapers = selectedTopic
    ? papers.filter((paper) => paper.topics.includes(selectedTopic))
    : papers;

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Filter papers by topic">
        <button
          type="button"
          className="min-h-11 rounded-full border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          aria-pressed={selectedTopic === null}
          onClick={() => setSelectedTopic(null)}
        >
          All papers
        </button>
        {topics.map(([topic, count]) => (
          <button
            type="button"
            key={topic}
            className="min-h-11 rounded-full border border-border bg-card px-4 text-sm transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            aria-pressed={selectedTopic === topic}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic} <span aria-hidden="true" className="ml-1 opacity-65">{count}</span>
          </button>
        ))}
      </div>

      {visiblePapers.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visiblePapers.map((paper) => (
            <PaperCard key={paper.slug} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="paper-panel mt-10 rounded-xl p-8 text-center">
          <h2 className="font-heading text-2xl">No papers in this topic yet.</h2>
          <button type="button" className="text-link mt-4" onClick={() => setSelectedTopic(null)}>
            Clear the filter
          </button>
        </div>
      )}
    </div>
  );
}
