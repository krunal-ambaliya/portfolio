import React from 'react';
import { motion } from 'motion/react';
import { EASE } from './ui/Reveal';

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="relative pt-5">
    <motion.span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px origin-left bg-line-strong"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
    />
    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h3>
    <motion.ul
      className="mt-4 space-y-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
    >
      {skills.map((skill) => (
        <motion.li
          key={skill}
          className="group flex items-center gap-2 text-base text-fg"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
          }}
        >
          <span
            aria-hidden="true"
            className="h-px w-0 bg-accent transition-all duration-500 ease-out-soft group-hover:w-3"
          />
          <span className="transition-colors duration-300 group-hover:text-accent">{skill}</span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);
