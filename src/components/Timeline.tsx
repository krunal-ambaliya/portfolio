import React, { useId, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, useInView, useScroll, useSpring } from 'motion/react';
import { EASE } from './ui/Reveal';

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  /** Short line shown under the organization, e.g. a score or location */
  meta?: string;
  summary?: string;
  current?: boolean;
  /** Optional extra content revealed on demand */
  details?: React.ReactNode;
}

// Rail x-position: left edge on mobile, centred in the column gap from `sm` up
const RAIL_X = 'left-[3px] sm:left-[calc(9rem+1.25rem-0.5px)]';
const NODE_X = 'left-0 sm:left-[calc(9rem+1.25rem-3.5px)]';

const TimelineRow: React.FC<{ entry: TimelineEntry; isLast: boolean }> = ({ entry, isLast }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });

  return (
    <motion.li
      ref={ref}
      className={`relative grid gap-2 pl-8 sm:grid-cols-[9rem_1fr] sm:gap-10 sm:pl-0 ${isLast ? '' : 'pb-14'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {/* Node: fills with the accent once the scroll progress reaches it */}
      <span aria-hidden="true" className={`absolute top-[7px] h-[7px] w-[7px] ${NODE_X}`}>
        <span
          className={`absolute inset-0 rounded-full transition-colors duration-500 ${
            reached ? 'bg-accent' : 'bg-line-strong'
          }`}
        />
        {reached && entry.current && (
          <span className="absolute -inset-1.5 rounded-full border border-accent/50 animate-[ping_2.4s_ease-out_1]" />
        )}
      </span>

      <p className="font-mono text-sm text-muted sm:pt-px">{entry.period}</p>

      <div className="sm:pl-6">
        <h4 className="text-lg sm:text-xl font-medium tracking-tight text-fg">{entry.title}</h4>
        <p className="mt-0.5 text-base text-fg-2">{entry.organization}</p>
        {entry.meta && <p className="mt-1 text-sm text-muted">{entry.meta}</p>}
        {entry.summary && <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{entry.summary}</p>}

        {entry.details && (
          <>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent cursor-pointer"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-line-strong">
                <Plus
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition-transform duration-500 ease-out-soft ${open ? 'rotate-45' : ''}`}
                />
              </span>
              {open ? 'Hide details' : 'Show details'}
            </button>
            <div id={panelId} className="collapse-grid" data-open={open} inert={!open}>
              <div>
                <div
                  className={`pt-5 transition-[opacity,transform] duration-500 ease-out-soft ${
                    open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {entry.details}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.li>
  );
};

export const Timeline: React.FC<{ entries: TimelineEntry[] }> = ({ entries }) => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });

  return (
    <ol ref={ref} className="relative">
      {/* Rail and its scroll-linked fill */}
      <span aria-hidden="true" className={`absolute top-3 bottom-3 w-px bg-line ${RAIL_X}`} />
      <motion.span
        aria-hidden="true"
        className={`absolute top-3 bottom-3 w-px origin-top bg-accent ${RAIL_X}`}
        style={{ scaleY: fill }}
      />
      {entries.map((entry, i) => (
        <TimelineRow key={entry.id} entry={entry} isLast={i === entries.length - 1} />
      ))}
    </ol>
  );
};
