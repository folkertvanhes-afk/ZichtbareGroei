import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Calendar, MessageCircle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Parallax transforms for floating elements
  const translateX1 = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const translateY1 = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);
  
  const translateX2 = useTransform(mouseXSpring, [-0.5, 0.5], [40, -40]);
  const translateY2 = useTransform(mouseYSpring, [-0.5, 0.5], [40, -40]);

  const translateX3 = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const translateY3 = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/40 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel mb-10 border-deep-green/5"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-green/70">De Blauwdruk voor 2026</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-4 text-deep-green tracking-tight"
        >
          Krijg Je Tijd <br />
          <span className="text-primary italic relative inline-block">
            Terug.
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
            />
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl font-serif text-deep-green mb-8 opacity-90"
        >
            Eén simpel systeem voor al je klanten.
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-deep-green/70 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Vervang je losse agenda, mailprogramma en Excel-lijstjes. Krijg één overzichtelijk dashboard voor al je leads, afspraken en berichten. <strong>100% Done-For-You ingericht.</strong>
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-20"
        >
          <motion.a 
            href="#prijzen"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-deep-green text-light font-bold rounded-xl hover:bg-deep-green/90 transition-colors shadow-xl flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              START MIJN TRANSFORMATIE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.a>
          <motion.a 
            href="#methode"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 glass-panel text-deep-green font-medium rounded-xl transition-all flex items-center gap-3 group"
          >
            <Sparkles size={18} className="text-primary" /> 
            <span className="group-hover:text-primary transition-colors">BEKIJK DE METHODE</span>
          </motion.a>
        </motion.div>

        {/* Creative Visual Element: Interactive 3D Ecosystem */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="max-w-5xl mx-auto w-full mt-24 relative h-[500px] md:h-[600px] flex items-center justify-center perspective-1000"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-full flex items-center justify-center"
            >
                {/* Central Core: The System */}
                <motion.div 
                  style={{ transform: "translateZ(0px)" }}
                  className="absolute z-20 w-48 h-48 rounded-full bg-gradient-to-br from-deep-green to-[#1a2a26] border border-white/10 shadow-[0_0_80px_rgba(199,161,116,0.2)] flex items-center justify-center group"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2 text-primary">
                      <Zap size={32} />
                    </div>
                    <span className="text-light font-serif font-bold tracking-wider">Jouw Praktijk</span>
                  </div>
                  
                  {/* Orbiting rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] border border-white/5 rounded-full border-t-primary/30 border-b-primary/30"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-80px] border border-white/5 rounded-full border-l-primary/20 border-r-primary/20"
                  />
                </motion.div>

                {/* Floating Element 1: Calendar Sync */}
                <motion.div 
                  style={{ x: translateX1, y: translateY1, transform: "translateZ(80px)" }}
                  className="absolute z-30 top-[10%] left-[5%] md:left-[15%] glass-panel p-4 rounded-2xl border border-white/40 shadow-2xl backdrop-blur-xl w-64 group hover:scale-105 transition-transform cursor-default"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-deep-green">Agenda Sync</div>
                      <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Automatisch</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-deep-green/70">
                      <span>Intakegesprek</span>
                      <span className="font-bold text-deep-green">14:00</span>
                    </div>
                    <div className="h-1.5 w-full bg-deep-green/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Element 2: Automated Lead */}
                <motion.div 
                  style={{ x: translateX2, y: translateY2, transform: "translateZ(120px)" }}
                  className="absolute z-40 bottom-[15%] right-[5%] md:right-[10%] glass-panel-dark p-5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl w-72 group hover:scale-105 transition-transform cursor-default"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                        <MessageCircle size={24} />
                      </div>
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#1a2a26]"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-light">Nieuwe Aanvraag</div>
                      <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Via Website</div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-xs text-light/80 italic">"Hi, ik wil graag een traject starten..."</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-light/50">
                    <Sparkles size={12} className="text-primary" />
                    <span>AI antwoord klaargezet</span>
                  </div>
                </motion.div>

                {/* Floating Element 3: Growth Metric */}
                <motion.div 
                  style={{ x: translateX3, y: translateY3, transform: "translateZ(60px)" }}
                  className="absolute z-10 top-[20%] right-[5%] md:right-[20%] bg-white p-4 rounded-2xl border border-deep-green/5 shadow-xl w-48 group hover:scale-105 transition-transform cursor-default"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <TrendingUp size={16} />
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+24%</span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-deep-green mb-1">Tijd Bespaard</div>
                  <div className="text-xs text-deep-green/50">Deze maand</div>
                  
                  {/* Mini Chart */}
                  <div className="mt-4 flex items-end gap-1 h-10">
                    {[30, 45, 25, 60, 40, 80, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-deep-green/10'}`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Floating Element 4: Peace of Mind */}
                <motion.div 
                  style={{ x: translateX1, y: translateY2, transform: "translateZ(100px)" }}
                  className="absolute z-30 bottom-[10%] left-[5%] md:left-[20%] bg-deep-green p-4 rounded-2xl border border-white/10 shadow-2xl w-56 group hover:scale-105 transition-transform cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-light">Volledige Controle</div>
                      <div className="text-[10px] text-light/50">100% AVG Proof</div>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" style={{ transform: "translateZ(-50px)" }}>
                  <motion.path 
                    d="M 50% 50% L 15% 15%" 
                    stroke="#C7A174" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 50% 50% L 85% 85%" 
                    stroke="#C7A174" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 50% 50% L 80% 25%" 
                    stroke="#C7A174" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 50% 50% L 20% 80%" 
                    stroke="#C7A174" strokeWidth="2" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;