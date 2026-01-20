import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp, sectionReveal } from '../utils/animations';
import Button from './ui/Button';
import { useNavigation } from '../lib/NavigationContext';

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We dive deep into your business ecosystem to identify bottlenecks and define clear digital KPIs.",
    number: "01"
  },
  {
    icon: PenTool,
    title: "Design & Prototype",
    desc: "We craft intuitive, human-centric interfaces. Our design phase focuses on solving user problems.",
    number: "02"
  },
  {
    icon: Code2,
    title: "Agile Development",
    desc: "Our engineering teams build with scalability in mind using modern stacks and microservices.",
    number: "03"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous testing across devices, security audits, and performance optimization.",
    number: "04"
  },
  {
    icon: Rocket,
    title: "Launch & Evolution",
    desc: "We ensure a seamless go-live experience and provide continuous monitoring and improvements.",
    number: "05"
  }
];

const Ecosystem: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden" id="approach">
      {/* Ambient background blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionReveal}
        >
           <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                The GoPhygital <br /><span className="text-gray-500">Methodology.</span>
              </h2>
           </div>
           <div>
              <p className="text-gray-400 text-lg max-w-md mb-6">
                We don't just build software; we engineer digital transformations through a proven, data-driven 5-step process.
              </p>
              <Button variant="outline" onClick={() => navigateTo('approach')} withArrow>
                Deep Dive into Our Process
              </Button>
           </div>
        </motion.div>

        {/* Process Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              onClick={() => navigateTo('approach')}
              className="liquid-glass rounded-3xl p-10 relative group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              <div className="mb-8 flex justify-between items-start">
                 <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:text-black transition-all duration-300 shadow-inner">
                    <step.icon size={20} />
                 </div>
                 <span className="text-4xl font-display font-bold text-white/5 group-hover:text-white/20 transition-colors">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                {step.desc}
              </p>

              <div className="flex items-center text-xs font-medium text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                 View Deliverables <ArrowRight size={12} className="ml-2" />
              </div>
            </motion.div>
          ))}

          {/* Call to Action Box */}
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl p-10 flex flex-col justify-center items-start cursor-pointer group bg-gradient-to-br from-brand-accent to-brand-accent/80 hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
          >
            <h3 className="text-3xl font-display font-bold text-black mb-4">Start Now</h3>
            <p className="text-black/70 mb-8 font-medium">Ready to engineer your digital future?</p>
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
               <ArrowRight size={20} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
