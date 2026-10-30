/**
 * Internal link map — the single source for contextual internal links.
 *
 * Link Whisper-style rules this file encodes:
 * - Every page links to 4-6 topically related pages (no dead ends, no orphans).
 * - Anchors describe the destination ("Summerlin homes for sale"), never "click here".
 * - Neighborhood pages link to nearby neighborhoods + their area hub (hub-and-spoke).
 * - Blog posts auto-link the first mention of a key phrase (max 4 per post).
 *
 * Only list routes that exist under src/app. Clusters only group neighborhoods
 * whose location is certain; anything else falls back to the /communities hub.
 */
import { nameToSlug } from '@/data/neighborhoods';

export type InternalLink = { href: string; anchor: string; blurb?: string };

/* ------------------------------------------------------------------ */
/* Neighborhood clusters (hub-and-spoke)                               */
/* ------------------------------------------------------------------ */

export type NeighborhoodCluster = {
  label: string;
  hub: InternalLink;
  members: readonly string[]; // display names, must match EXPERT_NEIGHBORHOODS
};

export const NEIGHBORHOOD_CLUSTERS: readonly NeighborhoodCluster[] = [
  {
    label: 'Summerlin',
    hub: { href: '/areas/summerlin', anchor: 'Summerlin homes for sale' },
    members: [
      'Summerlin', 'Summerlin North', 'Summerlin South', 'Summerlin West', 'Summerlin Hills',
      'The Ridges', 'Red Rock Country Club', 'Sun City Summerlin', 'Siena', 'The Vistas',
      'The Willows', 'The Pueblo', 'The Mesa', 'The Cliffs',
    ],
  },
  {
    label: 'West Las Vegas',
    hub: { href: '/communities', anchor: 'all Las Vegas communities' },
    members: ['Queensridge', 'Peccole Ranch', 'Canyon Gate', 'Desert Shores', 'The Lakes', 'Spanish Trail'],
  },
  {
    label: 'Henderson',
    hub: { href: '/areas/henderson', anchor: 'Henderson homes for sale' },
    members: [
      'Anthem', 'Anthem Country Club', 'Anthem Highlands', 'Sun City Anthem', 'Ascaya',
      'MacDonald Highlands', 'MacDonald Ranch', 'Foothills at Mac Donald Ranch',
      'Sun City MacDonald Ranch', 'Sunridge at Mac Donald Ranch', 'Roma Hills', 'Seven Hills',
      'Inspirada', 'Cadence', 'Lake Las Vegas', 'South Shore', 'Madeira Canyon', 'Calico Ridge',
      'Black Mountain Vistas', 'Whitney Ranch', 'Tuscany', 'Mission Hills',
    ],
  },
  {
    label: 'Green Valley',
    hub: { href: '/areas/green-valley', anchor: 'Green Valley homes for sale' },
    members: ['Green Valley', 'Green Valley Ranch', 'Green Valley South', 'Silver Springs'],
  },
  {
    label: 'Northwest Las Vegas',
    hub: { href: '/communities', anchor: 'all Las Vegas communities' },
    members: [
      'Centennial Hills', 'Skye Canyon', 'Providence', 'Lone Mountain', 'Lone Mountain West',
      'Iron Mountain Ranch', 'Elkhorn Ranch', 'Elkhorn Springs', 'Shadow Hills', 'Painted Desert',
      'Los Prados', 'Silverstone Ranch', 'Mt. Charleston Golf Estates',
    ],
  },
  {
    label: 'North Las Vegas',
    hub: { href: '/areas/north-las-vegas', anchor: 'North Las Vegas homes for sale' },
    members: ['Aliante', 'Sun City Aliante', 'Eldorado', 'Park Highlands', 'Valley Vista'],
  },
  {
    label: 'Southwest Las Vegas',
    hub: { href: '/communities', anchor: 'all Las Vegas communities' },
    members: [
      'Mountains Edge', 'Southern Highlands', 'Rhodes Ranch', 'Coronado Ranch',
      'Arlington Ranch', 'Southwest Ranch', 'Silverado Ranch', 'Spring Valley',
    ],
  },
  {
    label: 'Central Las Vegas',
    hub: { href: '/areas/downtown', anchor: 'Downtown Las Vegas real estate' },
    members: ['Scotch 80s', 'Rancho Circle', 'Las Vegas Country Club', 'Desert Inn Country Club'],
  },
];

const POPULAR_NEIGHBORHOODS = ['Summerlin', 'Anthem', 'Green Valley Ranch', 'Skye Canyon', 'Southern Highlands', 'Lake Las Vegas'];

