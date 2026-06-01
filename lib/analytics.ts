/**
 * MedFellow Academy — GA4 Analytics Utility
 * -------------------------------------------------
 * Wraps window.gtag so every component gets typed,
 * consistent event names and a single place to adjust
 * tracking parameters without touching component files.
 *
 * Usage:
 *   import { track } from '@/lib/analytics';
 *   track.ctaClick('hero_explore_programs', '/programs');
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// ─── Low-level helper ────────────────────────────────────────────────────────

function gtag(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

// ─── CTA & Navigation ────────────────────────────────────────────────────────

/**
 * Fire whenever any call-to-action button or link is clicked.
 * @param label   Identifies the button, e.g. 'hero_apply_now'
 * @param destination  href the user is navigating to
 * @param section  page section where the CTA lives, e.g. 'hero'
 */
function ctaClick(
  label: string,
  destination: string,
  section?: string
) {
  gtag('cta_click', {
    cta_label: label,
    destination,
    page_section: section ?? 'unknown',
  });
}

// ─── Program Interactions ─────────────────────────────────────────────────────

/**
 * Fired when a program card is viewed / scrolled into viewport.
 */
function programView(programName: string, position?: number) {
  gtag('program_view', {
    program_name: programName,
    list_position: position ?? 0,
  });
}

/**
 * Fired when a user clicks into a program card / "Learn More".
 */
function programClick(programName: string, destination: string) {
  gtag('program_click', {
    program_name: programName,
    destination,
  });
}

// ─── Application Funnel ───────────────────────────────────────────────────────

/**
 * Fired when the Apply / Enroll Now button is clicked anywhere.
 * @param source  Component/section that triggered the click
 */
function applyClick(source: string) {
  gtag('apply_click', {
    source,
  });
}

/**
 * Fired when the application form step is completed.
 */
function applyStepComplete(step: number, stepName: string) {
  gtag('apply_step_complete', {
    step_number: step,
    step_name: stepName,
  });
}

/**
 * Fired when an application is successfully submitted.
 */
function applySubmit(programName?: string) {
  gtag('generate_lead', {
    program_name: programName ?? 'unknown',
    currency: 'INR',
  });
}

// ─── Content Engagement ──────────────────────────────────────────────────────

/**
 * Fired when a FAQ item is opened.
 */
function faqOpen(question: string, index: number) {
  gtag('faq_open', {
    question_text: question.slice(0, 100),
    question_index: index,
  });
}

/**
 * Fired when the free-guide download is clicked.
 */
function guideDownload(source: string) {
  gtag('guide_download', {
    source,
  });
}

/**
 * Fired when WhatsApp widget button is clicked.
 */
function whatsappOpen(source?: string) {
  gtag('whatsapp_open', {
    source: source ?? 'widget',
  });
}

// ─── Scroll Depth ────────────────────────────────────────────────────────────

const _firedDepths = new Set<number>();

/**
 * Call this from a scroll listener (or IntersectionObserver) to report
 * 25 / 50 / 75 / 90 % scroll milestones. Fires each milestone only once.
 */
function scrollDepth(percent: number) {
  const milestones = [25, 50, 75, 90];
  for (const m of milestones) {
    if (percent >= m && !_firedDepths.has(m)) {
      _firedDepths.add(m);
      gtag('scroll_depth', { depth_percent: m });
    }
  }
}

// ─── Section Visibility ──────────────────────────────────────────────────────

/**
 * Fire when a section enters the viewport for the first time.
 * Wrap an IntersectionObserver in each section to call this.
 */
function sectionView(sectionName: string) {
  gtag('section_view', { section_name: sectionName });
}

// ─── Announcement Bar ────────────────────────────────────────────────────────

function announcementClick(label: string) {
  gtag('announcement_click', { label });
}

function announcementDismiss() {
  gtag('announcement_dismiss', {});
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

function testimonialView(doctorName: string) {
  gtag('testimonial_view', { doctor_name: doctorName });
}

// ─── Scroll-depth auto-wiring ─────────────────────────────────────────────────

/**
 * Call once in your root layout (client component) to automatically
 * fire scroll_depth events without any further setup.
 *
 * Usage inside a useEffect:
 *   analytics.initScrollDepth();
 *   return () => analytics.destroyScrollDepth();
 */
let _scrollListener: (() => void) | null = null;

function initScrollDepth() {
  if (typeof window === 'undefined') return;
  _scrollListener = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight;
    scrollDepth(Math.round((scrolled / total) * 100));
  };
  window.addEventListener('scroll', _scrollListener, { passive: true });
}

function destroyScrollDepth() {
  if (_scrollListener) {
    window.removeEventListener('scroll', _scrollListener);
    _scrollListener = null;
  }
}

// ─── Named export bundle ──────────────────────────────────────────────────────

export const analytics = {
  ctaClick,
  programView,
  programClick,
  applyClick,
  applyStepComplete,
  applySubmit,
  faqOpen,
  guideDownload,
  whatsappOpen,
  scrollDepth,
  sectionView,
  announcementClick,
  announcementDismiss,
  testimonialView,
  initScrollDepth,
  destroyScrollDepth,
};
