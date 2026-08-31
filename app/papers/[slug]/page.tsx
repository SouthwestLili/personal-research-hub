import type { Metadata } from 'next';
import { Download, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PaperNoteSection } from '@/components/paper-note-section';
import { getPaperBySlug } from '@/lib/public-content';

type PaperPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: 'Paper note not found' };
  return { title: paper.title, description: paper.summary };
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  return (
    <main className="page-shell">
      <article className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-reading">
          <p className="eyebrow">{paper.readingType} · {paper.year}</p>
          <h1 className="page-title mt-5 text-balance">{paper.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{paper.authors} · {paper.venue}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {paper.topics.map((topic) => (
              <span key={topic} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">{topic}</span>
            ))}
          </div>
        </header>

        <div
          data-testid="paper-detail-layout"
          className={paper.pdfUrl
            ? 'mt-12 grid items-start gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]'
            : 'mx-auto mt-12 max-w-reading'}
        >
          {paper.pdfUrl ? (
          <section
            data-testid="paper-reader"
            className="paper-panel rounded-xl p-5 sm:p-7 xl:sticky xl:top-28 xl:self-start"
            aria-labelledby="paper-pdf-title"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Full text</p>
                <h2 id="paper-pdf-title" className="mt-2 font-heading text-2xl">Read the Paper</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-2">
                  View PDF <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <a href={paper.pdfUrl} download className="text-link inline-flex items-center gap-2">
                  Download PDF <Download className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground lg:hidden">
              Use View PDF or Download PDF to read the full paper on this device.
            </p>
            <iframe
              title="Embedded paper PDF"
              src={paper.pdfUrl}
              className="mt-6 hidden h-[calc(100vh-14rem)] min-h-[640px] w-full rounded-lg border border-border bg-background lg:block"
            />
          </section>
          ) : null}

          <div data-testid="paper-notes" className="paper-panel rounded-xl p-6 sm:p-10">
            <PaperNoteSection title="Paper Information">
              <dl className="grid gap-4 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-wider">Authors</dt><dd>{paper.authors}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider">Venue</dt><dd>{paper.venue} · {paper.year}</dd></div>
              </dl>
              <a href={paper.url} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-2">
                Open official paper <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </PaperNoteSection>
            <PaperNoteSection title="Summary"><p>{paper.summary}</p></PaperNoteSection>
            {paper.coreIdea && <PaperNoteSection title="Core Idea"><p>{paper.coreIdea}</p></PaperNoteSection>}
            {paper.method && <PaperNoteSection title="Method"><p>{paper.method}</p></PaperNoteSection>}
            {paper.keyTakeaways?.length ? (
              <PaperNoteSection title="Key Takeaways"><ul className="list-disc space-y-3 pl-5">{paper.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul></PaperNoteSection>
            ) : null}
            {paper.questions?.length ? (
              <PaperNoteSection title="Questions"><ul className="list-disc space-y-3 pl-5">{paper.questions.map((item) => <li key={item}>{item}</li>)}</ul></PaperNoteSection>
            ) : null}
            {paper.myThoughts && <PaperNoteSection title="My Thoughts"><p>{paper.myThoughts}</p></PaperNoteSection>}
            {paper.connectionToResearch && <PaperNoteSection title="Connection to My Research"><p>{paper.connectionToResearch}</p></PaperNoteSection>}
          </div>
        </div>
      </article>
    </main>
  );
}
