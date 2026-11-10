import { Metadata } from 'next';
import { SITE } from '@/config/site';
import { getGoogleVerificationMetadata } from '@/lib/google-search-console';

// Base configuration for Dr. Jan Duffy's Las Vegas real estate business
// NAP must match Google Business Profile for this site (verify monthly).
export const SEO_CONFIG = {
  siteName: 'Dr. Jan Duffy | Good To Know REALTOR®',
  siteUrl: SITE.siteUrl,
  defaultTitle:
    'Dr. Jan Duffy | Good To Know REALTOR® | Luxury Real Estate Las Vegas',
  defaultDescription:
    'Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Luxury buying, selling, and investing in Summerlin, Henderson, Green Valley, and Las Vegas. Call/Text 702-500-1955.',
  keywords: [
    'Good To Know REALTOR',
    'Dr. Jan Duffy',
    'Las Vegas luxury real estate',
    'Summerlin luxury homes',
    'Henderson luxury homes',
    'Green Valley real estate',
    'Las Vegas realtor',
    'Las Vegas real estate agent',
    'Berkshire Hathaway HomeServices Nevada Properties',
    'The Ridges real estate',
    'MacDonald Highlands',
    'Southern Highlands real estate',
    'Las Vegas homes for sale',
    'Las Vegas investment properties',
    'home value Las Vegas',
  ],
  author: SITE.agentName,
  brand: SITE.brand,
  license: SITE.license,
  brokerage: SITE.brokerage,
  phone: SITE.phoneDisplay,
  phoneTel: SITE.phoneTel,
  email: SITE.email,
  address: {
    street: SITE.address.street,
    city: SITE.address.city,
    state: SITE.address.state,
    zipCode: SITE.address.zipCode,
    country: SITE.address.country,
  },
  geo: {
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00'],
  openingHoursDisplay: SITE.openingHoursDisplay,
  social: {
    facebook: 'https://www.facebook.com/bhhsrealestate',
    instagram: 'https://www.instagram.com/bhhsrealestate',
    linkedin: 'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
    youtube: 'https://www.youtube.com/channel/UCrBKUuQDrkCNFjy4wF5ZWXw',
  },
  images: {
    default:
      '/api/og?title=Dr.%20Jan%20Duffy%20%7C%20Good%20To%20Know%20REALTOR%C2%AE&subtitle=Luxury%20real%20estate%20in%20Summerlin%2C%20Henderson%20%26%20Las%20Vegas&badge=BHHS%20Nevada%20Properties&highlight=Licensed%20since%202008&highlight=%24127M%2B%20Sales%20Volume',
    logo: '/images/bhhs/logo.svg',
    agent: '/images/dr-jan-duffy-profile.jpg',
  },
  maps: SITE.maps,
};

/**
 * Page OG images under /images/ were never added to /public, so every og:image 404'd.
 * Until real files exist, render the page's card with the /api/og route instead.
 */
const EXISTING_PUBLIC_IMAGES = new Set<string>(['/images/bhhs/logo.svg']);

function resolveOgImage(image: string | undefined, title: string | undefined): string {
  if (image && (image.startsWith('http') || !image.startsWith('/images/') || EXISTING_PUBLIC_IMAGES.has(image))) {
    return image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}`;
  }
  if (image && title) {
    return `${SEO_CONFIG.siteUrl}/api/og?title=${encodeURIComponent(title)}`;
  }
  return `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.default}`;
}

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website'
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
    
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const allKeywords = [...SEO_CONFIG.keywords, ...keywords];
  const imageUrl = resolveOgImage(image, title);
  const pageUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;

  // Use absolute titles so the root layout template does not double-append siteName (SEO).
  return {
    title: { absolute: fullTitle },
    description: fullDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: pageUrl,
      siteName: SEO_CONFIG.siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
      creator: '@drjanduffy',
    },
    alternates: {
      canonical: pageUrl,
    },
    ...getGoogleVerificationMetadata(),
  };
}

const AREA_SERVED = [
  { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
  { '@type': 'City', name: 'Summerlin', addressRegion: 'NV' },
  { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
  { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
  { '@type': 'City', name: 'Downtown Las Vegas', addressRegion: 'NV' },
  { '@type': 'City', name: 'Green Valley', addressRegion: 'NV' },
] as const;

function postalAddressSchema() {
  return {
    '@type': 'PostalAddress' as const,
    streetAddress: SEO_CONFIG.address.street,
    addressLocality: SEO_CONFIG.address.city,
    addressRegion: SEO_CONFIG.address.state,
    postalCode: SEO_CONFIG.address.zipCode,
    addressCountry: SEO_CONFIG.address.country,
  };
}

function geoSchema() {
  return {
    '@type': 'GeoCoordinates' as const,
    latitude: SEO_CONFIG.geo.latitude,
    longitude: SEO_CONFIG.geo.longitude,
  };
}

function openingHoursSpecificationSchema() {
  return [
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ];
}

// Generate JSON-LD structured data for Real Estate Agent
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SEO_CONFIG.siteUrl}/#realestateagent`,
    name: 'Dr. Jan Duffy',
    alternateName: ['Good To Know REALTOR®', 'Dr. Jan Duffy Real Estate'],
    description:
      'Dr. Jan Duffy is a Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties specializing in luxury real estate across Summerlin, Henderson, Green Valley, and Las Vegas. Licensed since 2008 (S.0197614.LLC).',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    priceRange: '$$$$',
    address: postalAddressSchema(),
    geo: geoSchema(),
    hasMap: SEO_CONFIG.maps.directionsUrl,
    openingHours: SEO_CONFIG.openingHours,
    openingHoursSpecification: openingHoursSpecificationSchema(),
    areaServed: [...AREA_SERVED],
    serviceType: [
      'Luxury Real Estate',
      'Real Estate Buying',
      'Real Estate Selling',
      'Investment Properties',
      'Property Valuation',
      'Off-Market / Private Inventory',
      'Relocation Concierge',
    ],
    brand: {
      '@type': 'Brand',
      name: SEO_CONFIG.brand,
    },
    worksFor: {
      '@type': 'RealEstateAgent',
      name: SEO_CONFIG.brokerage,
      url: 'https://www.bhhsnv.com',
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'Nevada Real Estate License',
      value: SEO_CONFIG.license,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: `Nevada REALTOR® License ${SEO_CONFIG.license}`,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Residential Specialist (CRS)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Luxury Home Marketing Specialist (CLHMS)',
      },
    ],
    award: [
      '5.0★ on Realtor.com',
      'Berkshire Hathaway Circle of Excellence',
    ],
    sameAs: Object.values(SEO_CONFIG.social),
    knowsAbout: [
      'Las Vegas luxury real estate',
      'Summerlin homes',
      'Henderson homes',
      'Green Valley Ranch',
      'The Ridges',
      'MacDonald Highlands',
      'Southern Highlands',
      'Inspirada',
      'Lake Las Vegas',
      'Investment properties',
      'Home valuation',
    ],
    memberOf: [
      { '@type': 'Organization', name: 'National Association of Realtors' },
      { '@type': 'Organization', name: 'Greater Las Vegas Association of Realtors' },
      { '@type': 'Organization', name: SEO_CONFIG.brokerage },
    ],
  };
}

