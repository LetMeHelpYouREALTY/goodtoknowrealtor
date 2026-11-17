'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CalendlyButton from '@/components/Calendly/CalendlyButton';
import type { CalendlyEvent } from '@/lib/calendly';

interface ConsultationCTAProps {
  variant?: 'primary' | 'outline' | 'white';
  source?: string;
  className?: string;
  showPhone?: boolean;
}

export function ConsultationCTA({ 
  variant = 'primary', 
  className = '',
  showPhone = true 
}: ConsultationCTAProps) {
  const pathname = usePathname() || '/';
  // Booking replaces the old consultation form (Dr. Jan's rule: Calendly, not forms).
  const event: CalendlyEvent = pathname.startsWith('/selling')
    ? 'listing'
    : pathname.startsWith('/buying') || pathname.startsWith('/listings')
      ? 'buyer'
      : 'general';

  const buttonClasses = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    white: 'bg-white text-blue-800 hover:bg-blue-50',
  };

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
        <CalendlyButton event={event} className={`${buttonClasses[variant]} px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg`}>
          Schedule Consultation
        </CalendlyButton>
        {showPhone && (
          <Link
            href='tel:702-500-1955'
            className={variant === 'white' 
              ? 'border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
              : 'btn btn-outline px-8 py-4 rounded-lg font-bold text-lg'
            }
          >
            Call (702) 500-1955
          </Link>
        )}
      </div>
    </>
  );
}

