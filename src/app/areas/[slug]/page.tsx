import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  SEO_CONFIG,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSpeakableSchema,
  generateWebPageSchema,
} from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {
  NEIGHBORHOOD_SLUGS,
  getNeighborhoodBySlug,
} from '@/data/neighborhoods';
import { buildPrimaryAreaFaqs } from '@/lib/primary-areas';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) return { title: 'Not Found' };

  const title = `${name} Real Estate | Dr. Jan Duffy | Good To Know REALTOR®`;
  const description = `Homes for sale in ${name} with Dr. Jan Duffy, Good To Know REALTOR®. Luxury and residential guidance across the Las Vegas Valley. Call/Text 702-500-1955.`;
  const canonical = `${SEO_CONFIG.siteUrl}/areas/${slug}`;

  return {
    title: { absolute: title },
    description,
    keywords: `${name} real estate, ${name} homes for sale, Dr. Jan Duffy, Good To Know REALTOR, Las Vegas`,
    openGraph: {
      title,
      description: `Explore ${name} real estate with Dr. Jan Duffy, Good To Know REALTOR®.`,
      url: canonical,
    },
    alternates: { canonical },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) notFound();

  const description = `Dr. Jan Duffy, Good To Know REALTOR®, helps buyers and sellers with ${name} real estate in the Las Vegas Valley.`;
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Communities', url: '/communities' },
    { name: name, url: `/areas/${slug}` },
  ];
  const breadcrumbs = generateBreadcrumbSchema(breadcrumbItems);
  const webPage = generateWebPageSchema({
    name: `${name} Real Estate`,
    description,
    url: `/areas/${slug}`,
    breadcrumbs: breadcrumbItems,
  });
  const faqs = generateFAQSchema(buildPrimaryAreaFaqs(name));
  const speakable = generateSpeakableSchema({
    url: `/areas/${slug}`,
    cssSelectors: ['h1', '[data-speakable]'],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />

      <div className="min-h-screen">
        <PageHero
          title={`${name} Real Estate`}
          subtitle={`Discover homes for sale in ${name}. Dr. Jan Duffy, Good To Know REALTOR®, brings hyperlocal expertise to your ${name} search.`}
          gradientFromClassName="from-blue-900"
          gradientToClassName="to-blue-800"
        >
          <Link
            href="/listings#advanced-search"
            className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            View {name} Listings
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200"
          >
            Get Free Consultation
          </Link>
        </PageHero>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Work with Dr. Jan Duffy in {name}?
                </h2>
                <p className="text-lg text-gray-600 mb-6" data-speakable>
                  {name} is one of Dr. Jan Duffy&apos;s expert neighborhoods across
                  the Las Vegas Valley. As a Good To Know REALTOR® with Berkshire
                  Hathaway HomeServices Nevada Properties, she helps buyers and
                  sellers evaluate inventory, pricing, and timing in {name}.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <IconSymbol
                      symbol="✓"
                      className="text-green-500 mr-3 h-5 w-5"
                      ariaLabel="Highlight"
                    />
                    <span className="text-gray-700">
                      Hyperlocal knowledge of {name} and nearby communities
                    </span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol
                      symbol="✓"
                      className="text-green-500 mr-3 h-5 w-5"
                      ariaLabel="Highlight"
                    />
                    <span className="text-gray-700">
                      Full MLS search plus private-inventory outreach when available
                    </span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol
                      symbol="✓"
                      className="text-green-500 mr-3 h-5 w-5"
                      ariaLabel="Highlight"
                    />
                    <span className="text-gray-700">
                      Luxury and residential representation tailored to your goals
                    </span>
                  </li>
                  <li className="flex items-center">
                    <IconSymbol
                      symbol="✓"
                      className="text-green-500 mr-3 h-5 w-5"
                      ariaLabel="Highlight"
                    />
                    <span className="text-gray-700">
                      Direct access: Call/Text 702-500-1955
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt={`Homes for sale in ${name} with Dr. Jan Duffy, Good To Know REALTOR®`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" aria-labelledby={`${slug}-faq-heading`}>
          <div className="container max-w-3xl">
            <h2 id={`${slug}-faq-heading`} className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {name} Real Estate FAQs
            </h2>
            <div className="space-y-4">
              {buildPrimaryAreaFaqs(name).map((item) => (
                <div key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600" data-speakable>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
              <Link href="/listings" className="text-blue-600 font-semibold hover:underline">
                Search {name} listings
              </Link>
              <Link href="/luxury" className="text-blue-600 font-semibold hover:underline">
                Luxury homes in Las Vegas
              </Link>
              <Link href="/communities" className="text-blue-600 font-semibold hover:underline">
                All expert neighborhoods
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your {name} Home?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Work with Dr. Jan Duffy, Good To Know REALTOR®, for buying or selling
              in {name} and across the Las Vegas Valley.
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
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
