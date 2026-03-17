import React, { useState } from 'react';
import { Zap, ShieldCheck, ArrowRight, PhoneCall, Calendar, ClipboardList, Users, CheckCircle2, Globe, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import ClaimSetupForm from '../components/ClaimSetupForm';
import Footer from '../components/Footer';

const FlowEvent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-deep-green font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <div className="w-full flex justify-center px-4 pt-6">
        <nav className="bg-deep-green/95 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl flex items-center justify-center max-w-4xl w-full transition-all hover:scale-[1.01]">
            <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#C7A174] flex items-center justify-center text-[#213430] font-bold text-lg tracking-tight group-hover:scale-110 transition-transform">
                  ZG
                </div>
                <span className="font-serif text-2xl text-white tracking-wide hidden sm:block group-hover:text-[#C7A174] transition-colors">Zichtbare<span className="italic text-[#C7A174]">Groei</span></span>
            </a>
        </nav>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {/* 1. Pre-headline */}
        <div className="text-center mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest border border-primary/30">
            Exclusief voor Flow Business Event
          </span>
        </div>

        {/* 2. Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center leading-tight mb-6 text-deep-green"
        >
          Krijg Je Tijd Terug. <br/>
          <span className="text-primary italic">Eén Systeem Voor Al Je Klanten.</span>
        </motion.h1>

        {/* 3. Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-center text-deep-green/80 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Vervang je losse agenda, mailprogramma en Excel-lijstjes. Krijg één overzichtelijk dashboard voor al je leads, afspraken en berichten. <strong>100% Done-For-You ingericht.</strong>
        </motion.p>

        {/* 4. CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <a href="#offer" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-deep-green rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(33,52,48,0.4)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-deep-green via-deep-green to-[#1a2a26]"></span>
            <span className="relative flex items-center gap-2">
              Bekijk De Event Deal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* 5. Agitatie (Kort) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl font-serif font-bold mb-4">De Stille Tijdslurpers In Je Praktijk</h2>
          <p className="text-deep-green/80 max-w-lg mx-auto">
            Herken je dit? Je bent uren kwijt aan het heen-en-weer mailen voor een afspraak. Je verliest het overzicht over wie je nog moest antwoorden op Instagram. En als je in een sessie zit, mis je telefoontjes van potentiële nieuwe klanten.
          </p>
        </motion.div>

        {/* 6. Core Features (Value Stacked) */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Wat Je Precies Krijgt (Done-For-You)</h2>
            <p className="text-deep-green/80">Ik bouw dit hele systeem op maat voor jouw praktijk.</p>
          </motion.div>

          <div className="space-y-12 max-w-4xl mx-auto">
            
            {/* Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-deep-green">AI-Receptie</div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5 relative">
                <div className="absolute top-6 right-6 bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm border border-red-100">
                  Waarde: €397
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6 md:mt-0 pr-24">De "Nooit-Meer-Leads-Verliezen" Receptie</h3>
                <p className="text-deep-green/80 leading-relaxed">
                  Zit je in een sessie? Gemiste bellers krijgen binnen 30 seconden automatisch een vriendelijke SMS. Je verliest nooit meer een lead aan de concurrent omdat je je telefoon even niet kon opnemen.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col md:flex-row-reverse"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800" alt="Calendar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-l"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="text-sm font-bold text-deep-green">Slimme Agenda</div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5 relative">
                <div className="absolute top-6 left-6 md:left-auto md:right-6 bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm border border-red-100">
                  Waarde: €297
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-10 md:mt-0 md:pr-24">Slimme Agenda & No-Show Killer</h3>
                <p className="text-deep-green/80 leading-relaxed">
                  Zeg je losse agenda-tools op. Klanten plannen zelf hun afspraken in. Het systeem stuurt volautomatisch SMS en E-mail reminders, zodat no-shows en gaten in je agenda verleden tijd zijn.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800" alt="Focus" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-deep-green">Kwalificatie</div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5 relative">
                <div className="absolute top-6 right-6 bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm border border-red-100">
                  Waarde: €297
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6 md:mt-0 pr-24">Kwalificatie & Droomklant Filter</h3>
                <p className="text-deep-green/80 leading-relaxed">
                  Voorkom tijdverspilling aan 'gratis-zoekers'. Voordat iemand een afspraak kan boeken, vullen ze een strategisch formulier in. Jij spreekt alleen nog maar met hooggekwalificeerde leads.
                </p>
              </div>
            </motion.div>

            {/* Block 4: Social Planner */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col md:flex-row-reverse"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800" alt="Social Media Planner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-l"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="text-sm font-bold text-deep-green">Social Planner</div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Share2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5 relative">
                <div className="absolute top-6 left-6 md:left-auto md:right-6 bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm border border-red-100">
                  Waarde: €197
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-10 md:mt-0 md:pr-24">De "Alles-In-Eén" Social Planner</h3>
                <p className="text-deep-green/80 leading-relaxed">
                  Plan al je posts voor Facebook, Instagram en LinkedIn weken vooruit vanuit één simpel dashboard. Zeg je dure abonnementen op Later of Hootsuite maar op.
                </p>
              </div>
            </motion.div>

            {/* Block 5: CRM */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="CRM Dashboard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-deep-green">Centrale Inbox</div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-3/5 relative">
                <div className="absolute top-6 right-6 bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm border border-red-100">
                  Waarde: €297
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6 md:mt-0 pr-24">De "Eén Centrale Inbox" CRM Setup</h3>
                <p className="text-deep-green/80 leading-relaxed">
                  Al je e-mails, SMS'jes, Facebook Messenger en Instagram DM's in één overzichtelijke inbox. Je weet precies wie waar in je pijplijn zit. Ultieme rust en overzicht.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 7. The Offer */}
        <div id="offer" className="mb-12">
          <div className="bg-surface-dark text-light rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-2">De "Flow Event" Setup</h2>
                <p className="text-light/80">Alles 100% Done-For-You ingericht voor jouw praktijk.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 mb-8">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">AI-Receptie Systeem</span>
                    </div>
                    <span className="text-light/50 line-through">€397</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">Slimme Agenda & Reminders</span>
                    </div>
                    <span className="text-light/50 line-through">€297</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">Kwalificatie & Filter</span>
                    </div>
                    <span className="text-light/50 line-through">€297</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">Social Media Planner</span>
                    </div>
                    <span className="text-light/50 line-through">€197</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">Centrale Inbox CRM Setup</span>
                    </div>
                    <span className="text-light/50 line-through">€297</span>
                  </li>
                  <li className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold">Totale Waarde:</span>
                    <span className="text-xl font-bold text-red-400 line-through">€1.485,-</span>
                  </li>
                </ul>

                <div className="text-center bg-deep-green/50 rounded-xl p-8 border border-primary/30">
                  <p className="text-light/80 uppercase tracking-widest text-sm font-bold mb-2">Jouw Investering</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-6xl font-serif font-bold text-primary">€297</span>
                  </div>
                  <p className="text-light/60 text-sm">
                    Eenmalig voor de complete setup.<br/>
                    Daarna slechts €97/mnd voor de software (vervangt al je huidige tools).
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-deep-green bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(199,161,116,0.4)] w-full sm:w-auto mb-4"
                >
                  <span className="relative flex items-center gap-2">
                    Claim Deze Setup (Nog 3 Plekken) <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <p className="text-light/60 text-sm max-w-sm mx-auto">
                  * Om de hoogste kwaliteit en persoonlijke aandacht te waarborgen voor deze 100% Done-For-You setup, neem ik maximaal 3 ondernemers aan tijdens dit event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Optional Bonus: Website */}
        <div className="mb-20">
          <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-[2.5rem] p-8 sm:p-10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-deep-green text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
              Optionele Bonus
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Nog geen (goede) website?</h3>
                <p className="text-deep-green/80 mb-4">
                  Veel coaches hebben al een site. Maar als jij er nog geen hebt (of een verouderde), bouw ik een <strong>Custom High-Converting Website</strong> voor je, direct gekoppeld aan je nieuwe systeem.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-deep-green/60 line-through">Normaal: €1.500</span>
                  <span className="font-bold text-primary bg-white px-3 py-1 rounded-full text-sm shadow-sm">Nu toe te voegen voor slechts €497 extra</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Guarantee */}
        <div className="text-center max-w-lg mx-auto">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-serif font-bold mb-2">Mijn "No-Brainer" Garantie</h3>
          <p className="text-deep-green/80 text-sm">
            Niet 100% tevreden na oplevering? Setup-fee direct terug. Nul risico.
          </p>
        </div>

      </main>
      
      {/* Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ClaimSetupForm />
      </Modal>
    </div>
  );
};

export default FlowEvent;
