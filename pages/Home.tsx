import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Roadmap from '../components/Roadmap';
import BentoFeatures from '../components/BentoFeatures';
import PricingCalculator from '../components/PricingCalculator';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-deep-green selection:bg-primary selection:text-white font-sans">
      {/* Navigation (Floating Luxury Pill) */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="bg-deep-green/95 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl flex items-center gap-8 max-w-4xl w-full justify-between transition-all hover:scale-[1.01]">
            <div className="text-lg font-serif text-light tracking-tight flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-deep-green text-xs font-bold font-sans">ZG</div>
                <span className="hidden sm:inline">Zichtbare<span className="text-primary italic">Groei</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-light/70">
                <a href="#" className="hover:text-primary transition-colors">Methode</a>
                <a href="#" className="hover:text-primary transition-colors">Calculator</a>
                <a href="#" className="hover:text-primary transition-colors">Cases</a>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-xs font-bold text-light/70 hover:text-light transition-colors hidden sm:block">
                  Login
                </button>
                <button className="px-6 py-2 rounded-full bg-primary text-deep-green text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Demo
                </button>
            </div>
        </nav>
      </div>

      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Roadmap />
        <BentoFeatures />
        <PricingCalculator />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
