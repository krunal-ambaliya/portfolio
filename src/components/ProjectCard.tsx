import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { PROJECT_CATEGORIES } from '../data/portfolioData';
import { EASE } from './ui/Reveal';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  /** Featured cards lay image and text side by side on large screens */
  featured?: boolean;
  onOpen: (project: ProjectItem) => void;
}

const categoryLabel = (id: ProjectItem['category']) =>
  PROJECT_CATEGORIES.find((c) => c.id === id)?.label ?? '';

const ProjectImage: React.FC<{ project: ProjectItem; onOpen: () => void; featured?: boolean }> = ({
  project,
  onOpen,
  featured
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Gentle parallax: the screenshot drifts inside its frame while scrolling
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      aria-label={`View details for ${project.name}`}
      className={`relative block w-full overflow-hidden rounded-xl border border-line bg-subtle cursor-pointer ${
        featured ? 'aspect-[16/10] xl:aspect-auto xl:h-full xl:min-h-[380px]' : 'aspect-[16/10]'
      }`}
      initial={{ clipPath: 'inset(12% 6% 12% 6% round 12px)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 12px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {project.image && (
        <motion.div className="absolute inset-x-0 -inset-y-[5%]" style={{ y: imgY }}>
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover object-top transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>
      )}
    </motion.button>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured, onOpen }) => {
  const open = () => onOpen(project);

  return (
    <article
      className={`h-full rounded-2xl border border-line bg-surface p-3 sm:p-4 transition-colors duration-300 hover:border-line-strong ${
        featured ? 'grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-10' : 'flex flex-col'
      }`}
    >
      <div className={featured ? 'xl:col-span-7' : ''}>
        <ProjectImage project={project} onOpen={open} featured={featured} />
      </div>

      <div className={`flex flex-1 flex-col px-2 pb-2 ${featured ? 'xl:col-span-5 xl:py-4 xl:pr-4' : 'pt-6'}`}>
        <div className="flex items-center justify-between font-mono text-xs text-muted">
          <span>{categoryLabel(project.category)}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className={`mt-3 font-medium tracking-tight text-fg ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
          {project.name}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted text-pretty">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-fg-2" aria-label="Key features">
          {project.highlights.map((h, i) => (
            <li key={h} className="flex items-center gap-2">
              {h}
              {i < project.highlights.length - 1 && <span aria-hidden="true" className="text-muted">·</span>}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-7 text-sm font-medium sm:gap-x-6">
          <button
            type="button"
            onClick={open}
            className="group/link inline-flex h-10 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent cursor-pointer"
          >
            View details
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover/link:translate-x-0.5"
            />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
            >
              Live site
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 ease-out-soft group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};
