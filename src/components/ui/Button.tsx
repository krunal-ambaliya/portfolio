import React from 'react';

type Variant = 'primary' | 'secondary';

const base =
  'group/btn relative isolate inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-[15px] font-medium transition-[color,border-color,transform] duration-500 ease-out-soft active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none';

const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg',
  secondary: 'border border-line-strong text-fg hover:border-fg hover:text-bg'
};

// A fill that sweeps up from the bottom on hover
const fills: Record<Variant, string> = {
  primary: 'bg-accent',
  secondary: 'bg-fg'
};

type CommonProps = { variant?: Variant; className?: string; children: React.ReactNode };

type AnchorProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Renders an <a> when given an href, otherwise a <button>. External links open in a new tab. */
export const Button: React.FC<AnchorProps | NativeButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...rest
}) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 translate-y-full rounded-full transition-transform duration-500 ease-out-soft group-hover/btn:translate-y-0 ${fills[variant]}`}
      />
      {children}
    </>
  );

  if (typeof rest.href === 'string') {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const external = /^https?:\/\//.test(anchorProps.href ?? '');
    return (
      <a
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
};
