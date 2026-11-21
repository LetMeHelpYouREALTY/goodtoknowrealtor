import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import Image from 'next/image';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SimpleSearch } from '@/components/PropertySearch/SimpleSearch';
import {
  generatePrimaryAreaMetadata,
  generatePrimaryAreaSchemas,
  PRIMARY_AREA_DESCRIPTIONS,
} from '@/lib/primary-areas';

const AREA_NAME = 'North Las Vegas';
const SLUG = 'north-las-vegas' as const;
const DESCRIPTION = PRIMARY_AREA_DESCRIPTIONS['north-las-vegas'];

export const metadata: Metadata = generatePrimaryAreaMetadata({
  areaName: AREA_NAME,
  slug: SLUG,
  description: DESCRIPTION,
  keywords: [
    'North Las Vegas real estate',
    'North Las Vegas homes for sale',
    'Nevada real estate',
    'new construction North Las Vegas',
    'Dr. Jan Duffy',
  ],
  ogImage: '/images/north-las-vegas-real-estate-og.jpg',
});

export default function NorthLasVegasPage() {
  const schemas = generatePrimaryAreaSchemas({
    areaName: AREA_NAME,
    slug: SLUG,
    description: DESCRIPTION,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPage) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <PageHero
          title="North Las Vegas Real Estate"
          subtitle="North Las Vegas offers new-build inventory in Aliante and Skye Canyon plus resale along the CC 215 corridor—Dr. Jan Duffy compares square footage, builder incentives, and commute routes. 702-500-1955."
          gradientFromClassName="from-blue-900"
          gradientToClassName="to-blue-800"
        >
          <Link
            href="/listings#advanced-search"
            className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            View North Las Vegas Listings
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200"
          >
            Get Free Consultation
          </Link>
        </PageHero>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                How do you search North Las Vegas MLS listings?
              </h2>
              <p className="text-xl text-gray-600 mb-10 text-center">
                Filter North Las Vegas, Aliante, and Skye Canyon homes by price, beds, and property type.
              </p>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <SimpleSearch />
              </div>
            </div>
          </div>
        </section>

        {/* About North Las Vegas */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What housing is available in North Las Vegas?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  North Las Vegas combines resale neighborhoods with builder inventory in Aliante, Skye Canyon, and Centennial Hills. Dr. Jan Duffy tracks price-per-square-foot, lot premiums, and drive times to the Strip, Nellis, and logistics hubs along I-15 and the 215 Beltway.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">North Las Vegas highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <IconSymbol symbol="✓" className="text-green-500 mr-3 h-5 w-5" ariaLabel="Benefit" />
                    <span className="text-gray-700">Master-planned communities including Aliante and Skye Canyon</span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol symbol="✓" className="text-green-500 mr-3 h-5 w-5" ariaLabel="Benefit" />
                    <span className="text-gray-700">New construction and resale across varied price points</span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol symbol="✓" className="text-green-500 mr-3 h-5 w-5" ariaLabel="Benefit" />
                    <span className="text-gray-700">Commute access via CC 215, US-95, and Las Vegas Blvd</span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol symbol="✓" className="text-green-500 mr-3 h-5 w-5" ariaLabel="Benefit" />
                    <span className="text-gray-700">Investment and owner-occupied opportunities near Apex and Craig Road employment</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600">
                  Browse{' '}
                  <Link href="/communities" className="text-blue-600 font-semibold hover:underline">
                    all Las Vegas communities
                  </Link>{' '}
                  or read the latest{' '}
                  <Link href="/market-insights" className="text-blue-600 font-semibold hover:underline">
                    North Las Vegas market insights
                  </Link>
                  .
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="North Las Vegas new construction homes for sale"
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
                How is North Las Vegas pricing trending?
              </h2>
              <p className="text-xl text-gray-600">
                Use the snapshot metrics below and request builder-incentive or resale comps from Dr. Jan Duffy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$420K</div>
                <div className="text-gray-600">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">32</div>
                <div className="text-gray-600">Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">195</div>
                <div className="text-gray-600">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                <div className="text-gray-600">List to Sale Price</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Who helps you buy or sell in North Las Vegas?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dr. Jan Duffy, Good To Know REALTOR®, negotiates North Las Vegas resale and new-build contracts with Berkshire Hathaway HomeServices Nevada Properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-500-1955"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Call (702) 500-1955
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
