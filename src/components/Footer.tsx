import React from 'react';
import { ArrowUp, Github, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-extrabold uppercase tracking-wide text-slate-900 dark:text-white font-sans">
            {PERSONAL_INFO.name}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Web Developer & Python Developer</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
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
