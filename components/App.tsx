import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Hero from './Hero';
import Problem from './Problem';
import Transformation from './Transformation';
import BentoFeatures from './BentoFeatures';
import AboutMe from './AboutMe';
import PricingCalculator from './PricingCalculator';
import SocialProof from './SocialProof';
import Footer from './Footer';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <div className="min-h-screen text-light selection:bg-primary selection:text-background font-sans">
      {/* Navigation (Floating Luxury) */}
      <motion.div 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 w-full z-50 flex justify-center px-4"
      >
        <nav className={`transition-all duration-300 border rounded-full px-8 py-4 flex items-center gap-8 max-w-4xl w-full justify-between ${isScrolled ? 'bg-[#213430]/90 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
            <div className="text-lg font-serif text-deep-green tracking-tight flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background text-xs font-bold font-sans">ZG</div>
                <span className={`hidden sm:inline font-bold ${isScrolled ? 'text-light' : 'text-deep-green'}`}>Zichtbare<span className="text-primary italic">Groei</span></span>
            </div>
            
            <div className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest ${isScrolled ? 'text-light/70' : 'text-deep-green/70'}`}>
                <a href="#methode" className="hover:text-primary transition-colors">Methode</a>
                <a href="#over-mij" className="hover:text-primary transition-colors">Over Mij</a>
                <a href="#prijzen" className="hover:text-primary transition-colors">Prijzen</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="#login" className={`text-xs font-bold transition-colors hidden sm:block ${isScrolled ? 'text-light/70 hover:text-light' : 'text-deep-green/70 hover:text-deep-green'}`}>
                  Login
                </a>
            </div>
        </nav>
      </motion.div>

      <main>
        <Hero />
        <SocialProof />
        <Transformation />
        <Problem />
        <BentoFeatures />
        <AboutMe />
        <PricingCalculator />
      </main>

      <Footer />
    </div>
  );
};

export default App;