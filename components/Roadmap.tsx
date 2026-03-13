import React, { useState } from 'react';
import { Layers, Bot, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Kick-off & Strategie",
    subtitle: "Jouw Blauwdruk",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    description: "We brengen je huidige processen in kaart en ontwerpen de perfecte flow voor jouw praktijk. Jij vertelt ons je visie, wij maken het plan.",
    tag: "Week 1"
  },
  {
    id: 2,
    title: "Done-For-You Bouw",
    subtitle: "Wij Doen Het Werk",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Ons team bouwt jouw complete systeem. Van agenda en CRM tot geautomatiseerde e-mails en social media planners. Jij hoeft niets te doen.",
    tag: "Week 2-3"
  },
  {
    id: 3,
    title: "Lancering & Groei",
    subtitle: "Jouw Nieuwe Realiteit",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "We leveren je nieuwe systeem op, trainen je in het gebruik, en zetten de knop om. Vanaf nu werk je efficiënter en schaal je zonder stress.",
    tag: "Week 4"
  }
];

const Roadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-4">Jouw Reis naar <span className="text-primary italic">Vrijheid</span></h2>
          <p className="text-deep-green/60">Geen ingewikkelde IT-trajecten, maar een helder 3-stappenplan.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:flex justify-between items-center relative mb-12 px-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-deep-green/10 -z-10"></div>
            <div 
                className="absolute top-1/2 left-0 h-1 bg-primary transition-all duration-700 -z-10"
                style={{ width: `${((activeStep - 1) / 2) * 100}%` }}
            ></div>
            
            {steps.map((step) => (
              <button 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 relative group ${
                  activeStep >= step.id 
                    ? 'bg-deep-green border-primary text-primary scale-110' 
                    : 'bg-white border-deep-green/10 text-deep-green/30 hover:border-primary/50'
                }`}
              >
                <step.icon size={24} />
                <div className={`absolute -bottom-10 whitespace-nowrap text-sm font-bold transition-all ${
                    activeStep === step.id ? 'text-deep-green opacity-100' : 'text-deep-green/40 opacity-0 group-hover:opacity-100'
                }`}>
                    {step.tag}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Vertical & Active Card Display */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="md:hidden flex flex-col gap-4">
                 {steps.map((step) => (
                    <button 
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`p-4 rounded-xl border text-left flex items-center gap-4 ${
                            activeStep === step.id 
                            ? 'bg-deep-green text-light border-primary' 
                            : 'bg-white text-deep-green border-transparent'
                        }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === step.id ? 'bg-primary text-deep-green' : 'bg-gray-100'}`}>
                            {step.id}
                        </div>
                        <span className="font-bold">{step.title}</span>
                    </button>
                 ))}
             </div>

             {/* Detail Card */}
             <div className="col-span-2 md:col-span-2">
                 {steps.map((step) => (
                     activeStep === step.id && (
                         <div key={step.id} className="glass-panel p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center reveal-up">
                             <div className="flex-1 space-y-4">
                                 <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-deep-green text-xs font-bold uppercase tracking-widest mb-2">
                                     Stap {step.id}: {step.tag}
                                 </div>
                                 <h3 className="text-3xl font-serif text-deep-green">{step.title}</h3>
                                 <h4 className="text-xl text-primary font-medium">{step.subtitle}</h4>
                                 <p className="text-deep-green/70 leading-relaxed text-lg">{step.description}</p>
                             </div>
                             <div className="flex-1 w-full flex justify-center">
                                 <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-deep-green to-black rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl group">
                                     <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                     <div className="absolute inset-0 bg-deep-green/40 mix-blend-multiply"></div>
                                     <step.icon size={80} className="text-primary relative z-10 opacity-80" />
                                     <div className="absolute bottom-6 right-6 z-10">
                                         <button 
                                            onClick={() => setActiveStep(step.id < steps.length ? step.id + 1 : 1)}
                                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full border border-white/20 transition-all"
                                         >
                                             <ArrowRight />
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     )
                 ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;