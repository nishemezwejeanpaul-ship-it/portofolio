import React from 'react';
import { ExternalLink, Github, Server, Radio } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Gestion des logements UB",
      description: "Système complet de gestion pour l'attribution des chambres étudiantes. Intègre une haute sécurité au niveau des requêtes SQL pour protéger les données.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      icon: <Server className="text-primary" size={24} />,
      highlights: ["Attribution automatisée", "Sécurité SQL", "Back-office admin"]
    },
    {
      title: "API Notifications Temps Réel",
      description: "Service backend performant permettant l'envoi et la réception de notifications en temps réel pour des applications web modernes.",
      tech: ["FastAPI", "React", "WebSockets", "JWT"],
      icon: <Radio className="text-secondary" size={24} />,
      highlights: ["WebSockets", "Auth JWT", "Haute performance"]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
        <span className="text-primary">02.</span> Mes Projets
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group glass p-8 rounded-2xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-slate-700/50 hover:border-primary/50"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 border border-slate-700/50 group-hover:border-primary/30 transition-colors">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-8">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4 mt-auto">
                <button className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-not-allowed opacity-50" title="Code source privé">
                  <Github size={18} /> Code
                </button>
                <button className="text-sm font-medium text-slate-300 hover:text-primary flex items-center gap-2 transition-colors cursor-not-allowed opacity-50" title="Projet en local">
                  <ExternalLink size={18} /> Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
