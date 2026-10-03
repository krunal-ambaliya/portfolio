import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal, SplitText, Stagger, StaggerItem } from './ui/Reveal';
import { SectionEyebrow } from './ui/Section';
import { DiscordIcon } from './ui/Icons';
import { ContactForm } from './ContactForm';

interface Channel {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  /** Text copied to the clipboard by the copy button */
  copy?: string;
}

const channels: Channel[] = [
  {
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: PERSONAL_INFO.emailInquiryUrl,
    icon: <Mail className="h-5 w-5" />,
    copy: PERSONAL_INFO.email
  },
  {
    label: 'GitHub',
    value: `github.com/${PERSONAL_INFO.githubUsername}`,
    href: PERSONAL_INFO.githubUrl,
    icon: <Github className="h-5 w-5" />
  },
  ...(PERSONAL_INFO.linkedinUrl
    ? [{ label: 'LinkedIn', value: 'LinkedIn profile', href: PERSONAL_INFO.linkedinUrl, icon: <Linkedin className="h-5 w-5" /> }]
    : []),
  {
    label: 'Discord',
    value: `@${PERSONAL_INFO.discordUsername}`,
    href: PERSONAL_INFO.discordUrl,
    icon: <DiscordIcon className="h-5 w-5" />,
    copy: PERSONAL_INFO.discordUsername
  }
];

const ChannelRow: React.FC<{ channel: Channel }> = ({ channel }) => {
  const [copied, setCopied] = useState(false);
  const external = channel.href.startsWith('http');

  const handleCopy = async () => {
    if (!channel.copy) return;
    try {
      await navigator.clipboard.writeText(channel.copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the link still works
    }
  };

  return (
    <div className="group relative isolate flex items-center gap-2 border-b border-line">
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-subtle transition-transform duration-500 ease-out-soft group-hover:scale-y-100"
      />
      <a
        href={channel.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex min-w-0 flex-1 items-center gap-3.5 py-5 transition-[padding] duration-500 ease-out-soft sm:gap-6 sm:group-hover:pl-4"
      >
        <span className="text-muted transition-colors group-hover:text-fg" aria-hidden="true">
          {channel.icon}
        </span>
        <span className="hidden w-20 shrink-0 text-sm text-muted sm:inline">{channel.label}</span>
        <span className="truncate text-[15px] sm:text-lg text-fg transition-colors group-hover:text-accent">
          {channel.value}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="ml-auto hidden h-5 w-5 shrink-0 text-muted sm:block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
        />
      </a>
      {channel.copy ? (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? `${channel.label} copied` : `Copy ${channel.label.toLowerCase()}`}
          title={copied ? 'Copied' : 'Copy'}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-fg cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4 text-code-str" /> : <Copy className="h-4 w-4" />}
        </button>
      ) : (
        // Keep the arrow column aligned with rows that have a copy button
        <span aria-hidden="true" className="w-10 shrink-0" />
      )}
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32 xl:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-14 xl:grid-cols-12 xl:gap-12">
          <div className="xl:col-span-5 xl:sticky xl:top-24 xl:self-start">
            <SectionEyebrow index="05" label="Contact" />
            <SplitText
              text="Let's build something useful."
              className="mt-5 text-[2.75rem] sm:text-6xl xl:text-[4.25rem] font-medium tracking-[-0.03em] leading-[1.04] text-fg"
            />
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
                Have a project, idea or opportunity? Let's talk.
              </p>
              <p className="mt-3 text-sm text-muted">Based in {PERSONAL_INFO.location}</p>
            </Reveal>
          </div>

          <div className="xl:col-span-7 xl:pt-10">
            <Stagger className="border-t border-line">
              {channels.map((c) => (
                <StaggerItem key={c.label}>
                  <ChannelRow channel={c} />
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12">
              <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <h3 className="text-xl font-medium tracking-tight text-fg">Send a message</h3>
                <p className="mt-1.5 text-sm text-muted">I'll reply to the email you provide.</p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
