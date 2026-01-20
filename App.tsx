import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Ecosystem from './components/Ecosystem';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionsPage from './components/pages/SolutionsPage';
import ApproachPage from './components/pages/ApproachPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import InsightsPage from './components/pages/InsightsPage';
import { NavigationProvider, useNavigation } from './lib/NavigationContext';

const MainContent = () => {
  const { currentPage } = useNavigation();

  return (
    <>
      <Navbar />
      {currentPage === 'home' && (
        <>
          <Hero />
          <Clients />
          <Ecosystem />
          <Services />
          <SocialProof />
          <Insights />
          <FAQ />
        </>
      )}
      {currentPage === 'solutions' && <SolutionsPage />}
      {currentPage === 'approach' && <ApproachPage />}
      {currentPage === 'case-studies' && <CaseStudiesPage />}
      {currentPage === 'insights' && <InsightsPage />}
      
      {/* Contact and Footer are always visible, or could be conditional. 
          Usually contact form is on home, but let's keep it global or just on home. 
          User flow: detail pages should probably lead to contact. 
          Let's keep Contact global but maybe different styling on pages? 
          For simplicity, let's keep Contact on Home and just Footer global.
          Actually, detail pages usually end with a CTA. 
          I'll include Contact on all pages for conversion. 
      */}
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <NavigationProvider>
      <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-brand-dark">
        <MainContent />
      </main>
    </NavigationProvider>
  );
}

export default App;
