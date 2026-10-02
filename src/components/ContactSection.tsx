import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Send,
  Check,
  Copy,
  MapPin,
  Github,
  ExternalLink,
  AtSign,
  AlertCircle,
  Loader2,
  Paperclip,
  FileUp,
  X,
  File,
  Image as ImageIcon,
  Film
} from 'lucide-react';

const DiscordIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [submittedViaIframe, setSubmittedViaIframe] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // FormSubmit limit recommendation (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Attachment exceeds the 10MB limit. Please choose a smaller file.');
      setStatus('error');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setAttachment(file);
    setErrorMessage('');
    if (status === 'error') setStatus('idle');
  };

  const handleRemoveFile = () => {
    setAttachment(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleIframeLoad = () => {
    if (submittedViaIframe) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setAttachment(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setSubmittedViaIframe(false);
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      setErrorMessage('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setSubmittedViaIframe(true);

    // Fallback safety timeout in case iframe cross-origin onLoad doesn't fire
    setTimeout(() => {
      setStatus((current) => {
        if (current === 'submitting') {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setAttachment(null);
          if (fileInputRef.current) fileInputRef.current.value = '';
          setSubmittedViaIframe(false);
          return 'success';
        }
        return current;
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/20 dark:border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-12">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-xs">
            <AtSign className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
            CONTACT ME
          </h2>

          <div className="flex-1 flex items-center ml-2">
            <div className="h-[3px] flex-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-600/20 shrink-0 -ml-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Direct channels */}
          <div className="md:col-span-5 space-y-4">
            {/* Discord Card */}
            <div className="p-5 rounded-2xl glass-card space-y-3 border-indigo-200/50 dark:border-indigo-900/40">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1.5">
                  <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
                  <span>Discord</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-mono font-medium">
                  Direct Chat
                </span>
              </div>

              <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 font-mono">
                <span className="text-indigo-600 dark:text-indigo-400">@</span>
                <span>{PERSONAL_INFO.discordUsername}</span>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleCopyDiscord}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white transition-colors shadow-xs cursor-pointer"
                >
                  {copiedDiscord ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white/90" />}
                  <span>{copiedDiscord ? 'Copied' : 'Copy Username'}</span>
                </button>

                <a
                  href={PERSONAL_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl glass-card text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Discord</span>
                </a>
              </div>
            </div>

            {/* Email Inquiry Card */}
            <div className="p-5 rounded-2xl glass-card space-y-3 border-blue-200/50 dark:border-blue-900/40">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Email Inquiry</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-mono font-medium">
                  Direct Response
                </span>
              </div>

              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.emailInquiryUrl}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Inquiry</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Location & GitHub Card */}
            <div className="p-5 rounded-2xl glass-card space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Location: <strong>{PERSONAL_INFO.location}</strong></span>
              </div>

              <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl glass-card text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/krunal-ambaliya</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form (Glassmorphism Panel) */}
          <div className="md:col-span-7">
            {/* Hidden iframe to process multipart attachment upload silently without page reload */}
            <iframe
              name="formsubmit_frame"
              id="formsubmit_frame"
              title="Form Submission"
              className="hidden"
              onLoad={handleIframeLoad}
            />

            <form
              action={`https://formsubmit.co/${PERSONAL_INFO.email}`}
              method="POST"
              encType="multipart/form-data"
              target="formsubmit_frame"
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl glass-panel space-y-4 shadow-sm"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_replyto" value={formData.email} />
              <input
                type="hidden"
                name="_subject"
                value={`Portfolio Contact: ${formData.subject || 'Inquiry from ' + formData.name}`}
              />

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-sm rounded-xl glass-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 text-sm rounded-xl glass-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full px-3.5 py-2 text-sm rounded-xl glass-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl glass-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* File Attachment Input (Images, Videos, Documents) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Paperclip className="w-3.5 h-3.5 text-blue-500" />
                    <span>Attach File (Images, Videos, PDF, Documents)</span>
                  </span>
                  <span className="text-[11px] font-normal text-slate-400">Max 10MB</span>
                </label>

                <input
                  type="file"
                  name="attachment"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,video/*,.pdf,.doc,.docx,.txt,.zip"
                  className="hidden"
                />

                {!attachment ? (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 bg-white/30 dark:bg-slate-900/30 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer group"
                  >
                    <FileUp className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span>Click to attach an image, video, document, or archive</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 text-xs text-slate-800 dark:text-slate-200">
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      {attachment.type.startsWith('image/') ? (
                        <ImageIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : attachment.type.startsWith('video/') ? (
                        <Film className="w-4 h-4 text-purple-500 shrink-0" />
                      ) : (
                        <File className="w-4 h-4 text-blue-500 shrink-0" />
                      )}
                      <span className="truncate font-medium">{attachment.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono shrink-0">
                        ({formatFileSize(attachment.size)})
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer shrink-0"
                      title="Remove attachment"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5 animate-in fade-in duration-200">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Message Delivered!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5 leading-relaxed">
                      Thank you for getting in touch. Your message has been routed directly to{' '}
                      <strong>{PERSONAL_INFO.email}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-300 flex flex-col gap-2.5 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Delivery Interrupted</p>
                      <p className="text-xs text-rose-700 dark:text-rose-400 mt-0.5 leading-relaxed">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(
                      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors self-start shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors disabled:opacity-60 shadow-md cursor-pointer active:scale-98"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
