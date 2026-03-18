import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingCalculator: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { 
      name: 'Basis Setup', 
      setupPrice: 997,
      monthlyPrice: 97,
      tag: 'FUNDAMENT',
      description: 'Het elimineren van versnippering en het creëren van overzicht in je praktijk.',
      features: ['Slimme Agenda & Reminders', 'Kwalificatie & Filter Formulieren', 'Centrale Inbox CRM Setup', '100% Done-For-You Ingericht'],
      aiComponent: 'Basis Automatiseringen',
      badge: null
    },
    { 
      name: 'Professional Setup', 
      setupPrice: 1497,
      monthlyPrice: 147,
      highlight: true,
      tag: 'GROEI',
      badge: "Meest Gekozen",
      description: 'Schaal je praktijk zonder leads te verliezen. Alles op de automatische piloot.',
      features: ['Alles uit de Basis Setup', 'AI-Receptie (Missed Call Text Back)', 'De "Alles-In-Eén" Social Planner', 'Google Review Automatisering'],
      aiComponent: 'AI-Receptie Systeem'
    },
    { 
      name: 'Premium Setup', 
      setupPrice: 2997,
      monthlyPrice: 197,
      tag: 'SCHAAL',
      description: 'Volledige operationele vrijheid inclusief geavanceerde maatwerk workflows.',
      features: ['Alles uit de Professional Setup', 'Geavanceerde Maatwerk Workflows', 'Priority VIP Support', 'Kwartaal Strategie Sessies'],
      aiComponent: 'De Volledige "AI Employee"',
      badge: null
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 relative bg-background" id="prijzen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
           <h2 className="text-5xl md:text-7xl font-serif text-deep-green mb-6">Investeer in <span className="text-primary italic">Resultaat.</span></h2>
           <p className="text-xl text-deep-green/60 max-w-2xl mx-auto font-light mb-12">
             Kies de Done-For-You setup die past bij jouw ambitie. Van overzicht naar ultieme vrijheid.
           </p>

           {/* Billing Toggle */}
           <div className="flex items-center justify-center gap-4 mb-12">
             <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-deep-green' : 'text-deep-green/40'}`}>Maandelijks</span>
             <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-16 h-8 rounded-full bg-deep-green/10 relative flex items-center p-1 cursor-pointer"
             >
                <motion.div 
                  className="w-6 h-6 bg-primary rounded-full shadow-md"
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
             </button>
             <span className={`text-sm font-bold transition-colors flex items-center gap-2 ${isYearly ? 'text-deep-green' : 'text-deep-green/40'}`}>
                Jaarlijks <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full">-20%</span>
             </span>
           </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
        >
            {plans.map((plan, index) => (
                <motion.div 
                    variants={itemVariants}
                    key={plan.name}
                    whileHover={{ y: -10, boxShadow: plan.highlight ? "0 25px 50px -12px rgba(199,161,116,0.25)" : "0 25px 50px -12px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
                    className={`rounded-[2.5rem] p-8 flex flex-col transition-all duration-300 relative group
                    ${plan.highlight 
                        ? 'bg-deep-green text-light shadow-2xl z-10 lg:scale-105' 
                        : 'bg-white text-deep-green border border-deep-green/5 hover:border-primary/30 hover:shadow-xl'
                    }
                    `}
                >
                    {plan.highlight && (
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-deep-green px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap"
                        >
                            Meest Gekozen
                        </motion.div>
                    )}
                    
                    {plan.badge && !plan.highlight && (
                         <div className="mb-4 inline-block bg-white/10 px-3 py-1 rounded-lg border border-white/10 text-[10px] uppercase tracking-wider font-bold text-primary">
                             {plan.badge}
                         </div>
                    )}

                    <div className="mb-6">
                        <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-primary' : 'text-deep-green/40'}`}>{plan.tag}</div>
                        <h3 className={`text-xl font-bold mb-4 ${plan.highlight ? 'text-light' : 'text-deep-green'}`}>{plan.name}</h3>
                        
                        <div className="mb-4">
                          <div className={`text-xs uppercase tracking-widest font-bold mb-1 ${plan.highlight ? 'text-light/50' : 'text-deep-green/50'}`}>Eenmalige Setup</div>
                          <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-serif">€{plan.setupPrice.toLocaleString('nl-NL')}</span>
                          </div>
                        </div>

                        <div className="mb-6 pb-6 border-b border-dashed border-current opacity-50">
                          <div className={`text-xs uppercase tracking-widest font-bold mb-1 ${plan.highlight ? 'text-light/50' : 'text-deep-green/50'}`}>Daarna</div>
                          <div className="flex items-baseline gap-1">
                              <span className="text-xl font-serif">
                                €{isYearly ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice}
                              </span>
                              <span className="text-sm">/mnd {isYearly ? '(jaarlijks gefactureerd)' : 'voor de software'}</span>
                          </div>
                        </div>

                        <p className={`text-sm leading-relaxed min-h-[40px] ${plan.highlight ? 'text-light/60' : 'text-deep-green/60'}`}>{plan.description}</p>
                    </div>

                    {/* AI Component Highlight */}
                    <div className={`mb-8 p-4 rounded-xl border flex items-center gap-3 ${
                        plan.highlight 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-surface border-deep-green/5'
                    }`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            plan.highlight ? 'bg-primary text-deep-green' : 'bg-deep-green text-primary'
                        }`}>
                            <Sparkles size={16} />
                        </div>
                        <div>
                            <div className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${plan.highlight ? 'text-light/60' : 'text-deep-green/50'}`}>
                                AI Component
                            </div>
                            <div className={`text-xs font-bold ${plan.highlight ? 'text-light' : 'text-deep-green'}`}>
                                {plan.aiComponent}
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                        {plan.features.map((f, i) => (
                        <li key={i} className={`flex items-start gap-3 text-sm ${plan.highlight ? 'text-light/80' : 'text-deep-green/80'}`}>
                            <div className="mt-1 min-w-[16px]">
                                {f.includes('White-label') || f.includes('App') ? <ShieldCheck size={16} className="text-primary" /> : <Check size={16} className="text-primary" />}
                            </div>
                            <span className={f.includes('White-label') ? 'font-bold text-primary' : ''}>{f}</span>
                        </li>
                        ))}
                    </ul>

                    <motion.a 
                      href="https://wa.me/31643411427"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-xl font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                      plan.highlight 
                          ? 'bg-primary text-deep-green hover:bg-[#d4b68f]' 
                          : 'bg-deep-green/5 text-deep-green hover:bg-deep-green hover:text-light'
                      }`}
                    >
                      Start Nu
                      <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            ))}
        </motion.div>

        {/* Website Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl p-6 md:p-8 border border-deep-green/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <Sparkles size={32} />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-deep-green/5 text-deep-green text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
                Optionele Add-on
              </div>
              <h3 className="text-2xl font-serif text-deep-green mb-2">Nieuwe Website Nodig?</h3>
              <p className="text-deep-green/70 text-sm max-w-lg">
                Voeg een gloednieuwe, conversiegerichte website toe aan je setup. Geoptimaliseerd voor mobiel, razendsnel en direct gekoppeld aan je nieuwe systeem.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right shrink-0">
            <div className="text-sm text-deep-green/50 line-through mb-1">Normaal €1.500</div>
            <div className="text-3xl font-serif text-primary mb-2">+ €800</div>
            <div className="text-xs text-deep-green/50 uppercase tracking-widest font-bold">Eenmalig</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;