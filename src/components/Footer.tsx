import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LikeWidget } from './LikeWidget';
import { EASE } from './ui/Reveal';

const links = [
  { label: 'GitHub', href: PERSONAL_INFO.githubUrl },
  ...(PERSONAL_INFO.linkedinUrl ? [{ label: 'LinkedIn', href: PERSONAL_INFO.linkedinUrl }] : []),
  { label: 'Discord', href: PERSONAL_INFO.discordUrl },
  { label: 'Email', href: PERSONAL_INFO.emailInquiryUrl }
];

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 xl:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold tracking-tight text-fg">{PERSONAL_INFO.name}</p>
            <p className="mt-1 text-sm text-muted">{PERSONAL_INFO.role}</p>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="link-underline text-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {PERSONAL_INFO.location}.
          </p>
          <div className="flex items-center gap-3">
            <LikeWidget />
            <a
              href="#home"
              className="group inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm text-muted transition-colors hover:bg-subtle hover:text-fg"
            >
              Back to top
              <ArrowUp
                className="h-4 w-4 transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Oversized name that rises out of the bottom edge when the footer comes into view */}
        {/* The wrapper observes visibility: the text itself starts fully clipped, so it can't */}
        <motion.div
          aria-hidden="true"
          className="mt-12 overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p
            className="select-none whitespace-nowrap pb-[0.12em] text-center text-[calc((100vw_-_2.5rem)*0.132)] font-semibold leading-none tracking-[-0.05em] text-fg sm:text-[calc((100vw_-_4rem)*0.132)] lg:text-[calc((100vw_-_17rem)*0.118)] 2xl:text-[8.6rem]"
            variants={{ hidden: { y: '100%' }, show: { y: '0%', transition: { duration: 1.2, ease: EASE } } }}
          >
            {PERSONAL_INFO.name}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
