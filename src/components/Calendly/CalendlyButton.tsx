'use client';

import type { MouseEvent, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { calendlyUrl, loadCalendly, type CalendlyEvent } from '@/lib/calendly';

/**
 * Booking button: opens the Calendly popup in place.
 * Renders a real link to the event page, so it still works with JavaScript off
 * or if the popup script fails to load.
 */
export default function CalendlyButton({
  event,
  children,
  className,
}: {
  event: CalendlyEvent;
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname() || '/';
  const url = calendlyUrl(event, pathname);

  async function open(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let new-tab clicks through
    e.preventDefault();
    const calendly = await loadCalendly();
    if (calendly) calendly.initPopupWidget({ url });
    else window.open(url, '_blank', 'noopener');
  }

  return (
    <a href={url} target='_blank' rel='noopener' onClick={open} className={className}>
      {children}
    </a>
  );
}
