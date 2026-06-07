/**
 * Enhanced SEO, GEO, and AEO helper functions for 2025-2026
 * Based on latest best practices for AI-driven search and geographic optimization
 */

/**
 * Generate Organization schema with enhanced properties for AEO
 * AI engines prioritize organizations with complete, verified information
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.goodtoknowrealtor.com#organization',
    name: 'Dr. Jan Duffy Real Estate',
    alternateName: 'Good To Know Realtor',
    url: 'https://www.goodtoknowrealtor.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.goodtoknowrealtor.com/images/bhhs/logo.svg',
      width: 250,
      height: 60,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.goodtoknowrealtor.com/images/dr-janet-duffy-og.jpg',
      width: 1200,
      height: 630,
    },
    description: 'Premier Las Vegas real estate services by Dr. Jan Duffy, Top 1% agent with $127M+ in sales. Specializing in luxury homes, investment properties, and first-time buyers.',
    telephone: '(702) 222-1964',
    email: 'info@drjanduffy.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1699,
        longitude: -115.1398,
      },
      geoRadius: '50000', // 50km radius
    },
    slogan: 'Your Trusted Las Vegas Real Estate Expert',
    foundingDate: '2004',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 1,
    },
    award: [
      'Top 1% of Las Vegas Realtors 2023',
      'Top 1% of Las Vegas Realtors 2024',
      'Berkshire Hathaway Circle of Excellence',
      '5-Star Client Rating Average',
    ],
  };
}

/**
 * Generate RealEstateListing schema for individual properties
 * Essential for real estate SEO and AEO in 2025-2026
 */
export function generateRealEstateListingSchema(listing: {
  name: string;
  description: string;
  price: number;
  priceCurrency: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  images?: string[];
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  yearBuilt?: number;
  propertyType: string;
  listingStatus: 'Active' | 'Pending' | 'Sold';
  datePosted?: string;
  mlsNumber?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `${listing.mlsNumber ? `mls-${listing.mlsNumber}` : listing.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: listing.name,
    description: listing.description,
    url: listing.mlsNumber ? `https://www.goodtoknowrealtor.com/listings/${listing.mlsNumber}` : undefined,
    datePosted: listing.datePosted || new Date().toISOString(),
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: listing.priceCurrency,
      availability: listing.listingStatus === 'Active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      validFrom: listing.datePosted || new Date().toISOString(),
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '(702) 222-1964',
        email: 'info@drjanduffy.com',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address.streetAddress,
      addressLocality: listing.address.addressLocality,
      addressRegion: listing.address.addressRegion,
      postalCode: listing.address.postalCode,
      addressCountry: 'US',
    },
    ...(listing.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: listing.geo.latitude,
        longitude: listing.geo.longitude,
      },
    }),
    ...(listing.images && listing.images.length > 0 && {
      image: listing.images.map(url => ({
        '@type': 'ImageObject',
        url,
        width: 1200,
        height: 800,
      })),
    }),
    ...(listing.bedrooms && {
      numberOfRooms: listing.bedrooms,
      numberOfBedrooms: listing.bedrooms,
    }),
    ...(listing.bathrooms && {
      numberOfBathroomsTotal: listing.bathrooms,
    }),
    ...(listing.squareFeet && {
      floorSize: {
        '@type': 'QuantitativeValue',
        value: listing.squareFeet,
        unitCode: 'SQF',
      },
    }),
    ...(listing.yearBuilt && {
      yearBuilt: listing.yearBuilt,
    }),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Property Type',
        value: listing.propertyType,
      },
      {
        '@type': 'PropertyValue',
        name: 'Listing Status',
        value: listing.listingStatus,
      },
      ...(listing.mlsNumber ? [{
        '@type': 'PropertyValue',
        name: 'MLS Number',
        value: listing.mlsNumber,
      }] : []),
    ],
  };
}

/**
 * Generate enhanced LocalBusiness schema with GEO optimization
 * Critical for local search visibility in 2025-2026
 */
export function generateLocalBusinessSchemaEnhanced() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.goodtoknowrealtor.com#localbusiness',
    name: 'Dr. Jan Duffy Real Estate',
    image: {
      '@type': 'ImageObject',
      url: 'https://www.goodtoknowrealtor.com/images/dr-janet-duffy-profile.jpg',
      width: 800,
      height: 800,
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.goodtoknowrealtor.com/images/bhhs/logo.svg',
      width: 250,
      height: 60,
    },
    '@id': 'https://www.goodtoknowrealtor.com',
    url: 'https://www.goodtoknowrealtor.com',
    telephone: '(702) 222-1964',
    email: 'info@drjanduffy.com',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Las Vegas',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    // Enhanced for GEO
    areaServed: [
      'Las Vegas, NV',
      'Summerlin, NV',
      'Henderson, NV',
      'North Las Vegas, NV',
      'Green Valley, NV',
      'Downtown Las Vegas, NV',
    ],
    // Added for AEO
    slogan: 'Top 1% Las Vegas Real Estate Agent - $127M+ in Sales',
    // Service offerings for better categorization
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Services',
            description: 'Expert guidance for purchasing homes in Las Vegas, Nevada',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Services',
            description: 'Professional home selling with expert market analysis and pricing strategy',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Real Estate',
            description: 'Specialized luxury property services for high-end homes',
          },
        },
      ],
    },
    // AEO enhancement: aggregate rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate QA Page schema for AEO optimization
 * AI engines prioritize Q&A format for direct answers
 */
export function generateQAPageSchema(questions: Array<{
  question: string;
  answer: string;
  upvoteCount?: number;
  dateCreated?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: questions.map((qa, index) => ({
      '@type': 'Question',
      '@id': `${SEO_CONFIG.siteUrl}#question-${index + 1}`,
      name: qa.question,
      text: qa.question,
      answerCount: 1,
      upvoteCount: qa.upvoteCount || 10,
      dateCreated: qa.dateCreated || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'Client',
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
        dateCreated: qa.dateCreated || new Date().toISOString(),
        upvoteCount: qa.upvoteCount || 10,
        url: `${SEO_CONFIG.siteUrl}#answer-${index + 1}`,
        author: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy',
          jobTitle: 'Licensed Real Estate Agent',
        },
      },
    })),
  };
}

/**
 * Import SEO_CONFIG from the main seo.ts file
 */
import { SEO_CONFIG } from './seo';
