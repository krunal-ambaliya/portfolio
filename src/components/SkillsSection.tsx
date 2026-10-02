import React, { useState } from 'react';
import { SKILLS, TECHNICAL_STRENGTHS, SPOKEN_LANGUAGES } from '../data/portfolioData';
import { TechCard3D } from './TechCard3D';
import { Card3D } from './Card3D';
import { SkillItem } from '../types/portfolio';
import {
  Code,
  Sparkles,
  Layers,
  Database,
  Terminal,
  Globe,
  Star,
  CheckCircle2,
  Box,
  Cpu,
  Info
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d-stack' | 'strengths' | 'languages'>('3d-stack');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedSkill, setInspectedSkill] = useState<SkillItem | null>(SKILLS[0]);

  const categories = [
    'All',
    'Languages',
    'Frameworks & Libraries',
    'Web Technologies',
    'Database',
    'Tools'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  const getSkillContext = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes('python')) return 'Key language used for AI Prompt & Developer Tools, LLM API integration, and security analysis routines.';
    if (n.includes('javascript') || n === 'js') return 'Core language used across all web applications, dynamic dashboards, and browser extension UI.';
    if (n.includes('react')) return 'Modern component-driven UI architecture used for responsive web dashboards and interactive applications.';
    if (n.includes('bootstrap')) return 'Employed in Property Management Web Application and Dentray Clinic Management for responsive layouts.';
    if (n.includes('tailwind')) return 'Used for modern utility-first responsive styling and glassmorphic micro-interactions.';
    if (n.includes('mysql') || n.includes('sql')) return 'Relational data modeling for Property Management app (roles, maintenance tickets, leases).';
    if (n.includes('vs code')) return 'Developed custom VS Code Extension APIs for developer prompt engineering and code review.';
    if (n.includes('rest')) return 'Integrated multi-LLM endpoints, clinic booking APIs, and property management data endpoints.';
    if (n.includes('git') || n.includes('github')) return 'Version control, collaborative workflows, and open-source project management.';
    if (n.includes('linux')) return 'Command-line system administration, shell workflows, and server environments.';
    if (n.includes('wordpress')) return 'Content management, themes, and client website deployments.';
    if (n.includes('responsive')) return 'Mobile-first design principles ensuring fluid UX from smartphones to desktop screens.';
    return 'Applied in modern web development, UI engineering, and project workflows.';
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/20 dark:border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header - Resume Blue Badge Style */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <Box className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            TECH STACK & SKILLS
          </h2>

          <div className="flex-1 flex items-center ml-2">
            <div className="h-[3px] flex-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-600/20 shrink-0 -ml-1" />
          </div>
        </div>

        {/* View Switcher Tabs (Glassmorphic) */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <button
            onClick={() => setActiveTab('3d-stack')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === '3d-stack'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white glass-card'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>3D Interactive Tech Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('strengths')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'strengths'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white glass-card'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Technical Strengths</span>
          </button>

          <button
            onClick={() => setActiveTab('languages')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'languages'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white glass-card'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Spoken Languages</span>
          </button>
        </div>

        {/* Tab 1: 3D Interactive Tech Stack */}
        {activeTab === '3d-stack' && (
          <div className="space-y-8">
            {/* Category Filter Pills (Glassmorphic) */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                <span>Hover to tilt in 3D · Click to inspect</span>
              </div>
            </div>

            {/* 3D Micro-Elements Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 justify-items-center">
              {filteredSkills.map((skill) => (
                <TechCard3D
                  key={skill.name}
                  skill={skill}
                  isSelected={inspectedSkill?.name === skill.name}
                  onClick={() => setInspectedSkill(skill)}
                />
              ))}
            </div>

            {/* 3D Glass Inspector HUD Panel */}
            {inspectedSkill && (
              <div className="p-5 sm:p-6 rounded-2xl glass-panel animate-in fade-in zoom-in-95 duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      {inspectedSkill.name}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                      {inspectedSkill.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-500">Proficiency:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                      {inspectedSkill.proficiency}%
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <p>{getSkillContext(inspectedSkill.name)}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Technical Strengths (Glassmorphism Cards with 3D Tilt) */}
        {activeTab === 'strengths' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECHNICAL_STRENGTHS.map((strength) => (
              <Card3D
                key={strength.name}
                tiltIntensity={6}
                glareOpacity={0.25}
                scale={1.02}
                className="p-5 rounded-2xl glass-card hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-xs h-full"
              >
                <div style={{ transform: 'translateZ(14px)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {strength.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                    {strength.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        )}

        {/* Tab 3: Spoken Languages (Glassmorphic) */}
        {activeTab === 'languages' && (
          <div className="p-6 rounded-2xl glass-panel max-w-xl mx-auto space-y-6">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Spoken & Written Proficiency
            </div>
            {SPOKEN_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between gap-4 py-3 border-b border-slate-100/60 dark:border-slate-800/60 last:border-b-0"
              >
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {lang.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {lang.proficiency}
                  </div>
                </div>

                {/* Rating Dots */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-3.5 h-3.5 rounded-full transition-colors ${
                        dot <= lang.rating
                          ? 'bg-blue-600 dark:bg-blue-400 shadow-xs'
                          : 'bg-slate-200 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
