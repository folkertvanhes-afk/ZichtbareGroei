import React, { useState, useRef } from 'react';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

const Transformation: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
          ONTHUL DE <span className="text-prismatic">HELDERHEID.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Kijk door onze lens en zie hoe jouw praktijk transformeert naar een staat van <span className="text-white font-medium">perfecte flow</span>.
        </p>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-7xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl cursor-none group"
        style={{ '--x': `${pos.x}%`, '--y': `${pos.y}%` } as any}
      >
        {/* BACKGROUND: THE WIREFRAME (Static) */}
        <div className="absolute inset-0 bg-[#0a0c14] p-12 flex items-center justify-center opacity-20">
            <div className="grid grid-cols-4 gap-8 w-full h-full grayscale">
                <div className="col-span-1 border border-slate-700 rounded-[2.5rem]"></div>
                <div className="col-span-2 border border-slate-700 rounded-[3rem]"></div>
                <div className="col-span-1 border border-slate-700 rounded-[2.5rem]"></div>
            </div>
        </div>

        {/* OVERLAY: THE FULL PRISMATIC INTERFACE (Revealed by mask) */}
        <div 
          className="absolute inset-0 bg-[#050810] p-12 flex flex-col justify-center reveal-container transition-transform duration-75"
        >
            <div className="grid grid-cols-4 gap-8 h-full items-center">
                <div className="col-span-1 glass-prism p-8 rounded-[2.5rem] h-full flex flex-col justify-between border-primary/20">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary"><Layers /></div>
                    <div className="space-y-4">
                       <div className="h-2 w-full bg-white/10 rounded"></div>
                       <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    </div>
                </div>
                <div className="col-span-2 glass-prism p-12 rounded-[3rem] border-white/20 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-start">
                        <div className="text-2xl font-black text-white">SYSTEM ACTIVE</div>
                        <ShieldCheck className="text-primary animate-pulse" />
                    </div>
                    <div className="flex gap-4 items-end h-40">
                        {[50, 80, 65, 110, 75, 130, 95, 120].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-primary/10 to-primary/60 rounded-t-2xl h-full" style={{height: `${h}%`}}></div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 glass-prism p-8 rounded-[2.5rem] h-full flex flex-col justify-center border-accent/20">
                    <div className="text-prismatic text-5xl font-black mb-2">98%</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Efficiency Flow</div>
                </div>
            </div>
        </div>

        {/* THE PRISM LENS CURSOR */}
        <div 
          className="absolute w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 pointer-events-none z-50 flex items-center justify-center shadow-[0_0_100px_rgba(45,212,191,0.2)]"
          style={{ 
            left: `${pos.x}%`, 
            top: `${pos.y}%`,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
            backdropFilter: 'contrast(1.2) saturate(1.5)'
          }}
        >
           <div className="w-10 h-10 border-2 border-primary/50 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;