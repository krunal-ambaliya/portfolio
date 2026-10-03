export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  current?: boolean;
  description: string;
  bulletPoints: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  location?: string;
  scoreOrHonors?: string;
  description?: string;
  coursework?: string[];
}

export type ProjectCategory = 'web-app' | 'healthcare' | 'developer-tools';

export interface ProjectItem {
  id: string;
  /** Short display name, e.g. "Timect" */
  name: string;
  /** Full descriptive title, shown in the detail view */
  title: string;
  category: ProjectCategory;
  /** One-line description for the card */
  summary: string;
  /** 2–3 short feature labels for the card */
  highlights: string[];
  description: string;
  technologies: string[];
  role?: string;
  keyFeatures: string[];
  architectureDetails?: string;
  liveUrl?: string;
  githubUrl: string;
  metrics?: { label: string; value: string; url?: string }[];
  image?: string;
}

export interface SkillGroupItem {
  title: string;
  skills: string[];
}

export interface TechnicalStrength {
  name: string;
  description: string;
}

export interface SpokenLanguage {
  name: string;
  proficiency: string;
  rating: number; // out of 5
}
