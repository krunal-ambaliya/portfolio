import React, { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react';
import { Github, Mail, Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { lockScroll, scrollToId } from '../lib/smoothScroll';
import { DiscordIcon } from './ui/Icons';
import { EASE } from './ui/Reveal';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  /** Seconds to wait before the entrance animation (lets the intro finish) */
  delay: number;
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

const SOCIALS = [
  { label: 'GitHub', href: PERSONAL_INFO.githubUrl, icon: <Github className="h-[18px] w-[18px]" /> },
  { label: 'Discord', href: PERSONAL_INFO.discordUrl, icon: <DiscordIcon className="h-[18px] w-[18px]" /> },
  { label: 'Email', href: PERSONAL_INFO.emailInquiryUrl, icon: <Mail className="h-[18px] w-[18px]" /> }
];

/** Tracks which section crosses the middle band of the viewport. */
const useActiveSection = () => {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
};

const useLocalTime = () => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(
      new Date()
    );
  const [time, setTime] = useState(format);
  useEffect(() => {
    const t = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const ThemeToggle: React.FC<Pick<NavbarProps, 'darkMode' | 'setDarkMode'>> = ({ darkMode, setDarkMode }) => {
  const label = darkMode ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg cursor-pointer"
      aria-label={label}
      title={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={darkMode ? 'sun' : 'moon'}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {darkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

/* ------------------------------ Desktop sidebar ----------------------------- */

const Sidebar: React.FC<NavbarProps & { active: string }> = ({ darkMode, setDarkMode, delay, active }) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const percent = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const time = useLocalTime();

  return (
    <motion.aside
      className="liquid-glass fixed bottom-3 left-3 top-3 z-40 hidden w-[16rem] flex-col justify-between rounded-[28px] px-7 py-9 lg:flex"
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      <div>
        <a href="#home" className="group block">
          <span className="block text-lg font-semibold tracking-tight text-fg">{PERSONAL_INFO.name}</span>
          <span className="mt-1 block whitespace-nowrap text-[13px] text-muted">{PERSONAL_INFO.role}</span>
        </a>
        <p className="mt-6 flex items-center gap-2 text-xs text-muted">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40 [animation-duration:2.4s]" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          {PERSONAL_INFO.location} · {time} IST
        </p>
      </div>

      <nav aria-label="Primary">
        <motion.ul
          className="space-y-1"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay + 0.3 } } }}
        >
          {NAV_LINKS.map(({ label, id }, i) => {
            const isActive = active === id;
            return (
              <motion.li
                key={id}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }
                }}
              >
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-center gap-3 py-2 text-[15px]"
                >
                  <span className={`w-5 font-mono text-[11px] transition-colors duration-300 ${isActive ? 'text-accent' : 'text-muted'}`}>
                    {String(i).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-px transition-all duration-500 ease-out-soft ${
                      isActive ? 'w-10 bg-fg' : 'w-4 bg-line-strong group-hover:w-7 group-hover:bg-muted'
                    }`}
                  />
                  <span
                    className={`transition-colors duration-300 ${isActive ? 'text-fg font-medium' : 'text-muted group-hover:text-fg'}`}
                  >
                    {label}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span>Scrolled</span>
            <motion.span className="tabular-nums">{percent}</motion.span>
          </div>
          <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-fg/[0.07]">
            <motion.div className="h-full origin-left rounded-full bg-accent" style={{ scaleX: progress }} />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-fg/[0.08] pt-5">
          <ul className="flex items-center gap-1">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full text-muted transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-fg/[0.06] hover:text-fg"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </motion.aside>
  );
};

/* ------------------------------- Mobile top bar ----------------------------- */

const MenuIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <span className="relative block h-3 w-6" aria-hidden="true">
    <motion.span
      className="absolute left-0 top-0 h-[1.5px] w-full rounded bg-fg"
      animate={open ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    />
    <motion.span
      className="absolute bottom-0 left-0 h-[1.5px] w-full rounded bg-fg"
      animate={open ? { y: -5.25, rotate: -45 } : { y: 0, rotate: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    />
  </span>
);

const MobileNav: React.FC<NavbarProps & { active: string }> = ({ darkMode, setDarkMode, delay, active }) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  // Hide while scrolling down, reveal on any upward scroll
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > 160 && y > prev);
  });

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close if the viewport grows into the sidebar layout
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    // Wait a frame for the scroll lock to release before scrolling
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <div className="lg:hidden">
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          open
            ? 'border-transparent bg-transparent'
            : scrolled
              ? 'border-line/70 bg-bg/70 backdrop-blur-xl backdrop-saturate-150'
              : 'border-transparent bg-transparent'
        }`}
        initial={{ y: '-100%' }}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.div
          className="flex h-16 items-center justify-between px-5 sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay }}
        >
          <a href="#home" onClick={(e) => go(e, 'home')} className="text-[15px] font-semibold tracking-tight text-fg">
            {PERSONAL_INFO.name}
          </a>
          <div className="flex items-center gap-1">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-subtle cursor-pointer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </motion.div>
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-5 pb-10 pt-28 sm:px-8"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.55, ease: EASE, delay: 0.15 } }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } }
              }}
            >
              {NAV_LINKS.map(({ label, id }, i) => (
                <li key={id} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={`#${id}`}
                    onClick={(e) => go(e, id)}
                    aria-current={active === id ? 'true' : undefined}
                    className="flex items-baseline gap-4 py-4"
                    variants={{
                      hidden: { y: '100%', opacity: 0 },
                      show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: EASE } }
                    }}
                  >
                    <span className="font-mono text-xs text-muted">{String(i).padStart(2, '0')}</span>
                    <span
                      className={`text-[2rem] leading-tight font-medium tracking-tight ${
                        active === id ? 'text-fg' : 'text-muted'
                      }`}
                    >
                      {label}
                    </span>
                    {active === id && (
                      <span aria-hidden="true" className="ml-auto h-2 w-2 self-center rounded-full bg-accent" />
                    )}
                  </motion.a>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <a href={`mailto:${PERSONAL_INFO.email}`} className="truncate text-sm text-fg-2 underline underline-offset-4">
                {PERSONAL_INFO.email}
              </a>
              <ul className="flex items-center">
                {SOCIALS.slice(0, 2).map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full text-muted hover:text-fg"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const active = useActiveSection();
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Sidebar {...props} active={active} />
      <MobileNav {...props} active={active} />
    </>
  );
};
