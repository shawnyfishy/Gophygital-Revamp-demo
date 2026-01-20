import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, PenTool, Code2, ShieldCheck, Rocket, RefreshCw } from 'lucide-react';
import { useNavigation } from '../../lib/NavigationContext';
import { sectionReveal, fadeInUp, staggerContainer } from '../../utils/animations';

const PHASES = [
  {
    id: 1,
    title: "Discovery & Strategy",
    icon: Search,
    desc: "We begin by understanding your business goals, user needs, and technical constraints. This phase eliminates assumptions.",
    deliverables: [
      "Stakeholder Interviews",
      "Competitor Analysis",
      "Technical Feasibility Audit",
      "Product Roadmap Definition",
      "KPI Setup"
    ]
  },
  {
    id: 2,
    title: "Experience Design",
    icon: PenTool,
    desc: "We translate requirements into intuitive interfaces. Our design philosophy prioritizes usability and emotional connection.",
    deliverables: [
      "User Persona Mapping",
      "Information Architecture",
      "Low/High Fidelity Wireframes",
      "Interactive Prototypes",
      "Design System Creation"
    ]
  },
  {
    id: 3,
    title: "Agile Development",
    icon: Code2,
    desc: "Our engineering team builds robust, scalable solutions using modern tech stacks and microservices architecture.",
    deliverables: [
      "Sprint Planning",
      "Frontend & Backend Development",
      "API Integration",
      "Database Architecture",
      "Weekly Code Reviews"
    ]
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: ShieldCheck,
    desc: "We rigorously test every feature to ensure stability, security, and performance across all devices.",
    deliverables: [
      "Functional Testing",
      "UI/UX Testing",
      "Security Audits (VAPT)",
      "Performance Load Testing",
      "Cross-Device Compatibility"
    ]
  },
  {
    id: 5,
    title: "Deployment & Launch",
    icon: Rocket,
    desc: "We ensure a smooth transition to production with zero downtime strategies and comprehensive documentation.",
    deliverables: [
      "Cloud Environment Setup",
      "CI/CD Pipeline Configuration",
      "App Store Submission",
      "User Training Manuals",
      "Go-Live Support"
    ]
  },
  {
    id: 6,
    title: "Evolution & Support",
    icon: RefreshCw,
    desc: "Digital products are living ecosystems. We provide ongoing maintenance and iterative improvements based on data.",
    deliverables: [
      "24/7 Uptime Monitoring",
      "Bug Fixes & Patches",
      "Feature Enhancements",
      "Analytics Reporting",
      "OS Update Compatibility"
    ]
  }
];

const ApproachPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
           initial="hidden"
           animate="visible"
           variants={sectionReveal}
           className="mb-16"
         >
           <button 
             onClick={() => navigateTo('home')}
             className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
           >
             <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
             Back to Home
           </button>
           
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
             The <span className="text-brand-accent">GoPhygital</span> Methodology
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
             Our process is built on transparency, agility, and engineering excellence. Here is exactly how we take your idea from concept to enterprise-grade reality.
           </p>
         </motion.div>

         <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/0 via-brand-accent/50 to-brand-accent/0 transform -translate-x-1/2"></div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-12 lg:space-y-24"
            >
              {PHASES.map((phase, index) => (
                <motion.div 
                  key={phase.id}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Icon Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-dark border-4 border-brand-card z-10 items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <div className="w-4 h-4 rounded-full bg-brand-accent"></div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 w-full lg:text-right">
                     <div className={`lg:pr-12 ${index % 2 !== 0 ? 'lg:text-left lg:pl-12 lg:pr-0' : ''}`}>
                        <div className="flex items-center gap-4 mb-4 lg:justify-end lg:flex-row-reverse">
                           <span className="text-6xl font-display font-bold text-white/10">0{phase.id}</span>
                           <h3 className="text-3xl font-bold">{phase.title}</h3>
                        </div>
                        <p className="text-gray-400 text-lg mb-6">{phase.desc}</p>
                     </div>
                  </div>

                  {/* Card Side */}
                  <div className="flex-1 w-full">
                     <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-brand-accent/30 transition-colors ${index % 2 !== 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                           <phase.icon className="text-brand-accent" size={24} />
                           <span className="font-semibold text-white">Key Deliverables</span>
                        </div>
                        <ul className="space-y-3">
                           {phase.deliverables.map((item, i) => (
                              <li key={i} className="flex items-center text-gray-300 text-sm">
                                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50 mr-3"></span>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default ApproachPage;
