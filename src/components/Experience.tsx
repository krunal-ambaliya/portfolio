import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading - Exact match to Image 1 */}
        <div className="flex items-center justify-center gap-3 mb-16 md:mb-20">
          <Briefcase className="w-8 h-8 text-slate-800 dark:text-white" strokeWidth={2} />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work <span className="text-emerald-500 dark:text-emerald-400">Experience</span>
          </h2>
        </div>

        {/* Timeline Container with exact matching vertical line & nodes */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting nodes */}
          <div className="absolute left-[7px] sm:left-[11px] top-6 bottom-6 w-[2px] bg-emerald-400/40 dark:bg-emerald-500/30" />

          <div className="space-y-12 sm:space-y-16">
            {WORK_EXPERIENCE.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div key={item.id} className="relative pl-8 sm:pl-12 group">
                  {/* Timeline Node Dot - Exact match to screenshot */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 dark:bg-emerald-500 ring-4 ring-emerald-400/20 dark:ring-emerald-500/25 transition-transform duration-200 group-hover:scale-125" />
                  </div>

                  {/* Two-Column Grid Layout matching Image 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Left Column: Role, Company, Period */}
                    <div className="md:col-span-5 space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight leading-snug">
                        {item.role}
                      </h3>
                      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                        {item.company}
                      </div>
                      <div className="text-sm font-mono text-slate-500 dark:text-slate-400">
                        {item.period}
                      </div>
                    </div>

                    {/* Right Column: Description Text */}
                    <div className="md:col-span-7">
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Interactive toggle for responsibilities and tech stack */}
                      {item.responsibilities && (
                        <div className="mt-4">
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                          >
                            <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights & Stack'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 animate-in fade-in duration-200 space-y-3">
                              <ul className="space-y-2">
                                {item.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>

                              {item.technologies && (
                                <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">Stack:</span>
                                  {item.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-mono"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
