import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiServer, FiZap, FiCpu } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { heroStagger, springSoft, staggerItem } from '../../lib/motion';
import { heroData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';

const iconMap = [FiZap, FiServer, FiDatabase, SiTypescript, FiCpu];

const arrowHoverVariants = {
  idle: { x: 0, opacity: 1 },
  hover: {
    x: [0, 6, -6, 0],
    opacity: [1, 0, 0, 1],
    transition: { duration: 0.5, times: [0, 0.2, 0.2, 1] },
  },
};

const HeroSection = () => {
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <SectionContainer id="hero" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <StaggerChildren
        variants={heroStagger}
        className="relative z-10 mx-auto w-full max-w-7xl rounded-[2.5rem] border border-border/40 bg-panel/30 p-6 shadow-2xl backdrop-blur-xl sm:p-10 md:p-14 lg:p-16"
      >
        {/* Glow behind the hero card itself */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left Column: Content */}
          <div className="space-y-10">
            {/* Badge */}
            <motion.div variants={staggerItem} className="flex">
              <span className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                {heroData.badge}
              </span>
            </motion.div>

            {/* Title & Description */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight bg-gradient-to-br from-text via-text to-text/60 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                {heroData.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl font-light">
                {heroData.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsCtaHovered(true)}
                onHoverEnd={() => setIsCtaHovered(false)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgb(var(--color-accent)_/_0.3)] transition-all hover:shadow-[0_0_30px_rgb(var(--color-accent)_/_0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                aria-label={heroData.primaryCta}
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative">{heroData.primaryCta}</span>
                <motion.span
                  className="relative inline-flex"
                  initial="idle"
                  animate={isCtaHovered ? 'hover' : 'idle'}
                  variants={arrowHoverVariants}
                >
                  <FiArrowRight className="text-lg" />
                </motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-panel/50 px-6 py-3.5 text-sm font-semibold text-text backdrop-blur-md transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                aria-label={heroData.secondaryCta}
              >
                {heroData.secondaryCta}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 sm:grid-cols-3 pt-4 border-t border-border/30">
              {heroData.stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  whileHover={{
                    y: -4,
                    transition: springSoft,
                  }}
                  className="group flex flex-col justify-center rounded-2xl border border-border/40 bg-surface/40 p-5 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-surface/80"
                >
                  <p className="font-display text-3xl font-bold bg-gradient-to-br from-text to-text/50 bg-clip-text text-transparent transition-colors group-hover:from-accent group-hover:to-accentSoft">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Media & Tags */}
          <div className="space-y-6">
            {/* Image Container with Glow Effect */}
            <motion.div
              variants={staggerItem}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl"
            >
              {/* Overlay gradient on image */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-panel/60 via-transparent to-transparent opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-20" />
              
              <motion.img
                src={heroData.image}
                alt={heroData.imageAlt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-[28rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
              />
            </motion.div>

            {/* Floating Tags */}
            <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {heroData.tags.map((tag, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={springSoft}
                    className="inline-flex cursor-default items-center gap-2 rounded-full border border-border/60 bg-panel/60 px-4 py-2.5 text-xs font-medium text-text shadow-sm backdrop-blur-md transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="text-accent text-sm" />
                    {tag}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </StaggerChildren>
    </SectionContainer>
  );
};

export default HeroSection;
