import { ReactLenis } from 'lenis/react';
import AboutExperienceSection from './sections/AboutExperience/AboutExperienceSection';
import HeroSection from './sections/Hero/HeroSection';

const lenisOptions = { smoothWheel: true, lerp: 0.08, autoRaf: true };

const App = () => (
  <ReactLenis root options={lenisOptions}>
    <main className="min-h-screen bg-surface text-text">
      <HeroSection />
      <AboutExperienceSection />
    </main>
  </ReactLenis>
);

export default App;
