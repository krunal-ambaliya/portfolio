import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-semibold text-slate-900 dark:text-white">EFEELE.DEV</span>
          <span aria-hidden="true">·</span>
          <span>Software Development Coordinator</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
