import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS, TECHNICAL_STRENGTHS } from '../data/portfolioData';
import { Section } from './ui/Section';
import { EASE } from './ui/Reveal';
import { SkillGroup } from './SkillGroup';

export const Skills: React.FC = () => (
  <Section
    id="skills"
    index="03"
    eyebrow="Skills"
    title="Tools I use to build"
    intro="A practical stack for shipping fast, reliable web applications."
    layout="split"
  >
    <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
      {SKILL_GROUPS.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
        >
          <SkillGroup title={group.title} skills={group.skills} />
        </motion.div>
      ))}
    </div>

    <div className="mt-24">
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Strengths</h3>
      <dl className="mt-5 border-t border-line">
        {TECHNICAL_STRENGTHS.map((s, i) => (
          <motion.div
            key={s.name}
            className="group relative isolate grid gap-1 border-b border-line py-5 sm:grid-cols-[2rem_minmax(0,14rem)_1fr] sm:gap-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.04 * i }}
          >
            {/* Hover wash that sweeps in from the left */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-subtle transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
            />
            <span aria-hidden="true" className="hidden font-mono text-xs text-muted sm:block sm:pt-1 sm:pl-2">
              {String(i + 1).padStart(2, '0')}
            </span>
            <dt className="text-base text-fg transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
              {s.name}
            </dt>
            <dd className="text-[15px] leading-relaxed text-muted sm:pr-2">{s.description}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  </Section>
);
