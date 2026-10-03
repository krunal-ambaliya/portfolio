import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio_theme');
      if (stored) return stored === 'dark';
      return true; // Default to dark mode
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-800 dark:text-slate-100 transition-colors duration-200 overflow-x-hidden">
      {/* Ambient gradient orbs. Radial gradients instead of filter: blur() — huge blurred
          layers exhaust iOS Safari's GPU memory and it stops painting the rest of the page. */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="ambient-orb -top-32 -right-32 w-[550px] h-[550px] [--orb:rgb(59_130_246/0.14)] dark:[--orb:rgb(37_99_235/0.2)]" />
        <div className="ambient-orb top-[35%] -left-40 w-[600px] h-[600px] [--orb:rgb(99_102_241/0.12)] dark:[--orb:rgb(79_70_229/0.16)]" />
        <div className="ambient-orb top-[65%] -right-32 w-[500px] h-[500px] [--orb:rgb(20_184_166/0.12)] dark:[--orb:rgb(5_150_105/0.14)]" />
        <div className="ambient-orb -bottom-32 left-1/3 w-[550px] h-[550px] [--orb:rgb(168_85_247/0.12)] dark:[--orb:rgb(126_34_206/0.14)]" />
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main id="main-content">
          <Hero />
          <Projects />
          <Experience />
          <Education />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
