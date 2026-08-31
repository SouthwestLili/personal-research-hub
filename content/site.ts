export const siteProfile = {
  name: 'Lili Wang',
  descriptor: 'Computer Science @ Carleton University',
  introduction:
    'I study strategic interactions and sequential decision-making under uncertainty using game-theoretic and computational approaches.',
  currentFocus:
    'My current research explores game-theoretic modelling, behavioural adaptation, incomplete information, and robust decision-making in multi-agent and AI systems.',
  interests: [
    'Game Theory',
    'Multi-Agent Systems',
    'Sequential Decision-Making',
    'AI Safety',
    'Computational Modelling',
  ],
  links: {
    github: 'https://github.com/SouthwestLili',
    linkedin: 'https://www.linkedin.com/in/southwestlili/',
  } as Partial<
    Record<'github' | 'linkedin' | 'scholar' | 'orcid' | 'cv', string>
  >,
} as const;
