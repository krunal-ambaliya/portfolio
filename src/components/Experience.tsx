import React from 'react';
import { EDUCATION_DETAILS, WORK_EXPERIENCE } from '../data/portfolioData';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Timeline, TimelineEntry } from './Timeline';

const DetailList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h5 className="text-sm text-muted">{title}</h5>
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg-2">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const workEntries: TimelineEntry[] = WORK_EXPERIENCE.map((item) => ({
  id: item.id,
  period: item.period,
  title: item.role,
  organization: item.company ?? '',
  meta: item.location,
  summary: item.description,
  current: item.current,
  details: (
    <div className="space-y-6">
      <DetailList title="Key contributions" items={item.bulletPoints} />
      {item.technologies && (
        <p className="text-sm leading-relaxed text-muted">
          <span className="text-fg-2">Tech · </span>
          {item.technologies.join(', ')}
        </p>
      )}
    </div>
  )
}));

// "Bachelor of Technology (B.Tech)" + "Information Technology" → "Bachelor of Technology in Information Technology"
const degreeTitle = (degree: string, field?: string) => {
  const base = degree.replace(/\s*\(.*\)$/, '');
  return field && !base.includes(field) ? `${base} in ${field}` : base;
};

const educationEntries: TimelineEntry[] = EDUCATION_DETAILS.map((item) => ({
  id: item.id,
  period: item.period,
  title: degreeTitle(item.degree, item.field),
  organization: item.institution,
  meta: item.scoreOrHonors,
  current: item.period.toLowerCase().includes('present'),
  details: (
    <div className="space-y-6">
      {item.description && <p className="max-w-xl text-[15px] leading-relaxed text-fg-2">{item.description}</p>}
      {item.coursework && <DetailList title="Key subjects" items={item.coursework} />}
    </div>
  )
}));

export const Experience: React.FC = () => (
  <Section id="experience" index="04" eyebrow="Journey" title="Experience & education" layout="split">
    <Reveal>
      <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">Experience</h3>
    </Reveal>
    <Timeline entries={workEntries} />

    <Reveal className="mt-20">
      <h3 id="education" className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
        Education
      </h3>
    </Reveal>
    <Timeline entries={educationEntries} />
  </Section>
);
