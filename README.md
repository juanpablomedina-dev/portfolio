<div align="center">
  <h1>Juan Pablo Medina — Fullstack Developer</h1>
  <p>A fully responsive, optimized and elegant personal portfolio built with modern Web Technologies.</p>
  
  <p>
    <a href="https://juanpablomedina-dev.github.io/portfolio/"><b>Live Demo</b></a> •
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

## ⚡ Tech Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a Custom Design System & Tokens
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for fluid, hardware-accelerated transitions
- **Scroll Handling**: [Lenis](https://lenis.studiofreight.com/) for smooth, accessible scroll experiences
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Infrastructure**: CI/CD Deployments via GitHub Actions
- **AI-synergy Editor**: [Google Antigravity](https://antigravity.google/); modern and efficient.

## ✨ Key Features

- **🚀 Performant & Optimized:** High Lighthouse scoring achieved. Optimized First Contentful Paint (FCP) utilizing `preconnect` for typography, lazy rendering, and semantic HTML tags.
- **🪄 Immersive UI/UX:** Features a custom abstract glowing SVG header, magnetic micro-interactions, holographic text hover effects, and responsive scroll thresholds synced to the user's viewport.
- **🧩 Data-Driven & Modular Architecture:** Content is strictly decoupled from the UI. Application text and media data are modularized into distinct domain files within `src/content/` (`hero.ts`, `aboutExperience.ts`, `skills.ts`, `contact.ts`) to ensure a maintainable single-source-of-truth.
- **♿ Accessible (A11y):** Keyboard navigable interface with tabs, an `Escape`-dismissible mobile menu, proper ARIA labels, and responsive layout scaling to ensure usability for all.

## 🏗️ Architecture Overview

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

## 🚀 Getting Started

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
