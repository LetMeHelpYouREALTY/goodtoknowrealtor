import { Metadata } from 'next';

// Base configuration for Dr. Jan Duffy's Las Vegas real estate business
export const SEO_CONFIG = {
  siteName: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
  siteUrl: 'https://www.goodtoknowrealtor.com',
  defaultTitle: 'Dr. Jan Duffy - Las Vegas Real Estate Expert | Top 1% Agent',
  defaultDescription: 'Top-performing Las Vegas real estate agent Dr. Jan Duffy delivers exceptional results with $127M+ in sales volume. Expert guidance for buying, selling, and investing in Las Vegas properties.',
  keywords: [
    'Las Vegas real estate',
    'Dr. Jan Duffy',
    'Las Vegas realtor',
    'Las Vegas homes for sale',
    'Las Vegas real estate agent',
    'Summerlin real estate',
    'Henderson real estate',
    'Las Vegas luxury homes',
    'Las Vegas investment properties',
    'Las Vegas home buying',
    'Las Vegas home selling',
    'Berkshire Hathaway HomeServices',
    'Las Vegas property values',
    'Las Vegas market trends',
    'Las Vegas MLS search',
    'home value calculator',
    'property search tool',
    'Las Vegas market insights',
    'real estate market updates',
    'home equity tracking',
    'property valuation tool'
  ],
  author: 'Dr. Jan Duffy',
  phone: '(702) 222-1964',
  email: 'info@drjanduffy.com',
  address: {
    street: 'Las Vegas, Nevada',
    city: 'Las Vegas',
    state: 'Nevada',
    zipCode: '89101',
    country: 'United States'
  },
  social: {
    facebook: 'https://www.facebook.com/bhhsrealestate',
    instagram: 'https://www.instagram.com/bhhsrealestate',
    linkedin: 'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
    youtube: 'https://www.youtube.com/channel/UCrBKUuQDrkCNFjy4wF5ZWXw'
  },
  images: {
    default: '/images/dr-janet-duffy-og.jpg',
    logo: '/images/bhhs/logo.svg',
    agent: '/images/dr-janet-duffy-profile.jpg'
  }
};

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
  const imageUrl = image ? `${SEO_CONFIG.siteUrl}${image}` : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.default}`;
  const pageUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;

  return {
    title: fullTitle,
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
    verification: {
      google: 'your-google-verification-code', // Add your actual Google verification code
    },
  };
}

// Generate JSON-LD structured data for Real Estate Agent
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    alternateName: 'Las Vegas Real Estate Expert',
    description: 'Top 1% Las Vegas real estate agent Dr. Jan Duffy delivers exceptional results with $127M+ in sales volume. Expert guidance for buying, selling, and investing in Las Vegas properties.',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.address.street,
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      postalCode: SEO_CONFIG.address.zipCode,
      addressCountry: SEO_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Downtown Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Green Valley',
        addressRegion: 'Nevada',
      },
    ],
    serviceType: [
      'Real Estate Buying',
      'Real Estate Selling',
      'Luxury Real Estate',
      'Investment Properties',
      'Property Valuation',
      'Real Estate Consulting',
      'First-Time Home Buyer Assistance',
      'Luxury Property Specialist',
    ],
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Premier Properties',
      url: 'https://www.bhhs.com',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'REALTOR® License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Association of Realtors',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Luxury Property Specialist (LPS)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Institute for Luxury Home Marketing',
        },
      },
    ],
    award: [
      'Top 1% of Las Vegas Realtors (2023, 2024)',
      'Berkshire Hathaway Circle of Excellence',
      '5-Star Client Rating Average',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    knowsAbout: [
      'Las Vegas Real Estate Market',
      'Luxury Homes',
      'Investment Properties',
      'First-Time Home Buyers',
      'Property Valuation',
      'Market Analysis',
      'Negotiation',
      'Transaction Management',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'National Association of Realtors',
      },
      {
        '@type': 'Organization',
        name: 'Las Vegas Realtors Association',
      },
      {
        '@type': 'Organization',
        name: 'Institute for Luxury Home Marketing',
      },
    ],
  };
}

// Generate JSON-LD structured data for Local Business (Berkshire Hathaway Office)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Berkshire Hathaway HomeServices Premier Properties',
    alternateName: 'Berkshire Hathaway HomeServices Las Vegas',
    description: 'Premier Las Vegas real estate office providing expert guidance for buying, selling, and investing in Las Vegas properties.',
    url: 'https://www.bhhs.com',
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Las Vegas, Nevada',
      addressLocality: 'Las Vegas',
      addressRegion: 'Nevada',
      postalCode: '89101',
      addressCountry: 'United States',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'Nevada',
      },
    ],
    priceRange: '$$$$',
    openingHours: 'Mo-Fr 09:00-18:00,Sa 10:00-16:00,Su 12:00-16:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: Object.values(SEO_CONFIG.social),
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    employee: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      jobTitle: 'Top 1% Las Vegas Real Estate Agent',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Buying Services',
            description: 'Expert guidance for buying homes in Las Vegas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Selling Services',
            description: 'Professional home selling services with market expertise',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Services',
            description: 'Specialized luxury property services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            description: 'Strategic investment property guidance',
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

// Generate QAPage schema (2026 Update - AEO Optimized)
// Note: FAQ rich results deprecated May 2026, using QAPage for AEO instead
export function generateQAPageSchema(questions: Array<{
  question: string;
  answer: string;
  dateCreated?: string;
  author?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: questions.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      text: qa.question,
      dateCreated: qa.dateCreated || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: qa.author || 'Dr. Jan Duffy',
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
        dateCreated: qa.dateCreated || new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: qa.author || 'Dr. Jan Duffy',
        },
        upvoteCount: 1,
      },
      answerCount: 1,
    })),
  };
}

// Keep old function for backward compatibility but mark as deprecated
/** @deprecated Use generateQAPageSchema instead. FAQ rich results deprecated May 2026 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return generateQAPageSchema(faqs);
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
      name: 'Dr. Janet Duffy',
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
      name: 'Dr. Janet Duffy Real Estate',
    },
    ...(review.location && { location: review.location }),
    ...(review.community && { community: review.community }),
  }));
}

// Generate RealEstateListing schema for property listings (2026 Update)
// Note: Switched from Product to RealEstateListing per schema.org 2026 best practices
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
  datePosted?: string;
}>) {
  return properties.map(property => ({
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.name,
    description: property.description,
    image: property.image,
    datePosted: property.datePosted || new Date().toISOString(),
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: property.listingStatus === 'For Sale' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Janet Duffy',
        telephone: SEO_CONFIG.phone,
        email: SEO_CONFIG.email,
      },
      validFrom: property.datePosted || new Date().toISOString(),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: property.squareFeet ? {
      '@type': 'QuantitativeValue',
      value: property.squareFeet,
      unitCode: 'FTK',
      unitText: 'square feet',
    } : undefined,
    yearBuilt: property.yearBuilt,
    additionalProperty: [
      ...(property.lotSize ? [{
        '@type': 'PropertyValue',
        name: 'Lot Size',
        value: property.lotSize,
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
      name: 'Dr. Janet Duffy Real Estate',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
      },
    },
    creator: {
      '@type': 'Person',
      name: 'Dr. Janet Duffy',
    },
  }));
}

// Generate Service schema for real estate services
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Las Vegas Real Estate Services',
    description: 'Comprehensive real estate services including buying, selling, luxury properties, and investment properties in Las Vegas.',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Janet Duffy',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Summerlin',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'Nevada',
      },
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'Nevada',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description: 'Expert guidance for purchasing homes in Las Vegas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description: 'Professional home selling with market expertise',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate Services',
            description: 'Specialized luxury property services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            description: 'Strategic investment property guidance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Valuation Services',
            description: 'Accurate property value assessments',
          },
        },
      ],
    },
  };
}

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate Expert',
    description: 'Premier Good To Know REALTOR® Dr. Janet Duffy provides expert Las Vegas real estate services. Buy, sell, or invest in Las Vegas properties with personalized guidance and local market expertise.',
    keywords: ['Las Vegas real estate', 'Dr. Janet Duffy', 'Premier Good To Know REALTOR', 'Las Vegas realtor', 'Las Vegas homes for sale'],
  },
  about: {
    title: 'About Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate Expert',
    description: 'Learn about Dr. Janet Duffy, Premier Good To Know REALTOR® with over 15 years of Las Vegas real estate experience. Expert guidance for buying and selling properties.',
    keywords: ['Dr. Janet Duffy biography', 'Las Vegas real estate agent', 'Premier Good To Know REALTOR', 'Las Vegas realtor experience'],
  },
  contact: {
    title: 'Contact Dr. Janet Duffy - Premier Good To Know REALTOR® | Las Vegas Real Estate',
    description: 'Contact Premier Good To Know REALTOR® Dr. Janet Duffy for expert Las Vegas real estate services. Call (702) 222-1964 for personalized assistance.',
    keywords: ['contact Dr. Janet Duffy', 'Las Vegas real estate contact', 'Premier Good To Know REALTOR contact', 'Las Vegas realtor phone'],
  },
  services: {
    title: 'Real Estate Services | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Comprehensive Las Vegas real estate services by Premier Good To Know REALTOR® Dr. Janet Duffy. Buying, selling, luxury properties, and investment services.',
    keywords: ['Las Vegas real estate services', 'home buying Las Vegas', 'home selling Las Vegas', 'luxury real estate Las Vegas'],
  },
  buying: {
    title: 'Buying a Home in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Expert guidance for buying a home in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. First-time buyer assistance and market insights.',
    keywords: ['buying home Las Vegas', 'first time home buyer Las Vegas', 'Las Vegas homes for sale', 'Las Vegas real estate buying'],
  },
  selling: {
    title: 'Selling Your Home in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Maximize your home\'s value when selling in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Expert pricing and marketing strategies.',
    keywords: ['selling home Las Vegas', 'home value Las Vegas', 'Las Vegas home selling tips', 'Las Vegas real estate selling'],
  },
  luxury: {
    title: 'Luxury Real Estate in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Premium luxury real estate services in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Summerlin, Henderson, and exclusive neighborhoods.',
    keywords: ['luxury homes Las Vegas', 'Summerlin luxury homes', 'Henderson luxury homes', 'Las Vegas luxury real estate'],
  },
  investing: {
    title: 'Real Estate Investment in Las Vegas | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Strategic real estate investment opportunities in Las Vegas with Premier Good To Know REALTOR® Dr. Janet Duffy. Rental properties and investment guidance.',
    keywords: ['Las Vegas real estate investment', 'rental properties Las Vegas', 'investment properties Las Vegas', 'Las Vegas real estate investing'],
  },
  blog: {
    title: 'Las Vegas Real Estate Blog | Dr. Janet Duffy - Premier Good To Know REALTOR®',
    description: 'Latest Las Vegas real estate insights, market trends, and expert advice from Premier Good To Know REALTOR® Dr. Janet Duffy.',
    keywords: ['Las Vegas real estate blog', 'Las Vegas market trends', 'real estate news Las Vegas', 'Las Vegas property insights'],
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
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/listings?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl
    }
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

// 2026 AEO Enhancement: Person schema with E-E-A-T signals
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    alternateName: 'Janet Duffy',
    givenName: 'Janet',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'Real Estate Agent',
    description: 'Top 1% Las Vegas real estate agent with over 20 years of experience, specializing in luxury properties and personalized client service. $127M+ in career sales volume.',
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.agent}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_CONFIG.address.city,
      addressRegion: SEO_CONFIG.address.state,
      addressCountry: SEO_CONFIG.address.country,
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Premier Properties',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Real Estate Agent',
      occupationalCategory: {
        '@type': 'CategoryCode',
        inCodeSet: {
          '@type': 'CategoryCodeSet',
          name: 'O*NET-SOC',
          dateModified: '2019',
          url: 'https://www.onetonline.org/',
        },
        codeValue: '41-9021.00',
        name: 'Real Estate Brokers',
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'base',
        currency: 'USD',
        percentile10: 50000,
        percentile25: 75000,
        median: 150000,
        percentile75: 250000,
        percentile90: 500000,
      },
      responsibilities: 'Provide expert real estate services including property buying, selling, market analysis, and client consultation for Las Vegas area properties.',
    },
    knowsAbout: [
      'Las Vegas Real Estate Market',
      'Luxury Home Sales',
      'Property Investment',
      'Real Estate Negotiation',
      'Market Analysis',
      'Client Relations',
      'Property Valuation',
      'Las Vegas Neighborhoods',
    ],
    award: [
      'Top 1% of Las Vegas Realtors',
      'Berkshire Hathaway Circle of Excellence',
      '5-Star Client Rating Average',
    ],
    sameAs: Object.values(SEO_CONFIG.social),
  };
}

// 2026 GEO Enhancement: Place schema for neighborhoods
export function generatePlaceSchema(places: Array<{
  name: string;
  description: string;
  address?: string;
  geo?: { latitude: number; longitude: number };
  containedInPlace?: string;
}>) {
  return places.map(place => ({
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: place.name,
    description: place.description,
    address: place.address ? {
      '@type': 'PostalAddress',
      addressLocality: place.address,
      addressRegion: 'Nevada',
      addressCountry: 'US',
    } : undefined,
    geo: place.geo ? {
      '@type': 'GeoCoordinates',
      latitude: place.geo.latitude,
      longitude: place.geo.longitude,
    } : undefined,
    containedInPlace: place.containedInPlace ? {
      '@type': 'City',
      name: place.containedInPlace,
      addressRegion: 'Nevada',
    } : undefined,
  }));
}

// 2026 AEO Enhancement: Article schema for blog posts with E-E-A-T
export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Dr. Jan Duffy',
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: `${SEO_CONFIG.siteUrl}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: SEO_CONFIG.siteUrl,
      jobTitle: 'Real Estate Agent',
      worksFor: {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices',
      },
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
      '@id': `${SEO_CONFIG.siteUrl}${url}`,
    },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };
}

// 2026 Real Estate Enhancement: Event schema for open houses
export function generateOpenHouseSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: string;
    geo?: { latitude: number; longitude: number };
  };
  image?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      geo: location.geo ? {
        '@type': 'GeoCoordinates',
        latitude: location.geo.latitude,
        longitude: location.geo.longitude,
      } : undefined,
    },
    image: image ? `${SEO_CONFIG.siteUrl}${image}` : undefined,
    url: url ? `${SEO_CONFIG.siteUrl}${url}` : undefined,
    organizer: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl,
    },
  };
}