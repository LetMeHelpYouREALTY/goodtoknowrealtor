import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AssessmentCTA } from '@/components/blog/AssessmentCTA';
import { PageHero } from '@/components/ui/PageHero';
import { RealScoutSearch } from '@/components/PropertySearch/RealScoutSearch';
import { ConsultationCTA } from '@/components/ui/ConsultationCTA';
import { generatePageMetadata } from '@/lib/seo';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: 'Buy Luxury Homes in Las Vegas, Summerlin & Henderson | Dr. Jan Duffy',
  description:
    'Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties, helps buyers secure luxury and move-up homes across Las Vegas. Off-market access, negotiation, and local expertise. Call or text 702-500-1955.',
  keywords: [
    'luxury home buyer Las Vegas',
    'buy homes Summerlin',
    'Henderson buyer agent',
    'off-market Las Vegas',
    'Dr. Jan Duffy',
    'Berkshire Hathaway Nevada Properties',
  ],
  url: '/buying',
  image: '/images/buying-las-vegas-homes-og.jpg',
});

export default function BuyingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Breadcrumbs */}
      <div className='bg-white border-b border-gray-200'>
        <div className='container py-4'>
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        title='Luxury Home Buying in Las Vegas, Summerlin & Henderson'
        subtitle='Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, guides buyers from search through closing—with MLS tools, off-market insight, and calm negotiation. Call or text 702-500-1955.'
        gradientFromClassName='from-amber-600'
        gradientToClassName='to-yellow-600'
      >
        <ConsultationCTA variant='primary' source='buying-page-hero' showPhone={false} className='bg-white text-amber-900 hover:bg-amber-50 border-2 border-white' />
        <Link
          href='/luxury'
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors duration-200'
        >
          Browse Luxury Properties
        </Link>
      </PageHero>

      {/* Property Search Widget */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                Where Can You Search Las Vegas Luxury Listings?
              </h2>
              <p className='text-xl text-gray-600'>
                Use live MLS search below for Summerlin, Henderson, Green Valley, and greater Las Vegas—or ask Dr. Jan Duffy for personalized matches and off-market introductions.
              </p>
            </div>
            <div className='card p-8'>
              <RealScoutSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process Section */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              How Does Buying a Home in Las Vegas Work?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Whether you are upsizing in{' '}
              <Link href='/areas/summerlin' className='text-amber-700 font-semibold hover:text-amber-800'>
                Summerlin
              </Link>{' '}
              or buying your first home, Dr. Jan Duffy maps each milestone—from pre-approval through keys—in clear, local steps.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Step 1 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                1
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Pre-Approval
              </h3>
              <p className='text-gray-600'>
                Get pre-approved for a mortgage to understand your budget and
                show sellers you&apos;re serious.
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                2
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Property Search
              </h3>
              <p className='text-gray-600'>
                I&apos;ll help you find homes that match your criteria, budget, and
                lifestyle needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                3
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Make an Offer
              </h3>
              <p className='text-gray-600'>
                Strategic negotiation to secure your dream home at the best
                possible price.
              </p>
            </div>

            {/* Step 4 */}
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                4
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Close & Move In
              </h3>
              <p className='text-gray-600'>
                Final inspections, paperwork, and closing coordination for a
                smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment CTA Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <AssessmentCTA type="buyer-readiness" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Tips For Buyers */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='💡' className='h-6 w-6 text-amber-600' ariaLabel='Tip' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Tips For Buyers
              </h3>
              <p className='text-gray-600 mb-6'>
                Essential advice for first-time and experienced buyers to make
                informed decisions in the Las Vegas market.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Market timing strategies</li>
                <li>• Negotiation techniques</li>
                <li>• Home inspection tips</li>
                <li>• Financing options</li>
              </ul>
              <Link
                href='/buyer-guide'
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Finance Information */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Money'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Finance Information
              </h3>
              <p className='text-gray-600 mb-6'>
                Understanding your financing options and getting the best
                mortgage rates in Las Vegas.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Loan types and programs</li>
                <li>• Down payment assistance</li>
                <li>• Credit score optimization</li>
                <li>• First-time buyer programs</li>
              </ul>
              <Link
                href='/buying/guide'
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Real Estate Updates */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Analytics'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Real Estate Updates
              </h3>
              <p className='text-gray-600 mb-6'>
                Stay informed with the latest Las Vegas market trends,
                statistics, and opportunities.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Monthly market reports</li>
                <li>• Neighborhood analysis</li>
                <li>• Price trend insights</li>
                <li>• Investment opportunities</li>
              </ul>
              <Link
                href='/buying/updates'
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Planning Guide */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='📋' className='h-6 w-6 text-blue-600' ariaLabel='Checklist' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Lifestyle & Planning Guide
              </h3>
              <p className='text-gray-600 mb-6'>
                Comprehensive guide to choosing the right neighborhood and
                lifestyle in Las Vegas.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Neighborhood profiles</li>
                <li>• School district information</li>
                <li>• Lifestyle amenities</li>
                <li>• Future development plans</li>
              </ul>
              <Link
                href='/buying/guide'
                className='btn btn-outline'
              >
                Learn More →
              </Link>
            </div>

            {/* Property Search */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <IconSymbol symbol='🔍' className='h-6 w-6 text-emerald-600' ariaLabel='Search' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Property Search
              </h3>
              <p className='text-gray-600 mb-6'>
                Access the latest Las Vegas listings with advanced search
                filters and market insights.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• Advanced search filters</li>
                <li>• Price alerts and notifications</li>
                <li>• Virtual tours and photos</li>
                <li>• Market value estimates</li>
              </ul>
              <Link
                href='/listings'
                className='btn btn-outline'
              >
                Search Properties →
              </Link>
            </div>

            {/* First-Time Buyers */}
            <div className='card p-8'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Home'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                First-Time Buyers
              </h3>
              <p className='text-gray-600 mb-6'>
                Specialized guidance for first-time homebuyers with programs and
                resources designed for you.
              </p>
              <ul className='space-y-2 text-gray-600 mb-6'>
                <li>• First-time buyer programs</li>
                <li>• Down payment assistance</li>
                <li>• Educational resources</li>
                <li>• Step-by-step guidance</li>
              </ul>
              <div className='space-y-2'>
                <Link
                  href='/buyer-guide'
                  className='block text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm'
                >
                  <IconSymbol symbol='📘' className='h-4 w-4 text-blue-600 mr-2' ariaLabel='Guide' />
                  <span>Complete Buyer Guide</span>
                  <IconSymbol symbol='→' className='h-3 w-3 ml-2 text-blue-600' ariaLabel='Arrow right' />
                </Link>
                <Link
                  href='/first-time-buyer-challenges'
                  className='block text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm'
                >
                  <IconSymbol symbol='⚠️' className='h-4 w-4 text-amber-500 mr-2' ariaLabel='Warning' />
                  <span>Common Challenges & Solutions</span>
                  <IconSymbol symbol='→' className='h-3 w-3 ml-2 text-amber-500' ariaLabel='Arrow right' />
                </Link>
                <Link
                  href='/contact'
                  className='btn btn-outline'
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Neighborhoods */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Which Las Vegas Areas Do Luxury Buyers Explore First?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Master-planned Summerlin, lake-and-golf Henderson, and growth corridors in North Las Vegas each offer distinct inventory—browse area guides, then tour with a licensed local agent.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Summerlin */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
                  alt='Summerlin neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Summerlin
                </h3>
                <p className='text-gray-600 mb-4'>
                  Master-planned community with luxury amenities
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $650K+
                  </span>
                  <Link
                    href='/areas/summerlin'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            </div>

            {/* Henderson */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
                  alt='Henderson neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  Henderson
                </h3>
                <p className='text-gray-600 mb-4'>
                  Parks and nearby schools
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $485K+
                  </span>
                  <Link
                    href='/areas/henderson'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            </div>

            {/* North Las Vegas */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative h-48'>
                <Image
                  src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
                  alt='North Las Vegas neighborhood'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  North Las Vegas
                </h3>
                <p className='text-gray-600 mb-4'>
                  Growing area with new construction
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-semibold text-amber-600'>
                    $320K+
                  </span>
                  <Link
                    href='/areas/north-las-vegas'
                    className='text-amber-600 font-semibold hover:text-amber-700 transition-colors'
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            How Do You Start Your Las Vegas Home Search?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            Schedule a buyer consultation or call <a href='tel:702-500-1955' className='underline font-semibold'>702-500-1955</a>—Dr. Jan Duffy will align showings, financing timelines, and offer strategy to your goals.
          </p>
          <ConsultationCTA variant='white' source='buying-page-cta' />
        </div>
      </section>

      {/* Exclusive Access Section - Current Market Value */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='card p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                  Can You Tour Homes Before They Hit Public MLS?
                </h2>
                <p className='text-lg text-gray-700'>
                  Strong Las Vegas listings often receive interest early. Through Berkshire Hathaway HomeServices Nevada Properties and Dr. Jan Duffy&apos;s network, qualified buyers may preview pocket and pre-market homes when sellers allow.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                    ✓
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-2'>Pre-Market Listings</h3>
                    <p className='text-gray-600'>First access to properties before they&apos;re publicly listed</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                    ✓
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-2'>Off-Market Opportunities</h3>
                    <p className='text-gray-600'>Exclusive properties available only through our network</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                    ✓
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-2'>Private Showings</h3>
                    <p className='text-gray-600'>Personalized property tours at your convenience</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                    ✓
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-2'>Competitive Advantage</h3>
                    <p className='text-gray-600'>Strategic positioning in multiple-offer situations</p>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <ConsultationCTA variant='primary' source='buying-exclusive-access' showPhone={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
