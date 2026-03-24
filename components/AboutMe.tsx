import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Zap, Shield, LineChart, Sparkles } from 'lucide-react';

interface AboutMeProps {
  onOpenModal?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onOpenModal }) => {
  return (
    <section id="over-mij" className="relative bg-background overflow-hidden pb-32">
      {/* Editorial Hero Section */}
      <div className="relative pt-20 pb-32 bg-deep-green text-light overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Aangenaam</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">
              Ik bouw de <span className="text-primary italic">systemen</span> waar jij van droomt.
            </h1>
            <p className="text-xl md:text-2xl text-light/70 font-light max-w-2xl leading-relaxed">
              Zodat jij je weer kunt focussen op je passie, in plaats van te vechten met techniek.
            </p>
          </motion.div>
        </div>
      </div>

      {/* The Story & Image Section */}
      <div className="container mx-auto px-6 max-w-6xl relative z-20 -mt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32 h-max"
          >
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white bg-white">
                <div className="absolute inset-0 bg-deep-green/10 mix-blend-multiply z-10"></div>
                {/* VERVANG DEZE FOTO: Pas de 'src' aan naar de URL van jouw eigen foto */}
                <img 
                  src="https://assets.cdn.filesafe.space/Xn0ouMgD2stq6OuI1a4H/media/696bf4d4b34b64020e600c8b.png" 
                  alt="Folkert van Hes" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stats */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-deep-green/5 max-w-[220px] z-20"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-deep-green">3+</div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-deep-green/50">Jaar Ervaring</div>
                  </div>
                </div>
                <p className="text-xs text-deep-green/70 font-medium leading-relaxed">
                  Gespecialiseerd in AI & Marketing Automatisering.
                </p>
              </motion.div>
            </div>

            {/* Mission/Promise Fill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16 bg-deep-green p-8 rounded-[2rem] shadow-xl relative overflow-hidden group hidden lg:block text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Mijn Belofte
              </h4>
              <p className="text-white/90 font-light leading-relaxed italic text-lg">
                "Ik neem de technische chaos uit handen, zodat jij je volledige energie kunt steken in het transformeren van de levens van jouw cliënten."
              </p>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-deep-green/5 mt-12 lg:mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-deep-green mb-8">
              Hi, ik ben <span className="text-primary italic">Folkert van Hes</span>
            </h2>
            
            <div className="space-y-6 text-deep-green/80 text-lg font-light leading-relaxed mb-10">
              <p>
                Drie jaar geleden begon ik als onafhankelijk online marketeer. Wat ik zag, frustreerde me mateloos: gepassioneerde ondernemers die <strong>vastliepen in een web van dure, losse tools</strong>. Ze waren meer tijd kwijt aan administratie en techniek dan aan hun eigen klanten.
              </p>
              <p className="text-xl font-serif text-deep-green border-l-4 border-primary pl-6 py-2 my-8 italic">
                "Ik geloof dat techniek je vrijheid moet geven, geen hoofdpijn."
              </p>
              <p>
                Mijn passie voor AI, marketing en zelfontwikkeling bracht me bij de oplossing. Ik bouw nu <strong>één centraal systeem</strong> dat alles overneemt wat jou afleidt. Van therapeuten tot business coaches: ik help je om weer te doen waar je goed in bent.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Geen technische kennis nodig",
                "100% Done-For-You ingericht",
                "Bewezen AI-strategieën",
                "Persoonlijke begeleiding"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-deep-green/5">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <span className="text-deep-green text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <motion.button 
              onClick={onOpenModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-deep-green text-light font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-primary hover:text-deep-green transition-colors shadow-lg flex items-center justify-center gap-3"
            >
              Plan een vrijblijvende kennismaking
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Core Values with Images */}
      <div className="container mx-auto px-6 max-w-6xl mt-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif text-deep-green mb-4">Waarom samenwerken?</h3>
          <p className="text-deep-green/60 max-w-2xl mx-auto">De pijlers waarop ik elke samenwerking bouw.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Shield,
              title: "Radicale Transparantie", 
              desc: "Geen verborgen kosten of vage beloftes. Je weet precies wat je krijgt en wat het oplevert.",
              gradient: "from-primary/10 to-transparent",
              borderColor: "group-hover:border-primary/50"
            },
            { 
              icon: Sparkles,
              title: "Innovatie Voorop", 
              desc: "Ik gebruik de nieuwste AI-tools zodat jij je concurrentie altijd een stap voor blijft.",
              gradient: "from-[#d4b68f]/10 to-transparent",
              borderColor: "group-hover:border-[#d4b68f]/50"
            },
            { 
              icon: LineChart,
              title: "Meetbare Groei", 
              desc: "We bouwen geen systemen voor de leuk. Alles is gericht op meer rust, meer leads en meer omzet.",
              gradient: "from-white/50 to-transparent",
              borderColor: "group-hover:border-white/50"
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-8 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border-2 border-transparent ${value.borderColor}`}
            >
              {/* Abstract Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
              
              {/* Animated Glow behind icon */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-primary/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-deep-green/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <value.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif text-deep-green mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h4>
                <p className="text-deep-green/70 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-tl-[2rem] rounded-br-[2rem] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