/** Person schema for E-E-A-T / GEO entity clarity */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SEO_CONFIG.siteUrl}/#person`,
    name: 'Dr. Jan Duffy',
    jobTitle: 'REALTOR®',
    description:
      'Good To Know REALTOR® specializing in luxury residential real estate in Las Vegas, Summerlin, and Henderson. Licensed since 2008.',
    url: `${SEO_CONFIG.siteUrl}/about`,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    worksFor: {
      '@type': 'Organization',
      name: SEO_CONFIG.brokerage,
    },
    address: postalAddressSchema(),
    sameAs: Object.values(SEO_CONFIG.social),
    knowsAbout: [
      'Luxury real estate',
      'Summerlin',
      'Henderson',
      'Las Vegas Valley neighborhoods',
    ],
  };
}

/** Speakable schema — helps answer engines extract concise answers (AEO) */
export function generateSpeakableSchema({
  url,
  cssSelectors = ['h1', '[data-speakable]'],
}: {
  url: string;
  cssSelectors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SEO_CONFIG.siteName,
    url: `${SEO_CONFIG.siteUrl}${url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
    about: {
      '@id': `${SEO_CONFIG.siteUrl}/#realestateagent`,
    },
  };
}

// LocalBusiness / RealEstateAgent NAP block — must match GBP for this site
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: 'Dr. Jan Duffy | Good To Know REALTOR®',
    alternateName: 'Good To Know REALTOR®',
    description:
      'Luxury and residential real estate services from Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Serving Summerlin, Henderson, Green Valley, and Las Vegas.',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: postalAddressSchema(),
    geo: geoSchema(),
    hasMap: SEO_CONFIG.maps.directionsUrl,
    areaServed: [...AREA_SERVED],
    priceRange: '$$$$',
    openingHours: SEO_CONFIG.openingHours,
    openingHoursSpecification: openingHoursSpecificationSchema(),
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    parentOrganization: {
      '@type': 'RealEstateAgent',
      name: SEO_CONFIG.brokerage,
    },
    employee: {
      '@type': 'Person',
      '@id': `${SEO_CONFIG.siteUrl}/#person`,
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dr. Jan Duffy Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Home Buying',
            description: 'Private search and negotiation for luxury homes in Summerlin, Henderson, and Las Vegas',
            url: `${SEO_CONFIG.siteUrl}/buying`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Home Selling',
            description: 'Listing strategy, marketing, and negotiation for Las Vegas Valley sellers',
            url: `${SEO_CONFIG.siteUrl}/selling`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Concierge',
            description: 'White-glove representation for high-end properties and off-market opportunities',
            url: `${SEO_CONFIG.siteUrl}/luxury`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Advisory',
            description: 'Guidance for Las Vegas investment and rental property acquisitions',
            url: `${SEO_CONFIG.siteUrl}/investing`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation',
            description: 'Data-backed home value and equity analysis for Las Vegas properties',
            url: `${SEO_CONFIG.siteUrl}/home-value`,
          },
        },
      ],
    },
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SEO_CONFIG.siteUrl}${crumb.url}`,
    })),
  };
}

// Generate FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Review schema for testimonials
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  location?: string;
  community?: string;
}>) {
  return reviews.map(review => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      description: 'Las Vegas Real Estate Agent',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy Real Estate',
    },
    ...(review.location && { location: review.location }),
    ...(review.community && { community: review.community }),
  }));
}

// Generate Product schema for property listings
export function generatePropertySchema(properties: Array<{
  name: string;
  description: string;
  image: string;
  price: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  lotSize?: string;
  yearBuilt?: number;
  propertyType: string;
  listingStatus: string;
  mlsNumber?: string;
}>) {
  return properties.map(property => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: property.name,
    description: property.description,
    image: property.image,
    brand: {
      '@type': 'Brand',
      name: 'Berkshire Hathaway HomeServices',
    },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: property.listingStatus === 'For Sale' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: SEO_CONFIG.phone,
        email: SEO_CONFIG.email,
      },
    },
    additionalProperty: [
      ...(property.bedrooms ? [{
        '@type': 'PropertyValue',
        name: 'Bedrooms',
        value: property.bedrooms,
      }] : []),
      ...(property.bathrooms ? [{
        '@type': 'PropertyValue',
        name: 'Bathrooms',
        value: property.bathrooms,
      }] : []),
      ...(property.squareFeet ? [{
        '@type': 'PropertyValue',
        name: 'Square Feet',
        value: property.squareFeet,
      }] : []),
      ...(property.lotSize ? [{
        '@type': 'PropertyValue',
        name: 'Lot Size',
        value: property.lotSize,
      }] : []),
      ...(property.yearBuilt ? [{
        '@type': 'PropertyValue',
        name: 'Year Built',
        value: property.yearBuilt,
      }] : []),
      {
        '@type': 'PropertyValue',
        name: 'Property Type',
        value: property.propertyType,
      },
      ...(property.mlsNumber ? [{
        '@type': 'PropertyValue',
        name: 'MLS Number',
        value: property.mlsNumber,
      }] : []),
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'Nevada',
      addressCountry: 'United States',
    },
  }));
}

// Generate VideoObject schema for videos
export function generateVideoSchema(videos: Array<{
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl?: string;
}>) {
  return videos.map(video => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy Real Estate',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
      },
    },
    creator: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
    },
  }));
}

// Generate Service schema for real estate services
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Las Vegas Luxury Real Estate Services',
    description:
      'Buying, selling, luxury concierge, valuation, and investment services from Dr. Jan Duffy, Good To Know REALTOR®.',
    provider: {
      '@type': 'RealEstateAgent',
      '@id': `${SEO_CONFIG.siteUrl}/#realestateagent`,
      name: 'Dr. Jan Duffy',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    areaServed: [...AREA_SERVED],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Good To Know REALTOR® Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description: 'Expert guidance for purchasing homes in Las Vegas, Summerlin, and Henderson',
            url: `${SEO_CONFIG.siteUrl}/buying`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description: 'Professional home selling with market expertise across the Las Vegas Valley',
            url: `${SEO_CONFIG.siteUrl}/selling`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Services',
            description: 'Specialized luxury property services for discerning clients',
            url: `${SEO_CONFIG.siteUrl}/luxury`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            description: 'Strategic investment property guidance in Las Vegas',
            url: `${SEO_CONFIG.siteUrl}/investing`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Valuation Services',
            description: 'Accurate property value assessments for Las Vegas homes',
            url: `${SEO_CONFIG.siteUrl}/home-value`,
          },
        },
      ],
    },
  };
}

