import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Globe, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const AdviesgesprekForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = (e.target as HTMLElement).closest('form');
    if (form) {
      const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
      const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
      
      if (nameInput && !nameInput.checkValidity()) {
        nameInput.reportValidity();
        return;
      }
      if (emailInput && !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }
    }
    setFormStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = {
      ...formData,
      source: 'Adviesgesprek Form'
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
          Plan je Adviesgesprek
        </h3>
        <p className="text-deep-green/70 text-sm">
          Ontdek in 30 minuten hoe we jouw praktijk kunnen transformeren. 100% vrijblijvend.
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
              className="flex flex-col justify-center"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold text-deep-green">Stap {formStep} van 2</span>
                <div className="flex gap-1">
                  <div className={`w-8 h-1.5 rounded-full ${formStep >= 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-1.5 rounded-full ${formStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
              </div>

              {formStep === 1 ? (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Jouw Naam</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Voor- en achternaam" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">E-mailadres</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="jouw@email.nl" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full mt-4 py-3 bg-deep-green text-white font-bold rounded-xl hover:bg-deep-green/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Volgende Stap <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Website (Optioneel)</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input name="website" value={formData.website} onChange={handleInputChange} type="url" placeholder="www.jouwwebsite.nl" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-deep-green mb-1 uppercase tracking-wider">Grootste uitdaging?</label>
                    <textarea name="challenge" value={formData.challenge} onChange={handleInputChange} rows={3} placeholder="Waar loop je momenteel tegenaan?" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-deep-green resize-none"></textarea>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="px-4 py-3 text-deep-green font-bold rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      Terug
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-primary text-deep-green font-bold rounded-xl hover:bg-[#d4b68f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Plan Gesprek"}
                    </button>
                  </div>
                </motion.div>
              )}
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
              <h4 className="text-2xl font-serif text-white mb-4">Bedankt, we hebben het ontvangen!</h4>
              
              <div className="text-left bg-white/5 p-6 rounded-xl border border-white/10 mb-8 w-full">
                <h5 className="text-primary font-bold mb-3 text-sm uppercase tracking-wider">Wat gebeurt er nu?</h5>
                <ul className="space-y-3 text-light/80 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Ik neem binnen 24 uur persoonlijk contact met je op.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>We plannen een moment in dat perfect voor jou uitkomt.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>We duiken direct in jouw grootste knelpunt en maken een concreet plan.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => { 
                  setIsSuccess(false); 
                  setFormStep(1); 
                  setFormData({ name: '', email: '', website: '', challenge: '' });
                }}
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

export default AdviesgesprekForm;
