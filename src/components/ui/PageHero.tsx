import React from 'react';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  gradientFromClassName?: string;
  gradientToClassName?: string;
  children?: React.ReactNode; // CTA buttons or any extra content
  backgroundImageUrl?: string; // optional background image for more visual context
};

export function PageHero({
  title,
  subtitle,
  gradientFromClassName = 'from-[#0f1419]',
  gradientToClassName = 'to-[#1a2332]',
  children,
  backgroundImageUrl,
}: PageHeroProps) {
  return (
    <section className={`relative py-16 lg:py-24 text-white bg-gradient-to-br ${gradientFromClassName} ${gradientToClassName}`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,98,0.12),_transparent_55%)]' />
      {backgroundImageUrl ? (
        <div
          className='absolute inset-0 opacity-15'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : null}
      <div className='container relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <span className='luxury-accent-line mx-auto' aria-hidden='true' />
          <h1 className='font-display text-4xl lg:text-6xl font-semibold mb-6 tracking-tight'>
            {title}
          </h1>
          {subtitle ? (
            <p className='text-xl lg:text-2xl text-[#e8d5a8]/90 leading-relaxed font-light'>
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
