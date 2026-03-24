import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FounderProps {
  onOpenModal: () => void;
}

const Founder: React.FC<FounderProps> = ({ onOpenModal }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="over-mij">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
              {/* PAS HIER JE FOTO AAN (als je in de toekomst een andere wilt) */}
              <img 
                src="https://assets.cdn.filesafe.space/Xn0ouMgD2stq6OuI1a4H/media/696bf4d4b34b64020e600c8b.png" 
                alt="Folkert van Hes" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/20 to-transparent"></div>
              
              {/* Name Tag */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-3xl mb-1">Folkert van Hes</p>
                <p className="text-primary font-medium tracking-wide text-sm uppercase">Oprichter ZichtbareGroei</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-deep-green/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-green">Persoonlijk</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-deep-green mb-6 leading-tight">
              "Techniek moet voor je werken, <br/><span className="italic text-primary">niet andersom.</span>"
            </h2>
            
            <div className="space-y-6 text-lg text-deep-green/80 font-light mb-10">
              <p>
                Als ondernemer wil je bezig zijn met je vak, niet met het aan elkaar knopen van systemen. Toch zie ik veel coaches en consultants worstelen met rondslingerende lijstjes, gemiste mails en dubbel werk.
              </p>
              <p>
                Dat is zonde van je tijd en je energie. Je verliest niet alleen uren per week, maar ook de rust in je hoofd.
              </p>
              <p>
                Daarom bouw ik met ZichtbareGroei een solide fundering voor je. Geen ingewikkeld gedoe of loze beloftes, maar gewoon een strak systeem dat doet wat het moet doen. Zodat jij weer overzicht en rust krijgt.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Geen technische kennis nodig",
                "Persoonlijke begeleiding & support",
                "100% focus op jouw coaching"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-deep-green font-medium">
                  <CheckCircle2 size={20} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenModal}
              className="px-8 py-4 bg-deep-green text-white font-bold rounded-xl hover:bg-deep-green/90 transition-colors flex items-center gap-3 group"
            >
              Laten we kennismaken
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-primary" />
            </button>
            <p className="mt-3 text-sm text-deep-green/50 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-primary" /> 100% vrijblijvend
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
