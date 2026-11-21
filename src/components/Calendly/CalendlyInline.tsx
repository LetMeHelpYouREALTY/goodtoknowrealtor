'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import {
  CALENDLY_EVENTS,
  type CalendlyEventKey,
} from '@/lib/calendly';

type CalendlyInlineProps = {
  event?: CalendlyEventKey;
  /** Hide the section chrome (heading / portrait band styling). */
  compact?: boolean;
  className?: string;
  minHeight?: number;
};

/**
 * Inline Calendly embed for one of the three Choice A event types.
 * Defers script load until the section is near the viewport (LCP-safe).
 */
export function CalendlyInline({
  event = 'market',
  compact = false,
  className = '',
  minHeight = 700,
}: CalendlyInlineProps) {
  const config = CALENDLY_EVENTS[event];
  const embedUrl = `${config.url}?hide_gdpr_banner=1&primary_color=0f1419`;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || shouldLoad) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <section
      ref={sectionRef}
      className={`calendly-engagement border-y border-[#c9a962]/20 bg-gradient-to-b from-[#f8f6f1] to-white ${className}`}
      aria-label={config.name}
      id={`book-${event}`}
    >
      <div className="container py-12 lg:py-16">
        {!compact ? (
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="luxury-accent-line mx-auto" aria-hidden="true" />
            <h2 className="font-display mt-4 text-3xl font-semibold text-[#0f1419] lg:text-4xl">
              {config.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              {config.subheading}
            </p>
          </div>
        ) : null}
        <div
          className="calendly-inline-widget mx-auto w-full max-w-4xl overflow-hidden rounded-sm"
          data-url={shouldLoad ? embedUrl : undefined}
          style={{ minWidth: '320px', height: `${minHeight}px` }}
        />
        {shouldLoad ? (
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        ) : null}
      </div>
    </section>
  );
}
