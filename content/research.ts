import type { ResearchDirection } from './types';

export const currentResearch = {
  title: 'Game-Theoretic AI & Strategic Decision-Making',
  description:
    'My current work explores strategic interactions and sequential decision-making under uncertainty, with interests in incomplete information, behavioural modelling, and robust AI systems.',
};

export const researchDirections: ResearchDirection[] = [
  {
    title: 'Game-Theoretic AI',
    description:
      'Using game-theoretic frameworks to study how intelligent agents interact, make decisions, and respond to competing objectives.',
    questions: ['Strategic interactions', 'Decision-making under uncertainty'],
  },
  {
    title: 'Learning & Adaptation',
    description:
      'Understanding how agents learn from repeated interactions and adapt their behaviour as environments and other agents change.',
    questions: ['Sequential decision-making', 'Behavioural adaptation'],
  },
  {
    title: 'Incomplete Information',
    description:
      'Studying strategic decisions when agents have limited knowledge about other participants, the environment, or the underlying model.',
    questions: ['Uncertain agent behaviour', 'Belief and model updates'],
  },
  {
    title: 'Computational Research',
    description:
      'Developing theoretical models and computational experiments to compare behaviour across different strategic settings.',
    questions: ['Theoretical modelling', 'Computational experiments'],
  },
  {
    title: 'AI Safety & Robustness',
    description:
      'Exploring how AI systems can support reliable decisions in uncertain, changing, or adversarial environments.',
    questions: ['Adversarial settings', 'Reliable decision-making'],
  },
];
