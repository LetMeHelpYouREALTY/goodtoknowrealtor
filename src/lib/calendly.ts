/**
 * Calendly event types for Dr. Jan Duffy (calendly.com/drjanduffy), verified 2026-10-29
 * via the Calendly API. Booking replaces forms on this site.
 */
export const CALENDLY_EVENTS = {
  /** All event types — let the visitor pick. */
  general: 'https://calendly.com/drjanduffy',
  buyer: 'https://calendly.com/drjanduffy/buyer-consultation-30-min',
  listing: 'https://calendly.com/drjanduffy/listing-consultation',
  showing: 'https://calendly.com/drjanduffy/showing',
  strategy: 'https://calendly.com/drjanduffy/15min',
  inPerson: 'https://calendly.com/drjanduffy/appointment',
  zoom: 'https://calendly.com/drjanduffy/meet-on-zoom',
  transition: 'https://calendly.com/drjanduffy/realtor_strategy_meeting',
} as const;

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS;

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

type CalendlyGlobal = {
  initPopupWidget: (opts: { url: string }) => void;
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

let loading: Promise<CalendlyGlobal | null> | null = null;

/** Load Calendly's widget script once, only when a visitor needs it (keeps pages fast). */
export function loadCalendly(): Promise<CalendlyGlobal | null> {
  if (typeof window === 'undefined') return Promise.resolve(null);
  const existing = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
  if (existing) return Promise.resolve(existing);
  if (loading) return loading;
  loading = new Promise((resolve) => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = WIDGET_CSS;
      document.head.appendChild(css);
    }
    const script = document.createElement('script');
    script.src = WIDGET_JS;
    script.async = true;
    script.onload = () => resolve((window as unknown as { Calendly?: CalendlyGlobal }).Calendly ?? null);
    script.onerror = () => {
      loading = null;
      resolve(null);
    };
    document.body.appendChild(script);
  });
  return loading;
}

/** Calendly URL with the site's brand colors and source tracking. */
export function calendlyUrl(event: CalendlyEvent, source?: string): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    primary_color: 'b45309',
    utm_source: 'goodtoknowrealtor.com',
  });
  if (source) params.set('utm_content', source);
  return `${CALENDLY_EVENTS[event]}?${params.toString()}`;
}
