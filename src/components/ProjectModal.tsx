import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, CheckCircle2, Layers, Cpu, ExternalLink, Github, Sparkles, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#111116] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky floating Close Button in Top Right */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-1 -mr-1 sm:-mt-2 sm:-mr-2 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#111116]/95 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-600 dark:text-slate-300 font-medium text-xs border border-slate-200/90 dark:border-slate-700/90 shadow-sm backdrop-blur-md transition-all cursor-pointer group active:scale-95"
          aria-label="Close dialog"
        >
          <span>Close</span>
          <X className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-200" />
        </button>

        {/* Modal Top Header with Badge & Close Button */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 px-2.5 py-1 rounded-md">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span>Project Case Study</span>
          </div>

        </div>

        {/* Title and Role */}
        <div className="mb-4 sm:mb-5 pr-2">
          <h3 id="modal-title" className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug break-words">
            {project.title}
          </h3>

          {project.role && (
            <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Role: <span className="text-slate-700 dark:text-slate-300 font-semibold">{project.role}</span>
            </p>
          )}
        </div>

        {/* High-Resolution Screenshot Preview */}
        {project.image && (
          <div className="mb-5 sm:mb-6 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-md">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800/70 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate max-w-[170px] sm:max-w-[260px] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 flex items-center gap-1 hover:underline transition-colors"
                  title="Open live URL in new page"
                >
                  <span className="truncate">{project.liveUrl}</span>
                  <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-70" />
                </a>
              ) : (
                <span className="truncate max-w-[170px] sm:max-w-[240px] text-slate-500 dark:text-slate-400 px-2">
                  krunal-ambaliya / {project.id}
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 hover:underline shrink-0 px-1 py-0.5 rounded hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                  title="Open live site in new page"
                >
                  <Globe className="w-3 h-3" />
                  <span>Live Site</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ) : (
                <span className="text-slate-400 shrink-0">Preview</span>
              )}
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden group">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                  title="Click to open live site in new page"
                >
                  <span className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl transform transition-transform group-hover:scale-105">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Open Live Site in New Page ↗</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Summary Description */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words mb-5 sm:mb-6">
          {project.description}
        </div>

        {/* Key Metrics / Live Links (Responsive 1-col on mobile, 3-cols on desktop with clickable link cards) */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            {project.metrics.map((m, idx) => {
              // Determine if this metric has a destination URL
              let targetUrl = m.url;
              if (!targetUrl) {
                if (m.value.startsWith('http://') || m.value.startsWith('https://')) {
                  targetUrl = m.value;
                } else if (
                  m.value.endsWith('.vercel.app') ||
                  m.value.endsWith('.app') ||
                  m.value.endsWith('.com') ||
                  m.value.includes('.vercel.app')
                ) {
                  targetUrl = `https://${m.value.replace(/^https?:\/\//, '')}`;
                } else if (
                  (m.label.toLowerCase().includes('live') ||
                    m.label.toLowerCase().includes('storefront') ||
                    m.label.toLowerCase().includes('deployment')) &&
                  project.liveUrl
                ) {
                  targetUrl = project.liveUrl;
                } else if (
                  (m.label.toLowerCase().includes('github') ||
                    m.label.toLowerCase().includes('repo')) &&
                  project.githubUrl
                ) {
                  targetUrl = project.githubUrl;
                }
              }

              if (targetUrl) {
                return (
                  <a
                    key={idx}
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open ${m.label} in new page`}
                    className="group relative p-2.5 sm:p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 border border-blue-200/70 dark:border-blue-800/60 hover:border-blue-400 dark:hover:border-blue-600 text-center flex flex-col justify-center min-w-0 transition-all duration-150 hover:shadow-md cursor-pointer active:scale-95"
                  >
                    <div className="text-xs sm:text-sm font-bold font-mono text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 break-words leading-snug flex items-center justify-center gap-1">
                      <span>{m.value}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 mt-1 leading-tight flex items-center justify-center gap-1 font-medium">
                      <span>{m.label}</span>
                      <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold">
                        ↗ open
                      </span>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center flex flex-col justify-center min-w-0"
                >
                  <div className="text-xs sm:text-sm font-bold font-mono text-blue-600 dark:text-blue-400 break-words leading-snug">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Key Features */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Key Features & Architecture Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                <span className="break-words leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        {project.architectureDetails && (
          <div className="mb-5 sm:mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Technical Implementation</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
              {project.architectureDetails}
            </p>
          </div>
        )}

        {/* Technologies Breakdown */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-2.5">
            <Layers className="w-4 h-4 text-indigo-500" />
            <span>Technologies & Libraries</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Deployment</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-xs active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <X className="w-3.5 h-3.5" />
            <span>Close Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
