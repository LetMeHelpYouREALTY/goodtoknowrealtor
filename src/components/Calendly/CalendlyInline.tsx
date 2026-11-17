'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CALENDLY_EVENTS, calendlyUrl, loadCalendly, type CalendlyEvent } from '@/lib/calendly';

/**
 * Inline Calendly scheduler. Loads only when scrolled near, so it never slows the first screen.
 * Shows a plain booking link until then (and if the script is blocked).
 */
export default function CalendlyInline({
  event,
  title = 'Pick a time that works for you',
  subtitle,
  height = 700,
}: {
  event: CalendlyEvent;
  title?: string;
  subtitle?: string;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname() || '/';
  const url = calendlyUrl(event, pathname);

  useEffect(() => {
    const el = ref.current;
    if (!el || loaded) return;
    const io = new IntersectionObserver(
      async (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const calendly = await loadCalendly();
        if (calendly && ref.current) {
          ref.current.innerHTML = '';
          calendly.initInlineWidget({ url, parentElement: ref.current });
          setLoaded(true);
        }
      },
      { rootMargin: '400px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [url, loaded]);

  return (
    <section aria-labelledby={`calendly-${event}`} className='max-w-4xl mx-auto px-4 py-12'>
      <h2 id={`calendly-${event}`} className='text-2xl font-semibold text-gray-900 mb-2 text-center'>
        {title}
      </h2>
      {subtitle && <p className='text-gray-700 mb-6 text-center'>{subtitle}</p>}
      <div ref={ref} style={{ minWidth: 320, height }} className='rounded-xl border border-gray-200 overflow-hidden'>
        <div className='h-full flex items-center justify-center p-6 text-center'>
          <a href={CALENDLY_EVENTS[event]} target='_blank' rel='noopener' className='text-amber-800 font-semibold underline'>
            Open the booking calendar
          </a>
        </div>
      </div>
    </section>
  );
}
