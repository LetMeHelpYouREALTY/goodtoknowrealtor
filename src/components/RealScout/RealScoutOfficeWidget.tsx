'use client';

import {
  REALSCOUT_AGENT_ENCODED_ID,
  REALSCOUT_OFFICE_LISTINGS_DEFAULTS,
} from '@/lib/realscout';

declare global {
  interface HTMLElementTagNameMap {
    'realscout-office-listings': HTMLElement & {
      'agent-encoded-id': string;
      'sort-order': string;
      'listing-status': string;
      'property-types': string;
    };
  }
}

type RealScoutOfficeWidgetProps = {
  /** When true, omits the section heading (e.g. when embedded via PageHero). */
  compact?: boolean;
  className?: string;
};

export function RealScoutOfficeWidget({
  compact = false,
  className = '',
}: RealScoutOfficeWidgetProps) {
  return (
    <section
      className={`realscout-office-band border-y border-[#c9a962]/15 bg-[#f8f6f1] ${className}`}
      aria-label="Office property listings"
    >
      {!compact ? (
        <div className="container py-10 text-center">
          <span className="luxury-accent-line mx-auto" aria-hidden="true" />
          <h2 className="font-display mt-4 text-3xl font-semibold text-[#0f1419] lg:text-4xl">
            Featured Las Vegas Properties
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-600">
            Browse active MLS listings from Dr. Jan Duffy and Berkshire Hathaway
            HomeServices Nevada Properties across Summerlin, Henderson, and the
            Las Vegas Valley.
          </p>
        </div>
      ) : null}

      <div className="realscout-office-widget-shell w-full px-0">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .realscout-office-widget-shell realscout-office-listings {
                --rs-listing-divider-color: #c9a962;
                display: block;
                width: 100% !important;
                max-width: 100% !important;
                min-height: 480px;
              }
              .realscout-office-widget-shell realscout-office-listings img {
                max-width: 100%;
                height: auto;
              }
            `,
          }}
        />
        <realscout-office-listings
          agent-encoded-id={REALSCOUT_AGENT_ENCODED_ID}
          sort-order={REALSCOUT_OFFICE_LISTINGS_DEFAULTS.sortOrder}
          listing-status={REALSCOUT_OFFICE_LISTINGS_DEFAULTS.listingStatus}
          property-types={REALSCOUT_OFFICE_LISTINGS_DEFAULTS.propertyTypes}
          className="block w-full"
        />
      </div>

      {!compact ? (
        <div className="container pb-12 pt-8 text-center">
          <a href="/listings" className="btn-luxury-primary inline-flex">
            View All Properties
          </a>
          <p className="mt-4 text-xs text-gray-500">
            MLS data courtesy of RealScout. Information deemed reliable but not
            guaranteed.
          </p>
        </div>
      ) : null}
    </section>
  );
}
