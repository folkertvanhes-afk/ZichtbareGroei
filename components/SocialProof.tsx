import React from 'react';
import { Quote } from 'lucide-react';

const logos = [
  "NOBCO", "ICF Netherlands", "EMCC", "CoachFinder", "Springest"
];

const testimonials = [
    {
        name: "Sanne de Vries",
        role: "Business Coach",
        image: "https://picsum.photos/id/64/100",
        quote: "Ik dacht dat ik 'niet technisch' was. Maar dit systeem geeft me zoveel rust. Mijn omzet is met 30% gestegen puur door de automatische opvolging."
    },
    {
        name: "Mark Jansen",
        role: "High-Performance Trainer",
        image: "https://picsum.photos/id/91/100",
        quote: "Ik zat vast in de Zapier-hel. Alles brak constant. Nu heb ik één dashboard en werkt alles gewoon. Het voelt eindelijk professioneel."
    },
    {
        name: "Lisa van Dam",
        role: "Holistisch Therapeut",
        image: "https://picsum.photos/id/129/100",
        quote: "De Voice AI is magisch. Cliënten bellen en worden direct ingepland terwijl ik in een sessie zit. Ik mis geen enkele lead meer."
    }
];

const SocialProof: React.FC = () => {
  return (
    <>
      <section className="py-20 border-y border-deep-green/5 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
            <p className="text-deep-green/40 text-xs uppercase tracking-[0.2em] font-bold mb-4">Gekozen door vooruitstrevende coaches en trainers</p>
            <div className="flex justify-center items-center gap-1 mb-8 text-primary">
                {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white border border-deep-green/5 p-8 rounded-2xl text-left hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                        <Quote className="w-6 h-6 text-primary/30 mb-4" />
                        <p className="text-deep-green/80 mb-6 leading-relaxed italic text-sm">"{t.quote}"</p>
                        <div className="flex items-center gap-4">
                            <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full border border-deep-green/10" />
                            <div>
                                <p className="text-deep-green font-bold text-sm font-serif">{t.name}</p>
                                <p className="text-deep-green/40 text-xs uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Infinite Logo Scroll */}
        <div className="relative overflow-hidden w-full py-8 border-t border-deep-green/5 bg-background">
            <div className="flex gap-20 items-center animate-scroll w-max px-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={index} className="text-xl font-serif font-bold text-deep-green tracking-tight cursor-default whitespace-nowrap">
                        {logo}
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;