import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHero } from '@/components/ui/PageHero';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Home Buying Guide | Lifestyle & Planning | Dr. Jan Duffy',
  description:
    'Plan your Las Vegas home purchase with neighborhood profiles, school districts, lifestyle amenities, and buyer steps from Dr. Jan Duffy.',
  keywords: [
    'Las Vegas home buying guide',
    'buying guide Las Vegas',
    'neighborhood planning Las Vegas',
    'first time buyer Las Vegas',
    'Dr. Jan Duffy',
  ],
  url: '/buying/guide',
  image: '/images/buyer-guide-og.jpg',
});

export default function BuyingGuidePage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Buying', url: '/buying' },
    { name: 'Buying Guide', url: '/buying/guide' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="min-h-screen">
        <div className="bg-white border-b border-gray-200">
          <div className="container py-4">
            <Breadcrumbs />
          </div>
        </div>

        <PageHero
          title="Las Vegas Home Buying Guide"
          subtitle="Lifestyle, neighborhoods, and planning steps for buyers in Summerlin, Henderson, Green Valley, and the full Las Vegas Valley"
          gradientFromClassName="from-blue-900"
          gradientToClassName="to-blue-800"
        />

        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Buying in Las Vegas means matching lifestyle, commute, schools, and budget to the right
              community. Dr. Jan Duffy helps buyers compare master-planned areas like{' '}
              <Link href="/areas/summerlin">Summerlin</Link>,{' '}
              <Link href="/areas/henderson">Henderson</Link>, and{' '}
              <Link href="/areas/green-valley">Green Valley</Link> before you tour homes on the{' '}
              <Link href="/listings">MLS</Link>.
            </p>

            <h2>What this guide covers</h2>
            <ul>
              <li>Neighborhood profiles and lifestyle fit</li>
              <li>School district and amenity considerations</li>
              <li>Financing readiness and offer strategy</li>
              <li>Inspection, appraisal, and closing steps in Nevada</li>
            </ul>

            <h2>Recommended next steps</h2>
            <ol>
              <li>
                Read the full{' '}
                <Link href="/buyer-guide">First-Time & Move-Up Buyer Guide</Link>
              </li>
              <li>
                Take the free{' '}
                <Link href="/assessments/buyer-readiness">Buyer Readiness Assessment</Link>
              </li>
              <li>
                Browse{' '}
                <Link href="/communities">Las Vegas communities</Link> and set listing alerts
              </li>
            </ol>

            <p>
              Ready for personalized guidance? Call or text{' '}
              <a href="tel:702-222-1964">702-222-1964</a> or{' '}
              <Link href="/contact">schedule a consultation</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
