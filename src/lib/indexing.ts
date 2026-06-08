import type { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

/** Pages that should not appear in Google index (iframe embeds, duplicate thin views). */
export const NOINDEX_PATHS = ['/market-insights/full'] as const;

export function isNoindexPath(pathname: string): boolean {
  return NOINDEX_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

/** Filtered listing views are crawl noise — canonical is always /listings. */
export function shouldNoindexListingsSearch(url: URL): boolean {
  return url.pathname === '/listings' && url.search.length > 0;
}

export function shouldNoindexMalformedPath(pathname: string): boolean {
  return pathname === '/&' || pathname.includes('{search_term_string}');
}

export const NOINDEX_ROBOTS: Metadata['robots'] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
};

export function getNoindexMetadata(canonicalPath: string): Metadata {
  return {
    robots: NOINDEX_ROBOTS,
    alternates: {
      canonical: `${SEO_CONFIG.siteUrl}${canonicalPath}`,
    },
  };
}

export function applyNoindexResponseHeaders(response: Response): void {
  response.headers.set('X-Robots-Tag', 'noindex, follow');
}
