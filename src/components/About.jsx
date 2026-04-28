import React from 'react';
import { Code2, Database, Layout, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Django', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Deep Learning', category: 'AI' },
    { name: 'IA', category: 'AI' },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <span className="text-primary">01.</span> Mon Profil
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
            <Code2 className="text-primary" size={24} /> 
            Stack Technique
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-300 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
            <GraduationCap className="text-secondary" size={24} /> 
            Formations & Certifications
          </h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-700/50">
              <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2"></div>
              <h4 className="text-lg font-medium text-slate-200">Formation Deep Learning / IA</h4>
              <p className="text-primary mt-1">INDAAB</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-slate-700/50 group">
                <img 
                  src="/certificat.png" 
                  alt="Certificat INDAAB" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-700/50">
              <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-2"></div>
              <h4 className="text-lg font-medium text-slate-200">Licence Informatique</h4>
              <p className="text-primary/70 mt-1">Université du Burundi</p>
              <p className="text-slate-400 mt-2 text-sm">
                Formation approfondie en algorithmique, développement logiciel, bases de données et architecture des systèmes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
