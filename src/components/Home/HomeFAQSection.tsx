'use client';

import { useState } from 'react';
import { HOME_FAQS } from '@/data/home-faqs';

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white" aria-labelledby="home-faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="home-faq-heading" className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Answers about Dr. Jan Duffy&apos;s Good To Know REALTOR® services in Las Vegas
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-2">
          {HOME_FAQS.map((item, index) => (
            <div
              key={item.question}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100/80 transition-colors"
                aria-expanded={openIndex === index ? 'true' : 'false'}
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 text-2xl text-amber-600 transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 pt-0 text-gray-600 border-t border-gray-100">
                  <p className="pt-3" data-speakable>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
