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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-5 pr-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 px-2.5 py-1 rounded-md mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span>Project Case Study</span>
          </div>

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
              <span className="truncate max-w-[170px] sm:max-w-[240px] text-slate-500 dark:text-slate-400 px-2">
                {project.liveUrl || `krunal-ambaliya / ${project.id}`}
              </span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 hover:underline shrink-0"
                >
                  <Globe className="w-3 h-3" />
                  <span>Live Site</span>
                </a>
              ) : (
                <span className="text-slate-400 shrink-0">Preview</span>
              )}
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        {/* Summary Description */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed break-words mb-5 sm:mb-6">
          {project.description}
        </div>

        {/* Key Metrics (Responsive 1-col on mobile, 3-cols on desktop with break-all for clean wrapping) */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center flex flex-col justify-center min-w-0">
                <div className="text-xs sm:text-sm font-bold font-mono text-blue-600 dark:text-blue-400 break-words leading-snug">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
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
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Deployment</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
