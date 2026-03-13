import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel mb-10 border-deep-green/5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-green/70">De Blauwdruk voor 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-4 text-deep-green tracking-tight">
          Krijg Je Tijd <br />
          <span className="text-primary italic">Terug.</span>
        </h1>
        
        <div className="text-xl md:text-3xl font-serif text-deep-green mb-8 opacity-90">
            Eén simpel systeem voor al je klanten.
        </div>
        
        <p className="text-xl md:text-2xl text-deep-green/70 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Vervang je losse agenda, mailprogramma en Excel-lijstjes. Krijg één overzichtelijk dashboard voor al je leads, afspraken en berichten. <strong>100% Done-For-You ingericht.</strong>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-20">
          <button className="px-10 py-5 bg-deep-green text-light font-bold rounded-xl hover:bg-deep-green/90 transition-all shadow-xl flex items-center gap-3 group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              START MIJN TRANSFORMATIE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          <button className="px-10 py-5 glass-panel text-deep-green font-medium rounded-xl hover:bg-white/50 transition-all flex items-center gap-3 group">
            <Sparkles size={18} className="text-primary" /> 
            <span className="group-hover:text-primary transition-colors">BEKIJK DE ROADMAP</span>
          </button>
        </div>

        {/* Creative Visual Element instead of Calculator */}
        <div className="max-w-5xl mx-auto w-full reveal-up mt-12 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 group">
                <div className="absolute inset-0 bg-deep-green/10 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Calm Workspace" 
                  className="w-full h-[400px] object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Glass Card */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 glass-panel p-6 rounded-2xl border border-white/30 shadow-lg backdrop-blur-md max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <p className="text-deep-green font-bold text-sm">Volledige Focus</p>
                            <p className="text-deep-green/60 text-xs">Geen technische afleiding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;