// Page-specific SEO configurations (page titles; generatePageMetadata appends siteName once)
export const PAGE_SEO = {
  home: {
    title: 'Luxury Real Estate in Summerlin, Henderson & Las Vegas',
    description:
      'Work with Dr. Jan Duffy, Good To Know REALTOR®, for luxury buying, selling, and investing in Summerlin, Henderson, Green Valley, and Las Vegas. Call/Text 702-500-1955.',
    keywords: [
      'Good To Know REALTOR',
      'Dr. Jan Duffy',
      'Las Vegas luxury real estate',
      'Summerlin luxury homes',
      'Henderson realtor',
    ],
  },
  about: {
    title: 'About Dr. Jan Duffy',
    description:
      'Meet Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Licensed since 2008 (S.0197614.LLC). Luxury focus across Las Vegas and Henderson.',
    keywords: ['Dr. Jan Duffy biography', 'Good To Know REALTOR', 'Las Vegas real estate agent'],
  },
  contact: {
    title: 'Contact Dr. Jan Duffy',
    description:
      'Call or text Dr. Jan Duffy at 702-500-1955. Office at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Luxury real estate consultations for Summerlin and Henderson.',
    keywords: ['contact Dr. Jan Duffy', 'Good To Know REALTOR phone', 'Las Vegas realtor contact'],
  },
  services: {
    title: 'Real Estate Services',
    description:
      'Luxury buying, selling, valuation, and investment services from Dr. Jan Duffy, Good To Know REALTOR® in Las Vegas, Summerlin, and Henderson.',
    keywords: ['Las Vegas real estate services', 'luxury realtor Las Vegas', 'home selling Las Vegas'],
  },
  buying: {
    title: 'Buying a Home in Las Vegas',
    description:
      'Buy with Dr. Jan Duffy, Good To Know REALTOR®. Private showings, negotiation strategy, and hyperlocal guidance in Summerlin, Henderson, and Las Vegas.',
    keywords: ['buying home Las Vegas', 'Summerlin homes for sale', 'Henderson homes for sale'],
  },
  selling: {
    title: 'Selling Your Home in Las Vegas',
    description:
      'Sell with Dr. Jan Duffy, Good To Know REALTOR®. Pricing strategy, luxury marketing, and negotiation for Las Vegas Valley homes.',
    keywords: ['selling home Las Vegas', 'home value Las Vegas', 'list with Dr. Jan Duffy'],
  },
  luxury: {
    title: 'Luxury Real Estate in Las Vegas',
    description:
      'Luxury homes and estates with Dr. Jan Duffy, Good To Know REALTOR®. Summerlin, The Ridges, MacDonald Highlands, Southern Highlands, and Henderson.',
    keywords: ['luxury homes Las Vegas', 'Summerlin luxury homes', 'The Ridges real estate'],
  },
  investing: {
    title: 'Real Estate Investment in Las Vegas',
    description:
      'Las Vegas investment property guidance from Dr. Jan Duffy, Good To Know REALTOR®. Rentals, portfolio strategy, and off-market opportunities.',
    keywords: ['Las Vegas real estate investment', 'rental properties Las Vegas', 'investment realtor'],
  },
  blog: {
    title: 'Las Vegas Real Estate Blog',
    description:
      'Market insights and neighborhood guidance from Dr. Jan Duffy, Good To Know REALTOR® — Summerlin, Henderson, and Las Vegas.',
    keywords: ['Las Vegas real estate blog', 'Summerlin market trends', 'Henderson real estate news'],
  },
};

