import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EASE } from './ui/Reveal';

/** How long the name stays on screen before the curtain lifts (ms) */
export const INTRO_HOLD_MS = 1300;
/** Delay (s) other entrance animations should wait so they play as the curtain lifts */
export const INTRO_DELAY_S = 1.55;

const SEEN_KEY = 'intro-seen';

/** Play the intro once per browser session, and never for reduced-motion users. */
export const shouldPlayIntro = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    if (sessionStorage.getItem(SEEN_KEY)) return false;
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    // Storage unavailable — still play it
  }
  return true;
};

export const Intro: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, INTRO_HOLD_MS);
    return () => clearTimeout(t);
  }, [onDone]);

  const words = PERSONAL_INFO.name.split(' ');

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-fg text-bg"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="px-6 text-center">
        <p className="text-4xl sm:text-6xl font-medium tracking-[-0.03em]">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
              <motion.span
                className="inline-block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.1 }}
              >
                {w}
                {i < words.length - 1 && ' '}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          className="mt-4 font-mono text-xs uppercase tracking-[0.2em] opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {PERSONAL_INFO.role}
        </motion.p>
        <motion.span
          className="mx-auto mt-8 block h-px w-40 origin-left bg-current opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: INTRO_HOLD_MS / 1000 - 0.1, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
    </motion.div>
  );
};
