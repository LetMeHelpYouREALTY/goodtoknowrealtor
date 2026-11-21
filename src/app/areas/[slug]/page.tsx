import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHero } from '@/components/ui/PageHero';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SimpleSearch } from '@/components/PropertySearch/SimpleSearch';
import {
  NEIGHBORHOOD_SLUGS,
  getNeighborhoodBySlug,
} from '@/data/neighborhoods';
import {
  generateNeighborhoodMetadata,
  getNeighborhoodSections,
  neighborhoodHeroSubtitle,
  getNeighborhoodCorridor,
} from '@/lib/neighborhood-seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) return { title: 'Not Found' };
  return generateNeighborhoodMetadata(name, slug);
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const name = getNeighborhoodBySlug(slug);
  if (!name) notFound();

  const sections = getNeighborhoodSections(name);
  const corridor = getNeighborhoodCorridor(name);

  return (
    <div className="min-h-screen">
      <PageHero
        title={`${name} Real Estate`}
        subtitle={neighborhoodHeroSubtitle(name)}
        gradientFromClassName="from-[#0f1419]"
        gradientToClassName="to-[#1a2332]"
      >
        <Link
          href="/listings#advanced-search"
          className="bg-white text-[#0f1419] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#faf8f5] transition-colors duration-200 shadow-lg"
        >
          View {name} Listings
        </Link>
        <a
          href="sms:702-500-1955"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0f1419] transition-colors duration-200"
        >
          Text Dr. Jan Duffy
        </a>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          {sections.map((section) => (
            <article key={section.heading} className="mb-14 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">{section.answer}</p>
              {section.bullets ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick facts</h3>
                  <ul className="space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start">
                        <IconSymbol
                          symbol="✓"
                          className="text-green-600 mr-3 h-5 w-5 mt-0.5 shrink-0"
                          ariaLabel="Included"
                        />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#faf8f5] to-gray-100" aria-labelledby="neighborhood-search-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 id="neighborhood-search-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              How do you filter MLS results in {name}?
            </h2>
            <p className="text-xl text-gray-600 mb-10 text-center max-w-2xl mx-auto">
              Use the MLS search below to narrow listings in {name} and surrounding {corridor} inventory by price, beds, baths, and property type.
            </p>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Where is {name} in the Las Vegas Valley?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {name} is part of the {corridor} housing market. Dr. Jan Duffy maps commute routes, nearby retail corridors, and recreation access so you can compare floor plans, square footage, and amenity packages—not stereotypes about who should live where.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Explore nearby markets</h3>
              <ul className="space-y-2 text-blue-600 font-medium">
                <li>
                  <Link href="/areas/summerlin" className="hover:underline">
                    Summerlin area homes
                  </Link>
                </li>
                <li>
                  <Link href="/areas/henderson" className="hover:underline">
                    Henderson area homes
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="hover:underline">
                    All Las Vegas Valley neighborhoods
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt={`Residences for sale in ${name}, ${corridor}`}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1419] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to tour homes in {name}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#e8d5a8]/90">
            Dr. Jan Duffy, Good To Know REALTOR®, schedules showings and negotiates on your behalf across {name} and the greater Las Vegas Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-500-1955"
              className="bg-white text-[#0f1419] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#faf8f5] transition-colors"
            >
              Call (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0f1419] transition-colors inline-block"
            >
              Request a market consult
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}