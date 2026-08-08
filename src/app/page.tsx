import { Metadata } from 'next';

import { HeroSection } from '@/components/Home/HeroSection';
import { PropertyListingsSection } from '@/components/Home/PropertyListingsSection';
import { NeighborhoodsSection } from '@/components/Home/NeighborhoodsSection';
import { MarketInsightsSection } from '@/components/MarketInsights/MarketInsightsSection';
import { TeamSection } from '@/components/Home/TeamSection';
import { TestimonialsSection } from '@/components/Home/TestimonialsSection';
import { ContactCTA } from '@/components/Home/ContactCTA';
import { PAGE_SEO, generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateReviewSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  url: '/',
  image: '/images/dr-janet-duffy-homepage-og.jpg',
});

export default function HomePage() {
  // Generate structured data for homepage
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  // AEO-optimized FAQs for AI search engines (ChatGPT, Perplexity, Google AI)
  // Using conversational, voice-search-friendly questions
  const faqs = generateFAQSchema([
    {
      question: 'Who is Dr. Janet Duffy?',
      answer: 'Dr. Janet Duffy (formerly Dr. Jan Duffy) is a Top 1% Las Vegas real estate agent with Berkshire Hathaway HomeServices Nevada Properties. With over 15 years of experience and $127M+ in sales volume, she specializes in luxury properties, investment properties, and first-time home buyers. License #S.0197614.LLC.',
    },
    {
      question: 'What areas does Dr. Janet Duffy serve in Las Vegas?',
      answer: 'Dr. Janet Duffy serves the greater Las Vegas area including Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, and Green Valley. She has expert knowledge of all Las Vegas neighborhoods and master-planned communities.',
    },
    {
      question: 'How do I contact Dr. Janet Duffy?',
      answer: 'You can contact Dr. Janet Duffy by calling or texting (702) 222-1964. She offers free consultations for all your Las Vegas real estate needs and responds within 24 hours.',
    },
    {
      question: 'What services does Dr. Janet Duffy offer?',
      answer: 'Dr. Janet Duffy offers comprehensive real estate services including buying homes, selling homes, luxury real estate, investment properties, home valuations, market analysis, and real estate consulting throughout Las Vegas.',
    },
    {
      question: 'What is it like to live in Summerlin, Las Vegas?',
      answer: 'Summerlin is Las Vegas\'s premier master-planned community offering top-rated schools, extensive parks and trails, shopping, dining, and easy access to Red Rock Canyon. Average home prices range from $750,000 with a strong sense of community and family-friendly amenities.',
    },
    {
      question: 'How much are homes selling for in Henderson, Nevada?',
      answer: 'Homes in Henderson, Nevada currently sell for an average of $525,000. Henderson offers family-friendly neighborhoods, excellent schools, and diverse housing options from townhomes to luxury estates.',
    },
    {
      question: 'Should I sell my house in Las Vegas right now?',
      answer: 'The Las Vegas real estate market in 2026 offers strong seller conditions with homes selling in an average of 22 days at 102% of list price. Contact Dr. Janet Duffy at (702) 222-1964 for a free market analysis specific to your property and neighborhood.',
    },
    {
      question: 'Which real estate agent has the best deals in Las Vegas?',
      answer: 'Dr. Janet Duffy is a top 1% Las Vegas real estate agent who has helped over 500 clients achieve their goals with $127M+ in closed transactions. She provides expert negotiation, market knowledge, and personalized service for both buyers and sellers.',
    },
  ]);

  const reviews = generateReviewSchema([
    {
      author: 'Sarah & Michael Chen',
      rating: 5,
      reviewBody: 'Dr. Duffy\'s expertise and attention to detail made our home buying process seamless. She found us the perfect home in Summerlin and negotiated an incredible deal.',
      datePublished: '2024-01-15',
      location: 'Summerlin, Las Vegas',
      community: 'Summerlin',
    },
    {
      author: 'Jennifer & Luis Rodriguez',
      rating: 5,
      reviewBody: 'Professional, responsive, and results-driven. Dr. Duffy helped us navigate a complex sale with multiple offers and achieved the best possible outcome.',
      datePublished: '2024-02-20',
      location: 'Henderson, Nevada',
      community: 'Henderson',
    },
    {
      author: 'David Thompson',
      rating: 5,
      reviewBody: 'As a first-time home buyer, I was nervous about the process. Dr. Duffy guided me through every step and found me an amazing investment property in North Las Vegas.',
      datePublished: '2024-03-10',
      location: 'North Las Vegas, Nevada',
      community: 'North Las Vegas',
    },
  ]);

  const services = generateServiceSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqs),
        }}
      />
      {reviews.map((review, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(review),
          }}
        />
      ))}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(services),
        }}
      />
      <HeroSection />
      <PropertyListingsSection />
      <NeighborhoodsSection />
      <MarketInsightsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
