'use client';

import { usePathname } from 'next/navigation';
import { LuxuryAuthorityBand } from '@/components/ui/LuxuryAuthorityBand';
import { calendlyIntentForPath } from '@/lib/calendly';

const SKIP_PREFIXES = [
  '/privacy-policy',
  '/terms-of-use',
  '/do-not-sell',
  '/market-insights/full',
];

/**
 * Sitewide mid-funnel engagement: agent portrait + one Calendly event by route intent.
 * Skips legal / noindex utility pages. Renders once before the footer.
 */
export function PageEngagement() {
  const pathname = usePathname() || '/';
  if (SKIP_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  const event = calendlyIntentForPath(pathname);
  return <LuxuryAuthorityBand calendlyEvent={event} />;
}
