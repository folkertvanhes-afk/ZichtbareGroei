import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const ClaimSetupForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      source: 'Flow Event Claim Form'
    };

    try {
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
      
      if (webhookUrl) {
        // Fire and forget: we don't await the fetch so the user doesn't have to wait
        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).catch(err => console.error('Webhook error:', err));
      } else {
        console.warn('Geen GHL Webhook URL geconfigureerd. Formulier data is niet verstuurd.');
      }
      
      // Simulate a short delay for UX so the button spinner is visible briefly
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Fout bij het versturen van formulier:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-deep-green mb-2">
          Claim Jouw Setup
        </h3>
        <p className="text-deep-green/70 text-sm">
          Vul je gegevens in om de laatste plek te reserveren. We nemen snel contact met je op voor de volgende stappen.
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
                  <input required name="name" type="text" placeholder="Voor- en achternaam" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">E-mailadres</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required name="email" type="email" placeholder="jouw@email.nl" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Telefoonnummer</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input required name="phone" type="tel" placeholder="06 12345678" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
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
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-4">Bedankt, we hebben je aanvraag ontvangen!</h4>
              
              <div className="text-left bg-white/5 p-6 rounded-xl border border-white/10 mb-8 w-full">
                <h5 className="text-primary font-bold mb-3 text-sm uppercase tracking-wider">Jouw plek is gereserveerd. Wat nu?</h5>
                <ul className="space-y-3 text-light/80 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Ik stuur je binnen 24 uur een bericht via WhatsApp of e-mail.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>We plannen een korte call om te kijken of het Flow Pakket 100% bij je past.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Is het een match? Dan starten we direct met de implementatie.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-primary text-deep-green font-bold rounded-xl hover:bg-[#d4b68f] transition-colors text-sm w-full"
              >
                Begrepen, tot snel!
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClaimSetupForm;
