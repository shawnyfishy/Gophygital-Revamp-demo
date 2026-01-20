import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BarChart3, Target, Zap } from 'lucide-react';
import { useNavigation } from '../../lib/NavigationContext';
import Button from '../ui/Button';
import { sectionReveal, staggerContainer, fadeInUp } from '../../utils/animations';

const CASES = [
  {
    client: "Adani Airports",
    title: "AI-Powered Passenger Information Kiosks",
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=2000",
    tags: ["AI", "Kiosk", "Travel Tech"],
    challenge: "Adani Airports managed millions of passengers who faced long wait times at information desks. They needed a contactless, automated solution to handle common queries about flights, gates, and amenities.",
    solution: "We engineered a network of smart kiosks powered by a custom NLP engine. The system understands natural language queries in multiple languages, provides real-time 3D wayfinding to gates, and integrates with the airport's live flight database.",
    results: [
      "30% reduction in help-desk queues",
      "45 second average query resolution time",
      "95% passenger satisfaction rate"
    ]
  },
  {
    client: "Creative Galileo",
    title: "Toondemy: India's #1 Early Learning App",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
    tags: ["EdTech", "Mobile App", "Gamification"],
    challenge: "The client wanted to create an educational platform featuring licensed characters like Little Singham. The challenge was to balance entertainment with rigorous curriculum standards for kids aged 3-10.",
    solution: "We built a robust mobile ecosystem that adapts learning paths based on child performance. The app features gamified lessons, parental dashboards for tracking progress, and a secure, COPPA-compliant backend.",
    results: [
      "7 Million+ Downloads globally",
      "Listed in HolonIQ's Top 100 Startups",
      "4.6/5 Average App Store Rating"
    ]
  },
  {
    client: "ICICI Lombard",
    title: "Unified Digital Claims Ecosystem",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    tags: ["FinTech", "Mobile", "Automation"],
    challenge: "Insurance claim processing was manual, paper-heavy, and slow, leading to customer dissatisfaction.",
    solution: "We developed a mobile-first claims solution with OCR for document scanning and automated workflow triggers. The system allows surveyors to upload evidence in real-time and automates approval routing.",
    results: [
      "60% Faster Claim Processing",
      "Reduced operational costs by 40%",
      "Real-time status tracking for customers"
    ]
  },
  {
    client: "Ben & Bella",
    title: "Phygital AR Learning Experience",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop",
    tags: ["AR", "EdTech", "Unity"],
    challenge: "Traditional flashcards were failing to engage digital-native children in language learning.",
    solution: "We created the 'Treasure Box' AR app. When children point their device at physical cards, 3D animated characters spring to life, pronouncing words and performing actions, creating a bridge between physical play and digital learning.",
    results: [
      "200% increase in session duration",
      "Award-winning immersive design",
      "Global adoption in 15+ countries"
    ]
  },
  {
    client: "Pidilite",
    title: "Dealer Loyalty & Management Platform",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    tags: ["B2B", "Web Portal", "Data"],
    challenge: "Managing a massive network of unorganized dealers and distributors with fragmented data.",
    solution: "We built a centralized B2B portal that gamifies dealer targets. It tracks inventory, manages scheme payouts, and provides predictive analytics on sales trends.",
    results: [
      "50,000+ Dealers Onboarded",
      "90% Digital Adoption Rate",
      "Real-time inventory visibility"
    ]
  },
  {
    client: "P&G",
    title: "ZzzQuil Sleep Profiler",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop",
    tags: ["Consumer Web", "3D", "Health"],
    challenge: "Engaging consumers in a boring category (sleep aids) to collect zero-party data.",
    solution: "An immersive, 3D web experience where users take a 'Sleep Profile' quiz. The interactive visuals and personalized results page made data collection fun and shareable.",
    results: [
      "650 Million+ Brand Reach",
      "High conversion to purchase",
      "Valuable consumer lifestyle data collected"
    ]
  }
];

const CaseStudiesPage: React.FC = () => {
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
             Client <span className="text-brand-accent">Success Stories</span>
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
             See how we've helped global enterprises transform their operations and customer experiences through technology.
           </p>
         </motion.div>

         <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="space-y-24"
         >
           {CASES.map((study, index) => (
             <motion.div 
               key={index} 
               variants={fadeInUp}
               className="grid md:grid-cols-2 gap-12 items-center"
             >
               {/* Image Side */}
               <div className={`relative rounded-3xl overflow-hidden shadow-2xl group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={study.image} alt={study.title} loading="lazy" decoding="async" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>

               {/* Content Side */}
               <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                 <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2">{study.client}</div>
                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{study.title}</h2>
                 
                 <div className="space-y-6 mb-8">
                    <div>
                       <div className="flex items-center gap-2 text-white font-semibold mb-2">
                          <Target size={18} className="text-red-400" /> Challenge
                       </div>
                       <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                       <div className="flex items-center gap-2 text-white font-semibold mb-2">
                          <Zap size={18} className="text-yellow-400" /> Solution
                       </div>
                       <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                 </div>

                 <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div className="flex items-center gap-2 text-white font-semibold mb-4">
                       <BarChart3 size={18} className="text-brand-accent" /> Key Results
                    </div>
                    <ul className="space-y-2">
                       {study.results.map((res, i) => (
                          <li key={i} className="flex items-center text-gray-300 text-sm">
                             <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-3"></span>
                             {res}
                          </li>
                       ))}
                    </ul>
                 </div>
               </div>
             </motion.div>
           ))}
         </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;