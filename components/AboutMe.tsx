import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, Target } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="over-mij" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-deep-green/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px]">
              <div className="absolute inset-0 bg-deep-green/10 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop" 
                alt="Portret" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 glass-panel p-6 rounded-2xl shadow-xl backdrop-blur-xl border border-white/40 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <HeartHandshake size={20} />
                </div>
                <div className="text-3xl font-serif font-bold text-deep-green">100+</div>
              </div>
              <p className="text-xs text-deep-green/70 font-medium leading-relaxed">
                Coaches & therapeuten geholpen naar meer rust.
              </p>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 w-max">
              Over Mij
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-6 leading-tight">
              Techniek hoort je te <span className="text-primary italic">dienen</span>, niet te frustreren.
            </h2>
            
            <div className="space-y-6 text-deep-green/70 text-lg font-light leading-relaxed mb-10">
              <p>
                Hoi, ik ben de oprichter van Zichtbare Groei. Ik zag de afgelopen jaren een pijnlijk patroon: briljante coaches en therapeuten die vastlopen in hun eigen succes.
              </p>
              <p>
                Je startte je praktijk om mensen te helpen, maar eindigt je dagen met het handmatig overtypen van afspraken, het zoeken naar notities en het nabellen van leads. De techniek die je zou moeten helpen, voelt als een blok aan je been.
              </p>
              <p>
                <strong>Dat moest anders.</strong> Ik besloot me volledig te richten op het bouwen van naadloze, geautomatiseerde systemen specifiek voor deze branche. Geen losse tools meer die niet met elkaar praten, maar één helder ecosysteem.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {[
                "Persoonlijke aanpak, geen nummertje",
                "Volledig 'Done-For-You' (ik bouw het voor je)",
                "Focus op jouw rust en schaalbaarheid"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="text-deep-green font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-max px-8 py-4 bg-deep-green text-light font-bold rounded-xl hover:bg-deep-green/90 transition-colors shadow-lg flex items-center gap-3"
            >
              Laten we kennismaken
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
