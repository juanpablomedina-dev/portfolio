import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiServer, FiZap } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { heroStagger, springSoft, staggerItem } from '../../lib/motion';
import { heroData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';

const iconMap = [FiZap, FiServer, FiDatabase, SiTypescript];

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
  <SectionContainer id="hero" className="relative overflow-hidden py-20 md:py-28">
    <StaggerChildren
          variants={heroStagger}
          className="rounded-3xl border border-border/60 bg-hero p-7 shadow-glow md:p-12"
        >
          <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <motion.span
                variants={staggerItem}
                className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                {heroData.badge}
              </motion.span>
              <motion.div variants={staggerItem} className="space-y-5">
                <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-text md:text-6xl">
                  {heroData.title}
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {heroData.description}
                </p>
              </motion.div>
              <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsCtaHovered(true)}
                  onHoverEnd={() => setIsCtaHovered(false)}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  aria-label={heroData.primaryCta}
                >
                  {heroData.primaryCta}
                  <motion.span
                    className="inline-flex"
                    initial="idle"
                    animate={isCtaHovered ? 'hover' : 'idle'}
                    variants={arrowHoverVariants}
                  >
                    <FiArrowRight className="text-base" />
                  </motion.span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-panel/70 px-5 py-3 text-sm font-semibold text-text transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  aria-label={heroData.secondaryCta}
                >
                  {heroData.secondaryCta}
                </motion.button>
              </motion.div>
              <motion.div variants={staggerItem} className="grid gap-3 sm:grid-cols-3">
                {heroData.stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    whileHover={{
                      y: -3,
                      boxShadow: '0 12px 28px rgb(0 0 0 / 0.12)',
                      transition: springSoft,
                    }}
                    className="rounded-xl border border-border/70 bg-panel/75 p-4"
                  >
                    <p className="text-2xl font-display font-semibold text-text">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="space-y-4">
              <motion.div
                variants={staggerItem}
                className="overflow-hidden rounded-2xl border border-border/75 shadow-glow"
              >
                <motion.img
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  whileHover={{ scale: 1.02 }}
                  transition={springSoft}
                  className="h-[23rem] w-full object-cover md:h-[27rem]"
                />
              </motion.div>
              <motion.div variants={staggerItem} className="grid grid-cols-2 gap-3">
                {heroData.tags.map((tag, index) => {
                  const Icon = iconMap[index % iconMap.length];
                  return (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.02 }}
                      transition={springSoft}
                      className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-panel/70 px-3 py-2 text-sm text-muted"
                    >
                      <Icon className="text-accent" />
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
