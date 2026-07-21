// Routes that render as standalone ad-landing pages: no site header, footer,
// announcement bar, WhatsApp widget, or enquiry side-tab.
export const BARE_LANDING_PAGES = ['/reproductive-medicine'];

export function isBareLandingPage(pathname: string | null): boolean {
  if (!pathname) return false;
  return BARE_LANDING_PAGES.some((p) => pathname === p || pathname.startsWith(p + '/'));
}
