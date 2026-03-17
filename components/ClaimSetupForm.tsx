import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const ClaimSetupForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-deep-green mb-2">
          Claim Jouw Setup
        </h3>
        <p className="text-deep-green/70 text-sm">
          Vul je gegevens in om een van de 3 plekken te reserveren. We nemen snel contact met je op voor de volgende stappen.
        </p>
      </div>

      <div className="relative min-h-[320px]">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="flex flex-col justify-center space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Jouw Naam</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="text" placeholder="Voor- en achternaam" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">E-mailadres</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="email" placeholder="jouw@email.nl" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Telefoonnummer</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required type="tel" placeholder="06 12345678" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 bg-primary text-deep-green font-bold rounded-xl hover:bg-[#d4b68f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 group"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : (
                  <>
                    Bevestig Reservering <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-deep-green rounded-2xl p-8 shadow-xl border border-white/10 h-full flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-primary w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">Plek Gereserveerd!</h4>
              <p className="text-light/70 mb-8">
                Gefeliciteerd! We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op om de setup in gang te zetten.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClaimSetupForm;
