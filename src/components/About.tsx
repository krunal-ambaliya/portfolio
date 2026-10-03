import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SPOKEN_LANGUAGES } from '../data/portfolioData';
import { Section } from './ui/Section';
import { CountUp, EASE, Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  const facts = [
    ...PERSONAL_INFO.facts,
    { label: 'Languages', value: SPOKEN_LANGUAGES.map((l) => l.name).join(' · ') }
  ];

  return (
    <Section id="about" index="01" eyebrow="About" title="About me" layout="split">
      <Reveal>
        <p className="text-2xl sm:text-[2rem] leading-[1.35] tracking-[-0.015em] text-fg text-pretty">
          {PERSONAL_INFO.aboutLead}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted text-pretty">
          {PERSONAL_INFO.aboutBody}
        </p>
      </Reveal>

      <dl className="mt-16 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            className="relative py-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
          >
            {/* Divider draws in from the left */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left bg-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 + (i % 2) * 0.08 }}
            />
            <dt className="text-sm text-muted">{fact.label}</dt>
            <dd className="mt-1.5 text-base text-fg">{fact.value}</dd>
          </motion.div>
        ))}
      </dl>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
        {PERSONAL_INFO.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-surface p-5 sm:p-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <CountUp value={stat.value} className="block text-2xl sm:text-4xl font-medium tracking-tight text-fg" />
            <div className="mt-2 text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
