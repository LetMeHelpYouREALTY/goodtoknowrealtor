import type { MetadataRoute } from 'next';

type SitemapEntry = MetadataRoute.Sitemap[number];

type StaticRouteConfig = {
  path: string;
  changeFrequency: NonNullable<SitemapEntry['changeFrequency']>;
  priority: number;
};

/** Static indexable routes not covered by dynamic generators (blog, neighborhoods). */
export const STATIC_SITEMAP_ROUTES: readonly StaticRouteConfig[] = [
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about/team', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/partners', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/team', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/buying', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/buying/updates', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/selling', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/selling/luxury', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/services/estate-management', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/luxury', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/luxury/investment', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/land', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/virtual-tours', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/rentals', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/communities', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/condos', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/developments', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/luxury/commercial', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/investing', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/home-value', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/cash-offer', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/why-list-with-us', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/listings', changeFrequency: 'daily', priority: 0.9 },
  { path: '/sold-listings', changeFrequency: 'daily', priority: 0.7 },
  { path: '/communities', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buyer-guide', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/seller-guide', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/first-time-buyer-challenges', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/assessments', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/buying/guide', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/assessments/seller-readiness', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
  { path: '/market-insights', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/reports', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/resources', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/testimonials', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/interactive-features', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/exclusive', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/exclusive/pre-market', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/exclusive/off-market', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/exclusive/vip', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/exclusive/showings', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/press', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/press/speaking', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/press/media-kit', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/press/recent', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/vendors', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-use', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/do-not-sell', changeFrequency: 'yearly', priority: 0.3 },
] as const;

/** Curated static blog posts (in addition to CMS-driven posts). */
export const STATIC_BLOG_SLUGS = [
  'las-vegas-real-estate-investment-opportunities-2025',
  'las-vegas-real-estate-market-trends-2025',
  'first-time-home-buyer-guide-las-vegas-2025',
] as const;

export function dedupeSitemapEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
