import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Smartphone, Glasses, Gamepad2, Database, Layout } from 'lucide-react';
import { useNavigation } from '../../lib/NavigationContext';
import Button from '../ui/Button';
import { sectionReveal, staggerContainer, fadeInUp } from '../../utils/animations';

const SOLUTIONS_DETAIL = [
  {
    id: 'immersive',
    title: 'Immersive Technologies (AR/VR/MR)',
    icon: Glasses,
    description: 'We bridge the physical and digital worlds to create memorable brand experiences. From marketing activations to enterprise training simulations.',
    capabilities: [
      'Augmented Reality (AR) Manuals & Maintenance',
      'Virtual Reality (VR) Safety Training',
      'Mixed Reality (MR) Product Visualization',
      'WebAR Marketing Campaigns',
      'Metaverse Space Design'
    ],
    color: '#10B981'
  },
  {
    id: 'gamification',
    title: 'Gamification & Game Design',
    icon: Gamepad2,
    description: 'We apply game mechanics to non-game contexts to drive engagement, loyalty, and learning outcomes for employees and customers.',
    capabilities: [
      'Corporate Training Games (Serious Games)',
      'Customer Loyalty Programs',
      'Sales Motivation Leaderboards',
      'Educational App Development',
      'Unity & Unreal Engine Development'
    ],
    color: '#F59E0B'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence & ML',
    icon: Cpu,
    description: 'Transform raw data into actionable intelligence. We build predictive models and intelligent agents that automate complex workflows.',
    capabilities: [
      'Natural Language Processing (NLP) Chatbots',
      'Computer Vision for Retail & Security',
      'Predictive Analytics Engines',
      'Recommendation Systems',
      'Generative AI Integration'
    ],
    color: '#00E5FF'
  },
  {
    id: 'product',
    title: 'Product Engineering (Web & Mobile)',
    icon: Smartphone,
    description: 'End-to-end software development services. We build robust, scalable applications that serve as the backbone of your digital ecosystem.',
    capabilities: [
      'Enterprise Mobility Solutions',
      'Progressive Web Apps (PWA)',
      'Cross-Platform Development (Flutter/React Native)',
      'Cloud-Native Architecture',
      'Microservices & API Development'
    ],
    color: '#D946EF'
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    icon: Database,
    description: 'Connect your physical assets to the digital cloud. We enable smart operations through sensor data and real-time monitoring.',
    capabilities: [
      'Smart Office & Building Solutions',
      'Industrial IoT (IIoT) Dashboards',
      'Beacon & Sensor Integration',
      'Wearable App Development',
      'Edge Computing Solutions'
    ],
    color: '#6366f1'
  },
  {
    id: 'ux',
    title: 'Experience Design (UI/UX)',
    icon: Layout,
    description: 'Human-centric design that removes friction. We ensure your complex enterprise tools are as intuitive as consumer apps.',
    capabilities: [
      'User Research & Persona Mapping',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Design Systems',
      'Usability Testing'
    ],
    color: '#F43F5E'
  }
];

const SolutionsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark relative">
       {/* Background */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-navy to-brand-dark z-0"></div>
       
       <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial="hidden"
           animate="visible"
           variants={sectionReveal}
           className="mb-12"
         >
           <button 
             onClick={() => navigateTo('home')}
             className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
           >
             <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
             Back to Home
           </button>
           
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
             Our <span className="text-brand-accent">Solutions</span> Ecosystem
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
             We offer a comprehensive suite of digital technologies designed to solve complex enterprise challenges. 
             From immersive realities to intelligent backends, we build it all.
           </p>
         </motion.div>

         <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
         >
           {SOLUTIONS_DETAIL.map((solution) => (
             <motion.div 
               key={solution.id}
               variants={fadeInUp}
               className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-[#111] transition-all group shadow-lg"
             >
               <div 
                 className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                 style={{ backgroundColor: `${solution.color}20`, color: solution.color }}
               >
                 <solution.icon size={28} />
               </div>
               
               <h3 className="text-2xl font-bold mb-4 font-display">{solution.title}</h3>
               <p className="text-gray-400 mb-6 min-h-[80px]">
                 {solution.description}
               </p>
               
               <div className="space-y-3">
                 <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Capabilities</div>
                 {solution.capabilities.map((cap, i) => (
                   <div key={i} className="flex items-start text-sm text-gray-300">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 mr-3 shrink-0"></span>
                     {cap}
                   </div>
                 ))}
               </div>

               <div className="mt-8 pt-6 border-t border-white/5">
                 <Button variant="outline" size="sm" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                    Consult on {solution.title.split(' ')[0]}
                 </Button>
               </div>
             </motion.div>
           ))}
         </motion.div>
         
         <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-6">Not sure what you need?</h3>
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Book a Discovery Call
            </Button>
         </div>
       </div>
    </section>
  );
};

export default SolutionsPage;
