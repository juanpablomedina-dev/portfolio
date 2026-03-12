import type { AboutData, ContactData, HeroData, SkillsData } from '../types/portfolio';

export const heroData: HeroData = {
  badge: 'Always creating and improving',
  title: 'Juan Pablo Medina, Fullstack Dev',
  description: 'Full webapp developer focused on production with scalable technology. Always visible, proactive and independent. I love to face new challenges and produce quality features.',
  primaryCta: 'Get in touch',
  secondaryCta: 'View experience',
  tags: ['Product-focused', 'Self organized', 'DB manager', 'TS addict', 'AI solver'],
  image: '/placeholders/hero-media-default.svg',
  imageAlt: 'Lorem ipsum hero media placeholder',
  stats: [
    { id: 'experience', label: 'Years of experience', value: '5+' },    
    { id: 'projects', label: 'Projects Worked', value: '50+' },
    { id: 'languages', label: 'Proficient Technologies', value: '20+' },
    { id: 'languages', label: 'Languages Spoken', value: 'En & Es' },
  ],
};

export const aboutExperienceData: AboutData = {
  sectionTitle: 'Experience & About me',
  sectionLead: "I collaborated in both agile startups and structured big tech. I'm aware of pipelines and processes, and I can easily switch priorities and tasks frequently while staying productive.",
  aboutTitle: 'Know my work',
  aboutBody: ["While I now have several years of experience navigating diverse environments and complex challenges, my journey began with the simplicity of JavaScript. As a self-taught developer, I built my foundation through personal projects—researching and teaching myself whatever was necessary to solve every hurdle I encountered.",
"My first role was at Sana, a healthcare startup, where I grew autonomously in a high-pressure ecosystem of constant context-switching. After that, I moved into my current role at Litebox, where we work with several high profile clients with clear structures and organized workflows within large teams and complex systems.",
"I’ve learned to prioritize productivity without compromising quality, always seeking the most efficient path and avoiding unnecessary detours. I firmly believe that doing a job right the first time is more valuable than a rushed result that costs more time in the long run. Today, I am a developer who can collaborate effectively and thrive within any team."],
  aboutImage: '/placeholders/about-profile-default.svg',
  aboutImageAlt: 'Lorem ipsum profile placeholder',
  experienceTitle: 'My Experience',
  experiences: [
    { id: 'exp-1', role: 'Lorem ipsum dolor', period: '2023 - Present', company: 'Lorem Studio', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['React', 'Node', 'PostgreSQL'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder one' },
    { id: 'exp-2', role: 'Sit amet consectetur', period: '2021 - 2023', company: 'Dolor Labs', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['TypeScript', 'GraphQL', 'AWS'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder two' },
    { id: 'exp-3', role: 'Adipisicing elit sed', period: '2019 - 2021', company: 'Ipsum Collective', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['Next.js', 'Redis', 'Docker'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder three' },
  ],
};

export const skillsData: SkillsData = {
  sectionLabel: 'Skills & Proficiencies',  
  sectionTitle: 'Know my strengths',
  hardSkills: [
    { id: 'hs-1', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.', level: 3, icon: 'code' },
    { id: 'hs-2', title: 'Dolor Sit', description: 'Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna.', level: 2, icon: 'database' },
    { id: 'hs-3', title: 'Consectetur', description: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', level: 1, icon: 'server' },
    { id: 'hs-4', title: 'Adipisicing', description: 'Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.', level: 2, icon: 'api' },
  ],
  softSkills: [
    { id: 'ss-1', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.', level: 2, icon: 'team' },
    { id: 'ss-2', title: 'Sit Amet', description: 'Sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.', level: 3, icon: 'lead' },
    { id: 'ss-3', title: 'Elit Sed', description: 'Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.', level: 1, icon: 'communicate' },
  ],
};

export const contactData: ContactData = {
  sectionTitle: 'Get in touch',
  sectionLead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    { id: 'contact-email', type: 'email', label: 'Email', value: 'lorem@ipsum.dev', href: 'mailto:lorem@ipsum.dev' },
    { id: 'contact-github', type: 'github', label: 'GitHub', value: 'github.com/lorem-ipsum', href: 'https://github.com/lorem-ipsum' },
    { id: 'contact-linkedin', type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/lorem-ipsum', href: 'https://linkedin.com/in/lorem-ipsum' },
    { id: 'contact-location', type: 'location', label: 'Location', value: 'Lorem City, Ipsum' },
  ],
};
