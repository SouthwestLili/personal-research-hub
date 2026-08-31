import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { currentResearch, researchDirections } from '@/content/research';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research interests and current academic focus of Lili Wang.',
};

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <header className="max-w-3xl">
        <p className="eyebrow">Research</p>
        <h1 className="page-title mt-5">Questions that connect learning and strategic behaviour.</h1>
        <p className="mt-7 text-lg leading-8 text-muted-foreground">
          My work is guided by a broad question: what happens when intelligent agents learn while adapting to one another? I approach this through the complementary lenses of machine learning, online decision-making, and game theory.
        </p>
      </header>

      <section className="mt-16 border-y border-border" aria-labelledby="directions-title">
        <h2 id="directions-title" className="sr-only">Research directions</h2>
        {researchDirections.map((direction, index) => (
          <article key={direction.title} className="grid gap-5 border-b border-border py-8 last:border-b-0 md:grid-cols-[4rem_0.85fr_1.15fr] md:gap-8 md:py-10">
            <span className="font-heading text-2xl text-primary/70">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="font-heading text-2xl tracking-[-0.02em] sm:text-3xl">{direction.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {direction.questions.map((question) => (
                  <li key={question} className="flex items-center gap-2">
                    <ArrowDownRight className="size-4 text-primary" aria-hidden="true" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
            <p className="max-w-xl leading-7 text-muted-foreground">{direction.description}</p>
          </article>
        ))}
      </section>

      <section className="paper-panel mt-16 grid gap-8 rounded-xl p-7 sm:p-10 md:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">Current Focus</p>
          <h2 className="mt-4 font-heading text-3xl">{currentResearch.title}</h2>
        </div>
        <p className="text-lg leading-8 text-muted-foreground">{currentResearch.description}</p>
      </section>
    </main>
  );
}