/** Nearby neighborhoods for a neighborhood page: up to `limit` siblings plus its hub. */
export function getNearbyNeighborhoods(name: string, limit = 6): { label: string; hub: InternalLink; links: InternalLink[] } {
  const cluster = NEIGHBORHOOD_CLUSTERS.find((c) => c.members.includes(name));
  const pool = cluster ? cluster.members : POPULAR_NEIGHBORHOODS;
  const others = pool.filter((n) => n !== name);
  // Rotate from this page's position so siblings link to different neighbors, not all to the same six.
  const start = Math.max(0, pool.indexOf(name));
  const rotated = [...others.slice(start), ...others.slice(0, start)].slice(0, limit);
  return {
    label: cluster ? cluster.label : 'Las Vegas',
    hub: cluster ? cluster.hub : { href: '/communities', anchor: 'all Las Vegas communities' },
    links: rotated.map((n) => ({ href: `/areas/${nameToSlug(n)}`, anchor: `${n} homes for sale` })),
  };
}

/* ------------------------------------------------------------------ */
/* Related pages by section ("Keep exploring" block on every page)     */
/* ------------------------------------------------------------------ */

const L = {
  buying: { href: '/buying', anchor: 'Buying a home in Las Vegas', blurb: 'Step-by-step buyer plan' },
  buyerGuide: { href: '/buyer-guide', anchor: 'Las Vegas buyer guide', blurb: 'Costs, timelines, offers' },
  firstTime: { href: '/blog/first-time-home-buyer-guide-las-vegas-2025', anchor: 'First-time buyer guide', blurb: 'Down payment help and first steps' },
  buyerReady: { href: '/assessments/buyer-readiness', anchor: 'Buyer readiness assessment', blurb: 'See if you are ready to buy' },
  selling: { href: '/selling', anchor: 'Selling your Las Vegas home', blurb: 'Pricing, prep and marketing' },
  sellerGuide: { href: '/seller-guide', anchor: 'Las Vegas seller guide', blurb: 'What to fix, what to skip' },
  sellerReady: { href: '/assessments/seller-readiness', anchor: 'Seller readiness assessment', blurb: 'Gauge your timing' },
  homeValue: { href: '/home-value', anchor: 'What is my home worth?', blurb: 'Free home value estimate' },
  cashOffer: { href: '/cash-offer', anchor: 'Cash offer program', blurb: 'Sell as-is on your timeline' },
  sold: { href: '/sold-listings', anchor: 'Recently sold homes', blurb: 'Real results from recent sales' },
  sellLuxury: { href: '/selling/luxury', anchor: 'Selling a luxury home', blurb: 'High-end marketing plan' },
  luxury: { href: '/luxury', anchor: 'Las Vegas luxury homes', blurb: 'Estates, golf and guard-gated' },
  luxuryCommunities: { href: '/luxury/communities', anchor: 'Luxury communities', blurb: 'The Ridges, MacDonald Highlands and more' },
  condos: { href: '/luxury/condos', anchor: 'Luxury high-rise condos', blurb: 'Strip and Summerlin towers' },
  developments: { href: '/luxury/developments', anchor: 'New luxury developments', blurb: 'New construction to watch' },
  land: { href: '/luxury/land', anchor: 'Luxury lots and land', blurb: 'Build your custom home' },
  offMarket: { href: '/exclusive/off-market', anchor: 'Off-market properties', blurb: 'Homes never listed publicly' },
  preMarket: { href: '/exclusive/pre-market', anchor: 'Coming-soon listings', blurb: 'See homes before they hit MLS' },
  showings: { href: '/exclusive/showings', anchor: 'Private showings', blurb: 'Tour on your schedule' },
  investing: { href: '/investing', anchor: 'Las Vegas investment properties', blurb: 'Rentals and cash flow' },
  investBlog: { href: '/blog/las-vegas-real-estate-investment-opportunities-2025', anchor: 'Las Vegas investment opportunities', blurb: 'Where the returns are' },
  luxuryInvest: { href: '/luxury/investment', anchor: 'Luxury investment properties', blurb: 'High-end rentals and holds' },
  commercial: { href: '/luxury/commercial', anchor: 'Commercial real estate', blurb: 'Retail, office and mixed-use' },
  rentals: { href: '/luxury/rentals', anchor: 'Luxury rentals', blurb: 'Lease before you buy' },
  estate: { href: '/services/estate-management', anchor: 'Estate management services', blurb: 'Care for your property' },
  market: { href: '/market-insights', anchor: 'Las Vegas market insights', blurb: 'Prices and inventory now' },
  trends: { href: '/blog/las-vegas-real-estate-market-trends-2025', anchor: 'Las Vegas market trends', blurb: 'Where prices are heading' },
  blog: { href: '/blog', anchor: 'Real estate blog', blurb: 'Local guides and updates' },
  resources: { href: '/resources', anchor: 'Buyer and seller resources', blurb: 'Guides, checklists, tools' },
  communities: { href: '/communities', anchor: 'Las Vegas communities', blurb: '100+ neighborhood guides' },
  summerlin: { href: '/areas/summerlin', anchor: 'Summerlin homes for sale', blurb: 'Villages, schools, trails' },
  henderson: { href: '/areas/henderson', anchor: 'Henderson homes for sale', blurb: 'Anthem, Inspirada, Cadence' },
  greenValley: { href: '/areas/green-valley', anchor: 'Green Valley homes', blurb: 'Established Henderson living' },
  northLV: { href: '/areas/north-las-vegas', anchor: 'North Las Vegas homes', blurb: 'Aliante and newer builds' },
  downtown: { href: '/areas/downtown', anchor: 'Downtown Las Vegas real estate', blurb: 'Lofts and historic homes' },
  listings: { href: '/listings', anchor: 'Search Las Vegas homes for sale', blurb: 'Live MLS listings' },
  about: { href: '/about', anchor: 'About Dr. Jan Duffy', blurb: 'How she works' },
  team: { href: '/about/team', anchor: 'Meet the team', blurb: 'Who helps you close' },
  partners: { href: '/about/partners', anchor: 'Trusted partners', blurb: 'Lenders, title, inspectors' },
  vendors: { href: '/vendors', anchor: 'Preferred vendors', blurb: 'Contractors and pros' },
  testimonials: { href: '/testimonials', anchor: 'Client reviews', blurb: 'What clients say' },
  assessments: { href: '/assessments', anchor: 'Free real estate assessments', blurb: 'Buyer and seller check-ups' },
  vip: { href: '/exclusive/vip', anchor: 'VIP client services', blurb: 'Concierge-level support' },
  contact: { href: '/contact', anchor: 'Contact Dr. Jan Duffy', blurb: 'Call or text 702-222-1964' },
  press: { href: '/press', anchor: 'Press and media', blurb: 'Interviews and features' },
  why: { href: '/why-list-with-us', anchor: 'Why list with Dr. Jan', blurb: 'The listing plan' },
} satisfies Record<string, InternalLink>;

