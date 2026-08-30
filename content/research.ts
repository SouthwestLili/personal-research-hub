import type { ResearchDirection } from './types';

export const currentResearch = {
  title: 'Multi-Agent Learning & Strategic Interaction',
  description:
    'Exploring learning and behavioural dynamics in repeated multi-agent environments.',
};

export const researchDirections: ResearchDirection[] = [
  {
    title: 'Multi-Agent Systems',
    description:
      'How autonomous agents learn, coordinate, compete, and adapt when their decisions continually influence one another.',
    questions: ['Emergent coordination', 'Strategic adaptation'],
  },
  {
    title: 'Reinforcement Learning',
    description:
      'How sequential decision-makers can learn useful policies from interaction while balancing exploration, stability, and long-term value.',
    questions: ['Credit assignment', 'Learning dynamics'],
  },
  {
    title: 'Online Learning',
    description:
      'How algorithms make reliable decisions under uncertainty when information arrives over time and the environment may change.',
    questions: ['Regret and adaptation', 'Non-stationarity'],
  },
  {
    title: 'Game Theory',
    description:
      'How incentives and strategic structure explain the behaviour that emerges among rational or learning agents.',
    questions: ['Repeated interaction', 'Equilibrium behaviour'],
  },
  {
    title: 'AI Robustness',
    description:
      'How intelligent systems can remain dependable when environments, partners, objectives, or assumptions shift.',
    questions: ['Distribution shift', 'Reliable adaptation'],
  },
];
