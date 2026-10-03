import React from 'react';
import { motion } from 'motion/react';
import { EASE, Reveal, SplitText } from './Reveal';

interface SectionProps {
  id: string;
  /** Section number shown before the eyebrow, e.g. "02" */
  index: string;
  /** Small label above the title, e.g. "About" */
  eyebrow: string;
  title: string;
  /** Optional one-line supporting text under the title */
  intro?: React.ReactNode;
  /**
   * "split": heading in a narrow left column, content on the right (editorial layout).
   * "stack": heading above full-width content.
   */
  layout?: 'split' | 'stack';
  children: React.ReactNode;
}

export const SectionEyebrow: React.FC<{ index: string; label: string }> = ({ index, label }) => (
  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
    <span>{index}</span>
    <motion.span
      aria-hidden="true"
      className="h-px w-10 origin-left bg-line-strong"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
    />
    <span>{label}</span>
  </div>
);

export const Section: React.FC<SectionProps> = ({
  id,
  index,
  eyebrow,
  title,
  intro,
  layout = 'stack',
  children
}) => {
  const header = (
    <div className={layout === 'split' ? 'xl:sticky xl:top-24' : ''}>
      <SectionEyebrow index={index} label={eyebrow} />
      <SplitText
        text={title}
        className="mt-5 text-4xl sm:text-5xl font-medium tracking-[-0.02em] text-fg leading-[1.08]"
      />
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-md text-base sm:text-lg text-muted leading-relaxed">{intro}</p>
        </Reveal>
      )}
    </div>
  );

  return (
    <section id={id} className="relative border-t border-line py-24 sm:py-28 xl:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 xl:px-12">
        {layout === 'split' ? (
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-12">
            <div className="xl:col-span-4">{header}</div>
            <div className="xl:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            <div className="mb-14 sm:mb-16">{header}</div>
            {children}
          </>
        )}
      </div>
    </section>
  );
};
