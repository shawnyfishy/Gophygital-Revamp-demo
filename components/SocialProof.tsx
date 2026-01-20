import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { sectionReveal } from '../utils/animations';
import { useNavigation } from '../lib/NavigationContext';

// Real Data from GoPhygital JSON
const CASE_STUDIES = [
  {
    id: 'adani',
    client: 'Adani Airports',
    title: 'Adani Airport Information Kiosk',
    desc: 'The Adani Airport Information Kiosk was designed and developed to provide real‑time flight information, gate assignments, boarding times, and details about restaurants, shops, and services. Powered by AI and data analytics, it adapts to customer behaviour, offers personalised recommendations, and supports natural language queries.',
    stats: [
      { label: 'Technology', value: 'AI & Data' },
      { label: 'Feature', value: 'NLP Queries' }
    ],
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'toondemy',
    client: 'Creative Galileo',
    title: 'Toondemy: Kids Learning App',
    desc: 'Designed & developed by award‑winning curriculum experts for kids aged 3 to 10. Toondemy offers a fun‑filled, engaging journey that builds key learning objectives. The parent company, Creative Galileo, was listed on HolonIQ’s "100 Most Promising Start‑Ups from Indian and South Asia".',
    stats: [
      { label: 'Downloads', value: '7 Million+' },
      { label: 'Recognition', value: 'Top 100 Startup' }
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'ben-bella',
    client: 'Ben & Bella',
    title: 'Treasure Box AR Experience',
    desc: 'An immersive Augmented Reality application that revolutionizes English language learning for children. By bridging physical flashcards with digital interactivity, we created a "Phygital" ecosystem where characters come to life in 3D, significantly increasing engagement and knowledge retention rates compared to traditional methods.',
    stats: [
      { label: 'Tech Stack', value: 'Unity AR' },
      { label: 'Engagement', value: '+200%' }
    ],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'sonic-check',
    client: 'amp',
    title: 'Sonic Check®',
    desc: 'Part of the Sonic Hub Tool Ecosystem, Sonic Check uses Machine Listening and Learning (MLAL) algorithms to compare sound assets and predict performance. It constructs brand sonic profiles to evaluate audience interaction and emotional attachment to brand sounds before market research, replacing guesswork with data.',
    stats: [
      { label: 'Algorithm', value: 'MLAL' },
      { label: 'Outcome', value: 'Data-Driven' }
    ],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'icici',
    client: 'ICICI Lombard',
    title: 'Digital Claims Ecosystem',
    desc: 'We re-engineered the insurance claims journey for one of India’s leading insurers. By integrating OCR technology and automated workflows into a unified mobile ecosystem, we reduced claim processing times and improved transparency, resulting in significantly higher customer satisfaction scores.',
    stats: [
      { label: 'Efficiency', value: '60% Faster' },
      { label: 'UX Score', value: '4.8/5' }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'pidilite',
    client: 'Pidilite',
    title: 'Enterprise Dealer Loyalty Platform',
    desc: 'A comprehensive B2B engagement solution connecting thousands of dealers and distributors. The platform features real-time inventory tracking, incentive management, and predictive analytics, fostering stronger partner relationships and optimizing supply chain operations across the network.',
    stats: [
      { label: 'Users', value: '50k+ Dealers' },
      { label: 'Adoption', value: '90%' }
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'zzzquil',
    client: 'P&G',
    title: 'ZzzQuil Sleep Quiz',
    desc: 'An interactive "What kind of sleeper are you?" experience. We designed this gamified quiz for P&G to analyze lifestyle habits and provide personalized sleep aid recommendations. The solution serves over 650 million consumers with a seamless, 3D-illustrated interface that makes health data engaging.',
    stats: [
      { label: 'Platform', value: 'Gamified Web' },
      { label: 'Reach', value: '650M+ Market' }
    ],
    // Generic purple dreamy clouds to represent sleep and the ZzzQuil brand aesthetic
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop'
  }
];

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { navigateTo } = useNavigation();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // Auto-advance every 10s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 border-y border-white/5 bg-brand-dark relative z-10 overflow-hidden" id="case-studies">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-navy/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="flex justify-between items-end mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionReveal}
        >
           <div>
             <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Success Stories</span>
             <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Case Studies</h2>
           </div>
           
           <div className="flex gap-2">
             <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-white">
               <ArrowLeft size={20} />
             </button>
             <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-white">
               <ArrowRight size={20} />
             </button>
           </div>
        </motion.div>

        <div className="relative min-h-[650px] md:min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center h-full"
            >
              {/* Text Content */}
              <div className="z-10">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 text-xs font-semibold tracking-wide text-white">
                  {CASE_STUDIES[currentIndex].client}
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  {CASE_STUDIES[currentIndex].title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                  {CASE_STUDIES[currentIndex].desc}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8 max-w-sm">
                  {CASE_STUDIES[currentIndex].stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" withArrow onClick={() => navigateTo('case-studies')}>
                        View Details
                    </Button>
                    <Button variant="ghost" onClick={() => navigateTo('case-studies')}>
                        See All Projects
                    </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative h-full w-full min-h-[300px]">
                 <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full opacity-40"></div>
                 <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                   <div className="absolute inset-0 bg-gray-800 animate-pulse"></div> {/* Loader placeholder */}
                   <img 
                     src={CASE_STUDIES[currentIndex].image} 
                     alt={CASE_STUDIES[currentIndex].title} 
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex gap-2 mt-8 md:mt-0 justify-center md:justify-start">
          {CASE_STUDIES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-brand-accent' : 'w-4 bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;