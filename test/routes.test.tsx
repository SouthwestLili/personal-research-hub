import { render, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutPage from '@/app/about/page';
import HomePage from '@/app/page';
import PapersPage from '@/app/papers/page';
import ResearchPage from '@/app/research/page';
import TimelinePage from '@/app/timeline/page';

const routes: [string, () => React.JSX.Element][] = [
  ['Home', HomePage],
  ['Research', ResearchPage],
  ['Papers', PapersPage],
  ['Timeline', TimelinePage],
  ['About', AboutPage],
];

describe('public route landmarks', () => {
  for (const [name, Page] of routes) {
    it(`${name} has one main landmark and one level-one heading`, () => {
      const { container } = render(<Page />);
      expect(container.querySelectorAll('main')).toHaveLength(1);
      expect(container.querySelectorAll('h1')).toHaveLength(1);
      for (const link of within(container).queryAllByRole('link')) {
        expect(link).toHaveAccessibleName();
      }
      for (const button of within(container).queryAllByRole('button')) {
        expect(button).toHaveAccessibleName();
      }
    });
  }
});
