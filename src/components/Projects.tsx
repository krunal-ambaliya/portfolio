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
  Eye
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
        return <ShoppingBag className="w-6 h-6 text-amber-600 dark:text-amber-400" strokeWidth={2.2} />;
      case 'home':
        return <Home className="w-6 h-6 text-blue-700 dark:text-blue-300" strokeWidth={2.2} />;
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6 text-indigo-700 dark:text-indigo-300" strokeWidth={2.2} />;
      case 'code':
        return <Code2 className="w-6 h-6 text-emerald-700 dark:text-emerald-300" strokeWidth={2.2} />;
      default:
        return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/20 dark:border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            PROJECTS
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
              placeholder="Search technologies, title..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl glass-card text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Timeline Projects List */}
        <div className="relative">
          {/* Continuous vertical timeline connector line */}
          <div className="absolute left-6 sm:left-7 top-7 bottom-7 w-[2px] bg-blue-200/80 dark:bg-blue-900/60" />

          <div className="space-y-10 sm:space-y-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* 3D Floating Icon Box on timeline */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 z-10 transition-transform duration-200 group-hover:scale-110 shadow-md ${
                    project.id === 'timect-ecommerce'
                      ? 'bg-amber-50/90 dark:bg-[#251e12]/90 border border-amber-200/80 dark:border-amber-800/60'
                      : project.id === 'property-management'
                      ? 'bg-blue-50/90 dark:bg-[#151c2e]/90 border border-blue-200/80 dark:border-blue-800/60'
                      : project.id === 'dentray-clinic'
                      ? 'bg-indigo-50/90 dark:bg-[#1a182e]/90 border border-indigo-200/80 dark:border-indigo-800/60'
                      : 'bg-emerald-50/90 dark:bg-[#132520]/90 border border-emerald-200/80 dark:border-emerald-800/60'
                  }`}
                >
                  {renderIcon(project.iconType)}
                </div>

                {/* Content Column Wrapped in 3D Tilt Card */}
                <div className="flex-1">
                  <Card3D
                    tiltIntensity={5}
                    glareOpacity={0.28}
                    scale={1.018}
                    className="p-5 sm:p-6 rounded-2xl glass-card hover:border-blue-400/80 dark:hover:border-blue-500/60 transition-all duration-200 shadow-md"
                  >
                    <div style={{ transform: 'translateZ(14px)' }} className="space-y-4">
                      {/* Title & Actions Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3
                            className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight leading-snug hover:underline cursor-pointer"
                            onClick={() => setActiveModalProject(project)}
                          >
                            {project.title}
                          </h3>
                          {project.liveUrl && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Live</span>
                            </span>
                          )}
                        </div>

                        <div style={{ transform: 'translateZ(20px)' }} className="flex items-center gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white glass-card transition-colors shadow-2xs"
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
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 glass-card transition-colors shadow-2xs"
                            title="View GitHub Repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>

                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                          >
                            <span>Case Study</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Project Screenshot / View Banner */}
                      {project.image && (
                        <div
                          onClick={() => setActiveModalProject(project)}
                          className="relative rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-900 group/shot cursor-pointer shadow-inner"
                        >
                          {/* Mini browser top bar */}
                          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800/70 text-[10px] font-mono text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                              <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="truncate max-w-[200px] text-slate-500 dark:text-slate-400">
                              {project.liveUrl || `krunal-portfolio / ${project.id}`}
                            </span>
                            <span className="text-[10px] text-blue-500 font-semibold flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span className="hidden sm:inline">Preview</span>
                            </span>
                          </div>

                          <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.title} screenshot preview`}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-105"
                              loading="lazy"
                            />
                            {/* Ambient hover sheen */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity duration-300 flex items-end p-3">
                              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                                <span>Click to inspect full architecture & features</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Description text */}
                      <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Technologies row with 3D elevation */}
                      <div style={{ transform: 'translateZ(10px)' }} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap items-center gap-1.5">
                        <span className="font-bold text-blue-600 dark:text-blue-400 mr-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Technologies:</span>
                        </span>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
                No projects found matching your search.
              </div>
            )}
          </div>
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
