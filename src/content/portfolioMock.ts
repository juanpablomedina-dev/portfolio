import type { AboutData, ContactData, HeroData, SkillsData } from '../types/portfolio';

export const heroData: HeroData = {
  badge: 'Always creating and improving',
  title: 'Juan Pablo Medina, Fullstack Dev',
  description:
    'Web systems developer focused on production with scalable technology. Always visible, proactive and independent. I love to face new challenges and produce quality features.',
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
  sectionLead:
    "I collaborated in both agile startups and structured big tech. I'm aware of pipelines and processes, and I can easily switch priorities and tasks frequently while staying productive.",
  aboutTitle: 'Know my work',
  aboutBody: [
    'My first professional role was at Sana, a healthcare startup, where I grew autonomously in a high-pressure ecosystem of constant context-switching.',
    'Now I work with several high profile clients with clear structures and organized workflows within large teams and complex systems.',
    'I’ve learned to prioritize productivity without compromising quality, always seeking the most efficient path and avoiding unnecessary detours.',
  ],
  aboutImage: '/placeholders/about-profile-default.svg',
  aboutImageAlt: 'Lorem ipsum profile placeholder',
  experienceTitle: 'My Experience',
  experiences: [
    {
      id: 'exp-1',
      role: 'Fullstack Developer',
      period: '2023 - Present',
      company: 'Litebox',
      summary:
        'Participated or lead several projects of multiple types and challenges within large multi-role teams with structured workflows.',
      achievements: [
        'Fully developed an AI-powered Slack bot to collect and summarize daily standups for the whole company. Saves data, includes a RAG and exposes commands to view metrics and AI-processed insights.',
        'Contributed to build several marketing sites with complex UI and motion side-to-side with designers.',
        'Single-handledly lead a difficult-customer project to keep progress and satisfaction.',
        'Lead the implementation of a client Portal for invoices and metrics.',
      ],
      stack: [
        'Next & Vercel',
        'AI Integration',
        'Motion libraries',
        'Optimization',
        'n8n & trigger.dev',
        'Supabase',
      ],
      image: '/litebox.png',
      imageAlt: 'Litebox logo',
    },
    {
      id: 'exp-2',
      role: 'Web & Mobile Developer',
      period: '2020 - 2023',
      company: 'Sana Digital',
      summary:
        'Built a fully operational online-consultations platform from scratch in a dynamic working environment.',
      achievements: [
        'Built an appealing UI in collaboration with a designer.',
        'Developed a full management dashboard for professionals and administration.',
        'Implemented a  consultation reservation system with fully integrated payment processing.',
        'Integrated native videocalls for digital consultations.',
      ],
      stack: ['React', 'React Native', 'Express', 'MySQL', 'AWS'],
      image: '/sana.png',
      imageAlt: 'Sana Digital logo',
    },
    {
      id: 'exp-3',
      role: 'Web Developer',
      period: '2018 - 2019',
      company: 'Freelancer',
      summary: 'I started my journey building projects for local clients.',
      achievements: [
        'Built 3 custom portfolios for local professionals.',
        'Developed a desktop inventory management system.',
      ],
      stack: ['React', 'HTML', 'CSS', 'JS'],
      image: '/placeholders/experience-card-default.svg',
      imageAlt: 'Lorem ipsum experience placeholder two',
    },
  ],
};

