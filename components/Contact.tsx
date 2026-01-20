import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && email) {
      setStep(2);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-navy/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto liquid-glass-high rounded-[2.5rem] p-8 md:p-12 border-t border-l border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Value Prop */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Start Your Transformation
              </h2>
              <p className="text-gray-400 mb-8 font-light">
                Book a free 30-minute strategy session. We'll map out your current bottlenecks and propose a unified ecosystem architecture.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "No commitment required",
                  "Speak directly with a Senior Architect",
                  "Receive a custom roadmap PDF"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle className="text-brand-accent w-5 h-5 mr-3 drop-shadow-lg" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 rounded-xl p-3 w-fit backdrop-blur-sm border border-white/5">
                 <ShieldCheck className="w-4 h-4" />
                 <span>ISO 27001 Certified & GDPR Compliant</span>
              </div>
            </div>

            {/* Right Column: Progressive Form */}
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              
              {step === 1 ? (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all backdrop-blur-sm"
                    />
                  </div>
                  <Button type="submit" className="w-full shadow-lg shadow-brand-accent/20" size="lg">
                    Book Strategy Session
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Limited slots: Only 4 sessions available this week.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center py-8 relative z-10"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">You're almost there!</h3>
                  <p className="text-gray-400 mb-6">
                    We've sent a calendar link to <span className="text-white font-medium">{email}</span>. Please choose a time that works for you.
                  </p>
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Use different email
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;