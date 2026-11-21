import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Home Buyer Guide | Luxury & First Purchase | Dr. Jan Duffy',
  description:
    'Answer-first buyer guide for Las Vegas, Summerlin, and Henderson from Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Financing, offers, and closing steps. 702-500-1955.',
  keywords: [
    'Las Vegas buyer guide',
    'first-time buyer Henderson',
    'luxury buyer Summerlin',
    'Dr. Jan Duffy',
    'Berkshire Hathaway Nevada Properties',
  ],
  url: '/buyer-guide',
  image: '/images/buyer-guide-og.jpg',
});

export default function BuyerGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Breadcrumbs />
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        title='Las Vegas Home Buyer Guide'
        subtitle='Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, explains each buying milestone for luxury and first-time purchasers across Las Vegas, Summerlin, and Henderson.'
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      />

      {/* Guide Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Steps Should Las Vegas Buyers Follow?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Work through these milestones in order—pair this guide with live{' '}
                <Link href="/listings" className="text-blue-700 font-semibold hover:text-blue-800">MLS search</Link> and{' '}
                <Link href="/buying" className="text-blue-700 font-semibold hover:text-blue-800">buyer representation</Link> from Dr. Jan Duffy.
              </p>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Get Pre-Approved Before Touring Las Vegas Homes?</h2>
                  <p className="text-gray-600 mb-4">
                    Pre-approval clarifies your budget and signals serious intent to sellers—especially in competitive Summerlin and Henderson submarkets.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check your credit score and improve if necessary</li>
                    <li>Gather financial documents (pay stubs, tax returns, bank statements)</li>
                    <li>Compare mortgage rates from multiple lenders</li>
                    <li>Get pre-approval letter from your chosen lender</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Do You Choose a Las Vegas Buyer&apos;s Agent?</h2>
                  <p className="text-gray-600 mb-4">
                    Select a licensed Nevada REALTOR® with valley MLS access, clear communication, and neighborhood expertise—Dr. Jan Duffy serves buyers at every price point.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Look for agents with local market expertise</li>
                    <li>Check reviews and testimonials from past clients</li>
                    <li>Ensure they&apos;re licensed and experienced</li>
                    <li>Choose someone who communicates well and understands your needs</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Should You House-Hunt in the Valley?</h2>
                  <p className="text-gray-600 mb-4">
                    Tour multiple homes across your shortlist areas—compare floor plans, HOA rules, and commute time before you narrow to finalists.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Make a list of must-have features vs. nice-to-have features</li>
                    <li>Consider location, schools, commute times, and neighborhood amenities</li>
                    <li>Take notes and photos during home tours</li>
                    <li>Don&apos;t rush the decision - this is a major investment</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Do You Structure a Competitive Nevada Offer?</h2>
                  <p className="text-gray-600 mb-4">
                    Dr. Jan Duffy reviews recent comps, seller motivation, and contingency needs so your offer is strong yet protectable.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Research comparable sales in the area</li>
                    <li>Consider market conditions (buyer&apos;s vs. seller&apos;s market)</li>
                    <li>Include contingencies for inspection and financing</li>
                    <li>Be prepared for negotiations</li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Schedule a Home Inspection?</h2>
                  <p className="text-gray-600 mb-4">
                    Book a licensed inspector right after mutual acceptance—desert homes often need extra attention to HVAC, roofing, and pool systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Hire a licensed and experienced home inspector</li>
                    <li>Attend the inspection to ask questions</li>
                    <li>Review the inspection report carefully</li>
                    <li>Negotiate repairs or price adjustments if needed</li>
                  </ul>
                </div>

                {/* Step 6 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Do You Lock Financing Before Closing?</h2>
                  <p className="text-gray-600 mb-4">
                    Submit lender documents promptly and lock your rate when terms fit—delays can jeopardize closing dates on Las Vegas resale contracts.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Provide any additional documentation requested by your lender</li>
                    <li>Lock in your interest rate</li>
                    <li>Review and understand all loan terms</li>
                    <li>Complete the loan application process</li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens on Nevada Closing Day?</h2>
                  <p className="text-gray-600 mb-4">
                    Sign final loan and deed documents, wire funds through your title company, and complete a walk-through—Dr. Jan Duffy coordinates timing with escrow.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Review all closing documents before signing</li>
                    <li>Bring a valid ID and any required documentation</li>
                    <li>Bring a cashier&apos;s check for closing costs</li>
                    <li>Do a final walkthrough of the property</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            How Do You Talk with Dr. Jan Duffy About Buying?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call or text 702-500-1955 or request a consultation—Berkshire Hathaway HomeServices Nevada Properties supports your search from pre-approval through keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:702-500-1955" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
