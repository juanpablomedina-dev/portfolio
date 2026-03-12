import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { sectionStagger, springSoft, staggerItem } from '../../lib/motion';
import { contactData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';
import SectionHeader from '../../components/common/SectionHeader';
import type { ContactItem } from '../../types/portfolio';

const CONTACT_ICON_MAP: Record<ContactItem['type'], React.ComponentType<{ className?: string }>> = {
  email: FiMail,
  github: SiGithub,
  linkedin: FiLinkedin,
  location: FiMapPin,
};

const ContactCard = ({ item }: { item: ContactItem }) => {
  const Icon = CONTACT_ICON_MAP[item.type];
  const isLink = Boolean(item.href);

  const cardContent = (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-panel/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-panel/80 hover:shadow-glow">
      <div className="flex items-start justify-between z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface/50 text-2xl text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/10">
          <Icon />
        </div>
        {isLink && (
          <div className="text-muted transition-colors duration-300 group-hover:text-accent">
            <FiArrowUpRight className="text-xl" />
          </div>
        )}
      </div>
      <div className="mt-8 z-10">
        <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-muted">{item.label}</p>
        <p className="truncate text-lg font-medium text-text transition-colors duration-300 group-hover:text-accent">
          {item.value}
        </p>
      </div>

      {/* Decorative gradient blob on hover */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target={item.type === 'email' ? '_self' : '_blank'}
        rel={item.type === 'email' ? undefined : 'noopener noreferrer'}
        variants={staggerItem}
        whileHover={{ y: -5 }}
        transition={springSoft}
        className="block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-2xl"
        aria-label={`${item.label}: ${item.value}`}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div variants={staggerItem} whileHover={{ y: -5 }} transition={springSoft} className="h-full">
      {cardContent}
    </motion.div>
  );
};

const ContactSection = () => (
  <SectionContainer id="contact" className="pb-24 md:pb-32">
    <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-panel/30 px-6 py-16 shadow-xl backdrop-blur-sm md:px-16 md:py-20">
      
      {/* Subtle ambient glow top */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative z-10 grid grid-cols-1 gap-12 items-stretch lg:grid-cols-2 lg:gap-20">
        {/* Left Column: Text & CTA */}
        <div className="flex h-full flex-col justify-between gap-10">
          <SectionHeader
            label="Get In Touch"
            title={contactData.sectionTitle}
            lead={contactData.sectionLead}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-5 rounded-2xl border border-border/50 bg-panel/30 p-6 backdrop-blur-sm lg:max-w-md"
          >
            <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
            </div>
            <div>
              <h4 className="text-base font-semibold text-text">Available for new opportunities</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">Let's collaborate and build something amazing together. My inbox is open.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Grid */}
        <StaggerChildren
          variants={sectionStagger}
          viewportTrigger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
        >
          {contactData.items.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </StaggerChildren>
      </div>
    </div>
  </SectionContainer>
);

export default ContactSection;