export const skillsData: SkillsData = {
  sectionLabel: 'Skills & How I Work',
  sectionTitle: 'Know my strengths',
  hardSkills: [
    {
      id: 'hs-1',
      title: 'React & Next.js',
      description:
        '5 years into the React ecosystem, the flow feels intuitive. I know how to maximize its potential and avoid its usual technical debts.',
      level: 3,
      icon: 'react',
    },
    {
      id: 'hs-2',
      title: 'CSS & Tailwind',
      description:
        'I can build top-tier interfaces at high speed. Tailwind is my go-to framework for creating clean, modern, and highly efficient UIs.',
      level: 3,
      icon: 'layout',
    },
    {
      id: 'hs-3',
      title: 'UI Libraries',
      description:
        'Components (Chakra, shadcn), motion (Framer Motion, GSAP), state and forms (React Query, Lenis), etc. I’ve integrated dozens of libraries.',
      level: 3,
      icon: 'box',
    },
    {
      id: 'hs-4',
      title: 'AI Integration & Vector Search',
      description:
        'OpenAI connections with vectorized data processes that create advanced semantic search and personalized summarization tools, turning raw data into intelligent, actionable insights.',
      level: 3,
      icon: 'settings',
    },
    {
      id: 'hs-5',
      title: 'Backend & APIs',
      description:
        'I develop highly practical and efficient APIs with Nest.js, Express, and Next.js to connect data and the UI.',
      level: 3,
      icon: 'terminal',
    },
    {
      id: 'hs-6',
      title: 'Automation Tools',
      description:
        'I leverage n8n, Supabase, trigger.dev and others to build quick automated flows with data persistence.',
      level: 3,
      icon: 'settings',
    },
    {
      id: 'hs-7',
      title: 'Performance & SEO',
      description:
        'I strive for top-tier Performance & SEO scores while balancing high-quality output with efficient development cycles',
      level: 3,
      icon: 'zap',
    },
    {
      id: 'hs-8',
      title: 'Databases',
      description:
        'PostgreSQL is my core strength. I’ve built and managed multiple databases, ensuring data integrity and scalability at every step.',
      level: 2,
      icon: 'database',
    },
    {
      id: 'hs-9',
      title: 'Other frameworks',
      description:
        'React.js is my core expertise, but I’m also proficient in Vue, Solid, Svelte, Astro and even pure JS with HTML.',
      level: 2,
      icon: 'vue',
    },
    {
      id: 'hs-10',
      title: 'Testing',
      description: 'I prioritize reliability through quick testing, using tools like Vitest for unit tests.',
      level: 1,
      icon: 'testing',
    },
    {
      id: 'hs-11',
      title: 'DevOps & CI/CD',
      description:
        'I manage automated deployment environments using Vercel and GitHub/GitLab, focusing on pre-configured pipelines for seamless and reliable production delivery.',
      level: 1,
      icon: 'refresh',
    },
  ],
  softSkills: [
    {
      id: 'ss-1',
      title: 'Ownership',
      description:
        "I aim to take responsibility for my tasks from start to finish, ensuring I meet objectives. I'm very independent and proactive, and can keep working and moving forward myself.",
      level: 3,
      icon: 'ownership',
    },
    {
      id: 'ss-2',
      title: 'Problem Solving',
      description:
        'I try to focus on balanced solutions that respect both technical quality and project constraints, understanding that the best code is the one that delivers value on time.',
      level: 3,
      icon: 'problem-solving',
    },
    {
      id: 'ss-3',
      title: 'Communication',
      description:
        "I prioritize visibility by providing proactive status updates. I focus on direct communication when seeking clarification and don't hesitate to ask for help.",
      level: 3,
      icon: 'communicate',
    },
    {
      id: 'ss-4',
      title: 'Adaptability & Growth',
      description:
        "I enjoy new challenges and can switch contexts quickly while maintaining momentum. I'm also committed to continuous learning.",
      level: 3,
      icon: 'growth',
    },
    {
      id: 'ss-5',
      title: 'Collaboration & Teamwork',
      description:
        'I value open feedback and collaborative environments. I believe that the best products are built through shared knowledge and supportive peer reviews.',
      level: 3,
      icon: 'team',
    },
  ],
  aiSkills: [
    {
      id: 'ai-1',
      title: 'AI-Synergy Development',
      description:
        'I leverage AI as a tool to accelerate boilerplate generation, refactor complex logic, and optimize code performance. I always do manual oversight over the entire flow.',
      level: 3,
      icon: 'ai',
    },
    {
      id: 'ai-2',
      title: 'Strategic AI Consultation',
      description:
        'I use AI as a technical consultant to brainstorm optimal solutions and agilize research, reducing the discovery phase for complex features and new technologies.',
      level: 3,
      icon: 'brain',
    },
    {
      id: 'ai-3',
      title: 'Workflow & Orchestration',
      description:
        'I design workflows that integrate AI to automate repetitive tasks—from unit tests to documentation—treating it as a controlled assistant that enhances my productivity without ever compromising code integrity.',
      level: 3,
      icon: 'workflow',
    },
  ],
};

export const contactData: ContactData = {
  sectionTitle: 'Get in touch',
  sectionLead:
    "I'm always happy to talk about ideas and emerging projects. I'd love to make human connection and get to know your goals and priorities.",
  items: [
    {
      id: 'contact-email',
      type: 'email',
      label: 'Email',
      value: 'medinajp95@gmail.com',
      href: 'mailto:medinajp95@gmail.com',
    },
    {
      id: 'contact-linkedin',
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'juan-pablo-medina-249799196/',
      href: 'https://www.linkedin.com/in/juan-pablo-medina-249799196/',
    },
    {
      id: 'contact-github',
      type: 'github',
      label: 'GitHub',
      value: 'juanpablomedina-dev',
      href: 'https://github.com/juanpablomedina-dev',
    },
    { id: 'contact-location', type: 'location', label: 'Location', value: 'Jujuy, Argentina' },
  ],
};
