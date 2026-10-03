import Lenis from 'lenis';

/**
 * Thin wrapper around Lenis so components can scroll to anchors and lock
 * scrolling (menu, dialog) without knowing whether smooth scrolling is active.
 * Visitors who prefer reduced motion get native scrolling.
 */
let lenis: Lenis | null = null;
let lockCount = 0;

export const initSmoothScroll = () => {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  lenis = new Lenis({
    autoRaf: true,
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });
};

export const destroySmoothScroll = () => {
  lenis?.destroy();
  lenis = null;
};

/**
 * The mobile top bar offset comes from `scroll-padding-top` in index.css,
 * which both Lenis and native scrollIntoView respect.
 */
export const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { duration: 1.4 });
  else target.scrollIntoView({ behavior: 'smooth' });
};

/** Reference-counted so the menu and the dialog can lock independently. */
export const lockScroll = (locked: boolean) => {
  lockCount = Math.max(0, lockCount + (locked ? 1 : -1));
  const shouldLock = lockCount > 0;
  document.documentElement.style.overflow = shouldLock ? 'hidden' : '';
  if (shouldLock) lenis?.stop();
  else lenis?.start();
};
