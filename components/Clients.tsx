import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionReveal } from '../utils/animations';
import { VelocityScroll } from './ui/VelocityScroll';

interface Client {
  name: string;
  logo: string;
}

const CLIENTS: Client[] = [
  { name: "Adani Airports", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Adani_Group_logo.png/800px-Adani_Group_logo.png" },
  { name: "P&G", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/2560px-Procter_%26_Gamble_logo.svg.png" },
  { name: "ICICI Lombard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png" },
  { name: "Pidilite", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Pidilite_logo.svg/1200px-Pidilite_logo.svg.png" },
  { name: "Creative Galileo", logo: "https://logo.clearbit.com/creativegalileo.com" },
  { name: "Toondemy", logo: "https://logo.clearbit.com/toondemy.com" },
  { name: "Ben & Bella", logo: "https://logo.clearbit.com/benandbella.com" },
  { name: "amp", logo: "https://logo.clearbit.com/ampsoundbranding.com" }, 
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-[#050B14] border-b border-white/5 overflow-hidden relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionReveal}
        className="container mx-auto px-6 mb-12"
      >
        <p className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase">Trusted by Industry Leaders</p>
      </motion.div>
      
      {/* Liquid Glass Strip Overlay */}
      <div className="absolute inset-y-0 left-0 w-full bg-white/[0.01] pointer-events-none"></div>
      
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 z-10 w-32 h-full bg-gradient-to-r from-[#050B14] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 z-10 w-32 h-full bg-gradient-to-l from-[#050B14] to-transparent pointer-events-none"></div>

      <div className="relative w-full">
         <VelocityScroll defaultVelocity={1.5}>
             <div className="flex items-center">
                {CLIENTS.map((client, index) => (
                    <ClientLogo key={index} client={client} />
                ))}
             </div>
         </VelocityScroll>
      </div>
    </section>
  );
};

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center justify-center mx-8 md:mx-12 h-24 w-40 transition-all duration-300 group/logo">
      {!imgError ? (
        <img 
          src={client.logo} 
          alt={`${client.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-12 w-auto object-contain transition-all duration-500 
            opacity-50 grayscale brightness-[100] contrast-0
            group-hover/logo:filter-none group-hover/logo:opacity-100 group-hover/logo:brightness-100 group-hover/logo:contrast-100"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm group-hover/logo:border-white/20 group-hover/logo:bg-white/10 transition-all">
          <span className="text-sm md:text-base font-bold text-gray-400 group-hover/logo:text-white font-display whitespace-nowrap transition-colors duration-300 cursor-default tracking-wide">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default Clients;