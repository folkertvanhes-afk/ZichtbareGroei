import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-6">
            Jouw talent is mensen helpen.<br/>
            <span className="text-primary italic">Niet vechten met software.</span>
          </h2>
          <p className="text-xl text-deep-green/60 font-light leading-relaxed">
             De meeste coaches verliezen uren per week aan administratie, losse tools en handmatig werk. Dat kost niet alleen tijd, maar ook energie en omzet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* THE OLD WAY */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 0.98, filter: "grayscale(50%)" }}
            className="relative p-8 md:p-10 rounded-[2rem] bg-white border border-red-500/10 shadow-xl overflow-hidden flex flex-col group cursor-not-allowed"
          >
             <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none transition-opacity group-hover:opacity-[0.08]">
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" alt="Messy desk" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
             </div>
             
             <div className="relative z-10 flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 border border-red-100">
                    De Oude Manier
                </div>
                <h3 className="text-3xl font-serif text-deep-green mb-8">Chaos & Overwerk</h3>
                
                <ul className="space-y-6">
                    {[
                      { title: "Handmatig leads opvolgen", desc: "Je bent uren kwijt aan mailen en bellen, en mist kansen als je in sessie zit." },
                      { title: "Agenda ping-pong", desc: "Eindeloos heen en weer mailen om een geschikte datum te vinden." },
                      { title: "Losse tools die niet praten", desc: "Je betaalt voor 5 verschillende systemen die je met Zapier aan elkaar moet knopen." },
                      { title: "Stress in de avonduren", desc: "Administratie doen wanneer je eigenlijk op de bank hoort te zitten." }
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-start gap-4"
                      >
                          <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                          <div>
                              <h4 className="font-bold text-deep-green text-lg">{item.title}</h4>
                              <p className="text-deep-green/60">{item.desc}</p>
                          </div>
                      </motion.li>
                    ))}
                </ul>
             </div>
          </motion.div>

          {/* THE NEW WAY */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="relative p-8 md:p-10 rounded-[2rem] bg-deep-green shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
          >
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay">
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop" alt="Clean desk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
             />
             
             <div className="relative z-10 flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 shadow-[0_0_15px_rgba(199,161,116,0.2)]">
                    De ZichtbareGroei Manier
                </div>
                <h3 className="text-3xl font-serif text-light mb-8">Rust & Automatisering</h3>
                
                <ul className="space-y-6">
                    {[
                      { title: "AI volgt leads direct op", desc: "Binnen 5 minuten een reactie, 24/7. Leads worden warm gehouden terwijl jij slaapt." },
                      { title: "Afspraken automatisch gepland", desc: "Cliënten plannen zelf in via een slimme kalender die synchroniseert met jouw agenda." },
                      { title: "Alles in één overzichtelijk dashboard", desc: "CRM, e-mail, social media en facturatie. Eén login, één systeem." },
                      { title: "Tijd voor jezelf en je cliënten", desc: "Focus op je expertise. De techniek werkt voor jou, niet andersom." }
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="flex items-start gap-4"
                      >
                          <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                          <div>
                              <h4 className="font-bold text-light text-lg">{item.title}</h4>
                              <p className="text-light/60">{item.desc}</p>
                          </div>
                      </motion.li>
                    ))}
                </ul>
             </div>
             
             <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                 <div className="flex items-center justify-between">
                     <span className="text-light font-serif text-xl">Klaar voor de overstap?</span>
                     <motion.a 
                        href="#prijzen"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-primary text-deep-green flex items-center justify-center shadow-[0_0_20px_rgba(199,161,116,0.4)]"
                     >
                         <ArrowRight size={20} />
                     </motion.a>
                 </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;