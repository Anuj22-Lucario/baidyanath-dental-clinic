import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'What is the consultation fee at Baidyanath Dental Clinic?',
    answer: 'Our initial expert consultation fee starts at just ₹300.',
  },
  {
    question: 'Are root canal treatments and dental extractions painful?',
    answer: 'We utilize modern, pain-free techniques and precise local anesthesia to ensure complete patient comfort.',
  },
  {
    question: 'Is emergency dental care available 24/7?',
    answer: 'Yes, we offer round-the-clock emergency assistance for acute dental pain and injuries.',
  },
  {
    question: 'Do I need a prior appointment for check-ups?',
    answer: 'Walk-ins are welcome during OPD hours, but booking in advance via WhatsApp ensures minimal wait time.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            <HelpCircle className="h-4 w-4" />
            Helpful Answers
          </span>
          <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={`overflow-hidden rounded-2xl bg-white shadow-card transition-all ${isOpen ? 'ring-1 ring-primary-200' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-850">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
