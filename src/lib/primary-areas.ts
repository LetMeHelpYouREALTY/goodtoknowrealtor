import { Metadata } from 'next';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/seo';

/** Static primary area landing pages under /areas/ (not in NEIGHBORHOOD_SLUGS). */
export const PRIMARY_AREA_SLUGS = [
  'north-las-vegas',
  'summerlin',
  'henderson',
  'downtown',
  'green-valley',
] as const;

export type PrimaryAreaSlug = (typeof PRIMARY_AREA_SLUGS)[number];

type PrimaryAreaSeoOptions = {
  areaName: string;
  slug: PrimaryAreaSlug;
  description: string;
  keywords: string[];
  ogImage: string;
};

/** Luxury hyperlocal meta blurbs (Fair Housing–safe). */
export const PRIMARY_AREA_DESCRIPTIONS: Record<PrimaryAreaSlug, string> = {
  summerlin:
    'Summerlin luxury homes, golf-course estates, and resale MLS listings in Las Vegas. Dr. Jan Duffy, Good To Know REALTOR®, guides pricing, showings, and negotiations. Berkshire Hathaway HomeServices Nevada Properties. 702-500-1955.',
  henderson:
    'Henderson homes for sale—from master-planned neighborhoods to luxury estates. Dr. Jan Duffy provides MLS search, market analytics, and full-service representation across Henderson and Green Valley. 702-500-1955.',
  'green-valley':
    'Green Valley and Henderson luxury real estate near golf, retail, and the 215 corridor. Dr. Jan Duffy specializes in resale and estate homes with Berkshire Hathaway HomeServices Nevada Properties. 702-500-1955.',
  downtown:
    'Downtown Las Vegas condos, lofts, and high-rise residences. Dr. Jan Duffy helps urban buyers compare square footage, HOA fees, and commute options in the Fremont and Arts District corridors. 702-500-1955.',
  'north-las-vegas':
    'North Las Vegas homes and new construction in Aliante, Skye Canyon, Centennial Hills, and more. Dr. Jan Duffy supports buyers and investors with MLS data and local negotiation strategy. 702-500-1955.',
};

export function generatePrimaryAreaMetadata({
  areaName,
  slug,
  description,
  keywords,
  ogImage,
}: PrimaryAreaSeoOptions): Metadata {
  return generatePageMetadata({
    title: `${areaName} Real Estate | Dr. Jan Duffy - Premier Good To Know REALTOR®`,
    description,
    keywords,
    url: `/areas/${slug}`,
    image: ogImage,
  });
}

export function generatePrimaryAreaSchemas({
  areaName,
  slug,
  description,
}: Pick<PrimaryAreaSeoOptions, 'areaName' | 'slug' | 'description'>) {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Communities', url: '/communities' },
    { name: areaName, url: `/areas/${slug}` },
  ];

  return {
    breadcrumbs: generateBreadcrumbSchema(breadcrumbs),
    webPage: generateWebPageSchema({
      name: `${areaName} Real Estate`,
      description,
      url: `/areas/${slug}`,
      breadcrumbs,
    }),
  };
}
