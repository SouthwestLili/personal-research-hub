import type { Paper } from './types';

// Every record in this module has been reviewed for public release.
// Draft and private reading notes must never be added to this public project.
export const papers: Paper[] = [
  {
    slug: 'qmix-monotonic-value-function-factorisation',
    title: 'QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning',
    authors: 'Rashid et al.',
    venue: 'ICML',
    year: 2018,
    url: 'https://proceedings.mlr.press/v80/rashid18a.html',
    readingType: 'Independent Reading',
    topics: ['Multi-Agent RL', 'Reinforcement Learning'],
    summary:
      'QMIX addresses cooperative multi-agent reinforcement learning under centralised training and decentralised execution.',
    coreIdea:
      'A mixing network combines per-agent action values into a joint value while enforcing a monotonic relationship that preserves decentralised action selection.',
    method:
      'Agent networks estimate individual utilities. A state-conditioned hypernetwork generates non-negative mixing weights so the joint value remains monotonic in each agent utility.',
    keyTakeaways: [
      'Structural constraints can make a centralised value function compatible with decentralised execution.',
      'The monotonicity assumption is powerful but limits the joint value functions QMIX can represent.',
      'Training stability and representational assumptions should be evaluated separately.',
    ],
    questions: [
      'Which cooperative tasks violate the monotonicity assumption in practically important ways?',
      'How should value factorisation adapt when agents or incentives change over time?',
    ],
    myThoughts:
      'The paper is a useful example of encoding decentralised execution directly into a learnable value-function architecture.',
    connectionToResearch:
      'It connects to my interest in how learning architecture and strategic structure jointly constrain multi-agent behaviour.',
    featured: true,
  },
  {
    slug: 'counterfactual-multi-agent-policy-gradients',
    title: 'Counterfactual Multi-Agent Policy Gradients',
    authors: 'Foerster et al.',
    venue: 'AAAI',
    year: 2018,
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/11794',
    readingType: 'Group Reading',
    topics: ['Multi-Agent RL', 'Reinforcement Learning'],
    summary:
      'COMA introduces a counterfactual baseline for assigning credit to individual agents in cooperative multi-agent policy-gradient learning.',
    coreIdea:
      'Compare an agent’s chosen action with alternative actions while holding other agents’ actions fixed.',
    method:
      'A centralised critic estimates joint action values and produces a per-agent advantage through a counterfactual baseline.',
    keyTakeaways: [
      'Credit assignment is central to cooperative learning.',
      'A centralised critic can support decentralised policies without being used at execution time.',
    ],
    questions: ['How robust is the counterfactual baseline under partial observability?'],
    myThoughts:
      'COMA makes the relationship between global outcomes and individual responsibility especially clear.',
    connectionToResearch:
      'It informs questions about individual adaptation inside collectively generated behaviour.',
    featured: true,
  },
  {
    slug: 'prediction-learning-and-games',
    title: 'Prediction, Learning, and Games',
    authors: 'Cesa-Bianchi and Lugosi',
    venue: 'Cambridge University Press',
    year: 2006,
    url: 'https://www.cambridge.org/core/books/prediction-learning-and-games/9DCB5B3B45CE48B7529E54576C55D393',
    readingType: 'Independent Reading',
    topics: ['Online Learning', 'Game Theory', 'Bandits'],
    summary:
      'A foundational treatment of sequential prediction, regret, and the links between online learning and repeated games.',
    coreIdea:
      'Performance can be evaluated against a comparator through regret, without assuming a fixed probabilistic environment.',
    method:
      'The text develops prediction strategies, exponential weighting, minimax analysis, and partial-information extensions.',
    keyTakeaways: [
      'Regret offers a robust language for sequential decision quality.',
      'Learning guarantees and game-theoretic outcomes are deeply connected.',
    ],
    questions: ['Which regret notions best capture adaptation in strategic, non-stationary environments?'],
    myThoughts:
      'The comparator perspective helps separate what an algorithm controls from what the environment determines.',
    connectionToResearch:
      'It provides theoretical tools for studying repeated multi-agent interaction and behavioural change.',
  },
  {
    slug: 'robust-adversarial-reinforcement-learning',
    title: 'Robust Adversarial Reinforcement Learning',
    authors: 'Pinto et al.',
    venue: 'ICML',
    year: 2017,
    url: 'https://proceedings.mlr.press/v70/pinto17a.html',
    readingType: 'Independent Reading',
    topics: ['AI Robustness', 'Reinforcement Learning', 'Game Theory'],
    summary:
      'This paper frames robust policy learning as a two-player game between a protagonist and an adversary that applies disturbances.',
    coreIdea:
      'Training against a learned adversary can expose weaknesses and improve policy robustness to model mismatch.',
    featured: false,
  },
];
