import type { Paper } from './types';

// Every record in this module has been reviewed for public release.
// Draft and private reading notes must never be added to this public project.
export const papers: Paper[] = [
  {
    slug: 'bayesian-stackelberg-markov-games-moving-target-defense',
    title: 'Multi-agent Reinforcement Learning in Bayesian Stackelberg Markov Games for Adaptive Moving Target Defense',
    authors: 'Sailik Sengupta and Subbarao Kambhampati',
    venue: 'arXiv preprint',
    year: 2020,
    url: 'https://arxiv.org/abs/2007.10457',
    pdfUrl: '/papers/bsmg-moving-target-defense.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Reinforcement Learning', 'AI Security'],
    summary:
      'This paper models adaptive moving target defense as a Bayesian Stackelberg Markov game with incomplete information about strategic attackers.',
    coreIdea:
      'Combine a sequential leader-follower security model with multi-agent reinforcement learning so a defender can learn movement policies without a complete reward or transition model.',
    method:
      'The authors introduce Bayesian Strong Stackelberg Q-learning and study its convergence to a Strong Stackelberg Equilibrium in the proposed game model.',
    keyTakeaways: [
      'Sequential security decisions require both strategic reasoning and adaptation over time.',
      'Incomplete information about attacker types can materially change defensive policies.',
      'Game-theoretic structure can be incorporated into reinforcement-learning algorithms.',
    ],
    questions: [
      'How sensitive are learned defense policies to inaccurate assumptions about attacker types?',
      'How does the approach scale as the number of system configurations and attacker models grows?',
    ],
    connectionToResearch:
      'The paper connects game-theoretic modelling, sequential learning, incomplete information, and AI security.',
    featured: true,
  },
  {
    slug: 'markovian-persuasion',
    title: 'Markovian Persuasion',
    authors: 'Ehud Lehrer and Dimitry Shaiderman',
    venue: 'arXiv preprint',
    year: 2021,
    url: 'https://arxiv.org/abs/2111.14365',
    pdfUrl: '/papers/markovian-persuasion.pdf',
    readingType: 'Independent Reading',
    topics: ['Bayesian Persuasion', 'Game Theory', 'Sequential Decision-Making'],
    summary:
      'This paper studies Bayesian persuasion when the state of nature evolves according to a Markov process.',
    coreIdea:
      'An informed sender must balance immediate gains from information disclosure against the effect of current signals on future receiver beliefs and payoffs.',
    method:
      'The paper analyses optimal disclosure strategies under different discount factors and characterises conditions for attaining the maximal asymptotic value.',
    keyTakeaways: [
      'Information disclosure has intertemporal consequences in dynamic environments.',
      'Belief evolution depends jointly on signalling and the underlying Markov transition law.',
      'Optimal persuasion may require sacrificing short-term payoff to influence future beliefs.',
    ],
    questions: [
      'How do optimal policies change when state transitions are only partially known?',
      'What happens when the receiver also learns or adapts strategically over time?',
    ],
    connectionToResearch:
      'The paper provides a dynamic perspective on strategic information, belief updates, and sequential interaction.',
  },
  {
    slug: 'imitative-follower-deception-stackelberg-games',
    title: 'Imitative Follower Deception in Stackelberg Games',
    authors: 'Jiarui Gan, Haifeng Xu, Qingyu Guo, Long Tran-Thanh, Zinovi Rabinovich, and Michael Wooldridge',
    venue: 'ACM EC',
    year: 2019,
    url: 'https://doi.org/10.1145/3328526.3329629',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Deception', 'Algorithmic Game Theory'],
    summary:
      'This paper examines how a strategic follower can imitate another type and manipulate a leader that is learning from observed responses.',
    coreIdea:
      'Follower behaviour should not automatically be treated as truthful evidence about underlying preferences or payoffs.',
    method:
      'The authors formalise imitative follower deception, analyse the computational complexity of optimal leader policies, and evaluate deception-aware strategies in simulation.',
    keyTakeaways: [
      'Information asymmetry can create incentives for strategic misrepresentation.',
      'Learning a follower model is harder when observations are deliberately manipulated.',
      'Deception-aware policies can reduce the leader’s loss, but may be computationally difficult to obtain.',
    ],
    questions: [
      'Which observable signals help distinguish genuine behaviour from imitation?',
      'How can deception-aware policies remain effective when the follower type space is incomplete?',
    ],
    connectionToResearch:
      'The paper motivates robust strategic learning under incomplete and potentially manipulated information.',
    featured: true,
  },
  {
    slug: 'learning-bayesian-stackelberg-games-unknown-follower-types',
    title: 'Learning in Bayesian Stackelberg Games With Unknown Follower’s Types',
    authors: 'Matteo Bollini, Francesco Bacchiocchi, Samuel Coutts, Matteo Castiglioni, and Alberto Marchesi',
    venue: 'arXiv preprint',
    year: 2026,
    url: 'https://arxiv.org/abs/2602.00771',
    pdfUrl: '/papers/learning-bsg-unknown-types.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Online Learning', 'Incomplete Information'],
    summary:
      'This paper studies online learning in Bayesian Stackelberg games when the leader initially knows neither follower payoffs nor the distribution over follower types.',
    coreIdea:
      'The feedback available to the leader determines whether meaningful learning guarantees are possible when follower types are unknown.',
    method:
      'The paper proves a negative result under action-only feedback and develops a no-regret epoch-based algorithm when follower types are revealed.',
    keyTakeaways: [
      'Action feedback alone can be insufficient for efficient no-regret learning.',
      'Type feedback makes it possible to learn relevant response regions over time.',
      'Unknown payoff structures create challenges beyond learning an unknown type distribution.',
    ],
    questions: [
      'What additional structure could make action-only feedback learnable?',
      'How robust is the method when types or payoffs evolve over time?',
    ],
    connectionToResearch:
      'The paper directly connects online learning, incomplete information, and strategic decision-making.',
    featured: true,
  },
  {
    slug: 'decoding-imitation-security-game',
    title: 'Decoding the Imitation Security Game: Handling Attacker Imitative Behavior Deception',
    authors: 'Thanh H. Nguyen, Nam Vu, Amulya Yadav, and Uy Nguyen',
    venue: 'ECAI',
    year: 2020,
    url: 'https://doi.org/10.3233/FAIA200091',
    pdfUrl: '/papers/decoding-imitation-security-game.pdf',
    readingType: 'Independent Reading',
    topics: ['Security Games', 'Deception', 'AI Security'],
    summary:
      'This paper studies attackers that manipulate historical data by imitating a behavioural model, causing a defender to learn an ineffective strategy.',
    coreIdea:
      'A defender should explicitly account for strategic deception when converting a learned attacker model into a defense policy.',
    method:
      'The authors formulate attacker deception as an optimisation problem and propose a game-theoretic counter-deception algorithm for selecting defense strategies.',
    keyTakeaways: [
      'Historical attack data may be strategically generated rather than passively observed.',
      'Ignoring deception can cause substantial defender losses.',
      'Counter-deception policies can reduce the impact of manipulated learning data.',
    ],
    questions: [
      'How can counter-deception methods operate when several attackers adapt simultaneously?',
      'Which behavioural assumptions are most important for reliable defense planning?',
    ],
    connectionToResearch:
      'The paper illustrates the interaction between behavioural modelling, adversarial learning, and robust defense.',
  },
  {
    slug: 'manipulating-learning-defender',
    title: 'Manipulating a Learning Defender and Ways to Counteract',
    authors: 'Jiarui Gan, Qingyu Guo, Long Tran-Thanh, Bo An, and Michael Wooldridge',
    venue: 'NeurIPS',
    year: 2019,
    url: '/papers/manipulating-learning-defender.pdf',
    pdfUrl: '/papers/manipulating-learning-defender.pdf',
    readingType: 'Independent Reading',
    topics: ['Security Games', 'Adversarial Learning', 'Deception'],
    summary:
      'This paper shows how an attacker can manipulate a defender that learns payoff information from observed best responses.',
    coreIdea:
      'A defender can counter manipulation by committing to a higher-level policy that maps learned information to strategy commitments.',
    method:
      'The authors provide a polynomial-time optimisation method for a finite setting and a heuristic that also applies when the attacker payoff space is infinite or unknown.',
    keyTakeaways: [
      'Learning algorithms can create a new attack surface when opponents control the observations.',
      'Naive learning may collapse to a maximin outcome under strategic manipulation.',
      'Policy commitment can improve defender utility when attacker manipulation is anticipated.',
    ],
    questions: [
      'How can manipulation be detected before it significantly changes the learned policy?',
      'What policy classes balance protection, computational cost, and interpretability?',
    ],
    connectionToResearch:
      'The paper connects strategic manipulation, robust learning, and security decision-making.',
  },
  {
    slug: 'partial-adversarial-behavior-deception-security-games',
    title: 'Partial Adversarial Behavior Deception in Security Games',
    authors: 'Thanh H. Nguyen, Arunesh Sinha, and He He',
    venue: 'Conference paper',
    year: 2021,
    url: '/papers/partial-adversarial-behavior-deception.pdf',
    pdfUrl: '/papers/partial-adversarial-behavior-deception.pdf',
    readingType: 'Independent Reading',
    topics: ['Security Games', 'Behavioral Modelling', 'Adversarial Learning'],
    summary:
      'This paper considers a population of attackers in which only part of the observed behaviour is controlled by a deceptive adversary.',
    coreIdea:
      'Even limited control over training data can distort a learned attacker model and reduce the effectiveness of a defender’s strategy.',
    method:
      'The paper introduces a partial behavior deception model and the GAMBO gradient-based algorithm for computing deceptive attack strategies.',
    keyTakeaways: [
      'A single deceptive participant can influence a model learned from a broader population.',
      'Partial manipulation can produce meaningful attacker gains and defender losses.',
      'Security learning systems need safeguards against strategically contaminated data.',
    ],
    questions: [
      'How much deceptive data is required before a defender’s model becomes unreliable?',
      'Can robust estimation reduce the impact of partial behavioural manipulation?',
    ],
    connectionToResearch:
      'The paper connects behavioural modelling, data manipulation, and robust strategic decision-making.',
  },
];
