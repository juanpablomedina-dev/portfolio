import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const NAV_LINKS = [
  { label: 'Top', href: '#top' },
  { label: 'Experience', href: '#experience-about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const offset = 100; // Offset spacing for fixed navbar
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="mx-auto max-w-5xl px-5 md:px-12">
          {/* Main Bar */}
          <div 
            className={`flex items-center justify-between rounded-full bg-panel/70 px-6 py-3 backdrop-blur-md shadow-glow border border-border transition-all duration-500 relative ${
              isScrolled ? 'bg-panel/85' : 'bg-surface/40'
            }`}
          >
            {/* Logo */}
            <a 
              href="#top" 
              onClick={(e) => handleLinkClick(e, '#top')}
              className="text-lg font-display font-semibold tracking-tight text-text z-10 hover:text-accent transition-colors duration-300"
              aria-label="Juan Pablo Medina - Top"
            >
              JPM Dev<span className="text-accent">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative text-sm font-medium text-muted transition-colors hover:text-text"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className="md:hidden z-10 text-text p-1 -mr-1 transition-colors hover:text-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-5 top-24 z-40 rounded-2xl bg-panel/95 p-6 backdrop-blur-xl border border-border shadow-glow md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-muted hover:text-text transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <span className="h-[2px] w-8 bg-accent/30 rounded-full" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
