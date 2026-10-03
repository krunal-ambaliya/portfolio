import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * Site-wide background, kept deliberately faint so it never competes with text:
 * a masked dot grid, three soft colour washes that drift slowly and shift with
 * scroll, and a fine grain. Drawn with gradients (no filter: blur) to stay cheap.
 */
export const Backdrop: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const washY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div className="backdrop-grid absolute -inset-x-0 -top-0 h-[120%]" style={{ y: gridY }} />

      <motion.div className="absolute inset-0 h-[130%]" style={{ y: washY }}>
        <div className="backdrop-wash backdrop-wash-a" />
        <div className="backdrop-wash backdrop-wash-b" />
        <div className="backdrop-wash backdrop-wash-c" />
      </motion.div>

      <div className="backdrop-grain absolute inset-0" />
    </div>
  );
};
