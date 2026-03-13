import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import BentoFeatures from './BentoFeatures';
import PricingCalculator from './PricingCalculator';
import SocialProof from './SocialProof';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-light selection:bg-primary selection:text-background font-sans">
      {/* Navigation (Floating Luxury) */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="bg-[#213430]/90 backdrop-blur-xl border border-white/5 rounded-full px-8 py-4 shadow-2xl flex items-center gap-8 max-w-4xl w-full justify-between">
            <div className="text-lg font-serif text-light tracking-tight flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background text-xs font-bold font-sans">ZG</div>
                <span className="hidden sm:inline">Zichtbare<span className="text-primary italic">Groei</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-light/60">
                <a href="#" className="hover:text-primary transition-colors">Methode</a>
                <a href="#" className="hover:text-primary transition-colors">Prijzen</a>
                <a href="#" className="hover:text-primary transition-colors">Cases</a>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-xs font-bold text-light/60 hover:text-light transition-colors hidden sm:block">
                  Login
                </button>
                <button className="px-6 py-2 rounded-full bg-light text-[#213430] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Demo
                </button>
            </div>
        </nav>
      </div>

      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <BentoFeatures />
        <PricingCalculator />
      </main>

      <Footer />
    </div>
  );
};

export default App;