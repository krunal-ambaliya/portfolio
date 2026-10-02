import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Card3D } from './Card3D';
import {
  FileText,
  Home,
  Stethoscope,
  Code2,
  ShoppingBag,
  Search,
  ExternalLink,
  ChevronRight,
  Github,
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web & E-Commerce' },
    { id: 'healthcare', label: 'Healthcare & Clinic' },
    { id: 'developer-tools', label: 'AI & Developer Tools' }
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderIcon = (type: ProjectItem['iconType']) => {
    switch (type) {
      case 'shopping-bag':
        return <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400" strokeWidth={2.2} />;
      case 'home':
        return <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={2.2} />;
      case 'stethoscope':
        return <Stethoscope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.2} />;
      case 'code':
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2.2} />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/20 dark:border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            FEATURED PROJECTS
          </h2>

          <div className="flex-1 flex items-center ml-2">
            <div className="h-[3px] flex-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-600/20 shrink-0 -ml-1" />
          </div>
        </div>

        {/* Filter controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-10">
          {/* Category Tabs (Glassmorphic) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, stack..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl glass-card text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Alternating Side-by-Side Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isImageOnLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden group hover:border-blue-400/60 dark:hover:border-blue-500/40 transition-all duration-300 shadow-md"
              >
                {/* Subtle ambient background glow */}
                <div
                  className={`absolute -top-24 ${
                    isImageOnLeft ? '-left-24' : '-right-24'
                  } w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl pointer-events-none`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageOnLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {project.image ? (
                      <Card3D
                        tiltIntensity={6}
                        glareOpacity={0.25}
                        scale={1.02}
                        className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-xl cursor-pointer"
                      >
                        <div onClick={() => setActiveModalProject(project)}>
                          {/* Mini browser top bar */}
                          <div className="flex items-center justify-between px-3.5 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 text-[11px] font-mono text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="truncate max-w-[200px] text-slate-500 dark:text-slate-400">
                              {project.liveUrl || `krunal-ambaliya / ${project.id}`}
                            </span>
                            <span className="text-[10px] text-blue-500 font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              <span>Inspect</span>
                            </span>
                          </div>

                          {/* Image with smooth zoom on hover */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                            <img
                              src={project.image}
                              alt={`${project.title} screenshot`}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                              <span className="px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                <span>Click to View Full Details</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card3D>
                    ) : (
                      <div className="aspect-[16/10] rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
                        {renderIcon(project.iconType)}
                      </div>
                    )}
                  </div>

                  {/* Text / Description Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isImageOnLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Top Meta Strip: Category & Project Index */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20 flex items-center justify-center">
                          {renderIcon(project.iconType)}
                        </span>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          {project.category === 'web-app'
                            ? 'Web & E-Commerce'
                            : project.category === 'healthcare'
                            ? 'Healthcare'
                            : 'AI & Developer Tools'}
                        </span>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Live</span>
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {project.title}
                    </h3>

                    {/* Role Pill */}
                    {project.role && (
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Role: <span className="font-semibold text-slate-800 dark:text-slate-200">{project.role}</span>
                      </div>
                    )}

                    {/* Clear, Human-Readable Description (Great for HR & Founders) */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights / Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 p-2 rounded-xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
                        <Layers className="w-3 h-3 text-blue-500" />
                        <span>Stack:</span>
                      </span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-2.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-150 shadow-xs active:scale-95"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors cursor-pointer ml-auto"
                      >
                        <span>Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
              No projects found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
