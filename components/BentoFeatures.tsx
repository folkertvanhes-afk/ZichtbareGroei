import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Filter, PhoneMissed, CheckCircle2, Inbox, Sparkles, Send, User, Clock, ArrowRight, Star } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookMessenger, FaGoogle } from 'react-icons/fa';

const InboxFeature = () => {
  const [activeChat, setActiveChat] = useState(0);
  const chats = [
    { id: 0, platform: <FaWhatsapp size={16} />, name: 'Sarah M.', msg: 'Kan ik mijn afspraak verzetten?', reply: 'Natuurlijk, via deze link kun je zelf een nieuw moment kiezen: [link]', color: 'bg-green-100 text-green-600' },
    { id: 1, platform: <FaInstagram size={16} />, name: 'Tom K.', msg: 'Wat zijn jullie tarieven?', reply: 'Hi Tom! Je vindt al onze tarieven overzichtelijk op onze website: [link]', color: 'bg-pink-100 text-pink-600' },
    { id: 2, platform: <FaFacebookMessenger size={16} />, name: 'Lisa V.', msg: 'Ik wil graag starten met coaching.', reply: 'Wat leuk Lisa! Zullen we een kort kennismakingsgesprek inplannen?', color: 'bg-blue-100 text-blue-600' },
  ];

  const [replies, setReplies] = useState<Record<number, string[]>>({});

  const handleReply = (id: number) => {
    setReplies(prev => ({
      ...prev,
      [id]: [...(prev[id] || []), chats[id].reply]
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="md:col-span-7 bg-white rounded-[2rem] p-5 md:p-6 shadow-sm border border-deep-green/5 relative overflow-hidden group flex flex-col h-full hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
          <Inbox size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-serif text-deep-green">Eén Centrale Inbox</h3>
          <p className="text-deep-green/60 text-sm">Al je kanalen op één plek.</p>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 flex overflow-hidden min-h-[250px] md:min-h-[300px]">
        {/* Sidebar */}
        <div className="w-20 md:w-1/3 border-r border-gray-100 bg-white p-2 space-y-2 overflow-y-auto">
          {chats.map((chat, idx) => (
            <button 
              key={chat.id}
              onClick={() => setActiveChat(idx)}
              className={`w-full text-left p-2 md:p-3 rounded-lg transition-colors flex items-center justify-center md:justify-start gap-3 ${activeChat === idx ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50 border border-transparent'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${chat.color}`}>
                {chat.platform}
              </div>
              <div className="hidden md:block overflow-hidden">
                <div className="text-xs font-bold text-gray-800 truncate">{chat.name}</div>
                <div className="text-[10px] text-gray-500 truncate">{chat.msg}</div>
              </div>
            </button>
          ))}
        </div>
        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-50/50 relative">
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <motion.div 
              key={`msg-${activeChat}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[90%] md:max-w-[80%] text-xs text-gray-700"
            >
              {chats[activeChat].msg}
            </motion.div>
            
            <AnimatePresence>
              {replies[activeChat]?.map((reply, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="bg-primary text-deep-green p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[90%] md:max-w-[80%] text-xs ml-auto"
                >
                  {reply}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-xs text-gray-400 flex items-center truncate">
              Typ een bericht...
            </div>
            <button 
              onClick={() => handleReply(activeChat)}
              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-deep-green hover:scale-105 transition-transform shrink-0"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AgendaFeature = () => {
  const [booked, setBooked] = useState<number | null>(null);

  const slots = [
    { id: 1, time: '09:00', available: true },
    { id: 2, time: '10:30', available: false },
    { id: 3, time: '13:00', available: true },
    { id: 4, time: '15:00', available: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="md:col-span-5 bg-deep-green rounded-[2rem] p-5 md:p-6 text-light shadow-xl relative overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px]"></div>
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary backdrop-blur-md border border-white/10 shrink-0">
          <Calendar size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-serif">Slimme Agenda</h3>
          <p className="text-light/70 text-sm">Laat cliënten zelf plannen.</p>
        </div>
      </div>

      <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 md:p-6 relative z-10 flex flex-col justify-center">
        <div className="text-center mb-4 text-sm font-medium">Kies een tijd voor vandaag</div>
        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => (
            <button
              key={slot.id}
              disabled={!slot.available || booked === slot.id}
              onClick={() => setBooked(slot.id)}
              className={`relative p-3 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden ${
                booked === slot.id 
                  ? 'bg-primary text-deep-green' 
                  : slot.available 
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10' 
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <AnimatePresence mode="wait">
                {booked === slot.id ? (
                  <motion.div
                    key="booked"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} />
                    <span>Geboekt</span>
                  </motion.div>
                ) : (
                  <motion.div key="time" className="flex items-center justify-center gap-2">
                    <Clock size={14} className={slot.available ? 'opacity-70' : 'opacity-30'} />
                    {slot.time}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
        <AnimatePresence>
          {booked && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-xs text-primary bg-primary/10 py-2 rounded-lg border border-primary/20"
            >
              Bevestiging & SMS verstuurd! ✨
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FiltersFeature = () => {
  const [filterActive, setFilterActive] = useState(false);

  const leads = [
    { id: 1, name: 'Lead A', budget: '€50', intent: 'Kijken', fit: false },
    { id: 2, name: 'Lead B', budget: '€500+', intent: 'Klaar om te starten', fit: true },
    { id: 3, name: 'Lead C', budget: 'Geen', intent: 'Gratis tips', fit: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="md:col-span-5 bg-white rounded-[2rem] p-5 md:p-6 shadow-sm border border-deep-green/5 relative overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
          <Filter size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-serif text-deep-green">Kwalificatie</h3>
          <p className="text-deep-green/60 text-sm">Filter ruis eruit.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-sm font-bold text-deep-green">AI Filter Activeren</span>
          <button 
            onClick={() => setFilterActive(!filterActive)}
            className={`w-12 h-6 rounded-full transition-colors relative ${filterActive ? 'bg-primary' : 'bg-gray-300'}`}
          >
            <motion.div 
              className="w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm"
              animate={{ left: filterActive ? '26px' : '4px' }}
            />
          </button>
        </div>

        <div className="space-y-2 relative min-h-[180px]">
          <AnimatePresence>
            {leads.map((lead) => {
              const isVisible = !filterActive || lead.fit;
              return isVisible && (
                <motion.div
                  key={lead.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-xl border text-sm flex items-center justify-between ${
                    filterActive && lead.fit 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${filterActive && lead.fit ? 'bg-green-200 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      <User size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-deep-green">{lead.name}</div>
                      <div className="text-[10px] text-gray-500">{lead.intent}</div>
                    </div>
                  </div>
                  {filterActive && lead.fit && (
                    <CheckCircle2 size={16} className="text-green-600" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const MissedCallFeature = () => {
  const [callState, setCallState] = useState<'idle' | 'ringing' | 'missed' | 'replied'>('idle');

  const simulateCall = () => {
    if (callState !== 'idle') return;
    setCallState('ringing');
    setTimeout(() => {
      setCallState('missed');
      setTimeout(() => {
        setCallState('replied');
        setTimeout(() => setCallState('idle'), 4000);
      }, 1000);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="md:col-span-7 bg-deep-green rounded-[2rem] p-5 md:p-6 text-light shadow-xl relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center h-full hover:shadow-2xl transition-shadow"
    >
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 flex-1 w-full">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-6 backdrop-blur-md border border-white/10">
          <PhoneMissed size={24} />
        </div>
        <h3 className="text-2xl font-serif mb-4">Missed Call Text Back</h3>
        <p className="text-light/70 text-sm mb-6">
          Mis je een belletje? Het systeem stuurt direct een persoonlijk berichtje.
        </p>
        <button 
          onClick={simulateCall}
          disabled={callState !== 'idle'}
          className="bg-primary text-deep-green px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2 w-fit"
        >
          {callState === 'idle' ? 'Simuleer Oproep' : 'Bezig...'}
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="relative z-10 w-full lg:w-64 bg-white rounded-3xl p-4 shadow-2xl border border-white/10 h-[250px] md:h-[280px] flex flex-col overflow-hidden shrink-0">
        {/* Phone Header */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="text-[10px] text-gray-800 font-bold">12:00</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {callState === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-gray-400 text-xs">
                Telefoon is stand-by
              </motion.div>
            )}
            {callState === 'ringing' && (
              <motion.div key="ringing" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500"
                >
                  <PhoneMissed size={24} />
                </motion.div>
                <div className="text-sm font-bold text-gray-800">Inkomende Oproep...</div>
                <div className="text-xs text-gray-500">06 12345678</div>
              </motion.div>
            )}
            {(callState === 'missed' || callState === 'replied') && (
              <motion.div key="missed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3">
                <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    <PhoneMissed size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-red-700">Gemiste Oproep</div>
                    <div className="text-[10px] text-red-500">Zojuist</div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {callState === 'replied' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20, scale: 0.9 }} 
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className="bg-gray-100 p-3 rounded-xl rounded-tr-sm self-end max-w-[90%] relative"
                    >
                      <div className="text-[10px] text-gray-700">
                        Hoi! Ik zit in een sessie. Hoe kan ik je helpen?
                      </div>
                      <div className="absolute -bottom-4 right-1 text-[8px] text-primary font-bold flex items-center gap-1">
                        <CheckCircle2 size={8} /> Auto-reply
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsFeature = () => {
  const [reviews, setReviews] = useState<number[]>([1]);
  const [isRequesting, setIsRequesting] = useState(false);

  const requestReview = () => {
    if (isRequesting || reviews.length >= 3) return;
    setIsRequesting(true);
    
    // Simulate sending request and receiving review
    setTimeout(() => {
      setReviews(prev => [prev.length + 1, ...prev]);
      setIsRequesting(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="md:col-span-12 bg-white rounded-[2rem] p-5 md:p-6 shadow-sm border border-deep-green/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow"
    >
      <div className="flex-1 w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 shrink-0">
            <Star size={24} className="fill-yellow-500" />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-deep-green">Automatische Reviews</h3>
            <p className="text-deep-green/60 text-sm">Bouw vertrouwen op de automatische piloot.</p>
          </div>
        </div>
        
        <button 
          onClick={requestReview}
          disabled={isRequesting || reviews.length >= 3}
          className="bg-primary text-deep-green px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2 w-fit"
        >
          {isRequesting ? 'Verzoek verzenden...' : reviews.length >= 3 ? 'Maximale reviews bereikt' : 'Simuleer Review Verzoek'}
          <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="flex-1 w-full bg-gray-50 rounded-2xl p-6 border border-gray-100 relative min-h-[220px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/80 z-10 pointer-events-none"></div>
        <div className="space-y-3 w-full max-w-sm relative z-0">
          <AnimatePresence>
            {reviews.map((id, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3"
                style={{ zIndex: reviews.length - index }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">
                  {['M', 'A', 'J'][id % 3]}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400" />)}
                  </div>
                  <div className="text-xs text-gray-600">
                    {['"Geweldige service, echt een aanrader!"', '"Heel professioneel geholpen."', '"Top ervaring, ik kom zeker terug!"'][id % 3]}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const BentoFeatures: React.FC = () => {
  return (
    <section className="py-32 relative bg-surface overflow-hidden" id="methode">
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
          <InboxFeature />
          <AgendaFeature />
          <FiltersFeature />
          <MissedCallFeature />
          <ReviewsFeature />
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;