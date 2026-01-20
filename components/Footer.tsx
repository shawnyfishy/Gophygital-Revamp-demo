import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050B14] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
               <Logo className="h-20 md:h-24 w-auto" />
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering global enterprises with unified digital ecosystems. We bridge the gap between physical operations and digital intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Digital Ecosystems</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Enterprise Apps</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Cloud & DevOps</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">AR / VR Experiences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GoPhygital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;