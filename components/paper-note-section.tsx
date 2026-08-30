import type { ReactNode } from 'react';

export function PaperNoteSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-9 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-2xl tracking-[-0.02em]">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}
