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

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-app' | 'healthcare' | 'developer-tools' | 'all';
  iconType: 'home' | 'stethoscope' | 'code' | 'shopping-bag';
  badgeBg: string;
  badgeTextColor: string;
  badgeBorderColor: string;
  description: string;
  technologies: string[];
  role?: string;
  keyFeatures: string[];
  architectureDetails?: string;
  liveUrl?: string;
  githubUrl: string;
  metrics?: { label: string; value: string }[];
  image?: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Web Technologies' | 'Database' | 'Tools';
  proficiency: number;
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
