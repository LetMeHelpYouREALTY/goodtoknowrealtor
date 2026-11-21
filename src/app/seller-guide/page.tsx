import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Home Seller Guide | Luxury Listings | Dr. Jan Duffy',
  description:
    'Seller guide for Las Vegas, Summerlin, and Henderson from Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties—pricing, marketing, and closing. 702-500-1955.',
  keywords: [
    'Las Vegas seller guide',
    'sell home Summerlin',
    'luxury listing Henderson',
    'Dr. Jan Duffy',
    'Berkshire Hathaway Nevada Properties',
  ],
  url: '/seller-guide',
  image: '/images/seller-guide-og.jpg',
});

export default function SellerGuidePage() {
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
        title='Las Vegas Home Seller Guide'
        subtitle='Dr. Jan Duffy, Good To Know REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, walks luxury and move-up sellers through pricing, marketing, and Nevada closing steps.'
        gradientFromClassName='from-blue-900'
        gradientToClassName='to-blue-800'
      />

      {/* Guide Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Should Las Vegas Sellers Do First?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Follow these steps in sequence and request a{' '}
                <Link href="/home-value" className="text-blue-700 font-semibold hover:text-blue-800">home value review</Link>{' '}
                or{' '}
                <Link href="/selling" className="text-blue-700 font-semibold hover:text-blue-800">listing consultation</Link> with Dr. Jan Duffy when you are ready to go live.
              </p>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Do You Prepare a Las Vegas Home for Market?</h2>
                  <p className="text-gray-600 mb-4">
                    Clean, repair, and stage to showcase light, flow, and curb appeal—preparation often shortens days on market in Summerlin and Henderson.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Deep clean every room and declutter</li>
                    <li>Make necessary repairs and improvements</li>
                    <li>Stage your home to highlight its best features</li>
                    <li>Consider professional photography for online listings</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Should You Price a Luxury or Move-Up Home?</h2>
                  <p className="text-gray-600 mb-4">
                    Use a broker price opinion anchored in recent MLS comps—not online estimates alone—so your list price matches buyer activity.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Get a professional comparative market analysis (CMA)</li>
                    <li>Consider recent sales of similar homes in your area</li>
                    <li>Factor in current market conditions</li>
                    <li>Account for any unique features or improvements</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why List with Dr. Jan Duffy at BHHS Nevada Properties?</h2>
                  <p className="text-gray-600 mb-4">
                    A local listing agent should bring MLS marketing, negotiation discipline, and brokerage reach—see{' '}
                    <Link href="/why-list-with-us" className="text-blue-700 font-semibold hover:text-blue-800">why sellers choose this team</Link>.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Look for agents with local market expertise</li>
                    <li>Check their track record and client testimonials</li>
                    <li>Ensure they have a strong marketing strategy</li>
                    <li>Discuss commission rates and services included</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Is Your Home Marketed in Las Vegas MLS?</h2>
                  <p className="text-gray-600 mb-4">
                    Professional media, syndication, and targeted outreach put your listing in front of qualified buyers while respecting privacy when needed.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>List on multiple online platforms and MLS</li>
                    <li>Use professional photos and virtual tours</li>
                    <li>Host open houses and private showings</li>
                    <li>Leverage social media and digital marketing</li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Do You Compare Multiple Offers?</h2>
                  <p className="text-gray-600 mb-4">
                    Weigh price, financing strength, contingencies, and closing date—Dr. Jan Duffy explains net proceeds, not just headline price.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Consider offer price, contingencies, and closing timeline</li>
                    <li>Evaluate buyer&apos;s financial qualifications</li>
                    <li>Negotiate terms that work for both parties</li>
                    <li>Don&apos;t just focus on price - consider all terms</li>
                  </ul>
                </div>

                {/* Step 6 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens During Inspection and Appraisal?</h2>
                  <p className="text-gray-600 mb-4">
                    Buyers inspect condition; lenders confirm value—respond promptly to repair requests and keep appraisal support data ready.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Be prepared for inspection findings</li>
                    <li>Address any major issues that could affect the sale</li>
                    <li>Ensure your home appraises for the agreed-upon price</li>
                    <li>Be flexible with repairs and negotiations</li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Occurs on Nevada Seller Closing Day?</h2>
                  <p className="text-gray-600 mb-4">
                    Sign deed transfer documents at title, confirm proceeds wiring, and hand off keys per contract—escrow timelines are tracked by your agent.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Review all closing documents carefully</li>
                    <li>Bring required identification and documentation</li>
                    <li>Ensure all utilities are transferred</li>
                    <li>Complete the final walkthrough with the buyer</li>
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
            How Do You Request a Listing Consultation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call or text 702-500-1955 for pricing and marketing tailored to your Las Vegas, Summerlin, or Henderson property.
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
              Get Free Home Valuation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
