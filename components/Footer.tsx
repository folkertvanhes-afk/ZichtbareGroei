import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  // Simple countdown logic
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-deep-green pt-24 pb-12 border-t border-white/5 relative overflow-hidden text-light" id="contact">
      {/* Background accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Big Final CTA */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-light mb-8"
          >
            Klaar voor <span className="text-primary italic">Groei?</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 rounded-2xl border border-primary/10 backdrop-blur-sm mb-10 shadow-2xl"
          >
            <div className="flex flex-col items-center md:items-start">
                 <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Beperkte Instroom</p>
                 <p className="text-light/60 text-sm">Gratis Strategie Sessie eindigt in:</p>
            </div>
            
            <div className="flex gap-4 text-light font-serif text-3xl md:text-4xl">
               <div className="flex flex-col items-center">
                   <motion.span 
                     key={timeLeft.hours}
                     initial={{ y: -10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     className="leading-none"
                   >
                     0{timeLeft.hours}
                   </motion.span>
                   <span className="text-[10px] text-light/30 font-sans font-bold tracking-widest mt-1">UUR</span>
               </div>
               <span className="opacity-30">:</span>
               <div className="flex flex-col items-center">
                   <motion.span 
                     key={timeLeft.minutes}
                     initial={{ y: -10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     className="leading-none"
                   >
                     {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                   </motion.span>
                   <span className="text-[10px] text-light/30 font-sans font-bold tracking-widest mt-1">MIN</span>
               </div>
               <span className="opacity-30">:</span>
               <div className="flex flex-col items-center">
                   <motion.span 
                     key={timeLeft.seconds}
                     initial={{ y: -10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     className="leading-none text-primary"
                   >
                     {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                   </motion.span>
                   <span className="text-[10px] text-primary/50 font-sans font-bold tracking-widest mt-1">SEC</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              <motion.button 
                onClick={onOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-primary text-deep-green text-lg font-bold rounded-xl hover:bg-[#d4b68f] transition-colors shadow-[0_0_30px_rgba(199,161,116,0.2)] flex items-center gap-3 mx-auto group"
              >
                PLAN ADVIESGESPREK
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="mt-4 text-xs text-light/30">Geen verplichtingen. Direct toegang tot de kalender.</p>
          </motion.div>
        </div>

        {/* Footer Links & Branding */}
        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
               <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
                   <div className="w-10 h-10 rounded-full bg-[#C7A174] flex items-center justify-center text-[#213430] font-bold text-lg tracking-tight group-hover:scale-110 transition-transform">
                     ZG
                   </div>
                   <span className="font-serif text-2xl text-white tracking-wide hidden sm:block group-hover:text-[#C7A174] transition-colors">Zichtbare<span className="italic text-[#C7A174]">Groei</span></span>
               </Link>
               <div className="text-light/30 font-sans ml-2 text-xs">© {new Date().getFullYear()}</div>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-light/40 text-xs font-bold uppercase tracking-widest">
               <a href="/#methode" className="hover:text-primary transition-colors">De Methode</a>
               <Link to="/over-mij" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Over mij</Link>
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="hover:text-primary transition-colors">Algemene Voorwaarden</a>
               <a href="https://wa.me/31643411427" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a>
               <Link to="/flow" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors text-primary/30">Flow Event</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;