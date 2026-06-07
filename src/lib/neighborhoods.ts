// 2026 GEO Optimization: Las Vegas Neighborhood Data
// Hyperlocal content for geographic SEO and local search optimization

export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  containedInPlace: string;
  highlights: string[];
  averageHomePrice: string;
  propertyTypes: string[];
  schoolRating?: string;
  imageUrl?: string;
}

export const LAS_VEGAS_NEIGHBORHOODS: Neighborhood[] = [
  {
    name: 'Summerlin',
    slug: 'summerlin',
    description: 'Master-planned luxury community in west Las Vegas known for upscale homes, golf courses, and Red Rock Canyon proximity.',
    fullDescription: 'Summerlin is Las Vegas\' premier master-planned community, offering upscale living with world-class amenities, top-rated schools, and stunning Red Rock Canyon views. Home to The Ridges, Tournament Hills, and The Trails, Summerlin features luxury homes ranging from $500K to $10M+.',
    geo: {
      latitude: 36.1699,
      longitude: -115.3267,
    },
    containedInPlace: 'Las Vegas',
    highlights: [
      'Red Rock Canyon National Conservation Area',
      'Downtown Summerlin shopping and dining',
      'Championship golf courses',
      'Top-rated Clark County schools',
      'Award-winning parks and trails',
    ],
    averageHomePrice: '$650,000 - $2,000,000+',
    propertyTypes: ['Single Family', 'Luxury Estates', 'Condos', 'Townhomes'],
    schoolRating: 'A+',
    imageUrl: '/images/neighborhoods/summerlin.jpg',
  },
  {
    name: 'Henderson',
    slug: 'henderson',
    description: 'Family-friendly city southeast of Las Vegas with excellent schools, parks, and master-planned communities like Anthem and Green Valley.',
    fullDescription: 'Henderson is Nevada\'s second-largest city and one of the safest in the nation. Known for master-planned communities like Anthem, Green Valley Ranch, and MacDonald Ranch, Henderson offers family-friendly living with excellent schools, parks, and a strong sense of community.',
    geo: {
      latitude: 36.0395,
      longitude: -114.9817,
    },
    containedInPlace: 'Henderson',
    highlights: [
      'Anthem and Green Valley Ranch communities',
      'Lake Las Vegas resort living',
      'Top-rated schools',
      'Low crime rates',
      'Family-friendly parks and recreation',
    ],
    averageHomePrice: '$450,000 - $1,500,000',
    propertyTypes: ['Single Family', 'Townhomes', 'Condos', 'Luxury Homes'],
    schoolRating: 'A',
    imageUrl: '/images/neighborhoods/henderson.jpg',
  },
  {
    name: 'Lake Las Vegas',
    slug: 'lake-las-vegas',
    description: 'Exclusive resort community with a 320-acre lake, luxury homes, golf courses, and Mediterranean-inspired architecture.',
    fullDescription: 'Lake Las Vegas is an exclusive resort community in Henderson featuring a stunning 320-acre lake surrounded by luxury homes, championship golf courses, and resort amenities. This Mediterranean-inspired oasis offers waterfront living just 20 minutes from the Las Vegas Strip.',
    geo: {
      latitude: 36.0489,
      longitude: -114.8530,
    },
    containedInPlace: 'Henderson',
    highlights: [
      '320-acre private lake',
      'Luxury waterfront homes',
      'Championship golf courses',
      'Resort hotels and spas',
      'Reflection Bay and South Shore communities',
    ],
    averageHomePrice: '$800,000 - $5,000,000+',
    propertyTypes: ['Luxury Waterfront', 'Golf Course Homes', 'Condos', 'Custom Estates'],
    schoolRating: 'A',
    imageUrl: '/images/neighborhoods/lake-las-vegas.jpg',
  },
  {
    name: 'The Ridges',
    slug: 'the-ridges',
    description: 'Ultra-luxury guard-gated community in Summerlin featuring multi-million dollar estates with Red Rock Canyon views.',
    fullDescription: 'The Ridges is Summerlin\'s most exclusive guard-gated community, featuring stunning custom estates and luxury homes with panoramic Red Rock Canyon views. This ultra-luxury enclave offers privacy, prestige, and world-class amenities for discerning buyers.',
    geo: {
      latitude: 36.1542,
      longitude: -115.3458,
    },
    containedInPlace: 'Summerlin',
    highlights: [
      'Guard-gated 24/7 security',
      'Custom luxury estates',
      'Bear\'s Best Las Vegas Golf Club',
      'Panoramic Red Rock views',
      'Private community amenities',
    ],
    averageHomePrice: '$2,000,000 - $10,000,000+',
    propertyTypes: ['Custom Estates', 'Luxury Homes', 'Golf Course Properties'],
    schoolRating: 'A+',
    imageUrl: '/images/neighborhoods/the-ridges.jpg',
  },
  {
    name: 'Green Valley Ranch',
    slug: 'green-valley-ranch',
    description: 'Upscale master-planned community in Henderson with resort-style living, shopping, dining, and entertainment.',
    fullDescription: 'Green Valley Ranch is an upscale master-planned community in Henderson featuring resort-style amenities, luxury homes, and the Green Valley Ranch Resort and Casino. This prestigious neighborhood offers sophisticated living with world-class shopping, dining, and entertainment.',
    geo: {
      latitude: 36.0641,
      longitude: -115.0381,
    },
    containedInPlace: 'Henderson',
    highlights: [
      'Green Valley Ranch Resort and Casino',
      'The District at Green Valley shopping',
      'Resort-style pools and amenities',
      'Top-rated schools',
      'Parks and walking trails',
    ],
    averageHomePrice: '$500,000 - $2,000,000',
    propertyTypes: ['Single Family', 'Luxury Homes', 'Townhomes', 'Condos'],
    schoolRating: 'A',
    imageUrl: '/images/neighborhoods/green-valley-ranch.jpg',
  },
  {
    name: 'Downtown Las Vegas',
    slug: 'downtown-las-vegas',
    description: 'Historic urban core experiencing renaissance with luxury high-rises, arts district, and vibrant entertainment.',
    fullDescription: 'Downtown Las Vegas is experiencing a urban renaissance with luxury high-rise condos, the Arts District, Fremont East Entertainment District, and Container Park. This historic area offers city living with walkable neighborhoods, cultural attractions, and modern amenities.',
    geo: {
      latitude: 36.1699,
      longitude: -115.1398,
    },
    containedInPlace: 'Las Vegas',
    highlights: [
      'Fremont Street Experience',
      'Arts District galleries and boutiques',
      'Luxury high-rise condos',
      'Container Park and dining',
      'Historic downtown revitalization',
    ],
    averageHomePrice: '$300,000 - $1,500,000',
    propertyTypes: ['High-Rise Condos', 'Lofts', 'Urban Homes', 'Luxury Penthouses'],
    schoolRating: 'B+',
    imageUrl: '/images/neighborhoods/downtown-las-vegas.jpg',
  },
  {
    name: 'North Las Vegas',
    slug: 'north-las-vegas',
    description: 'Affordable family-friendly neighborhoods with newer construction, parks, and growing amenities.',
    fullDescription: 'North Las Vegas offers affordable family-friendly living with newer construction homes, modern amenities, and convenient access to I-15 and the Las Vegas Valley. This growing area features master-planned communities like Eldorado and Aliante with excellent value for homebuyers.',
    geo: {
      latitude: 36.1989,
      longitude: -115.1175,
    },
    containedInPlace: 'North Las Vegas',
    highlights: [
      'Affordable home prices',
      'Newer construction',
      'Aliante master-planned community',
      'Growing retail and dining',
      'Family-friendly parks',
    ],
    averageHomePrice: '$350,000 - $600,000',
    propertyTypes: ['Single Family', 'Townhomes', 'New Construction'],
    schoolRating: 'B',
    imageUrl: '/images/neighborhoods/north-las-vegas.jpg',
  },
];

