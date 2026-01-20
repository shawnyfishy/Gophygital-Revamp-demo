import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ContainerScroll } from './ui/ContainerScroll';
import { sectionReveal } from '../utils/animations';

const FAQS = [
  {
    question: "How long does a typical implementation take?",
    answer: "For a full ecosystem transformation, our average timeline is 90 days. This includes discovery, system mapping, integration development, and deployment. Smaller specific modules can be live in as little as 3 weeks."
  },
  {
    question: "Do you integrate with legacy on-premise systems?",
    answer: "Yes. We specialize in hybrid architectures. We connect modern cloud tools with legacy mainframes (SAP, Oracle, custom SQL) using secure API gateways, ensuring you don't need to rip-and-replace your core infrastructure."
  },
  {
    question: "What is the typical investment required?",
    answer: "Our enterprise engagements typically start at $25k for strategic mapping and initial integration modules. However, pricing is customized based on the complexity of your ecosystem. Book a strategy session for a tailored quote."
  },
  {
    question: "How do you handle data security?",
    answer: "We are ISO 27001 certified and GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We implement Role-Based Access Control (RBAC) across all developed solutions."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide comprehensive SLAs with 24/7 monitoring, regular security patching, and iterative feature enhancements. We become your long-term technology partner, not just a one-time vendor."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-dark border-t border-white/5 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={sectionReveal}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Common Questions
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
              Everything you need to understand our process and how we drive value for your enterprise.
            </p>
          </motion.div>
        }
      >
        <div className="space-y-4 p-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={false}
                animate={{ 
                  backgroundColor: isOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0)",
                  borderColor: isOpen ? "rgba(0, 229, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <motion.button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#00E5FF" : "#6B7280" }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                     {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </ContainerScroll>
    </section>
  );
};

export default FAQ;