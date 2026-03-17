import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
          className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16"
        >
          <motion.button 
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-deep-green text-light font-bold rounded-xl hover:bg-deep-green/90 transition-colors shadow-xl flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              PLAN ADVIESGESPREK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </motion.button>
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

      </div>
    </section>
  );
};

export default Hero;