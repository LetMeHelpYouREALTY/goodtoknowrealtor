/**
 * Calendly event types for Dr. Jan Duffy (Choice A — luxury engagement).
 * One event type per appropriate page section; never stack all three on one page.
 */
export const CALENDLY_BASE = 'https://calendly.com/drjanduffy';

export type CalendlyIntent = 'buyer' | 'seller' | 'market';

export const CALENDLY_EVENTS = {
  buyer: {
    intent: 'buyer' as const,
    name: 'Buyer Consultation (30 Min)',
    url: `${CALENDLY_BASE}/buyer-consultation-30-min`,
    heading: 'Ready to tour Las Vegas homes with a clear plan?',
    subheading:
      'Book a 30-minute buyer consultation. We cover your budget, target neighborhoods, and what is selling this week.',
  },
  seller: {
    intent: 'seller' as const,
    name: 'Listing Consultation',
    url: `${CALENDLY_BASE}/listing-consultation`,
    heading: 'Want subdivision-level comps before you list?',
    subheading:
      'Book a 30-minute listing consultation. Bring your address—Dr. Jan Duffy pulls recent sales first.',
  },
  market: {
    intent: 'market' as const,
    name: 'Free Market Strategy Call (15 Min)',
    url: `${CALENDLY_BASE}/15min`,
    heading: 'Need a sharp read on your micro-market?',
    subheading:
      'Book a free 15-minute market strategy call. Zip or neighborhood preferred so the first minute counts.',
  },
} as const;

export type CalendlyEventKey = keyof typeof CALENDLY_EVENTS;

/** Map route prefixes to the single Calendly intent that fits that page. */
export function calendlyIntentForPath(pathname: string): CalendlyEventKey {
  const path = pathname.toLowerCase();
  if (
    path.includes('/selling') ||
    path.includes('/seller') ||
    path.includes('/home-value') ||
    path.includes('/why-list') ||
    path.includes('/cash-offer') ||
    path.includes('/assessments/seller')
  ) {
    return 'seller';
  }
  if (
    path.includes('/buying') ||
    path.includes('/buyer') ||
    path.includes('/listings') ||
    path.includes('/areas') ||
    path.includes('/communities') ||
    path.includes('/exclusive') ||
    path.includes('/showings') ||
    path.includes('/first-time')
  ) {
    return 'buyer';
  }
  return 'market';
}
