import type { ActivityDetail } from './types';

// Only reviewed, public-facing activity notes belong in this module.
// Confidential meeting notes and Notion links must never be added here.
export const activityDetails: ActivityDetail[] = [
  {
    id: 'hci-research-presentation-2026-08-05-3',
    date: '2026-08-05',
    type: 'RESEARCH_GROUP_MEETING',
    title: 'HCI Research Presentation & Lab Collaboration',
    summary:
      'A research presentation and group discussion on computational modelling in HCI and opportunities for interdisciplinary collaboration.',
    topics: ['Human–Computer Interaction', 'Computational Modelling', 'Research Collaboration'],
    overview: [
      'The session considered how computational and agent-based models can complement established HCI methods.',
      'Discussion focused on the value of collaboration between researchers with modelling expertise and researchers studying human behaviour, interfaces, and trust.',
    ],
    keyThemes: [
      'Translating empirical findings into explicit computational assumptions.',
      'Making agent decision rules interpretable and methodologically defensible.',
      'Combining technical modelling expertise with domain knowledge from HCI.',
    ],
    mainTakeaways: [
      'Computational models can help HCI researchers test mechanisms that are difficult to isolate in observational studies.',
      'A useful model should explain its decision logic rather than reproduce a result without a clear mechanism.',
      'Interdisciplinary collaboration can improve both the behavioural validity and technical quality of a model.',
    ],
  },
  {
    id: 'ai-transparency-discussion-2026-08-05-2',
    date: '2026-08-05',
    type: 'GROUP_READING',
    title: 'AI Transparency, Autonomy & Trust Calibration',
    summary:
      'A paper discussion examining whether greater AI transparency always improves human decision-making and trust.',
    topics: ['AI Transparency', 'Human–AI Interaction', 'Trust Calibration'],
    overview: [
      'The paper contrasted computational accounts of transparency, where explanations help align trust with system reliability, with HCI evidence that excessive explanation may reduce autonomy or increase cognitive load.',
      'It combined an agent-based simulation with a survey of organisational decision-makers and then incorporated survey-derived relationships back into the simulation.',
    ],
    keyThemes: [
      'Trust calibration as alignment between user trust and actual system reliability.',
      'The relationship between explanation depth, cognitive load, and perceived autonomy.',
      'Individual differences in how users respond to transparent AI systems.',
      'Adaptive transparency rather than a single explanation policy for every user.',
    ],
    mainTakeaways: [
      'More transparency is not automatically better for every person or decision context.',
      'Explanation design should consider autonomy and cognitive burden alongside accuracy and trust.',
      'Dynamic or preference-sensitive explanations may offer a better design target than blanket transparency requirements.',
    ],
    discussion: [
      'The short personality instrument provides only a limited representation of complex individual differences.',
      'The simulated agents did not interact with one another, limiting what the model can say about social dynamics.',
      'Reintroducing survey findings into the simulation does not provide fully independent validation of those findings.',
    ],
  },
  {
    id: 'hcii-conference-recap-2026-08-05-1',
    date: '2026-08-05',
    type: 'RESEARCH_GROUP_MEETING',
    title: 'HCII Montreal Conference Recap & Paper Discussion',
    summary:
      'A conference recap and research discussion spanning AI safety, explainability, ethics, privacy, and agent-based modelling.',
    topics: ['Human–Computer Interaction', 'AI Safety', 'Agent-Based Modelling'],
    overview: [
      'The session reflected on themes from the Human–Computer Interaction International conference in Montreal, including AI alignment and control, privacy, trust, and responsible system design.',
      'It also introduced a paper using agent-based modelling to study AI transparency, an approach that is less common in HCI than survey, experimental, and interface-focused methods.',
    ],
    keyThemes: [
      'Explainability, alignment, and control as central AI-safety concerns.',
      'Ethical and privacy questions in deployed human–AI systems.',
      'Agent-based modelling as a bridge between computational mechanisms and human behaviour.',
      'The practical value of conferences for comparing methods and identifying collaborations.',
    ],
    mainTakeaways: [
      'AI safety and responsible AI have become prominent themes across HCI research communities.',
      'Conference discussions can reveal how the same technology is evaluated differently across disciplines and user groups.',
      'Agent-based models are promising for HCI when their assumptions and behavioural mechanisms are explicit.',
    ],
  },
];
