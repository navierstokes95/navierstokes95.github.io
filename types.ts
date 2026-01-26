
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: "Automation and IIoT" | "Industrial Design" | "Research";
  image?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PublicationItem {
  authors: string;
  title: string;
  conference: string;
  year: number;
}

export interface TrainingItem {
  title: string;
  organization: string;
  period: string;
  details: string;
}
