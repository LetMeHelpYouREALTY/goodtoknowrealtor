/** Canonical production origin — must match GSC property and SEO_CONFIG.siteUrl */
export const CANONICAL_SITE_URL = 'https://www.goodtoknowrealtor.com';
export const CANONICAL_HOST = 'www.goodtoknowrealtor.com';

/** Hosts that should 301 to the canonical www HTTPS origin */
export function isProductionDomainHost(host: string): boolean {
  const normalized = host.toLowerCase().split(':')[0];
  return (
    normalized === 'goodtoknowrealtor.com' ||
    normalized === 'www.goodtoknowrealtor.com'
  );
}

export function needsCanonicalRedirect(request: {
  host: string;
  protocol: string;
}): boolean {
  const host = request.host.toLowerCase().split(':')[0];
  const isHttp = request.protocol === 'http';
  const isBareDomain = host === 'goodtoknowrealtor.com';

  if (!isProductionDomainHost(host)) return false;

  return isHttp || isBareDomain;
}

export function buildCanonicalRedirectUrl(pathname: string, search: string): URL {
  return new URL(`${pathname}${search}`, CANONICAL_SITE_URL);
}
