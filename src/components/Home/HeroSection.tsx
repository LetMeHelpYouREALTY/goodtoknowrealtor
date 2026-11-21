'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AgentPortrait } from '@/components/ui/AgentPortrait';
import { RealScoutSimpleSearch } from '@/components/PropertySearch/RealScoutSimpleSearch';

const HIGHLIGHT_STATS = [
  {
    label: 'Average Days on Market',
    value: '6',
    helper: 'vs. city average of 27',
  },
  {
    label: 'Over Asking Achieved',
    value: '$125K+',
    helper: 'for luxury listings in 2024',
  },
  {
    label: 'Client Satisfaction',
    value: '4.97/5',
    helper: 'from 500+ verified reviews',
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
      {/* Background overlays */}
      <div className='pointer-events-none absolute inset-0 opacity-70 mix-blend-screen'>
        <div className='absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-[#c9a962]/25 blur-[160px]' />
        <div className='absolute right-[-180px] top-1/2 h-[520px] w-[520px] rounded-full bg-[#1a2332]/60 blur-[160px]' />
      </div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,98,0.14),_transparent_55%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0)_60%)]' />

      <div className='container relative z-10 mx-auto px-4 py-16 sm:py-20 lg:py-28'>
        <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
          {/* Left rail */}
          <div className='space-y-8 text-center lg:text-left'>
            <div className='luxury-badge mx-auto lg:mx-0'>
              <span>Berkshire Hathaway HomeServices Nevada Properties</span>
            </div>

            <div className='space-y-5'>
              <h1 className='font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight'>
                <span className='bg-gradient-to-r from-[#dfc07a] via-[#f5f0e8] to-[#c9a962] bg-clip-text text-transparent'>
                  Las Vegas & Henderson luxury real estate
                </span>{' '}
                with Dr. Jan Duffy, Good To Know REALTOR®
              </h1>
              <p className='mx-auto max-w-2xl text-base text-[#e8d5a8]/80 sm:text-lg lg:text-xl font-light leading-relaxed'>
                Unlock private inventory, command $50K–$125K over asking, and build wealth with the only Las Vegas advisor who combines doctoral market research with 20+ years of negotiation mastery.
              </p>
            </div>

            {/* Stats */}
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

            {/* CTAs */}
            <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start'>
              <a
                href='tel:702-500-1955'
                className='btn-luxury-primary inline-flex w-full sm:w-auto'
              >
                Call (702) 500-1955
              </a>
              <Link href='#book-market' className='btn-luxury-outline inline-flex w-full sm:w-auto'>
                Schedule Consultation
              </Link>
            </div>

            {/* Search */}
            <div className='mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-900/30 backdrop-blur-lg lg:mx-0'>
              <div className='mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/70'>
                <span>Find your next address</span>
                <span className='rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80'>Powered by RealScout</span>
              </div>
              <RealScoutSimpleSearch />
            </div>
          </div>

          {/* Right rail card */}
          <div className='relative mx-auto w-full max-w-lg lg:mx-0'>
            <div className='relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-2xl'>
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80'
                  alt='Las Vegas luxury skyline'
                  fill
                  className='h-full w-full object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent' />
                <div className='absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-900 shadow-lg'>
                  <AgentPortrait size='sm' className='!inline-flex shrink-0' />
                  <div>
                    Dr. Jan Duffy
                    <p className='text-xs font-medium text-blue-600'>Good To Know REALTOR® · License S.0197614.LLC</p>
                  </div>
                </div>
              </div>

              <div className='space-y-6 px-6 py-7'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-blue-100'>
                  Client spotlight
                </p>
                <blockquote className='text-sm text-blue-50 md:text-base'>
                  {HERO_TESTIMONIAL.quote}
                </blockquote>
                <div className='flex items-center justify-between text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em]'>{HERO_TESTIMONIAL.name}</p>
                    <p className='mt-1 text-[11px]'>{HERO_TESTIMONIAL.location}</p>
                  </div>
                  <p className='text-amber-300 font-medium' aria-label='5 out of 5 rating'>
                    5/5
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs text-blue-100/90'>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>2024 Buyer Wins</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>$2.3M Portfolio</p>
                    <p className='text-[11px]'>Cash flows $8.2K/mo across three units.</p>
                  </div>
                  <div>
                    <p className='font-semibold uppercase tracking-[0.18em] text-white'>Seller Wins</p>
                    <p className='mt-1 text-sm font-semibold text-amber-200'>$132K Over Ask</p>
                    <p className='text-[11px]'>Summerlin estate closed in only six days.</p>
                  </div>
                </div>

                <Link
                  href='/why-list-with-us'
                  className='inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/20'
                >
                  Discover the playbook →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}