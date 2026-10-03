import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { lockScroll } from '../lib/smoothScroll';
import { EASE } from './ui/Reveal';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/** Splits "Label: detail" feature strings so the label can be emphasised. */
const splitFeature = (feature: string) => {
  const idx = feature.indexOf(':');
  return idx > 0 && idx < 60
    ? { label: feature.slice(0, idx), text: feature.slice(idx + 1).trim() }
    : { label: '', text: feature };
};

const DetailBlock: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="border-t border-line py-7">
    <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h4>
    {children}
  </section>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    lockScroll(true);
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      // Keep keyboard focus inside the dialog
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-surface sm:rounded-2xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface px-6 py-4 sm:px-10">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Project details</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-fg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              className="px-6 pb-10 pt-8 sm:px-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            >
              <h3 id="project-dialog-title" className="text-3xl sm:text-4xl font-medium tracking-tight text-fg">
                {project.name}
              </h3>
              <p className="mt-2 text-base text-muted">{project.title.split(' — ')[1] ?? project.summary}</p>
              {project.role && (
                <p className="mt-4 text-sm text-fg-2">
                  <span className="text-muted">Role · </span>
                  {project.role}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-colors hover:bg-fg-2"
                  >
                    View live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-subtle"
                >
                  <Github className="h-4 w-4" />
                  View code
                </a>
              </div>

              {project.image && (
                <div className="mt-8 overflow-hidden rounded-lg border border-line bg-subtle">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="aspect-[16/9] w-full object-cover object-top"
                  />
                </div>
              )}

              <p className="mt-8 text-base leading-relaxed text-fg-2 sm:text-lg">{project.description}</p>

              <div className="mt-8">
                <DetailBlock title="Key features">
                  <ul className="space-y-4">
                    {project.keyFeatures.map((feature) => {
                      const { label, text } = splitFeature(feature);
                      return (
                        <li key={feature} className="text-[15px] leading-relaxed text-fg-2">
                          {label && <span className="font-medium text-fg">{label}. </span>}
                          {text}
                        </li>
                      );
                    })}
                  </ul>
                </DetailBlock>

                {project.architectureDetails && (
                  <DetailBlock title="Implementation">
                    <p className="text-[15px] leading-relaxed text-fg-2">{project.architectureDetails}</p>
                  </DetailBlock>
                )}

                <DetailBlock title="Tech stack">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-fg-2">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                {project.metrics && project.metrics.length > 0 && (
                  <DetailBlock title="At a glance">
                    <dl className="divide-y divide-line">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                          <dt className="text-sm text-muted">{m.label}</dt>
                          <dd className="text-[15px] text-fg">
                            {m.url ? (
                              <a
                                href={m.url}
                                {...(m.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="inline-flex items-center gap-1 underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                              >
                                {m.value}
                                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                              </a>
                            ) : (
                              m.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </DetailBlock>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
