import React, { useState } from 'react';
import { LetterGlitch } from './LetterGlitch';
import { LikeWidget } from './LikeWidget';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Copy, Check, ExternalLink, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background canvas letter glitch */}
      <LetterGlitch glitchSpeed={70} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Status line */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium mb-6 animate-in fade-in duration-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Available for engineering coordination & full-stack roles</span>
          </div>

          {/* Main Title & Role */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 text-balance">
            Software Development{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Coordinator</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 transition-all duration-150 active:scale-95 shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
            </button>

            <LikeWidget />
          </div>

          {/* Social Links & Trust row */}
          <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400 text-sm mb-12 border-t border-slate-200/80 dark:border-slate-800/80 pt-6">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">Connect:</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Quantified Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
