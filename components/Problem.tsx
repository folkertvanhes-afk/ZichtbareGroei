import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap, Clock, TrendingUp, ArrowRight, Mail, Calendar, MessageSquare, Database, Globe, Activity } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-green/5 text-deep-green text-xs font-bold uppercase tracking-widest mb-6 border border-deep-green/10">
            <Activity size={14} className="text-primary" /> De Transformatie
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deep-green mb-6 leading-tight">
            Jouw talent is mensen helpen.<br/>
            <span className="text-primary italic">Niet vechten met software.</span>
          </h2>
          <p className="text-xl text-deep-green/60 font-light leading-relaxed max-w-2xl mx-auto">
             De meeste ondernemers verliezen uren per week aan administratie, losse tools en handmatig werk. Dat kost niet alleen tijd, maar ook energie en omzet.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto relative">
          
          {/* VS Badge */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl z-20 items-center justify-center border-4 border-background text-deep-green font-serif font-bold text-xl italic">
            VS
          </div>

          {/* THE OLD WAY - CHAOS */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-red-100 shadow-xl overflow-hidden flex flex-col"
          >
             {/* Animated Chaos Diagram */}
             <div className="absolute top-0 right-0 w-full h-64 opacity-40 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {[...Array(30)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M${Math.random() * 400},${Math.random() * 200} Q${Math.random() * 400},${Math.random() * 200} ${Math.random() * 400},${Math.random() * 200} T${Math.random() * 400},${Math.random() * 200}`}
                      stroke="#ef4444"
                      strokeWidth={Math.random() * 2 + 0.5}
                      fill="none"
                      strokeDasharray={`${Math.random() * 10 + 2} ${Math.random() * 10 + 2}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                </svg>
                
                {/* Floating disconnected tool icons */}
                {[...Array(12)].map((_, i) => {
                  const Icons = [Mail, Calendar, MessageSquare, Database, Globe, XCircle];
                  const Icon = Icons[i % Icons.length];
                  return (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, Math.random() * 60 - 30, 0],
                        x: [0, Math.random() * 60 - 30, 0],
                        rotate: [0, Math.random() * 180 - 90, 0],
                        scale: [1, Math.random() * 0.5 + 0.8, 1]
                      }}
                      transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-10 h-10 bg-white rounded-lg shadow-md border border-red-200 flex items-center justify-center text-red-500"
                      style={{
                        top: `${10 + Math.random() * 80}%`,
                        left: `${10 + Math.random() * 80}%`
                      }}
                    >
                      <Icon size={Math.random() * 10 + 14} />
                    </motion.div>
                  );
                })}
             </div>
             
             <div className="relative z-10 flex-1 mt-48">
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-500 text-xs font-bold uppercase tracking-widest mb-8 border border-red-100 shadow-sm">
                    De Oude Manier
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-deep-green mb-10 opacity-80">Chaos & Overwerk</h3>
                
                <ul className="space-y-8">
                    {[
                      { title: "Handmatig leads opvolgen", desc: "Je bent uren kwijt aan mailen en bellen, en mist kansen als je in sessie zit." },
                      { title: "Agenda ping-pong", desc: "Eindeloos heen en weer mailen om een geschikte datum te vinden." },
                      { title: "Losse tools die niet praten", desc: "Je betaalt voor 5 verschillende systemen die je met Zapier aan elkaar moet knopen." },
                      { title: "Stress in de avonduren", desc: "Administratie doen wanneer je eigenlijk op de bank hoort te zitten." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 opacity-70 hover:opacity-100 transition-opacity">
                          <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                          <div>
                              <h4 className="font-bold text-deep-green text-lg">{item.title}</h4>
                              <p className="text-deep-green/70 text-sm mt-1">{item.desc}</p>
                          </div>
                      </li>
                    ))}
                </ul>
             </div>
          </motion.div>

          {/* THE NEW WAY - CLARITY */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative p-8 md:p-12 rounded-[2.5rem] bg-deep-green shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Animated Clarity Diagram */}
            <div className="absolute top-0 right-0 w-full h-64 pointer-events-none overflow-hidden flex items-center justify-center">
                {/* Central Glowing Hub */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                />
                <div className="absolute w-16 h-16 bg-gradient-to-br from-primary to-[#a38054] rounded-2xl shadow-[0_0_30px_rgba(199,161,116,0.5)] flex items-center justify-center z-10">
                  <Zap className="text-deep-green" size={28} />
                </div>

                {/* Converging Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {[
                    { start: [50, 50], end: [200, 100] },
                    { start: [350, 50], end: [200, 100] },
                    { start: [50, 150], end: [200, 100] },
                    { start: [350, 150], end: [200, 100] },
                  ].map((line, i) => (
                    <motion.path
                      key={i}
                      d={`M${line.start[0]},${line.start[1]} C${(line.start[0]+line.end[0])/2},${line.start[1]} ${(line.start[0]+line.end[0])/2},${line.end[1]} ${line.end[0]},${line.end[1]}`}
                      stroke="rgba(199,161,116,0.3)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
                    />
                  ))}
                  {/* Flowing particles along the lines */}
                  {[
                    { start: [50, 50], end: [200, 100] },
                    { start: [350, 50], end: [200, 100] },
                    { start: [50, 150], end: [200, 100] },
                    { start: [350, 150], end: [200, 100] },
                  ].map((line, i) => (
                    <motion.circle
                      key={`particle-${i}`}
                      r="3"
                      fill="#C7A174"
                      initial={{ cx: line.start[0], cy: line.start[1], opacity: 0 }}
                      animate={{ 
                        cx: [line.start[0], line.end[0]], 
                        cy: [line.start[1], line.end[1]],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                      style={{ filter: "drop-shadow(0 0 4px #C7A174)" }}
                    />
                  ))}
                </svg>

                {/* Connected Nodes */}
                {[
                  { pos: [50, 50], icon: Mail },
                  { pos: [350, 50], icon: Calendar },
                  { pos: [50, 150], icon: MessageSquare },
                  { pos: [350, 150], icon: Database },
                ].map((node, i) => (
                  <motion.div
                    key={`node-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + i * 0.2, type: "spring" }}
                    className="absolute w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center text-primary"
                    style={{
                      left: `calc(${node.pos[0] / 4}% - 20px)`,
                      top: `calc(${node.pos[1] / 2}% - 20px)`
                    }}
                  >
                    <node.icon size={18} />
                  </motion.div>
                ))}
            </div>
            
            <div className="relative z-10 flex-1 mt-48">
               <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/30 shadow-[0_0_15px_rgba(199,161,116,0.2)]">
                   De ZichtbareGroei Manier
               </div>
               
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-10">Rust & Automatisering</h3>
               
               <ul className="space-y-8">
                   {[
                     { title: "AI volgt leads direct op", desc: "Binnen 5 minuten een reactie, 24/7. Leads worden warm gehouden terwijl jij slaapt.", icon: <Zap size={20} /> },
                     { title: "Afspraken automatisch gepland", desc: "Cliënten plannen zelf in via een slimme kalender die synchroniseert met jouw agenda.", icon: <Clock size={20} /> },
                     { title: "Alles in één overzichtelijk dashboard", desc: "CRM, e-mail, social media en facturatie. Eén login, één systeem.", icon: <TrendingUp size={20} /> },
                     { title: "Tijd voor jezelf en je bedrijf", desc: "Focus op je expertise. De techniek werkt voor jou, niet andersom.", icon: <CheckCircle2 size={20} /> }
                   ].map((item, i) => (
                     <motion.li 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.6 + (i * 0.1) }}
                       className="flex items-start gap-4 group/item"
                     >
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-deep-green transition-colors shadow-[0_0_10px_rgba(199,161,116,0.1)]">
                           {item.icon}
                         </div>
                         <div>
                             <h4 className="font-bold text-white text-lg group-hover/item:text-primary transition-colors">{item.title}</h4>
                             <p className="text-white/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                         </div>
                     </motion.li>
                   ))}
               </ul>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
                    <span className="text-white font-serif text-lg">Klaar voor de overstap?</span>
                    <motion.a 
                       href="#prijzen"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="px-6 py-3 rounded-xl bg-primary text-deep-green font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(199,161,116,0.3)] hover:shadow-[0_0_30px_rgba(199,161,116,0.5)] transition-shadow"
                    >
                        Bekijk Prijzen <ArrowRight size={16} />
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