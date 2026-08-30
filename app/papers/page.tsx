import type { Metadata } from 'next';
import { PaperLibrary } from '@/components/paper-library';
import { papers } from '@/content/papers';

export const metadata: Metadata = {
  title: 'Papers',
  description: 'A public library of paper-reading notes by Lili Wang.',
};

export default function PapersPage() {
  return (
    <main className="page-shell">
      <header className="max-w-3xl">
        <p className="eyebrow">Knowledge archive</p>
        <h1 className="page-title mt-5">Paper Library</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A growing collection of reading notes across multi-agent learning, reinforcement learning, game theory, online learning, bandits, and robustness.
        </p>
      </header>
      <section className="mt-12" aria-label="Paper library">
        <PaperLibrary papers={papers} />
      </section>
    </main>
  );
}
