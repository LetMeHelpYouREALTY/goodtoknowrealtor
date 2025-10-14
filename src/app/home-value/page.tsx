'use client';

import Link from 'next/link';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-home-value': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

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
      title: 'Free Report',
      description: 'Complete home value report delivered to your inbox.',
      icon: '📧',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              Get Your Home Value
            </h1>
            <p className='text-xl text-blue-100 leading-relaxed'>
              Discover what your Las Vegas home is worth with our professional valuation
            </p>
          </div>
        </div>
      </div>

      {/* Home Value Widget */}
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Free Home Value Report
            </h2>
            <div className='flex justify-center'>
              <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>
            Why Choose Our Home Valuation?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='text-center'>
                <div className='text-2xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selling Journey Section */}
      <div className='py-20 bg-gradient-to-br from-green-50 to-emerald-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Ready to Sell Your Home?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Selling your home is a significant decision. Take time to reflect on your goals 
              and prepare for a successful sale with Dr. Janet Duffy&apos;s guidance.
            </p>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Selling Considerations */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='text-center mb-6'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🏠</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  Key Selling Considerations
                </h3>
                <p className='text-gray-600'>
                  Important factors to think about before listing your home
                </p>
              </div>
              
              <div className='space-y-4'>
                <div className='p-4 bg-green-50 rounded-lg'>
                  <h4 className='font-semibold text-green-900 mb-2'>Timing</h4>
                  <p className='text-green-800 text-sm'>
                    Consider market conditions, seasonal trends, and your personal timeline. 
                    Spring and early summer typically see higher buyer activity.
                  </p>
                </div>
                
                <div className='p-4 bg-blue-50 rounded-lg'>
                  <h4 className='font-semibold text-blue-900 mb-2'>Pricing Strategy</h4>
                  <p className='text-blue-800 text-sm'>
                    Price competitively based on recent comparable sales. 
                    Overpricing can lead to longer market time and lower final sale price.
                  </p>
                </div>
                
                <div className='p-4 bg-purple-50 rounded-lg'>
                  <h4 className='font-semibold text-purple-900 mb-2'>Home Preparation</h4>
                  <p className='text-purple-800 text-sm'>
                    First impressions matter. Consider minor repairs, decluttering, 
                    and staging to maximize your home&apos;s appeal to buyers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decision Reflection */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='text-center mb-6'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💭</span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  Reflect on Your Decision
                </h3>
                <p className='text-gray-600'>
                  Take time to think through your selling goals and motivations
                </p>
              </div>
              
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    What is your primary reason for selling?
                  </label>
                  <textarea
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    placeholder='e.g., Downsizing, relocating for work, investment opportunity...'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    What timeline are you working with?
                  </label>
                  <textarea
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    placeholder='e.g., Need to sell within 3 months, flexible timeline...'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    What are your financial goals?
                  </label>
                  <textarea
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                    placeholder='e.g., Maximize profit, quick sale, specific price target...'
                  />
                </div>
                
                <button className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold'>
                  Save Your Thoughts
                </button>
              </div>
            </div>
          </div>
          
          <div className='text-center mt-8'>
            <p className='text-gray-600 mb-4'>
              Ready to start your selling journey with expert guidance?
            </p>
            <a
              href='/selling'
              className='inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <span className='mr-2'>🏡</span>
              Explore Selling Services
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-blue-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Sell Your Home?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Get expert guidance from Dr. Janet Duffy to maximize your home&apos;s value and achieve a successful sale.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Schedule Consultation
            </Link>
            <Link
              href='tel:702-222-1964'
              className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
            >
              (702) 222-1964
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
