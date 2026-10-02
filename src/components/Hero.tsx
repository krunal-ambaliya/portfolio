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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Tagline / Subtitle Glass Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-blue-700 dark:text-blue-400 text-xs font-semibold mb-6 shadow-xs animate-in fade-in duration-500">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping"></span>
            <span>{PERSONAL_INFO.titleBadge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 text-balance">
            KRUNAL <span className="text-blue-600 dark:text-blue-400">AMBALIYA</span>
          </h1>

          {/* Contact Strip */}
          <div className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-6 flex flex-wrap items-center gap-y-2 gap-x-4">
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
          <div className="p-6 rounded-2xl glass-panel mb-8 shadow-sm">
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
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium glass-card text-slate-700 dark:text-slate-300 hover:border-blue-400/80 transition-colors shadow-xs"
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

            <LikeWidget />
          </div>

          {/* Focus Areas Badges (Glassmorphic) */}
          <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Specialized Focus Areas:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-400/50 transition-colors">
                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Full Stack Web</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-purple-400/50 transition-colors">
                <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Artificial Intelligence</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-400/50 transition-colors">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Cyber Security</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-amber-400/50 transition-colors">
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