// Generate neighborhood-specific SEO content (AEO optimized)
export function generateNeighborhoodQA(neighborhood: Neighborhood) {
  return [
    {
      question: `What is ${neighborhood.name} known for?`,
      answer: neighborhood.fullDescription,
      dateCreated: '2026-01-01',
    },
    {
      question: `What is the average home price in ${neighborhood.name}?`,
      answer: `The average home price in ${neighborhood.name} ranges from ${neighborhood.averageHomePrice}. This Las Vegas neighborhood offers ${neighborhood.propertyTypes.join(', ')} properties with varying price points to suit different buyers.`,
      dateCreated: '2026-01-01',
    },
    {
      question: `What are the best features of living in ${neighborhood.name}?`,
      answer: `Living in ${neighborhood.name} offers exceptional benefits including: ${neighborhood.highlights.join('; ')}. Residents enjoy ${neighborhood.description}`,
      dateCreated: '2026-01-01',
    },
    {
      question: `How are the schools in ${neighborhood.name}?`,
      answer: neighborhood.schoolRating
        ? `Schools in ${neighborhood.name} are rated ${neighborhood.schoolRating}, making it an excellent choice for families. The area is served by top-rated Clark County School District schools with strong academic programs.`
        : `${neighborhood.name} is served by Clark County School District with various educational options available for families.`,
      dateCreated: '2026-01-01',
    },
  ];
}

// Export for use in schema generation
export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return LAS_VEGAS_NEIGHBORHOODS.find(n => n.slug === slug);
}

export function getAllNeighborhoods(): Neighborhood[] {
  return LAS_VEGAS_NEIGHBORHOODS;
}
