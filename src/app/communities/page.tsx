import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHero } from '@/components/ui/PageHero';
import { EXPERT_NEIGHBORHOODS, nameToSlug } from '@/data/neighborhoods';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas & Henderson Communities | Dr. Jan Duffy',
  description:
    'Browse 117+ Las Vegas Valley neighborhoods with Dr. Jan Duffy, Good To Know REALTOR®. Luxury and resale homes in Summerlin, Henderson, Green Valley, Downtown, and North Las Vegas. MLS search. 702-500-1955.',
  keywords: [
    'Las Vegas communities',
    'Las Vegas neighborhoods',
    'Summerlin',
    'Henderson',
    'North Las Vegas',
    'luxury homes Las Vegas',
    'Dr. Jan Duffy',
  ],
  url: '/communities',
  image: '/images/las-vegas-communities-og.jpg',
});

export const revalidate = 86400;

export default function CommunitiesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Communities', url: '/communities' },
  ]);

  const communities = [
    {
      id: 'las-vegas',
      name: 'Las Vegas',
      href: '/listings',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Urban condos, older subdivisions, and infill lots with Strip and freeway commute options.',
      avgPrice: '$450,000',
      propertiesCount: 1250,
      highlights: ['Fremont corridor access', 'Arts District lofts', 'Mixed square-footage housing stock']
    },
    {
      id: 'summerlin',
      name: 'Summerlin',
      href: '/areas/summerlin',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '22,000-acre master plan with golf villages, custom estates, and Red Rock views.',
      avgPrice: '$750,000',
      propertiesCount: 890,
      highlights: ['Red Rock Canyon views', 'TPC and village golf', 'Downtown Summerlin retail']
    },
    {
      id: 'henderson',
      name: 'Henderson',
      href: '/areas/henderson',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Master-planned villages, lakefront homes, and executive housing south of the Strip.',
      avgPrice: '$525,000',
      propertiesCount: 1100,
      highlights: ['Lake Mead recreation', 'Water Street employment', 'I-515 commute links']
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas',
      href: '/areas/north-las-vegas',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Builder inventory in Aliante and Skye Canyon plus resale along the 215 Beltway.',
      avgPrice: '$350,000',
      propertiesCount: 750,
      highlights: ['Aliante & Skye Canyon', 'CC 215 access', 'Nellis-adjacent employment']
    },
    {
      id: 'downtown',
      name: 'Downtown Las Vegas',
      href: '/areas/downtown',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-rise and mid-rise condos with Fremont Street and Arts District walkability.',
      avgPrice: '$400,000',
      propertiesCount: 450,
      highlights: ['HOA-controlled amenities', 'Historic loft conversions', 'Fremont entertainment']
    },
    {
      id: 'green-valley',
      name: 'Green Valley',
      href: '/areas/green-valley',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Established Henderson addresses with golf access and District at Green Valley Ranch retail.',
      avgPrice: '$600,000',
      propertiesCount: 680,
      highlights: ['Golf-course lots', 'Mature landscaping', '215 Beltway commute']
    }
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <div className='min-h-screen bg-white'>
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container py-4">
            <Breadcrumbs />
          </div>
        </div>

        {/* Hero Section */}
        <PageHero
          title="Las Vegas Valley Communities"
          subtitle="Dr. Jan Duffy maps 117 expert neighborhoods across Summerlin, Henderson, North Las Vegas, and Downtown—compare square footage, amenities, and commute time before you tour. Call/text 702-500-1955."
        />

        {/* Communities Grid */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4 text-center'>
                Which major Las Vegas market fits your search?
              </h2>
              <p className='text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto'>
                Start with a primary corridor—each links to luxury and resale MLS inventory, market snapshots, and hyperlocal guides from Dr. Jan Duffy.
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {communities.map((community) => (
                  <Link
                    key={community.id}
                    href={community.href}
                    className='group block card overflow-hidden hover:-translate-y-1'
                  >
                    <div className='relative h-48'>
                      <Image
                        src={community.image}
                        alt={community.name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300'></div>
                      <div className='absolute top-4 left-4'>
                        <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                          {community.propertiesCount} Properties
                        </span>
                      </div>
                    </div>
                    
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                        {community.name}
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        {community.description}
                      </p>
                      
                      <div className='mb-4'>
                        <div className='text-2xl font-bold text-blue-600 mb-2'>
                          {community.avgPrice}
                        </div>
                        <div className='text-sm text-gray-500'>
                          Average Home Price
                        </div>
                      </div>
                      
                      <div className='space-y-1'>
                        <h3 className='text-sm font-medium text-gray-900'>Amenities & commute:</h3>
                        {community.highlights.map((highlight, index) => (
                          <div key={index} className='text-sm text-gray-600'>
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All expert neighborhoods (canonical list from src/data/neighborhoods.ts) */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4 text-center'>
                Where can you browse all 117 expert neighborhoods?
              </h2>
              <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto'>
                Each link opens a hyperlocal guide with question-led market copy, MLS search, and RealScout office listings for that exact community name.
              </p>
              <div className='flex flex-wrap justify-center gap-x-4 gap-y-2'>
                {EXPERT_NEIGHBORHOODS.map((name) => (
                  <Link
                    key={name}
                    href={`/areas/${nameToSlug(name)}`}
                    className='text-blue-600 hover:text-blue-800 hover:underline font-medium'
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                What do valley-wide market stats look like today?
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                Median pricing, days on market, and list-to-sale ratios shift by corridor—use these benchmarks, then request neighborhood-level comps from Dr. Jan Duffy.
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>$525K</div>
                  <div className='text-gray-600'>Median Home Price</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>22 Days</div>
                  <div className='text-gray-600'>Average Days on Market</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>98%</div>
                  <div className='text-gray-600'>List to Sale Price Ratio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              How do you start a Las Vegas neighborhood search?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Call or text Dr. Jan Duffy at 702-500-1955 for MLS alerts, showing plans, and pricing strategy tailored to your target community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/listings'
                className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
              >
                Search MLS Listings
              </Link>
              <Link
                href='tel:702-500-1955'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
              >
                Call (702) 500-1955
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
