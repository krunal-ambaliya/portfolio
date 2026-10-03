import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from 'motion/react';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const COPIES = 4;

/**
 * A slow, endless band of words that speeds up while the page is scrolled
 * and flips direction with the scroll direction. Static for reduced motion.
 */
export const Marquee: React.FC<{ items: string[]; baseVelocity?: number }> = ({ items, baseVelocity = 2.2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const direction = useRef(-1);
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion) return;
    const b = boost.get();
    if (b < 0) direction.current = 1;
    else if (b > 0) direction.current = -1;
    let move = direction.current * baseVelocity * (delta / 1000);
    move += move * Math.abs(b);
    baseX.set(baseX.get() + move);
  });

  return (
    <div ref={ref} className="overflow-hidden border-y border-line py-6 sm:py-8" aria-hidden="true">
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {Array.from({ length: COPIES }).map((_, copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span
                  className={`px-6 sm:px-8 text-4xl sm:text-6xl font-medium tracking-[-0.02em] ${
                    i % 2 === 0 ? 'text-fg' : 'text-muted/50'
                  }`}
                >
                  {item}
                </span>
                <span className="text-2xl text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
