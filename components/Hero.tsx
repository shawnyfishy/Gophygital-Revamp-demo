import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Activity, Globe, Zap } from 'lucide-react';
import Button from './ui/Button';
import { InteractiveHoverButton } from './ui/InteractiveHoverButton';
import { fadeInUp, textReveal, staggerContainer } from '../utils/animations';
import { InteractiveNebulaShader } from './ui/InteractiveNebulaShader';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate random fluctuations for the bars
  const bars = [40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 95, 60, 75, 80];

  return (
    <section ref={containerRef} className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-brand-dark min-h-[75vh] flex flex-col justify-center">
      {/* Background Elements - Optimized */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
         {/* Shader Background */}
         <InteractiveNebulaShader className="opacity-60" disableCenterDimming />
         
         {/* Gradient Overlay for blending into the next section */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark" />
         
         {/* Grain overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge Reveal */}
          <motion.div variants={fadeInUp} className="liquid-glass px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#00E5FF]"></span>
              <span className="text-xs font-medium text-white tracking-wider uppercase">Trusted by Global Enterprises</span>
            </div>
          </motion.div>

          {/* Masked Headline Reveal - Reduced Size */}
          <div className="mb-4 overflow-hidden">
             <div className="flex flex-col items-center">
                <div className="reveal-overflow pb-2">
                   <motion.h1 variants={textReveal} className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                     Future-Proof Your Business
                   </motion.h1>
                </div>
                <div className="reveal-overflow pb-2">
                   <motion.h1 variants={textReveal} className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-white/40">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">with Intelligent</span> Innovation.
                   </motion.h1>
                </div>
             </div>
          </div>

          {/* Subheadline Reveal - Compact Spacing */}
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            From AI-driven automation to seamless application development—we craft the technology that scales your brand to new heights.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <InteractiveHoverButton 
              text="Discover Our Solutions" 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth'})}
            />
            <Button variant="outline" size="md" className="group h-[50px] px-8" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth'})}>
              View Case Studies
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard Graphic - Liquid Glass Slab - Compact Margin */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-5xl mx-auto perspective-1000 gpu-accelerated"
        >
          <div className="relative rounded-t-[2rem] liquid-glass-high border-b-0 shadow-[0_-20px_60px_rgba(0,229,255,0.05)] overflow-hidden aspect-[16/9] md:aspect-[2.35/1]">
             
             {/* Glossy Sheen */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20"></div>

             {/* UI Header */}
             <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/10 flex items-center justify-between px-6 z-20 bg-white/5 backdrop-blur-xl">
               <div className="flex items-center space-x-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
               </div>
               <div className="hidden md:flex items-center text-[10px] text-gray-400 font-mono space-x-4 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                  <span>CPU: 12%</span>
                  <span>MEM: 4.2GB</span>
                  <span>NET: 1.2GB/s</span>
               </div>
             </div>

             {/* Content Area */}
             <div className="absolute top-10 left-0 right-0 bottom-0 p-6 md:p-8 grid grid-cols-12 gap-6">
                
                {/* Chart Section - Ecosystem Traffic */}
                <div 
                  className="col-span-12 md:col-span-8 liquid-glass rounded-2xl p-5 relative overflow-hidden group"
                  onMouseMove={handleMouseMove}
                >
                   {/* Mouse Spotlight Effect */}
                   <motion.div
                     className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                     style={{
                       background: useMotionTemplate`
                         radial-gradient(
                           400px circle at ${mouseX}px ${mouseY}px,
                           rgba(0, 229, 255, 0.1),
                           transparent 80%
                         )
                       `,
                     }}
                   />
                   
                   {/* Scroll Scanline Effect */}
                   <motion.div 
                        style={{ top: useTransform(scrollYProgress, [0, 1], ["-10%", "150%"]) }}
                        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent z-0 pointer-events-none"
                   />

                   <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                         <h3 className="text-white font-medium text-lg">Ecosystem Traffic</h3>
                         <p className="text-xs text-gray-400 mt-1">Real-time node activity</p>
                      </div>
                      <div className="p-2 rounded-full bg-white/10 text-brand-accent">
                         <Activity className="w-5 h-5 animate-pulse" />
                      </div>
                   </div>
                   
                   {/* Animated Bars */}
                   <div className="flex items-end justify-between h-20 md:h-32 gap-2 relative z-10">
                      {bars.map((h, i) => (
                         <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           animate={{ 
                               height: [`${h}%`, `${Math.max(20, h + (Math.random() * 30 - 15))}%`, `${h}%`],
                               opacity: [0.7, 1, 0.7]
                           }}
                           transition={{ 
                               duration: 2 + Math.random() * 2, 
                               repeat: Infinity, 
                               ease: "easeInOut",
                               delay: i * 0.05 
                           }}
                           className="w-full bg-gradient-to-t from-brand-accent/60 to-white/10 rounded-t-sm relative overflow-hidden backdrop-blur-sm"
                         >
                            <div className="absolute inset-0 bg-brand-accent/20 blur-sm"></div>
                         </motion.div>
                      ))}
                   </div>
                </div>

                {/* Side Stats */}
                <div className="hidden md:flex col-span-4 flex-col gap-4">
                   <div className="flex-1 liquid-glass rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors">
                      <div className="absolute -right-4 -top-4 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"><Globe size={60} /></div>
                      <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">2.4M</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Active Users</div>
                      <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }} className="h-full bg-gradient-to-r from-brand-purple to-brand-accent shadow-[0_0_10px_#D946EF]" />
                      </div>
                   </div>
                   <div className="flex-1 liquid-glass rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden group hover:bg-white/5 transition-colors">
                      <div className="absolute -right-4 -top-4 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"><Zap size={60} /></div>
                      <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">99.9%</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">System Uptime</div>
                      <div className="mt-3 flex gap-2">
                         {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 flex-1 bg-green-500/50 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]" />)}
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;