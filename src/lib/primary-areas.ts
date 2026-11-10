import { Metadata } from 'next';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
  generateSpeakableSchema,
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
    title: `${areaName} Real Estate`,
    description,
    keywords,
    url: `/areas/${slug}`,
    image: ogImage,
  });
}

export function buildPrimaryAreaFaqs(areaName: string) {
  return [
    {
      question: `Who can help me buy or sell a home in ${areaName}?`,
      answer: `Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, represents buyers and sellers in ${areaName}. Call or text 702-500-1955 for a consultation.`,
    },
    {
      question: `Does Dr. Jan Duffy specialize in ${areaName} real estate?`,
      answer: `Yes. ${areaName} is one of Dr. Jan Duffy's primary service areas, alongside Summerlin, Henderson, Green Valley, North Las Vegas, and Downtown Las Vegas.`,
    },
    {
      question: `How do I search ${areaName} homes for sale?`,
      answer: `Use the listings search on goodtoknowrealtor.com/listings or contact Dr. Jan Duffy at 702-500-1955 for a curated ${areaName} search, including private and off-market options when available.`,
    },
  ];
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
    faq: generateFAQSchema(buildPrimaryAreaFaqs(areaName)),
    speakable: generateSpeakableSchema({
      url: `/areas/${slug}`,
      cssSelectors: ['h1', '[data-speakable]'],
    }),
  };
}
