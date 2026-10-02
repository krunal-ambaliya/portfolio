import React from 'react';
import { TechIcon } from './TechIcons';

interface ConstellationNode {
  id: string;
  name: string;
  shortLabel?: string;
  top: string;
  left: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TechConstellation: React.FC = () => {
  // Centered polar coordinate math (R is % from center (50%, 50%), max R is 36% to prevent any cropping)
  // Outer orbit: R = 36% (radius ~170px on a 480px canvas, leaves ~68px edge buffer)
  // Mid orbit: R = 25% (radius ~120px)
  // Inner orbit: R = 14% (radius ~68px)
  const nodes: ConstellationNode[] = [
    // Outer Orbit (R = 36%)
    {
      id: 'react',
      name: 'React.js',
      top: '19%',
      left: '32%',
      size: 'lg'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      shortLabel: 'JS',
      top: '16%',
      left: '62%',
      size: 'lg'
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      shortLabel: 'B',
      top: '32%',
      left: '81%',
      size: 'sm'
    },
    {
      id: 'html5',
      name: 'HTML5',
      shortLabel: '5',
      top: '84%',
      left: '56%',
      size: 'md'
    },
    {
      id: 'css3',
      name: 'CSS3',
      shortLabel: '3',
      top: '76%',
      left: '24%',
      size: 'md'
    },

    // Mid Orbit (R = 25%)
    {
      id: 'mysql',
      name: 'MySQL',
      top: '26%',
      left: '41%',
      size: 'md'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      top: '33%',
      left: '69%',
      size: 'lg'
    },
    {
      id: 'vscode',
      name: 'VS Code',
      top: '41%',
      left: '26%',
      size: 'md'
    },
    {
      id: 'rest',
      name: 'REST APIs',
      top: '59%',
      left: '26%',
      size: 'md'
    },
    {
      id: 'github',
      name: 'GitHub',
      top: '73%',
      left: '42%',
      size: 'lg'
    },
    {
      id: 'linux',
      name: 'Linux',
      top: '62%',
      left: '71%',
      size: 'md'
    },

    // Inner Orbit (R = 14%)
    {
      id: 'python',
      name: 'Python',
      shortLabel: 'PY',
      top: '56%',
      left: '43%',
      size: 'lg'
    }
  ];

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[470px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible py-4">
      {/* Top-Left Celestial Purple-Indigo Lens Flare Glow (Matching Reference Image) */}
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-br from-violet-500/25 via-purple-600/18 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-2 left-2 w-28 h-28 rounded-full bg-violet-400/20 dark:bg-purple-400/25 blur-xl pointer-events-none" />

      {/* THE ROTATING CONSTELLATION WHEEL (Rotates smoothly in 360° continuously) */}
      <div className="relative w-full h-full flex items-center justify-center animate-orbit-spin">
        {/* Concentric Radar Grid Rings */}
        <div className="absolute w-[86%] h-[86%] rounded-full border border-blue-500/18 dark:border-blue-400/15 pointer-events-none" />
        <div className="absolute w-[72%] h-[72%] rounded-full border border-slate-300/50 dark:border-white/10 pointer-events-none" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-slate-300/40 dark:border-white/10 pointer-events-none" />
        <div className="absolute w-[28%] h-[28%] rounded-full border border-blue-500/25 dark:border-blue-400/20 pointer-events-none" />

        {/* Diagonal Crosshair Grid Lines */}
        <div className="absolute inset-x-2 top-1/2 h-[1px] bg-slate-300/35 dark:bg-white/5 pointer-events-none" />
        <div className="absolute inset-y-2 left-1/2 w-[1px] bg-slate-300/35 dark:bg-white/5 pointer-events-none" />
        <div className="absolute inset-4 border border-slate-200/25 dark:border-white/5 rotate-45 pointer-events-none" />

        {/* Constellation Starfield Micro-dots */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[22%] left-[26%] w-1.5 h-1.5 rounded-full bg-blue-400/70 shadow-xs" />
          <span className="absolute top-[24%] left-[74%] w-1 h-1 rounded-full bg-purple-400/60" />
          <span className="absolute top-[70%] left-[78%] w-1.5 h-1.5 rounded-full bg-blue-400/60 shadow-xs" />
          <span className="absolute top-[80%] left-[32%] w-1 h-1 rounded-full bg-slate-400/50 dark:bg-white/70" />
          <span className="absolute top-[44%] left-[84%] w-1 h-1 rounded-full bg-blue-300/60" />
          <span className="absolute top-[16%] left-[62%] w-1 h-1 rounded-full bg-purple-300/60" />
        </div>

        {/* Rotating Tech Badges */}
        {nodes.map((node) => {
          const sizeClasses =
            node.size === 'lg'
              ? 'w-11 h-11 sm:w-13 sm:h-13'
              : node.size === 'sm'
              ? 'w-8 h-8 sm:w-9 sm:h-9'
              : 'w-10 h-10 sm:w-11 sm:h-11';

          return (
            <div
              key={node.id}
              style={{
                top: node.top,
                left: node.left
              }}
              // Badge counter-rotates to always remain upright while orbiting
              className="absolute animate-orbit-counter-spin z-20 cursor-pointer"
            >
              {/* Frosted Glassmorphism Badge: Translucent white in light mode, subtle highlighted border on hover */}
              <div
                title={node.name}
                className={`${sizeClasses} rounded-2xl flex items-center justify-center p-2 glass-badge-hero text-slate-800 dark:text-white transition-all duration-200 hover:scale-110 hover:border-blue-400/90 dark:hover:border-blue-400/80 hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] dark:hover:shadow-[0_0_18px_rgba(96,165,250,0.4)] group`}
              >
                {node.shortLabel ? (
                  <span className="font-extrabold font-mono text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {node.shortLabel}
                  </span>
                ) : (
                  <TechIcon
                    name={node.name}
                    className={`${
                      node.size === 'sm' ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'
                    } transition-transform duration-200 group-hover:scale-105`}
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Center Orbital Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/30 flex items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
        </div>
      </div>
    </div>
  );
};
