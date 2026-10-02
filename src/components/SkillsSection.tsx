import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, Terminal, Database, Code, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools', 'AI & APIs'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Backend':
        return <Terminal className="w-3.5 h-3.5 text-blue-500" />;
      case 'Database':
        return <Database className="w-3.5 h-3.5 text-purple-500" />;
      case 'AI & APIs':
        return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Cpu className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 px-3 py-1 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-emerald-500 dark:text-emerald-400">Core Competencies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Proven engineering stack spanning responsive frontends, distributed architectures, database engines, and modern AI integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-white shadow-xs font-semibold'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/70 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-150 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(skill.category)}
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tabular-nums">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Minimal bar indicator */}
              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