/** Section prefix -> related links. Longest matching prefix wins. */
const RELATED_BY_SECTION: Record<string, InternalLink[]> = {
  '/': [L.communities, L.summerlin, L.henderson, L.homeValue, L.sold, L.market],
  '/buying': [L.buyerGuide, L.firstTime, L.buyerReady, L.listings, L.preMarket, L.communities],
  '/buyer-guide': [L.buying, L.firstTime, L.buyerReady, L.listings, L.trends, L.communities],
  '/first-time-buyer-challenges': [L.firstTime, L.buyerGuide, L.buyerReady, L.listings, L.market],
  '/selling': [L.sellerGuide, L.homeValue, L.sellerReady, L.sold, L.cashOffer, L.market],
  '/seller-guide': [L.selling, L.homeValue, L.sellerReady, L.sold, L.cashOffer],
  '/why-list-with-us': [L.selling, L.sold, L.testimonials, L.homeValue, L.sellLuxury],
  '/home-value': [L.selling, L.sold, L.cashOffer, L.sellerGuide, L.market],
  '/cash-offer': [L.homeValue, L.selling, L.sold, L.sellerReady, L.sellerGuide],
  '/sold-listings': [L.homeValue, L.selling, L.testimonials, L.market, L.communities],
  '/luxury': [L.luxuryCommunities, L.condos, L.developments, L.offMarket, L.sellLuxury, L.land],
  '/exclusive': [L.offMarket, L.preMarket, L.showings, L.vip, L.luxury],
  '/investing': [L.investBlog, L.luxuryInvest, L.commercial, L.rentals, L.estate, L.market],
  '/services': [L.estate, L.cashOffer, L.vip, L.assessments, L.vendors],
  '/market-insights': [L.trends, L.sold, L.homeValue, L.communities, L.investBlog],
  '/blog': [L.trends, L.firstTime, L.investBlog, L.market, L.communities],
  '/communities': [L.summerlin, L.henderson, L.greenValley, L.northLV, L.downtown, L.luxuryCommunities],
  '/areas': [L.communities, L.listings, L.homeValue, L.market, L.sold],
  '/listings': [L.communities, L.buyerGuide, L.preMarket, L.offMarket, L.market],
  '/about': [L.team, L.partners, L.testimonials, L.sold, L.press],
  '/team': [L.about, L.partners, L.testimonials, L.contact],
  '/testimonials': [L.sold, L.about, L.why, L.homeValue],
  '/press': [L.about, L.testimonials, L.sold, L.blog],
  '/vendors': [L.partners, L.estate, L.sellerGuide, L.buyerGuide],
  '/resources': [L.buyerGuide, L.sellerGuide, L.assessments, L.trends, L.blog],
  '/assessments': [L.buyerReady, L.sellerReady, L.homeValue, L.resources],
  '/contact': [L.homeValue, L.listings, L.about, L.testimonials],
};


