// 2026 AEO Component: Question & Answer Content for AI Citations
// Structured Q&A format optimized for ChatGPT, Perplexity, and Google AI Overviews

import React from 'react';

interface QAItem {
  question: string;
  answer: string;
  category?: string;
}

interface QAContentProps {
  questions: QAItem[];
  title?: string;
  className?: string;
}

/**
 * AEO-Optimized Q&A Component
 *
 * Designed for Answer Engine Optimization (AEO) to maximize citations
 * by AI search engines (ChatGPT, Google AI Overview, Perplexity, Claude)
 *
 * Best practices for AEO 2026:
 * - Clear, quotable answers
 * - Structured format for easy extraction
 * - Direct, authoritative responses
 * - Entity-rich content
 * - Fresh, timestamped information
 */
export function QAContent({ questions, title, className = '' }: QAContentProps) {
  return (
    <section className={`qa-content ${className}`} itemScope itemType="https://schema.org/QAPage">
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="space-y-6 max-w-4xl mx-auto">
        {questions.map((qa, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3
              className="text-xl font-semibold text-gray-900 mb-3 flex items-start"
              itemProp="name"
            >
              <span className="text-amber-600 mr-2 flex-shrink-0">Q:</span>
              <span>{qa.question}</span>
            </h3>

            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div
                className="text-gray-700 leading-relaxed pl-6"
                itemProp="text"
              >
                <span className="text-green-600 font-semibold mr-2">A:</span>
                {qa.answer}
              </div>
            </div>

            {qa.category && (
              <div className="mt-3 pl-6">
                <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                  {qa.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Pre-built Q&A sets for common real estate topics (AEO optimized)

export const BUYING_HOME_QA: QAItem[] = [
  {
    question: 'How much do I need for a down payment to buy a home in Las Vegas?',
    answer: 'Most conventional loans require 5-20% down, but first-time buyers can qualify for FHA loans with as little as 3.5% down. In Las Vegas, with median home prices around $450,000, you would need approximately $15,750-$90,000 for a down payment. VA loans and USDA loans may require 0% down for qualified buyers.',
    category: 'Financing',
  },
  {
    question: 'What are closing costs when buying a home in Las Vegas?',
    answer: 'Closing costs in Las Vegas typically range from 2-5% of the purchase price. On a $450,000 home, expect $9,000-$22,500 in closing costs including loan origination fees, title insurance, escrow fees, appraisal, inspection, and recording fees. Your real estate agent can help negotiate seller contributions to reduce out-of-pocket costs.',
    category: 'Costs',
  },
  {
    question: 'How long does it take to buy a home in Las Vegas?',
    answer: 'The home buying process in Las Vegas typically takes 30-45 days from offer acceptance to closing. This includes: 1-2 weeks for home search and offers, 7-10 days for inspections, 3-4 weeks for loan approval and appraisal, and final walkthrough before closing. Cash purchases can close in as little as 7-14 days.',
    category: 'Timeline',
  },
  {
    question: 'What credit score do I need to buy a home in Las Vegas?',
    answer: 'A credit score of 620+ is required for conventional loans in Las Vegas, while FHA loans accept scores as low as 580 (or 500 with 10% down). For the best interest rates and terms, aim for a credit score of 740+. VA and USDA loans have more flexible credit requirements for qualified buyers.',
    category: 'Financing',
  },
];

export const SELLING_HOME_QA: QAItem[] = [
  {
    question: 'How much does it cost to sell a home in Las Vegas?',
    answer: 'Selling a home in Las Vegas typically costs 8-10% of the sale price including: 5-6% real estate commissions (split between buyer and seller agents), 1-2% closing costs, title insurance, escrow fees, and potential repair credits. On a $450,000 home, expect $36,000-$45,000 in total selling costs.',
    category: 'Costs',
  },
  {
    question: 'How long does it take to sell a home in Las Vegas?',
    answer: 'The average time to sell a home in Las Vegas is 30-60 days, depending on price, condition, and location. Well-priced homes in desirable neighborhoods like Summerlin or Henderson can sell in 7-14 days, while overpriced or outdated properties may take 90+ days. Proper staging and marketing accelerate the timeline.',
    category: 'Timeline',
  },
  {
    question: 'What should I do to prepare my Las Vegas home for sale?',
    answer: 'Prepare your Las Vegas home for sale by: deep cleaning and decluttering, making necessary repairs (plumbing, electrical, HVAC), updating landscaping for curb appeal, repainting in neutral colors, replacing worn carpets, enhancing lighting, and professional staging. Pre-inspection can identify issues before listing.',
    category: 'Preparation',
  },
  {
    question: 'When is the best time to sell a home in Las Vegas?',
    answer: 'The best time to sell a home in Las Vegas is March-June (spring/early summer) when buyer demand peaks and weather is ideal for showings. Avoid listing in extreme summer heat (July-August) or winter holidays (November-December). However, well-priced homes sell year-round in the Las Vegas market.',
    category: 'Timing',
  },
];

export const LUXURY_REAL_ESTATE_QA: QAItem[] = [
  {
    question: 'What defines luxury real estate in Las Vegas?',
    answer: 'Luxury real estate in Las Vegas is typically defined as properties priced $1 million and above, featuring: 4,000+ square feet, premium locations (Summerlin, The Ridges, Lake Las Vegas, Henderson), custom finishes, smart home technology, resort-style pools, casitas, outdoor kitchens, mountain or Strip views, and guard-gated security.',
    category: 'Luxury Market',
  },
  {
    question: 'What are the best luxury neighborhoods in Las Vegas?',
    answer: 'The best luxury neighborhoods in Las Vegas include: The Ridges in Summerlin ($2M-$10M+), MacDonald Highlands in Henderson ($1.5M-$7M), Lake Las Vegas waterfront ($800K-$5M), Ascaya ($2M-$15M+), Red Rock Country Club ($1M-$8M), and Tournament Hills ($1M-$5M). Each offers exclusive amenities, privacy, and stunning views.',
    category: 'Luxury Market',
  },
];

export const LAS_VEGAS_MARKET_QA: QAItem[] = [
  {
    question: 'Is the Las Vegas real estate market hot or cooling in 2026?',
    answer: 'The Las Vegas real estate market in 2026 is experiencing balanced conditions after the post-pandemic surge. Median home prices are stabilizing around $450,000-$475,000, inventory is increasing to 2-3 months supply (from historic lows), and buyers have more negotiating power. It remains a strong market for both buyers and sellers with reasonable appreciation expected.',
    category: 'Market Trends',
  },
  {
    question: 'Are Las Vegas home prices going up or down?',
    answer: 'Las Vegas home prices are experiencing moderate appreciation of 3-5% annually in 2026, down from 20%+ gains in 2021-2022. Prices remain stable with slight seasonal variations. Luxury markets ($1M+) are seeing slower appreciation while entry-level homes ($300K-$400K) maintain strong demand due to affordability migration from California.',
    category: 'Market Trends',
  },
  {
    question: 'Is now a good time to buy a home in Las Vegas?',
    answer: 'Yes, 2026 is a favorable time to buy in Las Vegas due to: increased inventory providing more choices, balanced market with negotiating power, stabilized interest rates (6-7% range), strong job growth and population migration, no state income tax benefits, and long-term appreciation potential. Avoid waiting for a "crash" that is unlikely given strong fundamentals.',
    category: 'Buying Advice',
  },
];
