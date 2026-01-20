import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../lib/NavigationContext';
import { sectionReveal, staggerContainer, fadeInUp } from '../../utils/animations';

const ARTICLES = [
  {
    id: 1,
    category: "Technology",
    title: "AI Digital Twins: The Future of Enterprise Simulation",
    excerpt: "Digital twins are moving beyond manufacturing. Learn how service-based enterprises are using AI clones to predict market shifts and optimize workforce allocation.",
    author: "CTO Office",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    category: "Branding",
    title: "Sonic Branding in the Age of Voice UI",
    excerpt: "With the rise of Alexa and Siri, your brand needs a sound. We explore how machine listening algorithms help brands find their unique sonic identity.",
    author: "Design Team",
    date: "Sep 28, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "Retail",
    title: "Phygital Retail: Merging Brick-and-Mortar with E-commerce",
    excerpt: "The store of the future is not just a place to buy, but a place to experience. How AR mirrors and endless-aisle kiosks are saving physical retail.",
    author: "Strategy Lead",
    date: "Sep 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    category: "Healthcare",
    title: "Gamification in Patient Recovery",
    excerpt: "How turning physical therapy into a video game increases patient adherence by 40%. Case studies from leading hospitals.",
    author: "Product Team",
    date: "Aug 30, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    category: "Metaverse",
    title: "Is the Enterprise Metaverse Dead?",
    excerpt: "Hype vs. Reality. While the consumer metaverse struggles, industrial metaverse applications for training and collaboration are booming.",
    author: "Innovation Lab",
    date: "Aug 10, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    category: "UX Design",
    title: "Reducing Cognitive Load in B2B Dashboards",
    excerpt: "Enterprise software doesn't have to be ugly. Principles for designing complex data visualizations that executives can actually understand.",
    author: "UX Lead",
    date: "Jul 22, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

const InsightsPage: React.FC = () => {
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
             Insights & <span className="text-brand-accent">Perspectives</span>
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
             Deep dives into technology trends, design thinking, and digital transformation strategy from our experts.
           </p>
         </motion.div>

         <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
         >
           {ARTICLES.map((article) => (
             <motion.article 
               key={article.id}
               variants={fadeInUp}
               className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-all group flex flex-col h-full"
             >
               <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 text-xs font-bold bg-brand-accent text-black rounded-full uppercase tracking-wide">
                        {article.category}
                     </span>
                  </div>
               </div>
               
               <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                     {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                     {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4 mt-auto">
                     <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                     </div>
                     <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  
                  <div className="mt-4 pt-4">
                     <button className="flex items-center text-sm font-semibold text-white group-hover:underline">
                        Read Article <ArrowUpRight size={14} className="ml-1" />
                     </button>
                  </div>
               </div>
             </motion.article>
           ))}
         </motion.div>
      </div>
    </section>
  );
};

export default InsightsPage;