import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "nishemezwejeanpaul@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Réinitialise après 3 secondes
  };

  return (
    <section id="contact" className="scroll-mt-24 mb-10">
      <div className="glass p-10 md:p-14 rounded-3xl relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à collaborer ?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Je suis actuellement à la recherche de nouvelles opportunités. 
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-primary/50 hover:bg-slate-800/50 transition-all w-full md:w-auto"
              title="Ouvrir l'application mail"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-slate-200 text-sm font-medium">{email}</p>
              </div>
            </a>

            <a 
              href="tel:+25767596023" 
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-secondary/50 hover:bg-slate-800/50 transition-all w-full md:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Téléphone</p>
                <p className="text-slate-200 text-sm font-medium">+257 67596023</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-400 text-sm">Votre application d'email ne s'ouvre pas ? Copiez l'adresse directement :</p>
            <button 
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 ${
                copied 
                  ? 'bg-secondary text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                  : 'bg-primary text-slate-900 hover:bg-primary/90 shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)]'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={18} />
                  Email copié avec succès !
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copier l'adresse email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
