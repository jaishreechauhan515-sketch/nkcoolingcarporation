import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Everything you need to know about booking an appliance technician with NK Cooling Corporation.
          </p>
        </div>

        {/* FAQ Accordion items */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm transition duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-zinc-50/80 transition"
                >
                  <span className="font-heading font-extrabold text-base sm:text-lg text-zinc-900">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-zinc-100 text-zinc-700 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-600 text-sm sm:text-base leading-relaxed font-medium border-t border-zinc-100 bg-zinc-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
