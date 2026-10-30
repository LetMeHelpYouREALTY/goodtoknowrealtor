import CalendlyInline from '@/components/Calendly/CalendlyInline';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IconSymbol } from '@/components/ui/IconSymbol';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  url: '/contact',
  image: '/images/dr-janet-duffy-contact-og.jpg',
});

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Dr. Jan Duffy', url: '/contact' },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <div className='min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50'>
      {/* Hero Section */}
      <PageHero
        title='Contact Dr. Jan Duffy'
        subtitle={"Ready to start your Las Vegas real estate journey? I'm here to help you achieve your property goals with personalized service and expert guidance."}
      />

      {/* Contact Methods */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Multiple ways to reach me for your real estate needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            {/* Phone */}
            <div className='card p-8 text-center'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Image
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48&q=80'
                  alt='Phone icon for direct contact with Dr. Jan Duffy'
                  width={48}
                  height={48}
                  className='w-12 h-12'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Call Me Directly
              </h3>
              <p className='text-gray-600 mb-6'>
                For immediate assistance or urgent questions, call me directly.
              </p>
              <Link
                href='tel:702-500-1955'
                className='btn btn-primary'
              >
                (702) 500-1955
              </Link>
            </div>

            {/* Email */}
            <div className='card p-8 text-center'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='📧' className='text-3xl text-blue-600' ariaLabel='Email icon' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Send an Email
              </h3>
              <p className='text-gray-600 mb-6'>
                For detailed inquiries or to schedule a consultation.
              </p>
              <Link
                href='mailto:janet@goodtoknowrealtor.com'
                className='btn btn-primary'
              >
                Send Email
              </Link>
            </div>

            {/* Text Message */}
            <div className='card p-8 text-center'>
              <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconSymbol symbol='💬' className='text-3xl text-blue-600' ariaLabel='Chat icon' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Text Message
              </h3>
              <p className='text-gray-600 mb-6'>
                Quick questions? Send me a text message for fast responses.
              </p>
              <Link
                href='sms:702-500-1955'
                className='btn btn-primary'
              >
                Send Text
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking — replaces the old contact form (it had no submit handler, so messages were lost) */}
      <CalendlyInline
        event='general'
        title='Book a time with Dr. Jan'
        subtitle='Pick the call that fits: buyer, seller, showing, market strategy, Zoom or in person.'
      />

      {/* Office Information */}
      <section className='py-20'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Office Information
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Visit my office or learn more about my services
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='card p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Office Location
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <IconSymbol symbol='📍' className='text-amber-600 mr-4 mt-1 h-5 w-5' ariaLabel='Location icon' />
                    <div>
                      <p className='font-semibold text-gray-900'>
                        Dr. Jan Duffy Real Estate
                      </p>
                      <p className='text-gray-600'>Las Vegas, Nevada</p>
                      <p className='text-gray-600'>
                        Serving all Las Vegas Valley communities
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <IconSymbol symbol='⏱️' className='text-amber-600 mr-4 mt-1 h-5 w-5' ariaLabel='Clock icon' />
                    <div>
                      <p className='font-semibold text-gray-900'>
                        Office Hours
                      </p>
                      <p className='text-gray-600'>
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className='text-gray-600'>
                        Saturday: 9:00 AM - 5:00 PM
                      </p>
                      <p className='text-gray-600'>Sunday: By Appointment</p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                  <Image
                    src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                    alt='Phone icon for office contact information'
                    width={24}
                    height={24}
                    className='w-6 h-6 mr-4 mt-1'
                  />
                    <div>
                      <p className='font-semibold text-gray-900'>Contact</p>
                      <p className='text-gray-600'>Phone: (702) 500-1955</p>
                      <p className='text-gray-600'>
                        Email: janet@goodtoknowrealtor.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/about'
                    className='btn btn-outline'
                  >
                    Learn More About My Services
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                     width="24" height="24">
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80'
                  alt='Modern Las Vegas office building where Dr. Jan Duffy provides real estate services'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className='py-20 bg-white'>
        <div className='container'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Areas I Serve
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive real estate services throughout the Las Vegas Valley
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSymbol symbol='🏘️' className='text-2xl text-blue-600' ariaLabel='Neighborhood icon' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Summerlin
              </h3>
              <p className='text-gray-600'>Master-planned luxury community</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32&q=80'
                  alt='Family home in Henderson neighborhood'
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Henderson
              </h3>
              <p className='text-gray-600'>Neighborhoods</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSymbol symbol='🏢' className='text-2xl text-blue-600' ariaLabel='Commercial icon' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                North Las Vegas
              </h3>
              <p className='text-gray-600'>Growing investment opportunities</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSymbol symbol='🏙️' className='text-2xl text-blue-600' ariaLabel='Downtown icon' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Downtown Las Vegas
              </h3>
              <p className='text-gray-600'>Urban revitalization area</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSymbol symbol='🏡' className='text-2xl text-blue-600' ariaLabel='Suburban icon' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Southwest Valley
              </h3>
              <p className='text-gray-600'>New construction communities</p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconSymbol symbol='🌱' className='text-2xl text-blue-600' ariaLabel='Desert icon' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                All Las Vegas Valley
              </h3>
              <p className='text-gray-600'>Comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className='py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white'>
        <div className='container text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Need Immediate Assistance?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-3xl mx-auto'>
            For urgent real estate matters or time-sensitive transactions, don&apos;t
            hesitate to call me directly.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='tel:702-500-1955'
              className='bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors duration-200 shadow-lg'
            >
              <Image
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=24&h=24&q=80'
                alt='Phone icon for emergency real estate assistance'
                width={24}
                height={24}
                className='inline-block w-6 h-6 mr-2'
              />{' '}
              Call (702) 500-1955
            </Link>
            <Link
              href='sms:702-500-1955'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-800 transition-colors duration-200'
            >
              <span className='inline-flex items-center gap-2'>
                <IconSymbol symbol='💬' className='h-5 w-5' ariaLabel='Chat icon' />
                Send Text
              </span>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
