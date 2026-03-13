import React, { useState } from 'react';
import { Calendar, Filter, PhoneMissed, CheckCircle2, Inbox, Smartphone, Sparkles } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState('wa');

  return (
    <section className="py-32 relative bg-surface overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-deep-green/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto reveal-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-deep-green/10 shadow-sm mb-6">
               <Sparkles size={14} className="text-primary" />
               <span className="text-deep-green text-xs font-bold tracking-widest uppercase">Jouw Nieuwe Fundament</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-serif text-deep-green mb-6">Jouw Geautomatiseerde <br/><span className="text-primary italic">Praktijk.</span></h2>
           <p className="text-xl text-deep-green/60 font-light leading-relaxed">
             Geen futuristische beloftes, maar praktische tools die je vandaag nog uren per week besparen. Alles 100% voor je ingericht.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* TILE 1: CENTRALE INBOX (Large, spans 8 cols) */}
          <div className="md:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-deep-green/5 relative overflow-hidden group flex flex-col justify-between hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.04]">
                 <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop" alt="Social Media" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              
              <div className="relative z-10 mb-12 flex flex-col md:flex-row gap-8 justify-between items-start w-full">
                  <div className="max-w-md w-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                          <Inbox size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-deep-green mb-4">Eén Centrale Inbox</h3>
                      <p className="text-deep-green/60 text-sm md:text-base leading-relaxed">
                          Stop met switchen tussen WhatsApp, Instagram, Facebook en e-mail. Beheer al je klantcontact, leads en vragen vanuit één overzichtelijk scherm.
                      </p>
                  </div>
                  
                  {/* Interactive Tabs */}
                  <div className="flex bg-gray-50/80 backdrop-blur-sm p-1.5 rounded-xl border border-gray-100 w-full md:w-auto overflow-x-auto">
                      {['wa', 'ig', 'fb'].map((tab) => (
                          <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                                activeTab === tab 
                                ? 'bg-white shadow-sm text-deep-green' 
                                : 'text-deep-green/40 hover:text-deep-green/70'
                            }`}
                          >
                              {tab}
                          </button>
                      ))}
                  </div>
              </div>

              {/* Visualizer */}
              <div className="relative z-10 bg-gray-50/50 rounded-2xl p-4 md:p-6 border border-gray-100/50 flex flex-col gap-4 overflow-hidden w-full">
                  <div className={`transition-all duration-500 transform ${activeTab === 'wa' ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 hidden'}`}>
                      <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform cursor-default">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-green-700 shrink-0">WA</div>
                          <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1.5 md:mb-2">
                                  <div className="h-2 md:h-2.5 w-20 md:w-24 bg-gray-200 rounded-full"></div>
                                  <div className="h-1.5 md:h-2 w-6 md:w-8 bg-gray-100 rounded-full"></div>
                              </div>
                              <div className="h-1.5 md:h-2 w-full bg-gray-100 rounded-full"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div className={`transition-all duration-500 transform ${activeTab === 'ig' ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 hidden'}`}>
                      <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform cursor-default">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-pink-700 shrink-0">IG</div>
                          <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1.5 md:mb-2">
                                  <div className="h-2 md:h-2.5 w-24 md:w-32 bg-gray-200 rounded-full"></div>
                                  <div className="h-1.5 md:h-2 w-8 md:w-12 bg-gray-100 rounded-full"></div>
                              </div>
                              <div className="h-1.5 md:h-2 w-4/5 bg-gray-100 rounded-full"></div>
                          </div>
                      </div>
                  </div>

                  <div className={`transition-all duration-500 transform ${activeTab === 'fb' ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 hidden'}`}>
                      <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform cursor-default">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-blue-700 shrink-0">FB</div>
                          <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1.5 md:mb-2">
                                  <div className="h-2 md:h-2.5 w-20 md:w-28 bg-gray-200 rounded-full"></div>
                                  <div className="h-1.5 md:h-2 w-8 md:w-10 bg-gray-100 rounded-full"></div>
                              </div>
                              <div className="h-1.5 md:h-2 w-11/12 bg-gray-100 rounded-full"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* TILE 2: SLIMME AGENDA (Square, spans 4 cols) */}
          <div className="md:col-span-4 bg-deep-green rounded-[2.5rem] p-8 md:p-10 text-light shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10 flex-1 flex flex-col w-full">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-8 backdrop-blur-md border border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                      <Calendar size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">Slimme Agenda</h3>
                  <p className="text-light/70 text-sm md:text-base mb-8 flex-1">
                      Cliënten plannen zelf in op basis van jouw beschikbaarheid. Inclusief automatische reminders via SMS en e-mail.
                  </p>
                  
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500 w-full">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-bold text-light">Vandaag</span>
                          <span className="text-[10px] bg-primary text-deep-green px-2.5 py-1 rounded-full font-bold">3 Afspraken</span>
                      </div>
                      <div className="space-y-3">
                          <div className="h-10 bg-white/10 rounded-xl flex items-center px-4 relative overflow-hidden">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                              <div className="h-2 w-20 bg-white/30 rounded-full ml-2"></div>
                          </div>
                          <div className="h-10 bg-white/5 rounded-xl flex items-center px-4 opacity-50">
                              <div className="h-2 w-16 bg-white/20 rounded-full ml-2"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* TILE 3: KWALIFICATIE (Square, spans 4 cols) */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-deep-green/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden flex flex-col">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex-1 flex flex-col w-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 border border-orange-100/50 group-hover:rotate-12 transition-transform duration-500">
                      <Filter size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-deep-green mb-4">Kwalificatie Filters</h3>
                  <p className="text-sm md:text-base text-deep-green/60 mb-8 flex-1">
                      Spreek alleen nog met mensen die écht klaar zijn voor jouw traject. Filter leads automatisch vooraf.
                  </p>
                  
                  <div className="space-y-4 bg-gray-50/50 p-5 rounded-2xl border border-gray-100/50 w-full">
                      {[
                          { text: 'Budget check', delay: '0' },
                          { text: 'Commitment check', delay: '100' },
                          { text: 'Doelstelling helder', delay: '200' }
                      ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-deep-green/80 group/item">
                              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                  <CheckCircle2 size={12} className="text-primary group-hover/item:text-white" />
                              </div>
                              <span className="font-medium">{item.text}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* TILE 4: MISSED CALL TEXT BACK (Large, spans 8 cols) */}
          <div className="md:col-span-8 bg-deep-green rounded-[2.5rem] p-8 md:p-12 text-light shadow-xl relative overflow-hidden group flex flex-col md:flex-row gap-10 items-start md:items-center hover:shadow-2xl transition-all duration-500">
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-125"></div>
              
              <div className="relative z-10 flex-1 w-full">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-8 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <PhoneMissed size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">De "Missed Call" Receptie</h3>
                  <p className="text-light/70 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                      Zit je in een sessie en mis je een belletje? Het systeem stuurt direct automatisch een persoonlijk berichtje. Je verliest nooit meer een lead aan de concurrent.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold border border-primary/20 backdrop-blur-sm">
                      <Smartphone size={14} />
                      <span>Inbegrepen in Professional Setup</span>
                  </div>
              </div>

              <div className="relative z-10 w-full md:w-72 bg-white rounded-3xl p-5 shadow-2xl border border-white/10 transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 relative">
                          <PhoneMissed size={16} />
                          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-800">Gemiste Oproep</div>
                          <div className="text-[10px] text-gray-400 font-medium">Zojuist • 06 12345678</div>
                      </div>
                  </div>
                  
                  <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-sm border border-gray-100 relative group-hover:bg-primary/5 transition-colors duration-500">
                          <p className="text-xs text-gray-600 leading-relaxed">
                              Hoi! Ik zag dat je me net probeerde te bellen, maar ik zit momenteel in een sessie. Hoe kan ik je helpen?
                          </p>
                      </div>
                      <div className="flex justify-end items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                          <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">Automatisch verzonden</span>
                          <CheckCircle2 size={10} className="text-primary" />
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;