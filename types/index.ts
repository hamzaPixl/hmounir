export interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
}

export interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  logoUrl?: string;
}

export interface LanguageCardProps {
  language: string;
  level: string;
}

export interface EducationCardProps {
  degree: string;
  institution: string;
  logoUrl?: string;
}

export interface ContactFormProps {
  title: string;
}
