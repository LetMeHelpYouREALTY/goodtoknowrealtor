import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Interactive Real Estate Tools & Features | Dr. Jan Duffy',
  description: 'Explore advanced interactive real estate tools: property search, mortgage calculator, virtual tours, neighborhood maps, and market visualizations. Powerful tools for Las Vegas property buyers and sellers.',
  keywords: ['Las Vegas real estate tools', 'property search tools', 'mortgage calculator', 'virtual tours Las Vegas', 'neighborhood maps', 'real estate calculators'],
  url: '/interactive-features',
  image: '/images/interactive-features-og.jpg',
});

export default function InteractiveFeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container max-w-4xl mx-auto px-4 text-gray-700 space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">
            Las Vegas Real Estate Tools & Calculators
          </h1>
          <p>
            Use Dr. Jan Duffy&apos;s interactive tools to compare properties, estimate payments, explore{' '}
            <Link href="/areas/summerlin" className="text-blue-600 hover:text-blue-700 font-semibold">
              Summerlin
            </Link>
            ,{' '}
            <Link href="/areas/henderson" className="text-blue-600 hover:text-blue-700 font-semibold">
              Henderson
            </Link>
            , and 120+ Valley neighborhoods, and review market trends. When you&apos;re ready, browse{' '}
            <Link href="/listings" className="text-blue-600 hover:text-blue-700 font-semibold">
              MLS listings
            </Link>{' '}
            or request a{' '}
            <Link href="/home-value" className="text-blue-600 hover:text-blue-700 font-semibold">
              home value
            </Link>
            .
          </p>
        </div>
      </section>
      {children}
    </>
  );
}

