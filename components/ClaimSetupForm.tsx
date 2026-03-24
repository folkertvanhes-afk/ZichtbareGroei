import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

interface ClaimSetupFormProps {
  onClose?: () => void;
}

const ClaimSetupForm: React.FC<ClaimSetupFormProps> = ({ onClose }) => {
  const navigate = useNavigate();
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
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/e19oE0MjZs7GvO35FhLE/webhook-trigger/5812824c-6ae2-40eb-9ff4-258bde370744';
      
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
      
      // Trigger confetti dopamine boost
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

    } catch (error) {
      console.error('Fout bij het versturen van formulier:', error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 md:p-10">
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
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-deep-green mb-2">
                  Aanvragen
                </h3>
                <p className="text-deep-green/70 text-sm">
                  Vul je gegevens in om de laatste plek te reserveren. We nemen snel contact met je op voor de volgende stappen.
                </p>
              </div>

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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
              className="bg-gradient-to-br from-deep-green via-deep-green to-[#1a2a26] rounded-2xl p-8 shadow-2xl border border-primary/30 h-full flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-20 h-20 bg-gradient-to-br from-primary to-[#d4b68f] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,182,143,0.5)] relative z-10"
              >
                <CheckCircle2 className="text-deep-green w-10 h-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 w-full"
              >
                <h4 className="text-3xl font-serif text-white mb-2">Setup succesvol geclaimd</h4>
                <p className="text-primary font-bold mb-6 text-lg">Bedankt voor je aanvraag.</p>
                
                <div className="text-left bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-6 w-full shadow-inner">
                  <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="text-primary" size={16} /> Wat je nu kunt verwachten:
                  </h5>
                  <ul className="space-y-4 text-light/90 text-sm">
                    <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                      <span>Ik stuur je binnen 24 uur een persoonlijk bericht.</span>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                      <span>We bespreken de details van jouw praktijk.</span>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                      <span>We gaan direct knallen met jouw setup.</span>
                    </motion.li>
                  </ul>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  onClick={() => {
                    if (onClose) onClose();
                    navigate('/');
                  }}
                  className="w-full py-4 bg-primary text-deep-green font-bold rounded-xl hover:bg-[#d4b68f] transition-colors flex items-center justify-center shadow-lg shadow-primary/20"
                >
                  Begrepen
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClaimSetupForm;
