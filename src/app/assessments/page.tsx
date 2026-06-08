import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHero } from '@/components/ui/PageHero';
import { generatePageMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Real Estate Assessments | Dr. Jan Duffy — Las Vegas',
  description:
    'Free buyer and seller readiness assessments for Las Vegas home buyers and sellers. Get a personalized score and next steps from Dr. Jan Duffy in 3 minutes.',
  keywords: [
    'buyer readiness assessment',
    'seller readiness assessment',
    'Las Vegas real estate quiz',
    'home buying readiness',
    'home selling readiness',
    'Dr. Jan Duffy',
  ],
  url: '/assessments',
  image: '/images/buyer-assessment-og.jpg',
});

const assessments = [
  {
    title: 'Buyer Readiness Assessment',
    description:
      'Find out if you are ready to buy a home in Las Vegas. Get a personalized score, financing tips, and neighborhood guidance for Summerlin, Henderson, and the full Valley.',
    href: '/assessments/buyer-readiness',
    badge: 'Buyers',
    duration: '3 min',
    icon: '🏡',
  },
  {
    title: 'Seller Readiness Assessment',
    description:
      'See how prepared you are to list your Las Vegas home. Review pricing, staging, and marketing readiness before you go on the MLS.',
    href: '/assessments/seller-readiness',
    badge: 'Sellers',
    duration: '3 min',
    icon: '📋',
  },
] as const;

export default function AssessmentsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assessments', url: '/assessments' },
  ]);

  const itemListSchema = generateItemListSchema({
    name: 'Las Vegas Real Estate Assessments',
    description: 'Free buyer and seller readiness tools from Dr. Jan Duffy.',
    items: assessments.map((item) => ({
      name: item.title,
      url: item.href,
      description: item.description,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="container py-4">
            <Breadcrumbs />
          </div>
        </div>

        <PageHero
          title="Free Real Estate Assessments"
          subtitle="Personalized buyer and seller readiness tools for the Las Vegas Valley — from Dr. Jan Duffy, Good To Know REALTOR®"
          gradientFromClassName="from-emerald-900"
          gradientToClassName="to-green-800"
        />

        <section className="py-16">
          <div className="container max-w-5xl mx-auto px-4">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Not sure where to start? These quick assessments help you understand your readiness,
              then connect you with guides for{' '}
              <Link href="/buyer-guide" className="text-blue-600 font-semibold hover:text-blue-700">
                buying
              </Link>
              ,{' '}
              <Link href="/seller-guide" className="text-blue-600 font-semibold hover:text-blue-700">
                selling
              </Link>
              , and{' '}
              <Link href="/listings" className="text-blue-600 font-semibold hover:text-blue-700">
                MLS listings
              </Link>{' '}
              across Summerlin, Henderson, Green Valley, and 120+ expert neighborhoods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {assessments.map((assessment) => (
                <article key={assessment.href} className="card p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl" aria-hidden="true">
                      {assessment.icon}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      {assessment.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{assessment.title}</h2>
                  <p className="text-gray-600 mb-6 flex-1">{assessment.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-500">{assessment.duration} • Free</span>
                    <Link href={assessment.href} className="btn btn-primary">
                      Start Assessment
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Questions about your results?</p>
              <Link
                href="tel:702-222-1964"
                className="inline-flex items-center text-lg font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Call or text 702-222-1964
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
