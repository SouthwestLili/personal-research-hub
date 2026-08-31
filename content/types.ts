export type Visibility = 'PUBLIC' | 'ACTIVITY_ONLY' | 'PRIVATE';

export type ActivityType =
  | 'SUPERVISOR_MEETING'
  | 'RESEARCH_GROUP_MEETING'
  | 'GROUP_READING'
  | 'INDEPENDENT_READING'
  | 'MILESTONE';

export interface Activity {
  id: string;
  date: string;
  type: ActivityType;
  visibility: Visibility;
  publicTitle: string;
  publicSummary?: string;
  topics?: string[];
  href?: string;
}

interface PublicActivityBase {
  id: string;
  date: string;
  type: ActivityType;
  publicTitle: string;
}

export interface PublicDetailedActivity extends PublicActivityBase {
  visibility: 'PUBLIC';
  publicSummary?: string;
  topics?: string[];
  href?: string;
}

export interface ActivityOnlyProjection extends PublicActivityBase {
  visibility: 'ACTIVITY_ONLY';
  publicSummary: 'Research discussion · Private';
}

export type PublicActivity = PublicDetailedActivity | ActivityOnlyProjection;

export interface ActivityDetail {
  id: string;
  date: string;
  type: 'RESEARCH_GROUP_MEETING' | 'GROUP_READING';
  title: string;
  summary: string;
  topics: string[];
  overview: string[];
  keyThemes: string[];
  mainTakeaways: string[];
  discussion?: string[];
}

export interface Paper {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  pdfUrl?: string;
  readingType: 'Group Reading' | 'Independent Reading';
  topics: string[];
  summary: string;
  coreIdea?: string;
  method?: string;
  keyTakeaways?: string[];
  questions?: string[];
  myThoughts?: string;
  connectionToResearch?: string;
  featured?: boolean;
}

export interface ResearchDirection {
  title: string;
  description: string;
  questions: string[];
}