// Generate HowTo schema for process pages
export function generateHowToSchema({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; url?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url ? `https://www.goodtoknowrealtor.com${step.url}` : undefined
    }))
  };
}

// Generate ItemList schema for hub pages
export function generateItemListSchema({
  name,
  description,
  items
}: {
  name: string;
  description: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `https://www.goodtoknowrealtor.com${item.url}`,
      description: item.description
    }))
  };
}

// Generate WebPage schema with breadcrumbs
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumbs
}: {
  name: string;
  description: string;
  url: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `https://www.goodtoknowrealtor.com${url}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `https://www.goodtoknowrealtor.com${crumb.url}`
      }))
    }
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = SEO_CONFIG.author,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const pageUrl = `${SEO_CONFIG.siteUrl}${url}`;
  const imageUrl = resolveOgImage(image, title);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };
}

export function generateSiteNavigationElementSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    url: SEO_CONFIG.siteUrl,
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Find My Home',
        url: `${SEO_CONFIG.siteUrl}/buying`
      },
      {
        '@type': 'WebPage',
        name: 'Sell My Home',
        url: `${SEO_CONFIG.siteUrl}/selling`
      },
      {
        '@type': 'WebPage',
        name: 'Vegas Areas',
        url: `${SEO_CONFIG.siteUrl}/communities`
      },
      {
        '@type': 'WebPage',
        name: 'Market News',
        url: `${SEO_CONFIG.siteUrl}/blog`
      }
    ]
  };
}