import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Las Vegas Luxury Home Value Estimate | Summerlin & Henderson',
  description:
    'Instant Las Vegas home value estimate plus broker insight from Dr. Jan Duffy, Good To Know REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Summerlin, Henderson, and valley-wide. 702-500-1955.',
  keywords: [
    'Las Vegas home value',
    'luxury home valuation Summerlin',
    'Henderson property estimate',
    'Dr. Jan Duffy',
    'Berkshire Hathaway Nevada Properties',
  ],
  url: '/home-value',
  image: '/images/home-value-calculator-og.jpg',
});

export default function HomeValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

