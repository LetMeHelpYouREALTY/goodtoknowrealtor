import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import Image from 'next/image';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Link from 'next/link';
import { SimpleSearch } from '@/components/PropertySearch/SimpleSearch';
import {
  generatePrimaryAreaMetadata,
  PRIMARY_AREA_DESCRIPTIONS,
} from '@/lib/primary-areas';

export const metadata: Metadata = generatePrimaryAreaMetadata({
  areaName: 'Green Valley',
  slug: 'green-valley',
  description: PRIMARY_AREA_DESCRIPTIONS['green-valley'],
  keywords: [
    'Green Valley real estate',
    'Green Valley homes for sale',
    'Henderson real estate',
    'golf course homes',
    'Dr. Jan Duffy',
  ],
  ogImage: '/images/green-valley-real-estate-og.jpg',
});

export default function GreenValleyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title='Green Valley Real Estate'
        subtitle="Green Valley pairs golf-front estates with District at Green Valley Ranch retail—Dr. Jan Duffy aligns MLS tours with your square-footage and commute targets along the 215 Beltway. 702-500-1955."
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      >
        <a 
          href='/listings#advanced-search' 
          className='bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
        >
          View Green Valley Listings
        </a>
        <a 
          href='/contact' 
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
        >
          Get Free Consultation
        </a>
      </PageHero>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              How do you search Green Valley MLS listings?
            </h2>
            <p className="text-xl text-gray-600 mb-10 text-center">
              Filter Green Valley and Green Valley Ranch homes by price, beds, baths, and property type.
            </p>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      {/* About Green Valley */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What homes are for sale in Green Valley?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Green Valley and Green Valley Ranch include golf-course lots, single-story and two-story resale homes, and guard-gated addresses with mountain sightlines. Dr. Jan Duffy helps you weigh HOA fees, interior square footage, and drive times to the 215 and I-515 corridors.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities buyers compare</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Golf at Legacy and DragonRidge Country Club communities</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">The District at Green Valley Ranch dining and retail</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Trails, clubhouses, and recreation centers by subdivision</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Luxury estates with golf and mountain views</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                Browse{' '}
                <Link href="/areas/henderson" className="text-blue-600 font-semibold hover:underline">
                  Henderson area homes
                </Link>{' '}
                or explore{' '}
                <Link href="/areas/green-valley-ranch" className="text-blue-600 font-semibold hover:underline">
                  Green Valley Ranch
                </Link>
                .
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Green Valley luxury homes"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What are Green Valley price trends right now?
            </h2>
            <p className="text-xl text-gray-600">
              Snapshot stats below—contact Dr. Jan Duffy for subdivision-level comps and list-to-sale analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$750K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">48</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">List to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to tour Green Valley listings?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dr. Jan Duffy schedules private showings and negotiates across Green Valley, Green Valley Ranch, and greater Henderson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:702-500-1955" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
