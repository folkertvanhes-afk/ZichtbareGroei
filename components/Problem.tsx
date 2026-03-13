import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-6">
            Jouw talent is mensen helpen.<br/>
            <span className="text-primary italic">Niet vechten met software.</span>
          </h2>
          <p className="text-xl text-deep-green/60 font-light leading-relaxed">
             De meeste coaches verliezen uren per week aan administratie, losse tools en handmatig werk. Dat kost niet alleen tijd, maar ook energie en omzet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* THE OLD WAY */}
          <div className="relative p-10 rounded-[2.5rem] bg-white border border-red-500/10 shadow-xl overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" alt="Messy desk" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
             </div>
             
             <div className="relative z-10 flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 border border-red-100">
                    De Oude Manier
                </div>
                <h3 className="text-3xl font-serif text-deep-green mb-8">Chaos & Overwerk</h3>
                
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-deep-green text-lg">Handmatig leads opvolgen</h4>
                            <p className="text-deep-green/60">Je bent uren kwijt aan mailen en bellen, en mist kansen als je in sessie zit.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-deep-green text-lg">Agenda ping-pong</h4>
                            <p className="text-deep-green/60">Eindeloos heen en weer mailen om een geschikte datum te vinden.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-deep-green text-lg">Losse tools die niet praten</h4>
                            <p className="text-deep-green/60">Je betaalt voor 5 verschillende systemen die je met Zapier aan elkaar moet knopen.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-deep-green text-lg">Stress in de avonduren</h4>
                            <p className="text-deep-green/60">Administratie doen wanneer je eigenlijk op de bank hoort te zitten.</p>
                        </div>
                    </li>
                </ul>
             </div>
          </div>

          {/* THE NEW WAY */}
          <div className="relative p-10 rounded-[2.5rem] bg-deep-green shadow-2xl overflow-hidden flex flex-col group">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay">
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop" alt="Clean desk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
             
             <div className="relative z-10 flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                    De ZichtbareGroei Manier
                </div>
                <h3 className="text-3xl font-serif text-light mb-8">Rust & Automatisering</h3>
                
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-light text-lg">AI volgt leads direct op</h4>
                            <p className="text-light/60">Binnen 5 minuten een reactie, 24/7. Leads worden warm gehouden terwijl jij slaapt.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-light text-lg">Afspraken automatisch gepland</h4>
                            <p className="text-light/60">Cliënten plannen zelf in via een slimme kalender die synchroniseert met jouw agenda.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-light text-lg">Alles in één overzichtelijk dashboard</h4>
                            <p className="text-light/60">CRM, e-mail, social media en facturatie. Eén login, één systeem.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-light text-lg">Tijd voor jezelf en je cliënten</h4>
                            <p className="text-light/60">Focus op je expertise. De techniek werkt voor jou, niet andersom.</p>
                        </div>
                    </li>
                </ul>
             </div>
             
             <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                 <div className="flex items-center justify-between">
                     <span className="text-light font-serif text-xl">Klaar voor de overstap?</span>
                     <button className="w-12 h-12 rounded-full bg-primary text-deep-green flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(199,161,116,0.3)]">
                         <ArrowRight size={20} />
                     </button>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;