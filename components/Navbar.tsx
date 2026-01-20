import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import Logo from './Logo';
import { useNavigation } from '../lib/NavigationContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateTo, currentPage } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: 'home' | 'solutions' | 'approach' | 'case-studies' | 'insights', sectionId?: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (currentPage !== 'home') {
       // If we are on a detail page, navigating to a section means we go home first
       navigateTo('home');
       // Small timeout to allow render, then scroll (simple approach)
       if (sectionId) {
         setTimeout(() => {
           document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       }
    } else {
       // We are on home
       if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

  const navLinks = [
    { name: 'Solutions', page: 'solutions', href: '#solutions' },
    { name: 'Approach', page: 'approach', href: '#approach' },
    { name: 'Case Studies', page: 'case-studies', href: '#case-studies' },
    { name: 'Insights', page: 'insights', href: '#insights' },
  ];

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none transition-all duration-500 ${isScrolled ? 'top-2 md:top-4' : 'top-6'}`}>
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl flex items-center justify-between"
        >
          {/* Logo Section - Outside Bubble */}
          <div className="pointer-events-auto flex items-center">
            <a 
              href="#" 
              className="flex items-center gap-2 group relative z-50"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home');
              }}
            >
              <Logo className={`w-auto drop-shadow-2xl transition-all duration-500 ${isScrolled ? 'h-8 md:h-10' : 'h-12 md:h-16'}`} />
            </a>
          </div>

          {/* Center Links (Desktop) - The Liquid Glass Bubble */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-auto z-40">
             <nav className={`
               liquid-glass rounded-full flex items-center gap-1
               transition-all duration-500
               ${isScrolled 
                 ? 'bg-brand-dark/60 backdrop-blur-xl border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-1 py-1' 
                 : 'bg-white/[0.03] border-white/5 px-2 py-2'
               }
             `}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.page as any, link.href.substring(1))}
                  className={`
                    relative rounded-full font-medium text-gray-300 hover:text-white transition-all hover:bg-white/10 group
                    ${isScrolled ? 'px-4 py-1.5 text-xs' : 'px-6 py-2.5 text-sm'}
                  `}
                >
                  {link.name}
                  {/* Hover Glow */}
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                </a>
              ))}
             </nav>
          </div>

          {/* Right Section (CTA + Mobile Toggle) - Outside Bubble */}
          <div className="pointer-events-auto flex items-center gap-3 relative z-50">
            <div className="hidden md:block">
              <Button 
                variant="primary" 
                size={isScrolled ? "sm" : "md"}
                className="rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] border border-white/10 transition-all duration-500"
                onClick={() => {
                   if(currentPage !== 'home') navigateTo('home');
                   setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'}), 100);
                }}
              >
                Book Strategy
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className={`md:hidden flex items-center justify-center text-white bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 backdrop-blur-md ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu - Floating Glass Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-40"
          >
            <div className="liquid-glass-high rounded-3xl p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.page as any, link.href.substring(1))}
                    className="flex items-center justify-between text-lg font-medium text-gray-200 hover:text-white px-4 py-4 hover:bg-white/5 rounded-2xl transition-all group"
                  >
                    {link.name}
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
                
                <div className="h-px bg-white/10 my-4" />
                
                <Button 
                    className="w-full rounded-2xl py-4 text-base" 
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        if(currentPage !== 'home') navigateTo('home');
                        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'}), 100);
                    }}
                >
                  Book Strategy Session
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
