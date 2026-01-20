import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Lightbulb, Trophy, Star, BookOpen, Podcast } from 'lucide-react';
import { MorphingCardStack, CardData } from './ui/MorphingCardStack';
import { sectionReveal } from '../utils/animations';
import { useNavigation } from '../lib/NavigationContext';

const INSIGHTS_DATA: CardData[] = [
  {
    id: '1',
    title: 'AI Digital Twins Explained',
    description: 'As businesses become increasingly data‑driven, the ability to simulate, predict, and optimize real‑world systems has become a competitive necessity. This is where AI digital twins are transforming how organizations design and operate.',
    icon: <Cpu size={20} />,
    color: '#00E5FF',
    date: 'New',
    author: 'Tech Team'
  },
  {
    id: '2',
    title: 'The Power of Sonic Branding',
    description: 'Leveraging tools like Sonic Check® to create holistic sonic identities. How machine listening algorithms can predict how your brand assets will perform and drive emotional connections.',
    icon: <Podcast size={20} />,
    color: '#D946EF',
    date: 'Strategy',
    author: 'Design Lead'
  },
  {
    id: '3',
    title: 'Transforming Education',
    description: 'How Creative Galileo achieved 7 million downloads by combining award-winning curriculum experts with cutting-edge mobile app development for early childhood learning.',
    icon: <Trophy size={20} />,
    color: '#F59E0B',
    date: 'Case Study',
    author: 'Creative Galileo'
  },
  {
    id: '4',
    title: 'The Future of AR in Retail',
    description: 'Augmented Reality is no longer just a gimmick. It is driving conversion rates up by 40% in e-commerce applications by allowing customers to visualize products in their own space.',
    icon: <Lightbulb size={20} />,
    color: '#10B981',
    date: 'Trend',
    author: 'Innovation'
  },
  {
    id: '5',
    title: 'Phygital Ecosystems',
    description: 'Bridging the physical and digital worlds requires a robust backend architecture. We explore the microservices patterns that enable seamless phygital experiences.',
    icon: <Star size={20} />,
    color: '#6366f1',
    date: 'Tech',
    author: 'Engineering'
  },
  {
    id: '6',
    title: 'Enterprise UX Design Principles',
    description: 'Why B2B applications need consumer-grade UX. Reducing cognitive load for employees leads to higher productivity and reduced training costs.',
    icon: <BookOpen size={20} />,
    color: '#F43F5E',
    date: 'Design',
    author: 'UX Team'
  }
];

const Insights: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-24 bg-brand-dark relative" id="insights">
      {/* Background Ambience */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-brand-navy/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionReveal}
        >
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Knowledge Hub</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Insights & <span className="text-gray-500">Perspectives</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg">
                Explore our latest thinking on technology, design, and digital transformation. Swipe to browse or switch views.
            </p>
          </div>
          <motion.button 
            onClick={() => navigateTo('insights')}
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center text-white font-semibold hover:text-brand-accent transition-colors mt-6 md:mt-0"
          >
            View All Articles <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>

        <div className="min-h-[400px]">
            <MorphingCardStack 
                cards={INSIGHTS_DATA} 
                defaultLayout="grid" 
                className="max-w-6xl mx-auto"
                onCardClick={() => navigateTo('insights')}
            />
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button onClick={() => navigateTo('insights')} className="inline-flex items-center text-white font-semibold hover:text-brand-accent transition-colors">
            View All Articles <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
