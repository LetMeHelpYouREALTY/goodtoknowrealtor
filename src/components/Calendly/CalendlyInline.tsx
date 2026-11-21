'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import {
  CALENDLY_EVENTS,
  type CalendlyEventKey,
} from '@/lib/calendly';

type CalendlyApi = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

type CalendlyInlineProps = {
  event?: CalendlyEventKey;
  /** Hide the section chrome (heading / portrait band styling). */
  compact?: boolean;
  className?: string;
  minHeight?: number;
};

/**
 * Inline Calendly embed for one of the three Choice A event types.
 * Defers script load until near viewport; re-inits via Calendly.initInlineWidget
 * when the event URL changes (layout-mounted PageEngagement navigations).
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
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [scriptReady, setScriptReady] = useState(
    () => typeof window !== 'undefined' && Boolean(window.Calendly)
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

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
  }, []);

  useEffect(() => {
    if (!shouldLoad || !scriptReady || !widgetRef.current) return;

    const parent = widgetRef.current;
    parent.innerHTML = '';
    window.Calendly?.initInlineWidget({
      url: embedUrl,
      parentElement: parent,
    });
  }, [shouldLoad, scriptReady, embedUrl]);

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
          ref={widgetRef}
          className="calendly-inline-widget mx-auto w-full max-w-4xl overflow-hidden rounded-sm"
          style={{ minWidth: '320px', height: `${minHeight}px` }}
        />
        {shouldLoad ? (
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
            onLoad={() => setScriptReady(true)}
          />
        ) : null}
      </div>
    </section>
  );
}
