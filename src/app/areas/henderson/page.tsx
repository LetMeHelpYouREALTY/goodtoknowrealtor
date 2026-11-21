import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import Image from 'next/image';
import { SimpleSearch } from '@/components/PropertySearch/SimpleSearch';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {
  generatePrimaryAreaMetadata,
  PRIMARY_AREA_DESCRIPTIONS,
} from '@/lib/primary-areas';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-simple-search': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

export const metadata: Metadata = generatePrimaryAreaMetadata({
  areaName: 'Henderson',
  slug: 'henderson',
  description: PRIMARY_AREA_DESCRIPTIONS.henderson,
  keywords: [
    'Henderson real estate',
    'Henderson homes for sale',
    'Henderson luxury homes',
    'Nevada real estate',
    'Dr. Jan Duffy',
  ],
  ogImage: '/images/henderson-real-estate-og.jpg',
});

export default function HendersonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title='Henderson Real Estate'
        subtitle="Henderson spans master-planned villages, lakefront enclaves, and executive housing south of the Strip—Dr. Jan Duffy aligns MLS search with your commute and amenity priorities. 702-500-1955."
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      >
        <a 
          href='/listings#advanced-search' 
          className='bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
        >
          View Henderson Listings
        </a>
        <a 
          href='/contact' 
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
        >
          Get Free Consultation
        </a>
      </PageHero>

      {/* Property Search */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How do you search Henderson MLS listings?
              </h2>
              <p className="text-xl text-gray-600">
                Narrow Henderson and Green Valley inventory by price, square footage, beds, and baths with the MLS search below.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      {/* About Henderson */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What housing is available across Henderson?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Henderson neighborhoods—from Inspirada and Anthem to Lake Las Vegas and MacDonald Highlands—offer varied square footage, HOA profiles, and recreation access. Dr. Jan Duffy compares commute times on I-515, Saint Rose Parkway, and Eastern Avenue with the amenities you want onsite.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Henderson market highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Master-planned communities such as Anthem, Cadence, and Whitney Ranch</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Parks, trails, and lakefront recreation at Lake Las Vegas</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Water Street District employment and retail corridors</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Resale, new construction, and luxury estates across price tiers</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Henderson family homes"
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
              How is the Henderson market performing now?
            </h2>
            <p className="text-xl text-gray-600">
              Track median price, days on market, and active listing counts below—then request comps for your Henderson address.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$520K</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">38</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">285</div>
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
            Who represents buyers and sellers in Henderson?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dr. Jan Duffy, Good To Know REALTOR®, negotiates across Henderson villages with Berkshire Hathaway HomeServices Nevada Properties representation.
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
