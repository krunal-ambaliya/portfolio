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
      {/* Glassmorphic Ambient Gradient Orbs in Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Top-Right Blue Glow Orb */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-blue-500/12 dark:bg-blue-600/18 blur-[120px]" />
        {/* Middle-Left Indigo Glow Orb */}
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/14 blur-[140px]" />
        {/* Lower-Right Emerald/Teal Glow Orb */}
        <div className="absolute top-[65%] -right-32 w-[500px] h-[500px] rounded-full bg-teal-500/10 dark:bg-emerald-600/12 blur-[130px]" />
        {/* Bottom Center Violet Orb */}
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] rounded-full bg-purple-500/10 dark:bg-purple-700/12 blur-[130px]" />
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
