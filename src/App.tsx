import { ReactLenis } from 'lenis/react';
import { motion } from 'framer-motion';
import AboutExperienceSection from './sections/AboutExperience/AboutExperienceSection';
import ContactSection from './sections/Contact/ContactSection';
import HeroSection from './sections/Hero/HeroSection';
import SkillsSection from './sections/Skills/SkillsSection';

const lenisOptions = { smoothWheel: true, lerp: 0.08, autoRaf: true };

const BackgroundDecorations = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* Abstract blurred shapes */}
    <motion.div 
      animate={{ 
        x: [0, 40, 0],
        y: [0, -40, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[10%] -left-[10%] h-[40vw] w-[40vw] rounded-full bg-accent/5 blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        x: [0, -30, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[40%] -right-[10%] h-[35vw] w-[35vw] rounded-full bg-accentSoft/5 blur-[100px]" 
    />
  </div>
);

const App = () => (
  <ReactLenis root options={lenisOptions}>
    <main className="relative min-h-screen text-text selection:bg-accent/30">
      <BackgroundDecorations />
      
      <div className="relative z-10 flex flex-col gap-8 md:gap-16 pb-12">
        <HeroSection />
        <AboutExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  </ReactLenis>
);

export default App;
