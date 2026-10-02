import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Briefcase, CheckCircle2, Calendar, MapPin, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/20 dark:border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 sm:gap-4 mb-12">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            EXPERIENCE
          </h2>

          <div className="flex-1 flex items-center ml-2">
            <div className="h-[3px] flex-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-600/20 shrink-0 -ml-1" />
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200/80 dark:border-blue-900/60 ml-4 sm:ml-5 space-y-10">
          {WORK_EXPERIENCE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-950/80 transition-transform duration-200 group-hover:scale-125 shadow-xs z-10" />

              {/* Wrapped in 3D Card with interactive tilt & glare */}
              <Card3D
                tiltIntensity={5}
                glareOpacity={0.25}
                scale={1.015}
                className="p-6 sm:p-7 rounded-2xl glass-card hover:border-blue-400/80 dark:hover:border-blue-500/60 transition-all duration-200 shadow-md"
              >
                <div style={{ transform: 'translateZ(14px)' }} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-card">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{item.period}</span>
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-card">
                          <MapPin className="w-3.5 h-3.5 text-blue-500" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Points from Resume */}
                  <div style={{ transform: 'translateZ(12px)' }} className="space-y-2.5 pt-1">
                    {item.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  {item.technologies && (
                    <div style={{ transform: 'translateZ(10px)' }} className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mr-1 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Tech Stack:</span>
                      </span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
