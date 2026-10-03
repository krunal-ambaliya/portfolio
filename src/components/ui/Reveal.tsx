import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion, type Variants } from 'motion/react';

export const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px the element rises from */
  y?: number;
}

/** Fades and lifts its content once, the first time it enters the viewport. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 24 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

const groupVariants = (delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren } }
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Animate on mount instead of on scroll (used above the fold) */
  immediate?: boolean;
  delay?: number;
}

/** Reveals its <StaggerItem> children one after another. */
export const Stagger: React.FC<StaggerProps> = ({ children, className, immediate, delay }) => (
  <motion.div
    className={className}
    variants={groupVariants(delay)}
    initial="hidden"
    {...(immediate
      ? { animate: 'show' }
      : { whileInView: 'show', viewport: { once: true, amount: 0.15 } })}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);

interface SplitTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
  /** Animate on mount instead of when scrolled into view */
  immediate?: boolean;
}

/**
 * Each word rises out of its own clipping mask, one after another.
 * Screen readers get the plain text via aria-label.
 */
export const SplitText: React.FC<SplitTextProps> = ({ text, className, as = 'h2', delay = 0, immediate }) => {
  const Tag = motion[as];
  const words = text.split(' ');
  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      {...(immediate ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, amount: 0.4 } })}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        // pb/-mb keeps descenders from being clipped by the mask
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%' },
              show: { y: '0%', transition: { duration: 0.9, ease: EASE } }
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
};

/** Counts up to the leading number in values like "5+" or "8.5/10"; other text just fades in. */
export const CountUp: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match?.[1].split('.')[1]?.length ?? 0;
  const [display, setDisplay] = useState(match && !reduceMotion ? (0).toFixed(decimals) : match?.[1] ?? '');

  useEffect(() => {
    if (!match || !inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals))
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`}>
      {match ? (
        <>
          {display}
          {match[2]}
        </>
      ) : (
        value
      )}
    </span>
  );
};
