import React, { useRef, useState, useEffect } from 'react';
import { TechIcon } from './TechIcons';
import { SkillItem } from '../types/portfolio';

interface TechCard3DProps {
  skill: SkillItem;
  onClick?: () => void;
  onMouseEnter?: () => void;
  isSelected?: boolean;
}

export const TechCard3D: React.FC<TechCard3DProps> = ({
  skill,
  onClick,
  onMouseEnter,
  isSelected = false
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: isMobile ? 'none' : '800px' }}
      className="w-full flex justify-center cursor-pointer select-none group"
    >
      <div
        style={{
          transform: !isMobile && isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`
            : isSelected
            ? 'scale(1.03)'
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: !isMobile && isHovered
            ? 'transform 0.08s ease-out'
            : 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: isMobile ? 'flat' : 'preserve-3d'
        }}
        className={`relative w-full max-w-[110px] sm:max-w-[125px] aspect-square rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between text-center transition-all duration-300 active:scale-95 ${
          isSelected
            ? 'bg-blue-50/95 dark:bg-blue-950/80 border-2 border-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.25)]'
            : 'bg-white/70 dark:bg-[#121420]/70 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-blue-400/80 dark:hover:border-blue-500/50'
        }`}
      >
        {/* Specular glare overlay for Glassmorphism sheen (disabled on mobile) */}
        {!isMobile && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200 overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 65%)`,
              opacity: glare.opacity
            }}
          />
        )}

        {/* Top Badge: Category mini indicator */}
        <div
          style={{ transform: !isMobile ? 'translateZ(14px)' : 'none' }}
          className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
          <span className="tabular-nums font-semibold text-blue-600 dark:text-blue-400">
            {skill.proficiency}%
          </span>
        </div>

        {/* Floating Icon */}
        <div
          style={{ transform: !isMobile ? 'translateZ(24px)' : 'none' }}
          className="relative my-auto flex items-center justify-center transition-transform duration-200 group-hover:scale-110 drop-shadow-xs"
        >
          <TechIcon name={skill.name} className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Text Name */}
        <div
          style={{ transform: !isMobile ? 'translateZ(16px)' : 'none' }}
          className="w-full text-center px-1"
        >
          <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 truncate leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
          </div>
        </div>

        {/* Glass Bottom Reflection Line */}
        <div className="absolute bottom-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />
      </div>
    </div>
  );
};
