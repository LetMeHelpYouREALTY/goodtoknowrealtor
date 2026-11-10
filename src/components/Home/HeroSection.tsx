'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';
import { SITE } from '@/config/site';

const HIGHLIGHT_STATS = [
  {
    label: 'Licensed Since',
    value: '2008',
    helper: 'Nevada license S.0197614.LLC',
  },
  {
    label: 'Sales Volume',
    value: '$127M+',
    helper: 'Closed Las Vegas Valley transactions',
  },
  {
    label: 'Client Rating',
    value: '5.0★',
    helper: 'Verified on Realtor.com',
  },
];

const HERO_TESTIMONIAL = {
  quote:
    '“Dr. Duffy sold our Summerlin estate in six days with eight offers—$132K over list. Her team delivers the most polished marketing we have ever seen.”',
  name: 'Alicia & Marcus Bennett',
  location: 'The Ridges • Summerlin',
};

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-[#0f1419] bg-gradient-to-br from-[#0a0e14] via-[#0f1419] to-[#1a2332] text-white'>
      <div className='pointer-events-none absolute inset-0 opacity-70 mix-blend-screen'>
        <div className='absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-[#c9a962]/25 blur-[160px]' />
        <div className='absolute right-[-180px] top-1/2 h-[520px] w-[520px] rounded-full bg-[#1a2332]/60 blur-[160px]' />
      </div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,98,0.14),_transparent_55%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0)_60%)]' />

      <div className='container relative z-10 mx-auto px-4 py-16 sm:py-20 lg:py-28'>
        <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
          <div className='space-y-8 text-center lg:text-left'>
            <div className='luxury-badge mx-auto lg:mx-0'>
              <IconSymbol symbol='🏆' className='h-4 w-4 text-[#dfc07a]' ariaLabel='Award icon' />
              <span>{SITE.brand}</span>
            </div>

            <div className='space-y-5'>
              <p
                className='font-display text-2xl font-semibold tracking-tight text-[#dfc07a] sm:text-3xl lg:text-4xl'
                data-speakable
              >
                Dr. Jan Duffy
              </p>
              <h1
                className='font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight'
                data-speakable
              >
                Luxury homes in{' '}
                <span className='bg-gradient-to-r from-[#dfc07a] via-[#f5f0e8] to-[#c9a962] bg-clip-text text-transparent'>
                  Summerlin, Henderson &amp; Las Vegas
                </span>
              </h1>
              <p className='mx-auto max-w-2xl text-base text-[#e8d5a8]/80 sm:text-lg lg:text-xl font-light leading-relaxed' data-speakable>
                Concierge buying, selling, and investing with Berkshire Hathaway HomeServices Nevada Properties.
                Hyperlocal expertise across 120+ Las Vegas Valley neighborhoods.
              </p>
            </div>

            <dl className='grid gap-4 sm:grid-cols-3'>
              {HIGHLIGHT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-sm border border-[#c9a962]/20 bg-white/5 p-4 text-left shadow-lg backdrop-blur-lg'
                >
                  <dd className='font-display text-2xl font-semibold text-[#dfc07a] sm:text-3xl'>{stat.value}</dd>
                  <dt className='mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70'>
                    {stat.label}
                  </dt>
                  <p className='mt-2 text-[11px] text-[#e8d5a8]/70'>{stat.helper}</p>
                </div>
              ))}
            </dl>

            <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start'>
              <a
                href={`tel:${SITE.phoneTel}`}
                className='btn-luxury-primary inline-flex w-full sm:w-auto gap-2'
              >
                <IconSymbol symbol='📞' className='h-5 w-5' ariaLabel='Phone icon' />
                Call {SITE.phoneDisplay}
              </a>
              <Link href='/contact' className='btn-luxury-outline inline-flex w-full sm:w-auto gap-2'>
                <IconSymbol symbol='🛡️' className='h-5 w-5 text-[#dfc07a]' ariaLabel='Shield icon' />
                Schedule Consultation
              </Link>
            </div>

            <div className='mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-900/30 backdrop-blur-lg lg:mx-0'>
              <div className='mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/70'>
                <span>Search Las Vegas luxury homes</span>
                <span className='rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80'>Powered by RealScout</span>
              </div>
              <RealScoutSimpleSearch />
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-lg lg:mx-0'>
            <div className='relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-2xl'>
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80'
                  alt='Luxury homes for sale in Las Vegas with Dr. Jan Duffy, Good To Know REALTOR®'
                  fill
                  className='h-full w-full object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent' />
                <div className='absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-900 shadow-lg'>
                  <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold'>JD</span>
                  <div>
                    Dr. Jan Duffy
                    <p className='text-xs font-medium text-blue-600'>Good To Know REALTOR® • CRS • CLHMS</p>
                  </div>
                </div>
              </div>

              <div className='space-y-6 px-6 py-7'>
                <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100'>
                  <IconSymbol symbol='💬' className='h-4 w-4 text-amber-300' ariaLabel='Testimonial icon' />
                  <span>Client spotlight</span>
                </div>
                <blockquote className='text-sm text-blue-50 md:text-base'>
                  {HERO_TESTIMONIAL.quote}
                </blockquote>
                <div className='flex items-center justify-between text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em]'>{HERO_TESTIMONIAL.name}</p>
                    <p className='mt-1 text-[11px]'>{HERO_TESTIMONIAL.location}</p>
                  </div>
                  <div className='flex items-center gap-1 text-amber-300'>
                    {[...Array(5)].map((_, index) => (
                      <IconSymbol key={index} symbol='⭐' className='h-3 w-3 text-amber-300' ariaLabel='Star rating' />
                    ))}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>Primary Areas</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>Summerlin · Henderson</p>
                    <p className='text-[11px]'>Plus Green Valley, North Las Vegas &amp; Downtown.</p>
                  </div>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>Brokerage</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>BHHS Nevada Properties</p>
                    <p className='text-[11px]'>License {SITE.license}</p>
                  </div>
                </div>

                <Link
                  href='/luxury'
                  className='inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/20'
                >
                  Explore luxury services
                  <IconSymbol symbol='→' className='h-4 w-4' ariaLabel='Arrow right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
