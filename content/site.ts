export const siteProfile = {
  name: 'Lili Wang',
  descriptor: 'Computer Science · AI & Machine Learning',
  introduction:
    'I study how learning, incentives, and strategic interaction shape intelligent behaviour in multi-agent environments.',
  currentFocus:
    'My current focus is on learning and behavioural dynamics in repeated multi-agent environments, with an emphasis on rigorous, interpretable research questions.',
  interests: [
    'Multi-Agent Systems',
    'Reinforcement Learning',
    'Game Theory',
    'Online Learning',
    'AI Robustness',
  ],
  links: {} as Partial<
    Record<'github' | 'linkedin' | 'scholar' | 'orcid' | 'cv', string>
  >,
} as const;