/** Pages that should never show the related block (legal, utility). */
const NO_RELATED = ['/privacy-policy', '/terms-of-use', '/do-not-sell', '/interactive-features', '/listings/search', '/reports'];

export function getRelatedLinks(pathname: string, limit = 6): InternalLink[] {
  const path = pathname.replace(/\/$/, '') || '/';
  if (NO_RELATED.includes(path)) return [];
  const key =
    Object.keys(RELATED_BY_SECTION)
      .filter((k) => (k === '/' ? path === '/' : path === k || path.startsWith(`${k}/`)))
      .sort((a, b) => b.length - a.length)[0] ?? '/';
  return (RELATED_BY_SECTION[key] ?? []).filter((l) => l.href !== path).slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Blog auto-links (first mention only)                                */
/* ------------------------------------------------------------------ */

/** Longer phrases first so "Summerlin West" wins over "Summerlin". */
export const AUTOLINK_KEYWORDS: ReadonlyArray<{ phrase: string; href: string }> = [
  { phrase: 'first-time home buyer', href: '/blog/first-time-home-buyer-guide-las-vegas-2025' },
  { phrase: 'first-time buyer', href: '/blog/first-time-home-buyer-guide-las-vegas-2025' },
  { phrase: 'home value', href: '/home-value' },
  { phrase: 'cash offer', href: '/cash-offer' },
  { phrase: 'off-market', href: '/exclusive/off-market' },
  { phrase: 'investment propert', href: '/investing' },
  { phrase: 'high-rise', href: '/luxury/condos' },
  { phrase: 'luxury home', href: '/luxury' },
  { phrase: 'market trends', href: '/blog/las-vegas-real-estate-market-trends-2025' },
  { phrase: 'Green Valley', href: '/areas/green-valley' },
  { phrase: 'North Las Vegas', href: '/areas/north-las-vegas' },
  { phrase: 'Henderson', href: '/areas/henderson' },
  { phrase: 'Summerlin', href: '/areas/summerlin' },
  { phrase: 'Skye Canyon', href: '/areas/skye-canyon' },
  { phrase: 'Inspirada', href: '/areas/inspirada' },
  { phrase: 'Anthem', href: '/areas/anthem' },
  { phrase: 'Southern Highlands', href: '/areas/southern-highlands' },
  { phrase: 'Lake Las Vegas', href: '/areas/lake-las-vegas' },
];

/**
 * Link the first plain-text mention of each keyword in post HTML.
 * Skips text inside existing <a>, headings, <script>/<style>; one link per target; max `maxLinks`.
 */
export function autoLinkHtml(html: string, currentPath: string, maxLinks = 4): string {
  if (!html) return html;
  const used = new Set<string>([currentPath]);
  let added = 0;
  // Split into tags and text; track whether we are inside a no-link zone.
  const parts = html.split(/(<[^>]+>)/g);
  let blockDepth = 0;
  const blockOpen = /^<(a|h[1-6]|script|style|button)\b/i;
  const blockClose = /^<\/(a|h[1-6]|script|style|button)>/i;
  for (let i = 0; i < parts.length && added < maxLinks; i++) {
    const part = parts[i] ?? '';
    if (part.startsWith('<')) {
      if (blockOpen.test(part) && !part.endsWith('/>')) blockDepth++;
      else if (blockClose.test(part)) blockDepth = Math.max(0, blockDepth - 1);
      continue;
    }
    if (blockDepth > 0 || !part.trim()) continue;
    for (const { phrase, href } of AUTOLINK_KEYWORDS) {
      if (added >= maxLinks) break;
      if (used.has(href)) continue;
      const re = new RegExp(`\\b(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*)`, 'i');
      const text = parts[i] ?? '';
      const m = text.match(re);
      const word = m?.[1];
      if (!m || m.index === undefined || !word) continue;
      const before = text.slice(0, m.index);
      // Don't link inside a link we already inserted into this text node.
      if (/<a\s[^>]*>[^<]*$/i.test(before)) continue;
      parts[i] = `${before}<a href="${href}">${word}</a>${text.slice(m.index + word.length)}`;
      used.add(href);
      added++;
    }
  }
  return parts.join('');
}
