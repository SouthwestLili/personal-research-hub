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
  {
    slug: 'online-bayesian-persuasion-without-a-clue',
    title: 'Online Bayesian Persuasion Without a Clue',
    authors: 'Francesco Bacchiocchi, Matteo Bollini, Matteo Castiglioni, Alberto Marchesi, and Nicola Gatti',
    venue: 'NeurIPS',
    year: 2024,
    url: 'https://arxiv.org/abs/2411.06141',
    pdfUrl: '/papers/online-bayesian-persuasion-without-clue.pdf',
    readingType: 'Independent Reading',
    topics: ['Bayesian Persuasion', 'Online Learning', 'Incomplete Information'],
    summary:
      'This paper studies repeated Bayesian persuasion when the sender knows neither the prior over states nor the receiver’s utilities.',
    coreIdea:
      'A sender can learn effective signaling schemes from receiver responses even without an initial model of the surrounding environment.',
    method:
      'The authors develop an explore-then-commit algorithm over a non-standard representation of signaling schemes and prove matching regret and sample-complexity bounds.',
    keyTakeaways: [
      'Strategic information design can be learned under severe model uncertainty.',
      'Receiver best-response feedback can reveal useful structure about unknown preferences.',
      'The representation of signaling schemes is central to obtaining tight learning guarantees.',
    ],
    questions: [
      'How robust is the method when receiver behavior is noisy rather than exactly optimal?',
      'Can the approach adapt when the prior or receiver utilities change over time?',
    ],
  },
  {
    slug: 'bayesian-persuasion-with-externalities',
    title: 'Bayesian Persuasion with Externalities: Exploiting Agent Types',
    authors: 'Jonathan Shaki, Jiarui Gan, and Sarit Kraus',
    venue: 'AAAI',
    year: 2025,
    url: 'https://arxiv.org/abs/2412.12859',
    pdfUrl: '/papers/bayesian-persuasion-externalities.pdf',
    readingType: 'Independent Reading',
    topics: ['Bayesian Persuasion', 'Externalities', 'Multi-Agent Systems'],
    summary:
      'This paper examines how a principal can inform and coordinate multiple agents whose utilities depend on one another’s actions.',
    coreIdea:
      'Grouping agents into a small number of types provides a compact structure for persuasion problems that also involve coordination externalities.',
    method:
      'The paper characterizes public, private, and semi-private signaling schemes, gives linear-program formulations, and establishes tractability and hardness results.',
    keyTakeaways: [
      'Persuasion with externalities combines information disclosure and action coordination.',
      'Agent types can make otherwise exponential joint-action descriptions manageable.',
      'Optimal computation is polynomial in bounded-deviation settings but becomes NP-hard more generally.',
    ],
    questions: [
      'How sensitive are optimal signals to errors in the assumed agent-type model?',
      'What approximation methods work well when many agents may deviate?',
    ],
  },
  {
    slug: 'online-bayesian-persuasion',
    title: 'Online Bayesian Persuasion',
    authors: 'Matteo Castiglioni, Andrea Celli, Alberto Marchesi, and Nicola Gatti',
    venue: 'NeurIPS',
    year: 2020,
    url: '/papers/online-bayesian-persuasion.pdf',
    pdfUrl: '/papers/online-bayesian-persuasion.pdf',
    readingType: 'Independent Reading',
    topics: ['Bayesian Persuasion', 'Online Learning', 'No-Regret Learning'],
    summary:
      'This paper studies repeated persuasion against receivers whose unknown types may be selected adversarially over time.',
    coreIdea:
      'The sender can compete with the best fixed signaling scheme in hindsight despite uncertainty about the receiver’s utility function.',
    method:
      'The authors establish a computational hardness result and design no-regret algorithms for full-information and partial-feedback settings.',
    keyTakeaways: [
      'Unknown receiver types turn persuasion into an online learning problem.',
      'Sublinear regret is possible under both rich and limited feedback.',
      'Statistical learnability does not automatically imply efficient per-round computation.',
    ],
    questions: [
      'Which structural assumptions could make the no-regret algorithms computationally efficient?',
      'How would strategic or boundedly rational receivers change the feedback model?',
    ],
  },
  {
    slug: 'inverse-game-theory-bounded-rationality',
    title: 'Inverse Game Theory for Stackelberg Games: The Blessing of Bounded Rationality',
    authors: 'Jibang Wu, Weiran Shen, Fei Fang, and Haifeng Xu',
    venue: 'NeurIPS',
    year: 2022,
    url: 'https://arxiv.org/abs/2210.01380',
    pdfUrl: '/papers/inverse-game-theory-bounded-rationality.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Inverse Game Theory', 'Bounded Rationality'],
    summary:
      'This paper studies how a leader can infer unknown follower utilities from observed behavior in Stackelberg games.',
    coreIdea:
      'Quantal-response behavior can reveal more information than perfectly rational best responses because every action may be observed with positive probability.',
    method:
      'The authors derive learning guarantees under quantal response and support the theory with experiments on synthetic games and model misspecification.',
    keyTakeaways: [
      'Bounded rationality can improve identifiability in inverse strategic problems.',
      'Smooth behavioral responses provide richer information about latent utilities.',
      'Behavioral assumptions affect both prediction quality and sample efficiency.',
    ],
    questions: [
      'How can the rationality parameter be estimated jointly with follower utilities?',
      'Do the benefits persist under non-logit behavioral models?',
    ],
  },
  {
    slug: 'quantal-stackelberg-equilibrium-strategic-feedback',
    title: 'Actions Speak What You Want: Provably Sample-Efficient Reinforcement Learning of the Quantal Stackelberg Equilibrium from Strategic Feedbacks',
    authors: 'Siyu Chen, Mengdi Wang, and Zhuoran Yang',
    venue: 'arXiv preprint',
    year: 2023,
    url: 'https://arxiv.org/abs/2307.14085',
    pdfUrl: '/papers/qse-strategic-feedback.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Reinforcement Learning', 'Quantal Response'],
    summary:
      'This paper considers learning a quantal Stackelberg equilibrium in episodic leader-follower Markov games from follower actions.',
    coreIdea:
      'A leader can infer an unobserved follower response model from strategic feedback and use its uncertainty when optimizing a policy.',
    method:
      'The proposed online and offline algorithms combine maximum-likelihood estimation of quantal response with model-free or model-based reinforcement learning.',
    keyTakeaways: [
      'Follower actions can provide enough feedback to learn strategic response models.',
      'Uncertainty-aware optimism and pessimism support online and offline learning guarantees.',
      'The framework handles both myopic and farsighted followers.',
    ],
    questions: [
      'How robust are the guarantees when follower behavior changes across episodes?',
      'Can the algorithms scale to large policy classes without strong function-approximation assumptions?',
    ],
  },
  {
    slug: 'nested-quantal-response-security-games',
    title: 'Choices Are Not Independent: Stackelberg Security Games with Nested Quantal Response Models',
    authors: 'Tien Mai and Arunesh Sinha',
    venue: 'AAAI',
    year: 2022,
    url: '/papers/nested-quantal-response-security-games.pdf',
    pdfUrl: '/papers/nested-quantal-response-security-games.pdf',
    readingType: 'Independent Reading',
    topics: ['Security Games', 'Quantal Response', 'Behavioral Modelling'],
    summary:
      'This paper extends quantal-response security games to represent correlations among an attacker’s choices through a nested decision model.',
    coreIdea:
      'Attack alternatives may be selected hierarchically and correlated, making the independence assumption of standard quantal response unrealistic.',
    method:
      'The authors decompose the equilibrium problem into nested subproblems and solve a discretized dynamic program with tractable approximation guarantees.',
    keyTakeaways: [
      'Behavioral choice structure can materially affect security-game strategies.',
      'Nested logit models capture correlations that multinomial logit omits.',
      'The proposed decomposition supports scalable and parallel computation.',
    ],
    questions: [
      'How can nests be learned from observed attack behavior?',
      'What happens when the nested choice structure changes over time?',
    ],
  },
  {
    slug: 'combinatorial-bandit-general-reward-functions',
    title: 'Combinatorial Multi-Armed Bandit with General Reward Functions',
    authors: 'Wei Chen, Wei Hu, Fu Li, Jian Li, Yu Liu, and Pinyan Lu',
    venue: 'NeurIPS',
    year: 2016,
    url: 'https://arxiv.org/abs/1610.06603',
    pdfUrl: '/papers/combinatorial-bandit-general-rewards.pdf',
    readingType: 'Independent Reading',
    topics: ['Multi-Armed Bandits', 'Combinatorial Optimization', 'Online Learning'],
    summary:
      'This paper generalizes combinatorial bandits to nonlinear rewards that may depend on complete outcome distributions rather than only their means.',
    coreIdea:
      'Learning distributional confidence bounds enables online optimization when mean estimates are insufficient for evaluating a reward function.',
    method:
      'The authors introduce the stochastically dominant confidence bound algorithm and analyze it for general rewards, K-MAX, and expected-utility maximization.',
    keyTakeaways: [
      'Nonlinear rewards may require learning distributions instead of expected values.',
      'Stochastic dominance provides an optimistic principle for distribution-dependent objectives.',
      'The framework gives logarithmic distribution-dependent and square-root distribution-independent regret.',
    ],
    questions: [
      'How does distribution estimation scale with many base arms?',
      'Can the method accommodate dependence among arm outcomes?',
    ],
  },
  {
    slug: 'contextual-bandits-large-action-spaces',
    title: 'Contextual Bandits with Large Action Spaces: Made Practical',
    authors: 'Yinglun Zhu, Dylan J. Foster, John Langford, and Paul Mineiro',
    venue: 'arXiv preprint',
    year: 2022,
    url: 'https://arxiv.org/abs/2207.05836',
    pdfUrl: '/papers/contextual-bandits-large-action-spaces.pdf',
    readingType: 'Independent Reading',
    topics: ['Contextual Bandits', 'Large Action Spaces', 'Online Learning'],
    summary:
      'This paper develops practical contextual-bandit algorithms for large or continuous linearly structured action spaces.',
    coreIdea:
      'Regression and action-optimization oracles can avoid enumerating every action while preserving statistical guarantees.',
    method:
      'The authors propose SpannerIGW and a faster SpannerGreedy variant, derive action-space-independent guarantees, and evaluate them at scale.',
    keyTakeaways: [
      'Large action spaces need not imply runtime or memory linear in the number of actions.',
      'Oracle-based design supports flexible reward models and efficient exploration.',
      'Practical variants trade stronger regret guarantees for faster execution.',
    ],
    questions: [
      'How sensitive is performance to approximate action-optimization oracles?',
      'Can the approach handle action spaces without a known linear embedding?',
    ],
  },
  {
    slug: 'restless-bandits-global-rewards',
    title: 'Global Rewards in Restless Multi-Armed Bandits',
    authors: 'Naveen Raman, Zheyuan Ryan Shi, and Fei Fang',
    venue: 'arXiv preprint',
    year: 2024,
    url: 'https://arxiv.org/abs/2406.00738',
    pdfUrl: '/papers/restless-bandits-global-rewards.pdf',
    readingType: 'Independent Reading',
    topics: ['Restless Bandits', 'Resource Allocation', 'Global Rewards'],
    summary:
      'This paper extends restless multi-armed bandits to objectives with global, non-separable rewards across selected arms.',
    coreIdea:
      'Resource-allocation rewards may depend on the joint set of activated arms, so per-arm Whittle indices require new global approximations.',
    method:
      'The authors develop Linear- and Shapley-Whittle indices plus adaptive greedy and Monte Carlo tree-search policies, with theory and experiments.',
    keyTakeaways: [
      'Reward separability can be unrealistic in social-impact allocation problems.',
      'Index approximations work best for near-linear global rewards.',
      'Adaptive search improves decisions when reward interactions are highly nonlinear.',
    ],
    questions: [
      'How can global-reward policies remain efficient with very large arm populations?',
      'Can uncertainty in transition models be integrated into the adaptive policies?',
    ],
  },
  {
    slug: 'x-armed-bandits',
    title: 'X-Armed Bandits',
    authors: 'Sébastien Bubeck, Rémi Munos, Gilles Stoltz, and Csaba Szepesvári',
    venue: 'Journal of Machine Learning Research',
    year: 2011,
    url: 'https://www.jmlr.org/papers/v12/bubeck11a.html',
    pdfUrl: '/papers/x-armed-bandits.pdf',
    readingType: 'Independent Reading',
    topics: ['X-Armed Bandits', 'Online Optimization', 'Hierarchical Search'],
    summary:
      'This paper studies stochastic bandits over general measurable action spaces with local smoothness expressed through a known dissimilarity function.',
    coreIdea:
      'Hierarchical optimistic optimization focuses exploration on increasingly promising regions of a potentially infinite action space.',
    method:
      'The paper introduces HOO and a computationally faster doubled variant, then proves regret bounds and minimax optimality under metric assumptions.',
    keyTakeaways: [
      'Hierarchical partitions make infinite or continuous arm spaces tractable.',
      'Local smoothness near optimal actions can be sufficient for strong regret guarantees.',
      'The near-optimality dimension captures problem difficulty more precisely than ambient dimension.',
    ],
    questions: [
      'How should the hierarchy be chosen when smoothness is unknown?',
      'How well do theoretical near-optimality measures predict empirical performance?',
    ],
  },
  {
    slug: 'non-stationary-lipschitz-bandits',
    title: 'Non-Stationary Lipschitz Bandits',
    authors: 'Nicolas Nguyen, Solenne Gaucher, and Claire Vernade',
    venue: 'NeurIPS',
    year: 2025,
    url: 'https://arxiv.org/abs/2505.18871',
    pdfUrl: '/papers/nonstationary-lipschitz-bandits.pdf',
    readingType: 'Independent Reading',
    topics: ['Non-Stationary Bandits', 'Lipschitz Bandits', 'Adaptive Learning'],
    summary:
      'This paper studies continuous-action Lipschitz bandits whose reward functions may change arbitrarily over time.',
    coreIdea:
      'A hierarchical discretization can jointly adapt its resolution and detect significant shifts without knowing the degree of non-stationarity in advance.',
    method:
      'The authors introduce MDBE, combining multiscale discretization, restarts, and replay-based exploration to achieve minimax-optimal dynamic regret.',
    keyTakeaways: [
      'Continuous action spaces make change detection and discretization inseparable.',
      'Significant shifts give a more refined complexity measure than counting every change.',
      'Optimal adaptation is possible without prior non-stationarity parameters.',
    ],
    questions: [
      'How does MDBE behave when smoothness varies across the action space?',
      'Can the framework extend to contextual or high-dimensional continuous actions?',
    ],
  },
  {
    slug: 'pyxab-library',
    title: 'PyXAB: A Python Library for X-Armed Bandit and Online Blackbox Optimization Algorithms',
    authors: 'Wenjie Li, Haoze Li, Jean Honorio, and Qifan Song',
    venue: 'arXiv preprint',
    year: 2023,
    url: 'https://arxiv.org/abs/2303.04030',
    pdfUrl: '/papers/pyxab.pdf',
    readingType: 'Independent Reading',
    topics: ['X-Armed Bandits', 'Black-Box Optimization', 'Research Software'],
    summary:
      'This paper presents PyXAB, an open-source Python library for X-armed bandit and online black-box optimization algorithms.',
    coreIdea:
      'A common implementation and evaluation interface makes hierarchical bandit algorithms easier to compare, reproduce, and apply.',
    method:
      'The library implements more than ten algorithms, multiple hierarchical partitions, synthetic objectives, documentation, and experiment utilities.',
    keyTakeaways: [
      'PyXAB unifies algorithms that previously appeared in separate languages and packages.',
      'Partition design is a central practical choice in X-armed optimization.',
      'The package supports both cumulative-regret and simple-regret methods.',
    ],
    questions: [
      'Which partition strategies work best for different objective geometries?',
      'How can the library support reproducible comparison on real applications?',
    ],
  },
  {
    slug: 'transition-informed-stackelberg-mean-field-games',
    title: 'Transition-Informed Reinforcement Learning for Large-Scale Stackelberg Mean-Field Games',
    authors: 'Pengdeng Li, Runsheng Yu, Xinrun Wang, and Bo An',
    venue: 'AAAI',
    year: 2024,
    url: '/papers/transition-informed-smfg.pdf',
    pdfUrl: '/papers/transition-informed-smfg.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Mean-Field Games', 'Reinforcement Learning'],
    summary:
      'This paper studies how a leader can learn incentives for very large populations of homogeneous, self-interested followers.',
    coreIdea:
      'Empirical transition information can accelerate reinforcement learning in Stackelberg mean-field games without requiring complete environment dynamics.',
    method:
      'The authors propose Stackelberg mean-field updates, transition-informed reinforcement learning, and regularized variants evaluated with up to 100,000 followers.',
    keyTakeaways: [
      'Mean-field structure enables leader-follower models to scale to large populations.',
      'Transition information improves data efficiency over purely model-free learning.',
      'Regularization reduces sensitivity to leader-policy initialization.',
    ],
    questions: [
      'How robust is the method to heterogeneous follower populations?',
      'Can transition estimates remain reliable in non-stationary environments?',
    ],
  },
  {
    slug: 'uncoupled-differential-stackelberg-equilibria',
    title: 'Uncoupled Learning of Differential Stackelberg Equilibria with Commitments',
    authors: 'Robert Loftin, Mustafa Mert Çelikok, Herke van Hoof, Samuel Kaski, and Frans A. Oliehoek',
    venue: 'AAMAS',
    year: 2024,
    url: '/papers/uncoupled-differential-stackelberg.pdf',
    pdfUrl: '/papers/uncoupled-differential-stackelberg.pdf',
    readingType: 'Independent Reading',
    topics: ['Stackelberg Games', 'Multi-Agent Learning', 'Differentiable Games'],
    summary:
      'This paper develops decentralized learning dynamics for differential Stackelberg equilibria when agents cannot access one another’s payoff functions.',
    coreIdea:
      'Zeroth-order estimates from observed behavior can replace cross-agent payoff information in hierarchical learning dynamics.',
    method:
      'The authors analyze uncoupled gradient estimators, prove convergence under established conditions, and introduce an online mechanism for negotiating leader-follower roles.',
    keyTakeaways: [
      'Stackelberg learning can be decentralized without sharing private utilities.',
      'Commitment supports role formation in cooperative but asymmetric interactions.',
      'The convergence guarantees match earlier coupled methods under comparable assumptions.',
    ],
    questions: [
      'How does observation noise affect zeroth-order equilibrium learning?',
      'Can more than two agents negotiate stable hierarchical roles online?',
    ],
  },
  {
    slug: 'repeated-stochastic-security-games-non-stationary-attackers',
    title: 'Playing Repeated Stochastic Security Games Against Non-Stationary Attackers',
    authors: 'Ling Chen and Runfa Zhang',
    venue: 'Mathematics',
    year: 2025,
    url: 'https://doi.org/10.3390/math13172697',
    pdfUrl: '/papers/repeated-stochastic-security-games.pdf',
    readingType: 'Independent Reading',
    topics: ['Security Games', 'Non-Stationarity', 'Opponent Modelling'],
    summary:
      'This paper studies repeated security games where an attacker’s latent behavior type changes stochastically and without notification.',
    coreIdea:
      'A defender can reuse a library of policies while updating beliefs to detect opponent-type switches and select an appropriate response.',
    method:
      'The authors formulate defender strategies for five attacker types, apply Bayesian Policy Reuse, and compare it experimentally with EXP3-S.',
    keyTakeaways: [
      'Fixed-attacker assumptions can be inadequate for repeated security interactions.',
      'Belief-based policy reuse can detect behavioral switches and improve defender utility.',
      'Maintaining a relevant policy and opponent-type library is an important practical dependency.',
    ],
    questions: [
      'How does the approach respond to attacker behaviors outside the predefined type library?',
      'Can change detection and policy generation be learned jointly?',
    ],
  },
];
