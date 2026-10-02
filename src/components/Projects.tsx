import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  ListChecks,
  Home,
  Stethoscope,
  Code2,
  Search,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Applications' },
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
      case 'home':
        return <Home className="w-6 h-6 text-slate-800 dark:text-slate-200" strokeWidth={2.2} />;
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6 text-slate-800 dark:text-slate-200" strokeWidth={2.2} />;
      case 'code':
        return <Code2 className="w-6 h-6 text-slate-800 dark:text-slate-200" strokeWidth={2.2} />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header - Exact matching styling from Image 2 */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10">
          {/* Blue circular icon badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-sm">
            <ListChecks className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          </div>

          {/* Heading Text */}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            PROJECTS
          </h2>

          {/* Blue accent line with circular dot */}
          <div className="flex-1 flex items-center ml-2">
            <div className="h-[3px] flex-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-600/20 shrink-0 -ml-1" />
          </div>
        </div>

        {/* Filter controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
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
              placeholder="Search stack or features..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Timeline Projects List - Exact match to Image 2 structure */}
        <div className="relative">
          {/* Continuous vertical timeline connector line */}
          <div className="absolute left-6 sm:left-7 top-7 bottom-7 w-[2px] bg-blue-200 dark:bg-blue-900/60" />

          <div className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Custom Icon Box - Exact match to Image 2 */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 z-10 transition-transform duration-200 group-hover:scale-105 shadow-xs ${
                    project.id === 'property-management'
                      ? 'bg-blue-50 dark:bg-[#151c2e] border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300'
                      : project.id === 'dentray-clinic'
                      ? 'bg-indigo-50 dark:bg-[#1a182e] border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300'
                      : 'bg-emerald-50 dark:bg-[#132520] border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300'
                  }`}
                >
                  {renderIcon(project.iconType)}
                </div>

                {/* Content Column */}
                <div className="flex-1 pt-1 space-y-2.5">
                  {/* Title in signature blue */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight leading-snug hover:underline cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {project.title}
                    </h3>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span>Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Description text */}
                  <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technologies row - Exact match to Image 2 */}
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
                    <span className="font-bold text-blue-600 dark:text-blue-400 mr-1.5">
                      Technologies:
                    </span>
                    <span>{project.technologies.join(', ')}</span>
                  </div>
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
