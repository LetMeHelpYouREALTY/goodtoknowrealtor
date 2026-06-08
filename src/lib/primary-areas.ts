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
