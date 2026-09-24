import React from 'react';
import { ExternalLink, Github, Server, Database, Briefcase, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SYGERI - Gestion de Stock (Stage)",
      description: "Module de gestion de stock pour le CEFORE-RUSI. API REST avec soft delete, automatisation métier (signaux Django) et alertes péremption/seuils.",
      tech: ["Django REST", "React", "Tailwind CSS"],
      icon: <Database className="text-primary" size={24} />,
      image: "/sygeri.png",
      highlights: ["API REST & Signaux", "Soft Delete", "UI adaptée aux agents"]
    },
    {
      title: "EcoCollecte",
      description: "Application complète de gestion de la clientèle et de la collecte des déchets ménagers avec 38 cas d'utilisation et hiérarchie territoriale.",
      tech: ["PHP", "MySQL", "MVC Maison"],
      icon: <Server className="text-secondary" size={24} />,
      image: "/ecocollecte.png",
      highlights: ["Architecture MVC Maison", "Modélisation territoriale", "Suite de 14 tests"]
    },
    {
      title: "StageHub",
      description: "Plateforme multi-organisations de gestion des stages académiques, offrant des workflows avancés, une signature électronique et des permissions fines.",
      tech: ["PHP", "MySQL"],
      icon: <Briefcase className="text-primary" size={24} />,
      image: "/stagehub.png",
      highlights: ["Permissions fines (7 rôles)", "Signature électronique", "Multi-organisations"]
    },
    {
      title: "Bataconnect",
      description: "Marketplace multi-vendeurs de produits électroniques démontrant une capacité à livrer rapidement sur un CMS existant.",
      tech: ["WordPress", "WooCommerce"],
      icon: <ShoppingCart className="text-secondary" size={24} />,
      highlights: ["Marketplace multi-vendeurs", "CMS & E-commerce", "Mise en place rapide"]
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
            className="group glass p-8 rounded-2xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-slate-700/50 hover:border-primary/50 flex flex-col"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-grow flex flex-col">
              {project.image ? (
                <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-slate-700/50 group-hover:border-primary/30 transition-colors relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 border border-slate-700/50 group-hover:border-primary/30 transition-colors">
                  {project.icon}
                </div>
              )}
              
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
