import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

const SUMMERLIN_CLUSTER = new Set([
  'Summerlin',
  'Summerlin Hills',
  'Summerlin North',
  'Summerlin South',
  'Summerlin West',
  'The Ridges',
  'The Willows',
  'The Vistas',
  'Red Rock Country Club',
  'Queensridge',
  'Peccole Ranch',
  'Spanish Hill',
  'Spanish Trail',
  'Providence',
  'Paradise Hills',
]);

const HENDERSON_MARKERS = [
  'Henderson',
  'Green Valley',
  'Anthem',
  'Inspirada',
  'Lake Las Vegas',
  'MacDonald',
  'Seven Hills',
  'Whitney Ranch',
  'Cadence',
  'Ascaya',
  'Black Mountain',
  'Montecito',
  'Madeira Canyon',
  'Sunridge at Mac Donald Ranch',
  'Foothills at Mac Donald Ranch',
  'Tuscany',
  'Riverstone',
  'Ardiente',
];

const NORTH_MARKERS = [
  'Aliante',
  'Skye Canyon',
  'Centennial Hills',
  'Lone Mountain',
  'North Shores',
  'Silverstone Ranch',
  'Iron Mountain Ranch',
  'Sun City Aliante',
  'Desert Shores',
  'Elkhorn',
];

/** Display corridor for meta copy and GEO context (Fair Housing–safe, factual). */
export function getNeighborhoodCorridor(name: string): string {
  if (SUMMERLIN_CLUSTER.has(name) || name.startsWith('Summerlin ')) {
    return 'Summerlin, Las Vegas';
  }
  if (HENDERSON_MARKERS.some((m) => name.includes(m))) {
    return 'Henderson, Nevada';
  }
  if (NORTH_MARKERS.some((m) => name.includes(m))) {
    return 'North Las Vegas, Nevada';
  }
  if (name === 'Downtown Las Vegas' || name.includes('Downtown')) {
    return 'Downtown Las Vegas';
  }
  return 'Las Vegas Valley';
}

export function generateNeighborhoodMetadata(name: string, slug: string): Metadata {
  const corridor = getNeighborhoodCorridor(name);
  const title = `${name} Real Estate | Dr. Jan Duffy - Good To Know REALTOR®`;
  const description = `Homes and luxury listings for sale in ${name}, ${corridor}. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, offers MLS search, pricing insight, and buyer/seller guidance. Call/text 702-500-1955.`;

  return generatePageMetadata({
    title,
    description,
    keywords: [
      `${name} homes for sale`,
      `${name} real estate`,
      `${name} MLS`,
      `${corridor} luxury homes`,
      'Dr. Jan Duffy',
      'Berkshire Hathaway HomeServices Nevada Properties',
    ],
    url: `/areas/${slug}`,
  });
}

export type NeighborhoodSection = {
  heading: string;
  answer: string;
  bullets?: string[];
};

/** Question-shaped H2 blocks with answer-first copy for all expert neighborhoods. */
export function getNeighborhoodSections(name: string): NeighborhoodSection[] {
  const corridor = getNeighborhoodCorridor(name);

  return [
    {
      heading: `What homes are for sale in ${name}?`,
      answer: `${name} offers a mix of single-family residences, townhomes, and luxury estates across ${corridor}. Inventory spans varied square-footage ranges, floor plans, and HOA or guard-gated communities—plus golf, pool, and mountain-view amenities depending on the street and subdivision.`,
      bullets: [
        `Detached homes, townhomes, and condominiums on the MLS in ${name}`,
        `Lot sizes and interior square footage vary by subdivision and build year`,
        `Community amenities may include pools, trails, clubhouses, and golf access where applicable`,
        `Commute access to employment centers via I-215, I-515, US-95, and the 215 Beltway`,
      ],
    },
    {
      heading: `How do you search ${name} MLS listings?`,
      answer: `Start with live MLS-backed search below Dr. Jan Duffy's office listings on this page, or open the advanced search to filter by price, beds, baths, and property type in ${name} and nearby ${corridor} communities.`,
      bullets: [
        'RealScout office listings refresh from the MLS',
        'Filter by price, beds, baths, and property type',
        `Hyperlocal guidance for offers, inspections, and closing in ${name}`,
      ],
    },
    {
      heading: `Who represents buyers and sellers in ${name}?`,
      answer: `Dr. Jan Duffy, Good To Know REALTOR® (License ${'S.0197614.LLC'}), with Berkshire Hathaway HomeServices Nevada Properties, guides luxury and resale transactions in ${name} and across Las Vegas and Henderson. Call or text 702-500-1955 for a pricing conversation or showing plan.`,
    },
    {
      heading: `What should you know about the ${name} housing market?`,
      answer: `Pricing, days on market, and list-to-sale ratios change with mortgage rates and seasonal demand in ${corridor}. Dr. Jan Duffy provides a current market read and comparable sales analysis tailored to your ${name} address or target criteria.`,
    },
  ];
}

export function neighborhoodHeroSubtitle(name: string): string {
  const corridor = getNeighborhoodCorridor(name);
  return `MLS homes and luxury properties in ${name}, ${corridor}. Dr. Jan Duffy delivers answer-ready market insight and full-service representation—call or text 702-500-1955.`;
}