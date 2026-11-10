/**
 * Single source of truth for visible NAP / CTA on goodtoknowrealtor.com.
 * Must match Google Business Profile. Schema reads these via SEO_CONFIG in src/lib/seo.ts.
 */
export const SITE = {
  agentName: 'Dr. Jan Duffy',
  brand: 'Good To Know REALTOR®',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  siteUrl: 'https://www.goodtoknowrealtor.com',
  phoneDisplay: '(702) 500-1955',
  phoneTel: '702-500-1955',
  email: 'info@goodtoknowrealtor.com',
  address: {
    street: '9406 W Lake Mead Blvd, Suite 100',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '89134',
    country: 'US',
    full: '9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134',
  },
  geo: {
    latitude: 36.1967,
    longitude: -115.2929,
  },
  openingHoursDisplay: {
    weekdays: 'Monday–Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 10:00 AM – 4:00 PM',
    sunday: 'Sunday: By appointment',
  },
  maps: {
    embedUrl:
      'https://www.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134',
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+REALTOR+Las+Vegas',
  },
} as const;
