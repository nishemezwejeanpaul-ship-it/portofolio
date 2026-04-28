import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-dark">
      {/* Navbar intégrée */}
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col gap-32">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-slate-800 py-8 text-center text-slate-400 text-sm mt-12 bg-dark/50">
        <p>&copy; {new Date().getFullYear()} NISHEMZWE Jean Paul. Tous droits réservés.</p>
        <p className="mt-2 text-slate-500 text-xs">Propulsé par React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
