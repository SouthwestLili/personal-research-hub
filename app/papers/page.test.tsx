import { render, screen } from '@testing-library/react';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { expect, it } from 'vitest';
import { papers } from '@/content/papers';
import PapersPage from './page';

it('wires the reviewed public dataset into the paper library', () => {
  render(<PapersPage />);

  expect(screen.getByRole('heading', { name: 'Paper Library' })).toBeInTheDocument();
  expect(screen.getAllByTestId('paper-card')).toHaveLength(22);
});

it('keeps paper slugs unique and local PDF links valid', () => {
  expect(new Set(papers.map((paper) => paper.slug)).size).toBe(papers.length);

  for (const paper of papers) {
    if (!paper.pdfUrl) continue;
    expect(
      existsSync(path.join(process.cwd(), 'public', paper.pdfUrl)),
      `Missing local PDF for ${paper.slug}`,
    ).toBe(true);
  }
});
