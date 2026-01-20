import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Palette, Glasses, ArrowRight, Server, Cpu } from 'lucide-react';
import { sectionReveal } from '../utils/animations';
import Button from './ui/Button';
import { useNavigation } from '../lib/NavigationContext';

const SERVICES = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    subtitle: 'Next-Gen Intelligence',
    desc: 'We leverage AI to enhance user experiences and drive engagement through AI-powered solutions. Predictive modeling, NLP, and computer vision integration.',
    icon: Cpu,
    color: '#00E5FF'
  },
  {
    id: 'global-it',
    title: 'Global IT Solutions',
    subtitle: 'Enterprise Architecture',
    desc: 'Empower your business with cutting-edge IT solutions. We specialize in crafting custom-made global business IT solutions that help your brand reach new heights.',
    icon: Server,
    color: '#D946EF'
  },
  {
    id: 'mobile-web',
    title: 'Mobile & Web',
    subtitle: 'Cross-Platform Excellence',
    desc: 'Reinvented for you with creativity and innovation. Custom-made IT solutions ranging from software development to mobile app creation.',
    icon: Smartphone,
    color: '#F59E0B'
  },
  {
    id: 'metaverse',
    title: 'Metaverse & AR/VR',
    subtitle: 'Immersive Realities',
    desc: 'Immersive technology solutions including Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (XR) to create engaging brand experiences.',
    icon: Glasses,
    color: '#10B981'
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    subtitle: 'Human-Centric Design',
    desc: 'Design-led solutions focusing on user interface and user experience for digital products and corporate branding. We design for emotion and function.',
    icon: Palette,
    color: '#6366f1'
  }
];

const Card: React.FC<{ item: typeof SERVICES[0]; index: number; targetScale: number; progress: any; range: any }> = ({ item, index, targetScale, progress, range }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { navigateTo } = useNavigation();
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(-5vh + ${index * 25}px)`,
          willChange: 'transform' // Critical for scroll performance
        }} 
        className="relative flex flex-col w-full max-w-6xl h-[60vh] md:h-[500px] rounded-[2.5rem] liquid-glass-high overflow-hidden origin-top shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/20 gpu-accelerated"
      >
        <div className="grid md:grid-cols-2 h-full">
            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-between h-full relative z-10">
               <div>
                  <div className="flex items-center space-x-3 mb-6">
                     <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                     </div>
                     <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">{item.subtitle}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md font-light">{item.desc}</p>
               </div>
               
               <div className="mt-8">
                  <button 
                    onClick={() => navigateTo('solutions')}
                    className="group flex items-center text-sm font-bold text-white px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                     Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
            </div>

            {/* Visual Side */}
            <div className="relative h-full w-full overflow-hidden">
               {/* Fluid Background for the card */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
               
               {/* Abstract Geometric Pattern */}
               <div className="absolute inset-0 opacity-40" style={{ 
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${item.color} 0%, transparent 60%)`,
                  filter: 'blur(80px)',
                  transform: 'translateZ(0)' // GPU force
               }}></div>
               
               <div className="absolute inset-0 flex items-center justify-center opacity-20 transform rotate-12 scale-110">
                  <item.icon size={300} strokeWidth={0.5} className="text-white" />
               </div>
               
               <div className="absolute bottom-0 right-0 p-12 z-20 mix-blend-overlay">
                  <div className="text-[120px] font-display font-bold text-white/10 leading-none tracking-tighter">
                     0{index + 1}
                  </div>
               </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

const Services: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const { navigateTo } = useNavigation();

  return (
    <section className="bg-brand-dark relative" id="solutions" ref={container}>
       <motion.div 
         className="pt-24 pb-12 px-6 container mx-auto text-center relative z-10"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-50px" }}
         variants={sectionReveal}
       >
          <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Core Solutions</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">Discover how we engineer digital value across every touchpoint of your enterprise.</p>
          
          <Button variant="secondary" onClick={() => navigateTo('solutions')} withArrow>
            View Full Service Catalog
          </Button>
       </motion.div>
       
       <div className="pb-24 relative mt-12">
        {/* Background glow for the stack - CSS Animated */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

        {SERVICES.map((project, i) => {
          const targetScale = 1 - ( (SERVICES.length - i) * 0.05 );
          return <Card key={i} index={i} item={project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
       </div>
    </section>
  );
};

export default Services;
