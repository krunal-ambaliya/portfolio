import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Backdrop } from './components/Backdrop';
import { Intro, INTRO_DELAY_S, shouldPlayIntro } from './components/Intro';
import { SKILL_GROUPS } from './data/portfolioData';
import { destroySmoothScroll, initSmoothScroll, lockScroll, scrollToId } from './lib/smoothScroll';

// New key so the light redesign is the default even for visitors who saw the old dark-only site
const THEME_KEY = 'theme';

const MARQUEE_ITEMS = ['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'REST APIs'].filter(
  (s) => SKILL_GROUPS.some((g) => g.skills.includes(s))
);

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    document.documentElement.classList.contains('dark')
  );
  const [introPlaying, setIntroPlaying] = useState(shouldPlayIntro);
  // Entrance animations wait for the intro curtain; decided once on load
  const [entranceDelay] = useState(() => (introPlaying ? INTRO_DELAY_S : 0.15));
  const endIntro = useCallback(() => setIntroPlaying(false), []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
    } catch {
      // Storage unavailable — theme just won't persist
    }
  }, [darkMode]);

  useEffect(() => {
    initSmoothScroll();

    // Route every in-page anchor through the smooth scroller
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute('href')?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
      history.replaceState(null, '', `#${id}`);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      destroySmoothScroll();
    };
  }, []);

  // Keep the page still while the intro covers it
  useEffect(() => {
    if (!introPlaying) return;
    lockScroll(true);
    return () => lockScroll(false);
  }, [introPlaying]);

  return (
    // reducedMotion="user": honour prefers-reduced-motion for every motion component
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{introPlaying && <Intro onDone={endIntro} />}</AnimatePresence>

      <Backdrop />

      {/* No background here: the body paints the base colour and the backdrop shows through */}
      <div className="relative z-[1] min-h-screen overflow-x-clip text-fg">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} delay={entranceDelay} />
        <div className="lg:pl-[17rem]">
          <main id="main-content">
            <Hero delay={entranceDelay} />
            <Marquee items={MARQUEE_ITEMS} />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
