import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-deep-green pt-24 pb-12 border-t border-white/5 relative overflow-hidden text-light">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Big Final CTA */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif text-light mb-8">
            Klaar voor <span className="text-primary italic">Groei?</span>
          </h2>
          
          <div className="bg-white/5 inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 rounded-2xl border border-primary/10 backdrop-blur-sm mb-10 shadow-2xl">
            <div className="flex flex-col items-center md:items-start">
                 <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Beperkte Instroom</p>
                 <p className="text-light/60 text-sm">Gratis Strategie Sessie eindigt in:</p>
            </div>
            
            <div className="flex gap-4 text-light font-serif text-3xl md:text-4xl">
               <div className="flex flex-col items-center">
                   <span className="leading-none">0{timeLeft.hours}</span>
                   <span className="text-[10px] text-light/30 font-sans font-bold tracking-widest mt-1">UUR</span>
               </div>
               <span className="opacity-30">:</span>
               <div className="flex flex-col items-center">
                   <span className="leading-none">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
                   <span className="text-[10px] text-light/30 font-sans font-bold tracking-widest mt-1">MIN</span>
               </div>
               <span className="opacity-30">:</span>
               <div className="flex flex-col items-center">
                   <span className="leading-none text-primary">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                   <span className="text-[10px] text-primary/50 font-sans font-bold tracking-widest mt-1">SEC</span>
               </div>
            </div>
          </div>

          <div>
             <button className="px-10 py-5 bg-primary text-deep-green text-lg font-bold rounded-xl hover:bg-[#d4b68f] transition-all shadow-[0_0_30px_rgba(199,161,116,0.2)] flex items-center gap-3 mx-auto group">
                START MIJN STRATEGIE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-4 text-xs text-light/30">Geen verplichtingen. Direct toegang tot de kalender.</p>
          </div>
        </div>

        {/* Footer Links & Branding */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-deep-green text-xs font-bold">ZG</div>
               <div className="text-light text-sm font-serif">
                 Zichtbare<span className="text-primary italic">Groei</span>
                 <span className="text-light/30 font-sans ml-2 text-xs">© {new Date().getFullYear()}</span>
               </div>
           </div>
           
           <div className="flex gap-8 text-light/40 text-xs font-bold uppercase tracking-widest">
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="hover:text-primary transition-colors">Algemene Voorwaarden</a>
               <a href="#" className="hover:text-primary transition-colors">Contact</a>
           </div>

           <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-light/40 hover:text-primary hover:border-primary/50 transition-all bg-white/5">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-light/40 hover:text-primary hover:border-primary/50 transition-all bg-white/5">
                <Linkedin size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-light/40 hover:text-primary hover:border-primary/50 transition-all bg-white/5">
                <Mail size={18} />
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;