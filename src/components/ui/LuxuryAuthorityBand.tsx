import Link from 'next/link';
import { AgentPortrait } from '@/components/ui/AgentPortrait';
import { CalendlyInline } from '@/components/Calendly/CalendlyInline';
import {
  CALENDLY_EVENTS,
  type CalendlyEventKey,
} from '@/lib/calendly';

type LuxuryAuthorityBandProps = {
  /** Page-intent Calendly event (one of three). */
  calendlyEvent: CalendlyEventKey;
  /** Optional override for the H2 (defaults to event heading). */
  heading?: string;
  /** Optional override for supporting copy. */
  subheading?: string;
  /** When false, skip the Calendly embed (portrait + phone only). */
  showCalendly?: boolean;
  className?: string;
};

/**
 * Mid-page engagement band: agent portrait + NAP/CTA + one Calendly widget.
 * Place once per page in the primary conversion section.
 */
export function LuxuryAuthorityBand({
  calendlyEvent,
  heading,
  subheading,
  showCalendly = true,
  className = '',
}: LuxuryAuthorityBandProps) {
  const event = CALENDLY_EVENTS[calendlyEvent];
  const h2 = heading ?? event.heading;
  const lead = subheading ?? event.subheading;

  return (
    <div className={className}>
      <section
        className="border-y border-[#c9a962]/15 bg-[#0f1419] py-14 text-white lg:py-16"
        aria-labelledby="authority-band-heading"
      >
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
            <AgentPortrait size="lg" priority={false} className="shrink-0" />
            <div className="flex-1">
              <span className="luxury-accent-line md:mx-0" aria-hidden="true" />
              <h2
                id="authority-band-heading"
                className="font-display mt-4 text-3xl font-semibold tracking-tight lg:text-4xl"
              >
                {h2}
              </h2>
              <p className="mt-3 max-w-2xl text-lg font-light text-[#e8d5a8]/90">
                {lead}
              </p>
              <p className="mt-4 text-sm text-white/70">
                Dr. Jan Duffy · Call/Text{' '}
                <a
                  href="tel:702-500-1955"
                  className="font-medium text-[#c9a962] underline-offset-2 hover:underline"
                >
                  702-500-1955
                </a>{' '}
                · Berkshire Hathaway HomeServices Nevada Properties · License
                S.0197614.LLC
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <a href="tel:702-500-1955" className="btn-luxury-primary">
                  Call 702-500-1955
                </a>
                <a href="sms:702-500-1955" className="btn-luxury-secondary">
                  Text Dr. Jan
                </a>
                <Link
                  href={`#book-${calendlyEvent}`}
                  className="text-sm font-medium text-[#c9a962] underline-offset-4 hover:underline"
                >
                  Or book {event.name} ↓
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showCalendly ? <CalendlyInline event={calendlyEvent} compact /> : null}
    </div>
  );
}
