import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Roadmap from '../components/Roadmap';
import BentoFeatures from '../components/BentoFeatures';
import PricingCalculator from '../components/PricingCalculator';
import SocialProof from '../components/SocialProof';
import Founder from '../components/Founder';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import AdviesgesprekForm from '../components/AdviesgesprekForm';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen text-deep-green selection:bg-primary selection:text-white font-sans relative">
      {/* Navigation (Floating Luxury Pill) - Changed from fixed to absolute */}
      <div className="absolute top-6 left-0 w-full z-50 flex justify-center px-4">
        <nav className="bg-deep-green/95 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl flex items-center gap-8 max-w-4xl w-full justify-between transition-all hover:scale-[1.01]">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#C7A174] flex items-center justify-center text-[#213430] font-bold text-lg tracking-tight group-hover:scale-110 transition-transform">
                  ZG
                </div>
                <span className="font-serif text-2xl text-white tracking-wide hidden sm:block group-hover:text-[#C7A174] transition-colors">Zichtbare<span className="italic text-[#C7A174]">Groei</span></span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-light/70">
                <a href="/#methode" className="hover:text-primary transition-colors">Methode</a>
                <a href="#over-mij" className="hover:text-primary transition-colors">Over mij</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="https://app.klusvol.nl" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-light/70 hover:text-light transition-colors hidden sm:block">
                  Login
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 rounded-full bg-primary text-deep-green text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Adviesgesprek
                </button>
            </div>
        </nav>
      </div>

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <SocialProof />
        <Problem />
        <Roadmap />
        <BentoFeatures />
        <PricingCalculator />
        <Founder onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AdviesgesprekForm />
      </Modal>
    </div>
  );
};

export default Home;
