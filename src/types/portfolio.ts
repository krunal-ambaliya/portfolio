export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  scoreOrHonors?: string;
  description: string;
  coursework?: string[];
  certifications?: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-app' | 'healthcare' | 'developer-tools' | 'all';
  iconType: 'home' | 'stethoscope' | 'code';
  badgeBg: string;
  badgeTextColor: string;
  badgeBorderColor: string;
  description: string;
  technologies: string[];
  role?: string;
  keyFeatures: string[];
  architectureDetails?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools' | 'AI & APIs';
  proficiency: number; // 0 - 100
  highlight?: boolean;
}
