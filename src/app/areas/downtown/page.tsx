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
  areaName: 'Downtown Las Vegas',
  slug: 'downtown',
  description: PRIMARY_AREA_DESCRIPTIONS.downtown,
  keywords: [
    'Downtown Las Vegas real estate',
    'Downtown Las Vegas condos',
    'Las Vegas urban living',
    'Dr. Jan Duffy',
  ],
  ogImage: '/images/downtown-las-vegas-real-estate-og.jpg',
});

export default function DowntownPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title='Downtown Las Vegas Real Estate'
        subtitle="Downtown Las Vegas condos and lofts put Fremont Street, the Arts District, and employment centers within a short commute—Dr. Jan Duffy compares HOA reserves, square footage, and parking with every tour. 702-500-1955."
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      >
        <a 
          href='/listings#advanced-search' 
          className='bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg'
        >
          View Downtown Listings
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
              How do you search Downtown Las Vegas MLS listings?
            </h2>
            <p className="text-xl text-gray-600 mb-10 text-center">
              Filter high-rise condos, loft conversions, and townhomes by price and square footage.
            </p>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      {/* About Downtown */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What urban homes are listed in Downtown Las Vegas?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Inventory spans high-rise condos, adaptive-reuse lofts, and townhomes near Fremont Street and the Arts District. Dr. Jan Duffy reviews HOA budgets, monthly fees, deeded parking, and interior square footage so you can compare buildings—not broad lifestyle generalizations.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features buyers evaluate</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Luxury high-rise condos and modern lofts</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Walking distance to Fremont Street and entertainment</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Premium amenities and concierge services</span>
                </li>
                <li className="flex items-center">
                  <IconSymbol symbol='✓' className="text-green-500 mr-3 h-5 w-5" ariaLabel='Highlight' />
                  <span className="text-gray-700">Stunning city and mountain views</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Downtown Las Vegas luxury condos"
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
              How competitive is the Downtown condo market?
            </h2>
            <p className="text-xl text-gray-600">
              Review median pricing and days on market below, then request building-level comps from Dr. Jan Duffy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$380K</div>
              <div className="text-gray-600">Median Condo Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">42</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-gray-600">List to Sale Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Who guides Downtown Las Vegas buyers and sellers?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dr. Jan Duffy negotiates urban listings with Berkshire Hathaway HomeServices Nevada Properties and coordinates inspections in historic and high-rise buildings.
          </p>
          <p className="text-lg mb-8">
            <Link href="/listings" className="underline hover:text-blue-100">
              Browse all Las Vegas MLS listings
            </Link>
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
