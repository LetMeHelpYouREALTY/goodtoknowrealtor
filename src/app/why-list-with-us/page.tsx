import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = generatePageMetadata({
  title: 'Why List Luxury Homes with Dr. Jan Duffy | BHHS Nevada Properties',
  description:
    'Why sellers in Las Vegas, Summerlin, and Henderson list with Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties—marketing, pricing, and negotiation. 702-500-1955.',
  keywords: [
    'why list with Dr Jan Duffy',
    'luxury listing agent Las Vegas',
    'Berkshire Hathaway Nevada Properties',
    'sell home Summerlin',
  ],
  url: '/why-list-with-us',
  image: '/images/why-list-with-us-og.jpg',
});

export default function WhyListWithUsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Why List With Us', url: '/why-list-with-us' },
  ]);

  const advantages = [
    {
      title: 'Proven Track Record',
      description: '$127M+ in sales volume with 500+ successful transactions',
      icon: '🏆',
      stats: '$127M+ Sales Volume',
    },
    {
      title: 'Market Expertise',
      description: '20+ years of Las Vegas real estate experience and market knowledge',
      icon: '📊',
      stats: '20+ Years Experience',
    },
    {
      title: 'Client Satisfaction',
      description: '98% client satisfaction rate with exceptional service delivery',
      icon: '⭐',
      stats: '98% Satisfaction',
    },
    {
      title: 'Fast Sales',
      description: 'Average 22 days to sell with strategic pricing and marketing',
      icon: '⚡',
      stats: '22 Days Average',
    },
  ];

  const services = [
    {
      title: 'Strategic Pricing',
      description: 'Data-driven pricing strategy that maximizes your home\'s value while ensuring quick sale',
      details: [
        'Comprehensive market analysis',
        'Competitive pricing strategy',
        'Regular price adjustments',
        'Market trend monitoring'
      ],
    },
    {
      title: 'Professional Marketing',
      description: 'Multi-channel marketing approach that reaches the right buyers at the right time',
      details: [
        'Professional photography',
        'Virtual tours and staging',
        'MLS and online marketing',
        'Social media promotion'
      ],
    },
    {
      title: 'Expert Negotiation',
      description: 'Skilled negotiation that protects your interests and maximizes your profit',
      details: [
        'Offer evaluation and analysis',
        'Counter-offer strategies',
        'Contract negotiation',
        'Closing coordination'
      ],
    },
    {
      title: 'Comprehensive Support',
      description: 'Full-service support from listing to closing with ongoing communication',
      details: [
        'Regular progress updates',
        'Market feedback analysis',
        'Transaction coordination',
        'Post-sale follow-up'
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael Chen',
      location: 'Summerlin',
      result: 'Sold for $50K above asking in 12 days',
      quote: 'Dr. Duffy\'s marketing strategy attracted multiple offers. Her negotiation skills got us $50K above asking price.',
      rating: 5,
    },
    {
      name: 'Jennifer Rodriguez',
      location: 'Henderson',
      result: 'Sold for $75K over target in 8 days',
      quote: 'Professional staging and photography made our home stand out. Dr. Duffy\'s expertise was invaluable.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      location: 'North Las Vegas',
      result: 'Sold for $95K above target in 14 days',
      quote: 'Dr. Duffy\'s market knowledge and pricing strategy exceeded our expectations. Highly recommend!',
      rating: 5,
    },
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
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className='bg-white border-b border-gray-200'>
          <div className='container py-4'>
            <Breadcrumbs />
          </div>
        </div>

        <PageHero
          title='Why List With Dr. Jan Duffy in Las Vegas?'
          subtitle='Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties—discreet luxury marketing, data-led pricing, and negotiation for sellers across Summerlin, Henderson, and the valley. Call or text 702-500-1955.'
          gradientFromClassName='from-blue-900'
          gradientToClassName='to-indigo-800'
        >
          <Link
            href='/home-value'
            className='bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
          >
            Get home value estimate
          </Link>
          <Link
            href='tel:702-500-1955'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors'
          >
            Call 702-500-1955
          </Link>
        </PageHero>

        {/* Key Advantages */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Results Do Las Vegas Sellers See With BHHS Marketing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy pairs brokerage-scale exposure with hands-on pricing and negotiation—metrics below reflect completed valley transactions, not promises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 mb-4">{advantage.description}</p>
                  <div className="text-lg font-semibold text-blue-600">{advantage.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Which Listing Services Support Luxury Sellers?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pricing, media, syndication, and contract strategy are coordinated in one plan—review the{' '}
                <Link href='/seller-guide' className='text-blue-700 font-semibold hover:text-blue-800'>seller guide</Link> for each phase.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who Has Listed Successfully With Dr. Jan Duffy?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sellers in Summerlin, Henderson, and North Las Vegas share outcomes after listing with Berkshire Hathaway HomeServices Nevada Properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.location}</div>
                  <div className="text-sm font-semibold text-green-600">{testimonial.result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Expertise */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  How Does Local Market Knowledge Affect Your List Price?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Micro-market trends in Summerlin, Green Valley, and master-planned Henderson communities change weekly—Dr. Jan Duffy reads MLS absorption before recommending go-live timing.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">🏘️</span>
                    <span className="text-gray-700">Expert knowledge of all Las Vegas neighborhoods</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">📈</span>
                    <span className="text-gray-700">Real-time market trend analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">🎯</span>
                    <span className="text-gray-700">Targeted buyer identification strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-3 text-xl">⚡</span>
                    <span className="text-gray-700">Optimal timing for market entry</span>
                  </li>
                </ul>
                <Link
                  href="/market-insights"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Market Insights →
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Las Vegas real estate market expertise"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Is the Step-by-Step Listing Process?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Analysis, pricing, marketing, and negotiation follow a repeatable playbook—see{' '}
                <Link href='/selling' className='text-blue-700 font-semibold hover:text-blue-800'>luxury selling services</Link> for how each stage applies to your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Market Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your home's value, market conditions, and competitive positioning
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Pricing</h3>
                <p className="text-gray-600">
                  Data-driven pricing strategy that maximizes value while ensuring competitive market positioning
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Marketing</h3>
                <p className="text-gray-600">
                  Multi-channel marketing campaign with professional photography, staging, and targeted promotion
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Negotiation</h3>
                <p className="text-gray-600">
                  Skilled negotiation and transaction management to achieve optimal terms and smooth closing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How Do You Start Your Listing Consultation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Request a valuation or call 702-500-1955—Dr. Jan Duffy will outline marketing, timing, and net sheet expectations before you sign listing paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Home Valuation
              </Link>
              <Link
                href="tel:702-500-1955"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
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