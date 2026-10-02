import React from 'react';
import { EDUCATION_DETAILS } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-16 md:mb-20">
          <GraduationCap className="w-8 h-8 text-slate-800 dark:text-white" strokeWidth={2} />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education <span className="text-emerald-500 dark:text-emerald-400">Details</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[7px] sm:left-[11px] top-6 bottom-6 w-[2px] bg-emerald-400/40 dark:bg-emerald-500/30" />

          <div className="space-y-12 sm:space-y-16">
            {EDUCATION_DETAILS.map((item) => (
              <div key={item.id} className="relative pl-8 sm:pl-12 group">
                {/* Timeline node */}
                <div className="absolute left-0 top-1.5 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-emerald-400 dark:bg-emerald-500 ring-4 ring-emerald-400/20 dark:ring-emerald-500/25 transition-transform duration-200 group-hover:scale-125" />
                </div>

                {/* Two-Column Structure consistent with Experience */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Left Column: Degree, Institution, Period & Honors */}
                  <div className="md:col-span-5 space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight leading-snug">
                      {item.degree}
                    </h3>
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    {item.scoreOrHonors && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/40 px-2.5 py-1 rounded-md mt-2">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>{item.scoreOrHonors}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Description, Coursework, Certifications */}
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {item.coursework && (
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Core Curricula & Focus Areas</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 font-sans"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.certifications && item.certifications.length > 0 && (
                      <div className="pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Professional Certifications</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.certifications.map((cert, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs"
                            >
                              <div className="font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                                {cert.name}
                              </div>
                              <div className="text-slate-500 dark:text-slate-400 mt-1 flex justify-between">
                                <span>{cert.issuer}</span>
                                <span className="font-mono">{cert.year}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
