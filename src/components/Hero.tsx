import React, { useState } from 'react';
import { LetterGlitch } from './LetterGlitch';
import { LikeWidget } from './LikeWidget';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  MapPin,
  Phone,
  Mail,
  Github,
  ArrowDown,
  Copy,
  Check,
  Code,
  Brain,
  Shield,
  Terminal,
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background canvas letter glitch */}
      <LetterGlitch glitchSpeed={70} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {/* Tagline / Subtitle Glass Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-blue-700 dark:text-blue-400 text-xs font-semibold shadow-xs animate-in fade-in duration-500">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping"></span>
            <span>{PERSONAL_INFO.titleBadge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
            KRUNAL <span className="text-blue-600 dark:text-blue-400">AMBALIYA</span>
          </h1>

          {/* Contact Strip */}
          <div className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-y-2 gap-x-4">
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Professional Summary - Glassmorphism Panel */}
          <div className="p-6 sm:p-7 rounded-2xl glass-panel shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-xs">
                P
              </span>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                Professional Summary
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-150 active:scale-95 shadow-md"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium glass-card text-slate-700 dark:text-slate-200 hover:border-blue-400/80 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium glass-card text-slate-700 dark:text-slate-300 hover:border-blue-400/80 transition-colors shadow-xs cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold glass-card text-emerald-700 dark:text-emerald-400 hover:border-emerald-500/80 transition-colors shadow-xs"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href={PERSONAL_INFO.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold glass-card text-indigo-700 dark:text-indigo-400 hover:border-indigo-500/80 transition-colors shadow-xs"
              title="Discord: krues7"
            >
              <svg className="w-3.5 h-3.5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Discord</span>
            </a>

            <LikeWidget />
          </div>

          {/* Focus Areas Badges (Glassmorphic) */}
          <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Specialized Focus Areas:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-400/50 transition-colors">
                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Full Stack Web</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-purple-400/50 transition-colors">
                <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Artificial Intelligence</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-400/50 transition-colors">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Cyber Security</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-amber-400/50 transition-colors">
                <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Prompt Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
