import type { PublicActivity } from './types';

// Activity-only records are already reduced to their public projection here.
export const activities: PublicActivity[] = [
  {
    id: 'group-meeting-2026-08-30',
    date: '2026-08-30',
    type: 'RESEARCH_GROUP_MEETING',
    visibility: 'ACTIVITY_ONLY',
    publicTitle: 'Research Group Meeting',
    publicSummary: 'Research discussion · Private',
  },
  {
    id: 'supervisor-meeting-2026-08-28',
    date: '2026-08-28',
    type: 'SUPERVISOR_MEETING',
    visibility: 'ACTIVITY_ONLY',
    publicTitle: 'Weekly Research Meeting',
    publicSummary: 'Research discussion · Private',
  },
  {
    id: 'qmix-reading-2026-08-25',
    date: '2026-08-25',
    type: 'INDEPENDENT_READING',
    visibility: 'PUBLIC',
    publicTitle: 'QMIX: Monotonic Value Function Factorisation',
    publicSummary: 'Independent paper reading',
    topics: ['Multi-Agent RL'],
    href: '/papers/qmix-monotonic-value-function-factorisation',
  },
  {
    id: 'coma-discussion-2026-08-20',
    date: '2026-08-20',
    type: 'GROUP_READING',
    visibility: 'PUBLIC',
    publicTitle: 'Counterfactual Multi-Agent Policy Gradients',
    publicSummary: 'Group paper discussion',
    topics: ['Multi-Agent RL'],
    href: '/papers/counterfactual-multi-agent-policy-gradients',
  },
  {
    id: 'research-milestone-2026-07-30',
    date: '2026-07-30',
    type: 'MILESTONE',
    visibility: 'PUBLIC',
    publicTitle: 'Research Direction Established',
    publicSummary:
      'Defined an initial research focus spanning multi-agent learning and strategic interaction.',
  },
];
