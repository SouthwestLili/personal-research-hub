export const siteProfile = {
  name: 'Lili Wang',
  descriptor: 'Computer Science · AI & Machine Learning · Student @ Carleton University',
  introduction:
    'I study learning and strategic interaction in repeated multi-agent environments, with a focus on Bayesian Stackelberg games, boundedly rational behaviour, and decision-making under bandit feedback.',
  currentFocus:
    'My current research examines repeated Bayesian Stackelberg games in which a leader learns to act against a follower of unknown type whose behaviour changes with interaction history. I am particularly interested in frequency-dependent utilities, quantal response, Bayesian belief updating, and bandit algorithms for environments whose state evolution is influenced by the learner’s own policy.',
  interests: [
    'Bayesian Stackelberg Games',
    'Online & Bandit Learning',
    'Multi-Agent Systems',
    'Behavioural Game Theory',
    'Learning in Security Games',
  ],
  links: {
    github: 'https://github.com/SouthwestLili',
    linkedin: 'https://www.linkedin.com/in/southwestlili/',
  } as Partial<
    Record<'github' | 'linkedin' | 'scholar' | 'orcid' | 'cv', string>
  >,
} as const;
