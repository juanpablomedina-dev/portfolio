<div align="center">
  <h1>Juan Pablo Medina — Fullstack Developer</h1>
  <p>A fully responsive, optimized and elegant personal portfolio built with modern Web Technologies.</p>
  
  <p>
    <a href="https://jpm-fdev.github.io/portfolio/"><b>Live Demo</b></a> •
    <a href="https://www.linkedin.com/in/jpmdev"><b>LinkedIn</b></a> •
    <a href="mailto:medinajp95@gmail.com"><b>Email</b></a>
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  </p>
</div>

<br />

## Tech Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a Custom Design System & Tokens
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for fluid, hardware-accelerated transitions
- **Scroll Handling**: [Lenis](https://lenis.studiofreight.com/) for smooth, accessible scroll experiences
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Infrastructure**: CI/CD Deployments via GitHub Actions
- **AI-synergy Editor**: [Google Antigravity](https://antigravity.google/); modern and efficient.

## Key Features

- **Performance**: High Lighthouse scores with optimized scores. Uses preconnect for assets, lazy loading, and semantic HTML for a fast, efficient experience.
- **Modern Interactivity**: Polished UI with custom SVG backgrounds, magnetic interactions, and holographic hover effects. Scroll thresholds and animations are fine-tuned for a seamless feel.
- **Modular Data Architecture**: Content is decoupled from UI logic. Project data is organized into domain-specific modules in `src/content/` for better scalability and maintenance.
- **Native Accessibility**: Built with A11y best practices, including full keyboard navigation, ARIA standards, and responsive scaling to ensure usability for all visitors.

## Architecture Overview

```text
src/
├── components/   # Reusable UI pieces (Pill, Header) & Motion Wrappers
├── content/      # Modularized Data Hub for application content
│   ├── aboutExperience.ts
│   ├── contact.ts
│   ├── hero.ts
│   └── skills.ts
├── hooks/        # Custom React Hooks (e.g., useIsMobile)
├── sections/     # Page Domain Sections (Hero, About, Experience, Skills, Contact)
├── styles/       # Tailwind entry point and global design tokens
└── types/        # TypeScript Interfaces & global definitions
```

## 💻 Run it locally

To run this project locally, ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```bash
# 1. Clone the repository
git clone https://github.com/jpm-fdev/portfolio.git

# 2. Go to the project directory
cd portfolio

# 3. Install dependencies
yarn install

# 4. Start the development server
yarn dev
```

Visit the local server provided in the terminal (usually `http://localhost:5173`) to view the application in your browser.
