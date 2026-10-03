import React, { useRef, useState } from 'react';
import { AlertCircle, Check, Loader2, Paperclip, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Button } from './ui/Button';

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // FormSubmit recommended limit

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const fieldClass =
  'w-full rounded-lg border border-line-strong bg-bg px-3.5 py-2.5 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-fg focus:outline-none';

const Field: React.FC<{ label: string; htmlFor: string; required?: boolean; children: React.ReactNode }> = ({
  label,
  htmlFor,
  required,
  children
}) => (
  <div>
    <label htmlFor={htmlFor} className="mb-2 block text-sm text-fg-2">
      {label}
      {required && <span className="text-muted"> *</span>}
    </label>
    {children}
  </div>
);

/**
 * Posts to FormSubmit through a hidden iframe so multipart attachments
 * upload without leaving the page.
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);
  const [submittedViaIframe, setSubmittedViaIframe] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (key: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [key]: e.target.value });

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setAttachment(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSubmittedViaIframe(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_ATTACHMENT_BYTES) {
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

  const handleIframeLoad = () => {
    if (!submittedViaIframe) return;
    setStatus('success');
    resetForm();
    setTimeout(() => setStatus('idle'), 6000);
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

    // Fallback in case the cross-origin iframe onLoad doesn't fire
    setTimeout(() => {
      setStatus((current) => {
        if (current === 'submitting') {
          resetForm();
          return 'success';
        }
        return current;
      });
    }, 4500);
  };

  return (
    <>
      <iframe name="formsubmit_frame" title="Form submission" className="hidden" onLoad={handleIframeLoad} />

      <form
        action={`https://formsubmit.co/${PERSONAL_INFO.email}`}
        method="POST"
        encType="multipart/form-data"
        target="formsubmit_frame"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input
          type="hidden"
          name="_subject"
          value={`Portfolio Contact: ${formData.subject || 'Inquiry from ' + formData.name}`}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="cf-name" required>
            <input id="cf-name" type="text" name="name" required autoComplete="name" value={formData.name} onChange={update('name')} className={fieldClass} />
          </Field>
          <Field label="Email" htmlFor="cf-email" required>
            <input id="cf-email" type="email" name="email" required autoComplete="email" value={formData.email} onChange={update('email')} className={fieldClass} />
          </Field>
        </div>

        <Field label="Subject" htmlFor="cf-subject">
          <input id="cf-subject" type="text" name="subject" value={formData.subject} onChange={update('subject')} placeholder="Project, collaboration or opportunity" className={fieldClass} />
        </Field>

        <Field label="Message" htmlFor="cf-message" required>
          <textarea id="cf-message" name="message" required rows={5} value={formData.message} onChange={update('message')} className={`${fieldClass} resize-y`} />
        </Field>

        <div>
          <input
            id="cf-file"
            type="file"
            name="attachment"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,video/*,.pdf,.doc,.docx,.txt,.zip"
            className="sr-only"
          />
          {attachment ? (
            <div className="flex items-center justify-between gap-3 rounded-lg border border-line px-3.5 py-2.5 text-sm">
              <span className="flex min-w-0 items-center gap-2 text-fg-2">
                <Paperclip className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                <span className="truncate">{attachment.name}</span>
                <span className="shrink-0 text-muted">({formatFileSize(attachment.size)})</span>
              </span>
              <button
                type="button"
                onClick={handleRemoveFile}
                aria-label="Remove attachment"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-fg cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div>
              <label
                htmlFor="cf-file"
                className="inline-flex cursor-pointer items-center gap-2 text-sm text-fg-2 transition-colors hover:text-fg"
              >
                <Paperclip className="h-4 w-4" aria-hidden="true" />
                Attach a file
              </label>
              <p className="mt-1 pl-6 text-sm text-muted">Images, video, PDF or documents · max 10MB</p>
            </div>
          )}
        </div>

        <div aria-live="polite">
          {status === 'success' && (
            <p className="flex items-start gap-2.5 rounded-lg border border-line bg-subtle px-4 py-3 text-sm text-fg-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-code-str" aria-hidden="true" />
              Thanks — your message was sent to {PERSONAL_INFO.email}. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <div className="rounded-lg border border-line bg-subtle px-4 py-3 text-sm text-fg-2">
              <p className="flex items-start gap-2.5">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-code-key" aria-hidden="true" />
                {errorMessage}
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                  formData.subject || 'Portfolio Inquiry'
                )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`}
                className="mt-2 inline-block pl-6 font-medium text-fg underline underline-offset-4 hover:text-accent"
              >
                Send via your email app instead
              </a>
            </div>
          )}
        </div>

        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </Button>
      </form>
    </>
  );
};
