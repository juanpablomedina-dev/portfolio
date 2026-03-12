export type HeroStat = { id: string; label: string; value: string };

export type HeroData = { badge: string; title: string; description: string; primaryCta: string; secondaryCta: string; stats: HeroStat[]; tags: string[]; image: string; imageAlt: string };

export type ExperienceItem = { id: string; role: string; period: string; company: string; summary: string; stack: string[]; image: string; imageAlt: string };

export type AboutData = { sectionTitle: string; sectionLead: string; aboutTitle: string; aboutBody: string[]; aboutImage: string; aboutImageAlt: string; experienceTitle: string; experiences: ExperienceItem[] };

export type SkillItem = { id: string; title: string; description: string; level: 1 | 2 | 3; icon: string };

export type SkillsData = { sectionLabel: string; sectionTitle: string; hardSkills: SkillItem[]; softSkills: SkillItem[] };

export type ContactItem = { id: string; type: 'email' | 'github' | 'linkedin' | 'location'; label: string; value: string; href?: string };

export type ContactData = { sectionTitle: string; sectionLead?: string; items: ContactItem[] };
