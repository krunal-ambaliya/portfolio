import React, { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { Section } from './ui/Section';
import { EASE, Reveal } from './ui/Reveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

type CategoryId = (typeof PROJECT_CATEGORIES)[number]['id'];

export const Projects: React.FC = () => {
  const [category, setCategory] = useState<CategoryId>('all');
  const [openProject, setOpenProject] = useState<ProjectItem | null>(null);
  const closeModal = useCallback(() => setOpenProject(null), []);

  const visible = useMemo(
    () => (category === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === category)),
    [category]
  );

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Selected work"
      title="Projects"
      intro="Production web apps, storefronts and developer tools — from idea to deployment."
    >
      <Reveal>
        <div role="group" aria-label="Filter projects" className="-mt-2 mb-10 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((c) => {
            const selected = category === c.id;
            const count = c.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(c.id)}
                className={`relative h-10 rounded-full border px-4 text-sm transition-colors duration-300 cursor-pointer ${
                  selected ? 'border-fg text-bg' : 'border-line text-muted hover:border-line-strong hover:text-fg'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute -inset-px -z-0 rounded-full bg-fg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {c.label}
                  <sup className="ml-1 font-mono text-[10px] opacity-60">{count}</sup>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => {
              // The first project gets a wide, side-by-side layout when it leads an odd-sized list
              const featured = i === 0 && visible.length % 2 === 1;
              return (
                <motion.div
                  key={project.id}
                  layout
                  className={featured ? 'h-full md:col-span-2' : 'h-full'}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Reveal className="h-full" delay={featured ? 0 : (i % 2) * 0.1} y={48}>
                    <ProjectCard
                      project={project}
                      index={PROJECTS.indexOf(project)}
                      featured={featured}
                      onOpen={setOpenProject}
                    />
                  </Reveal>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <ProjectModal project={openProject} onClose={closeModal} />
    </Section>
  );
};
