import React from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center min-h-[85vh] pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Text */}
        <div className="order-2 lg:order-1 flex flex-col items-start animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Terminal size={16} />
            <span>Portfolio Développeur</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Bonjour, je suis <br />
            <span className="text-gradient">NISHEMZWE Jean Paul</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
            Développeur Full Stack spécialisé en <span className="text-slate-200 font-semibold">Django</span> et <span className="text-slate-200 font-semibold">React</span>. 
            Je conçois des applications web modernes, performantes et évolutives.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-slate-900 font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Voir mes projets <ArrowRight size={18} />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-slate-800/60 transition-all font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500"
            >
              <Download size={18} />
              Télécharger CV
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all hover:-translate-y-1">
              <Github size={22} />
            </a>
            <a href="www.linkedin.com/in/jean-paul-nishemezwe-052230405" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all hover:-translate-y-1">
              <Linkedin size={22} />
            </a>
            <span className="text-sm font-medium text-slate-500 pl-2 border-l border-slate-800">
              Retrouvez-moi en ligne
            </span>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[80px] opacity-30 animate-pulse-slow"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full border-2 border-slate-700/50 p-2 glass overflow-hidden flex items-center justify-center group">
              {/* Replace the src with your actual image path later, e.g. "/photo.jpg" */}
              <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center text-slate-500 border border-slate-700/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/photo.JPG')] bg-cover bg-center transition-transform duration-500 hover:scale-110"></div>
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-primary/30 scale-[1.05] group-hover:scale-[1.1] transition-transform duration-700"></div>
              <div className="absolute inset-0 rounded-full border border-secondary/20 scale-[1.1] group-hover:scale-[1.15] transition-transform duration-1000 delay-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
