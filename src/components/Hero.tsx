import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Button } from './ui/Button';
import { EASE, SplitText, Stagger, StaggerItem } from './ui/Reveal';

const s = (v: string) => <span className="text-code-str">"{v}"</span>;
const k = (v: string) => <span className="text-code-key">{v}</span>;

const CODE_LINES: React.ReactNode[] = [
  <>
    {k('class')} <span className="text-fg">Developer</span>:
  </>,
  <>{'    '}name = {s(PERSONAL_INFO.name)}</>,
  <>{'    '}based_in = {s(PERSONAL_INFO.location)}</>,
  <>{'    '}focus = [{s('Web')}, {s('Python')}]</>,
  <>{'    '}stack = [{s('React')}, {s('Next.js')}, {s('MySQL')}]</>,
  <>{'    '}learning = [{s('AI')}, {s('Cyber Security')}]</>
];

/** Small code card that "types" itself in line by line — the hero's visual. */
const ProfileCard: React.FC<{ delay: number }> = ({ delay }) => (
  <figure
    aria-label="Developer profile summary"
    className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(0,0,0,0.18)]"
  >
    <div className="flex items-center justify-between border-b border-line px-4 py-3">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
      </div>
      <span className="font-mono text-xs text-muted">developer.py</span>
    </div>
    <motion.pre
      className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-6 text-fg-2 [scrollbar-width:none] sm:px-5 sm:py-5 sm:text-[13px] sm:leading-7"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: delay } } }}
    >
      <code>
        {CODE_LINES.map((line, i) => (
          <motion.span
            key={i}
            className="flex"
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } }
            }}
          >
            <span className="mr-3 w-4 shrink-0 select-none text-right text-muted/50 sm:mr-5">{i + 1}</span>
            <span className="whitespace-pre">
              {line}
              {i === CODE_LINES.length - 1 && (
                <span aria-hidden="true" className="ml-1 inline-block h-4 w-[7px] translate-y-[3px] bg-accent animate-caret" />
              )}
            </span>
          </motion.span>
        ))}
      </code>
    </motion.pre>
  </figure>
);

/** True when the text and code card sit side by side (Tailwind `xl`). */
const useWideLayout = () => {
  const query = '(min-width: 1280px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setWide(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return wide;
};

export const Hero: React.FC<{ delay: number }> = ({ delay }) => {
  // When stacked, opposite-direction parallax would slide the card over the text
  const wide = useWideLayout();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // As the hero scrolls away: text drifts down and fades, the card rises a little faster
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center pt-28 pb-24 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 xl:grid-cols-12 xl:gap-12 xl:px-12">
        <motion.div className="xl:col-span-7" style={wide ? { y: textY, opacity: textOpacity } : undefined}>
          <Stagger immediate delay={delay}>
            <StaggerItem>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Web Developer <span className="text-line-strong">·</span> Python Developer
              </p>
            </StaggerItem>
          </Stagger>

          <SplitText
            as="h1"
            immediate
            delay={delay + 0.1}
            text={PERSONAL_INFO.headline}
            className="mt-7 text-[2.75rem] leading-[1.04] sm:text-6xl xl:text-[4.6rem] font-medium tracking-[-0.035em] text-fg"
          />

          <Stagger immediate delay={delay + 0.5}>
            <StaggerItem>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                Hi, I'm <span className="text-fg">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.intro}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-soft group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </StaggerItem>

            <StaggerItem>
              <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {PERSONAL_INFO.location}
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline flex items-center gap-2 transition-colors hover:text-fg"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="link-underline flex items-center gap-2 transition-colors hover:text-fg"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </StaggerItem>
          </Stagger>
        </motion.div>

        <motion.div className="xl:col-span-5" style={wide ? { y: cardY } : undefined}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delay + 0.4, ease: EASE }}
          >
            <ProfileCard delay={delay + 0.9} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        style={{ opacity: textOpacity }}
      >
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          className="flex flex-col items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.4, duration: 0.8 }}
        >
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-line">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-fg animate-scroll-cue" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};
