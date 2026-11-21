'use client';

import Link from 'next/link';
import { HomeValueWidget } from '@/components/Home/HomeValueWidget';
import { HomebotHomeowner } from '@/components/Home/HomebotHomeowner';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

export default function HomeValuePage() {
  const features = [
    {
      title: 'Accurate Valuation',
      description: 'Get the most precise estimate using advanced market data.',
      icon: '🎯',
    },
    {
      title: 'Market Comparison',
      description: 'See how your home compares to similar properties.',
      icon: '📊',
    },
    {
      title: 'Price History',
      description: 'View historical price trends in your neighborhood.',
      icon: '📈',
    },
    {
      title: 'Expert Analysis',
      description: 'Professional insights from Dr. Jan Duffy.',
      icon: '👩‍💼',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
        {/* Hero Section */}
        <PageHero
          title='Las Vegas Home Value & Equity Estimate'
          subtitle='Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, pairs automated estimates with local MLS context for Summerlin, Henderson, and greater Las Vegas. Call or text 702-500-1955.'
        >
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <div className='bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3'>
              <span className='font-semibold inline-flex items-center gap-2'>
                <IconSymbol symbol='✓' className='h-4 w-4 text-white' ariaLabel='Check icon' />
                Instant Results
              </span>
            </div>
            <div className='bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3'>
              <span className='font-semibold inline-flex items-center gap-2'>
                <IconSymbol symbol='✓' className='h-4 w-4 text-white' ariaLabel='Check icon' />
                Market Data
              </span>
            </div>
            <div className='bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3'>
              <span className='font-semibold inline-flex items-center gap-2'>
                <IconSymbol symbol='✓' className='h-4 w-4 text-white' ariaLabel='Check icon' />
                Expert Analysis
              </span>
            </div>
          </div>
        </PageHero>

        {/* Home Value Widget Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
                  How Do You Get an Instant Las Vegas Home Value?
                </h2>
                <p className='text-xl text-gray-600'>
                  Enter your address for a data-driven snapshot—then ask Dr. Jan Duffy for a listing-ready broker price opinion before you sell.
                </p>
              </div>
              
              <div className='bg-gray-50 rounded-2xl p-8 mb-12'>
                <HomeValueWidget />
              </div>
              
              {/* Additional Homebot Widget */}
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4 text-center'>
                  How Can You Track Equity Between Valuations?
                </h2>
                <p className='text-gray-600 mb-6 text-center max-w-2xl mx-auto'>
                  Homebot reports supplement—not replace—MLS pricing insight when you are planning a move or refinance in Nevada.
                </p>
                <div className='max-w-md mx-auto'>
                  <HomebotHomeowner />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
                  Why Pair Online Estimates with a Local REALTOR®?
                </h2>
                <p className='text-xl text-gray-600'>
                  Algorithms miss pocket upgrades and micro-market shifts—Dr. Jan Duffy validates numbers against active Las Vegas MLS comps.
                </p>
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {features.map((feature, index) => (
                  <div key={index} className='bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow'>
                    <IconSymbol symbol={feature.icon as IconSymbolKey} className='mx-auto mb-4 h-10 w-10 text-blue-600' ariaLabel={`${feature.title} icon`} />
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl lg:text-5xl font-bold mb-4'>
              What Is the Next Step After Your Estimate?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Schedule a listing consult or call{' '}
              <a href='tel:702-500-1955' className='underline font-semibold'>702-500-1955</a>—BHHS Nevada Properties marketing turns accurate pricing into showings.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md'
              >
                <span className='inline-flex items-center gap-2'>
                  Get Free Consultation
                  <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
                </span>
              </Link>
              <Link
                href='/selling'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
              >
                <span className='inline-flex items-center gap-2'>
                  Luxury selling services
                  <IconSymbol symbol='→' className='h-3 w-3' ariaLabel='Arrow right' />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}