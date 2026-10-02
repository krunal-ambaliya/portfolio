import React, { useEffect, useRef } from 'react';

interface LetterGlitchProps {
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

export const LetterGlitch: React.FC<LetterGlitchProps> = ({
  glitchSpeed = 50,
  centerVignette = true,
  outerVignette = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId: number;
    let lastTime = 0;
    const chars = '0123456789ABCDEF{}[]<>/~*+=_#EFEELE';
    const charArray = chars.split('');
    const fontSize = 16;
    let columns = 0;
    let rows = 0;
    let grid: string[][] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      columns = Math.ceil(canvas.width / fontSize);
      rows = Math.ceil(canvas.height / fontSize);

      grid = [];
      for (let y = 0; y < rows; y++) {
        const row: string[] = [];
        for (let x = 0; x < columns; x++) {
          row.push(charArray[Math.floor(Math.random() * charArray.length)]);
        }
        grid.push(row);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (time - lastTime < glitchSpeed) return;
      lastTime = time;

      // Only randomly update 5% of characters for subtle, zero-lag effect
      const updates = Math.floor((columns * rows) * 0.04);
      for (let i = 0; i < updates; i++) {
        const rx = Math.floor(Math.random() * columns);
        const ry = Math.floor(Math.random() * rows);
        if (grid[ry]) {
          grid[ry][rx] = charArray[Math.floor(Math.random() * charArray.length)];
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize - 3}px 'JetBrains Mono', monospace`;

      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.035)';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const char = grid[y]?.[x] || ' ';
          ctx.fillText(char, x * fontSize, y * fontSize + fontSize);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [glitchSpeed]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-80">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {outerVignette && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0a0a0c]" />
      )}
      {centerVignette && (
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/70 dark:to-[#0a0a0c]/80" />
      )}
    </div>
  );
};
