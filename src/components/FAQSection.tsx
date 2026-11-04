import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Scissors, Package, Ruler, TrendingUp, Truck } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  icon: React.ReactNode;
  answer: string;
}

export const FAQSection: React.FC<{
  onOpenWigRevamp: () => void;
  onOpenWholesale: () => void;
  onOpenSizeGuide: () => void;
}> = ({ onOpenWigRevamp, onOpenWholesale, onOpenSizeGuide }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Do you revamp synthetic wigs?',
      icon: <Scissors className="w-4 h-4 text-rose-800" />,
      answer:
        'We specialize strictly in 100% human hair wigs, raw virgin hair, and premium human-blend pieces. Standard synthetic synthetic fiber cannot endure our signature thermal hot-comb silk press, bleach treatments, or high-temperature steam curling without melting. If you are unsure whether your hair is 100% human hair, you can send in photos or bring it to our Aba studio for testing.'
    },
    {
      id: 'faq-2',
      question: 'Can I bring my own hair?',
      icon: <Package className="w-4 h-4 text-stone-800" />,
      answer:
        'Yes, absolutely! You can send in your own hair bundles, frontals, closures, or old tangled wigs from anywhere in Nigeria (Lagos, Abuja, Port Harcourt, etc.) to our Aba production studio. We handle custom wig making, lace replacement, ventilating bald spots, deep protein treatment, and flawless bone-straight silk pressing.'
    },
    {
      id: 'faq-3',
      question: "What if XS-3XL doesn't fit?",
      icon: <Ruler className="w-4 h-4 text-rose-800" />,
      answer:
        'Our nightwear and loungewear pieces are constructed with generous 4-way micro-elasticity, bias-cut drapes, and adjustable slide straps designed to flatter varied curves. However, if your body measurements fall outside standard XS–3XL or you have custom bust/height requirements, our tailoring team in Aba can custom-cut and adjust your set. Simply click our Size Guide or chat with our styling concierge.'
    },
    {
      id: 'faq-4',
      question: 'How to join ₦15k reseller pack?',
      icon: <TrendingUp className="w-4 h-4 text-emerald-700" />,
      answer:
        'Joining is fast and seamless! You don’t need a physical shop or millions in capital. With our ₦15,000 Micro-Reseller Starter Pack, you receive 3 bestselling luxury satin nightwear sets, unwatermarked high-resolution marketing photos/videos for your WhatsApp status/TikTok, and direct coaching from Confidence Okonkwo to start selling and making 40%–60% profit immediately.'
    },
    {
      id: 'faq-5',
      question: 'How to track waybill?',
      icon: <Truck className="w-4 h-4 text-blue-800" />,
      answer:
        'The moment your package or revamped wig is dispatched from Aba via commercial transport parks (Peace Mass, Jammal, Libra) or courier (GIGM), our logistics desk sends a photo of your official Waybill Receipt on WhatsApp. This receipt includes the vehicle registration/manifest number, the driver’s or park clerk’s phone number, and estimated arrival time (typically 24–48 hours to Lagos, Abuja, Port Harcourt, and other states).'
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
            <HelpCircle className="w-3.5 h-3.5 text-rose-800" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-medium text-stone-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto font-light">
            Everything you need to know about our Aba hair revamp services, nightwear sizing, reseller packages, and nationwide waybill dispatch.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-stone-200 bg-[#FAF8F5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-white rounded-lg border border-stone-200/80 shadow-2xs shrink-0">
                      {faq.icon}
                    </span>
                    <span className="font-serif-brand text-base sm:text-lg font-medium text-stone-950">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-200/60 bg-white">
                    <p className="mt-2 font-light">{faq.answer}</p>

                    {/* Contextual Action Shortcut */}
                    {faq.id === 'faq-1' && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenWigRevamp}
                          className="text-xs font-semibold text-rose-900 underline hover:text-stone-950 cursor-pointer"
                        >
                          Book your human hair revamp consultation →
                        </button>
                      </div>
                    )}
                    {faq.id === 'faq-3' && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenSizeGuide}
                          className="text-xs font-semibold text-stone-900 underline hover:text-rose-900 cursor-pointer"
                        >
                          View full XS–3XL measurement chart →
                        </button>
                      </div>
                    )}
                    {faq.id === 'faq-4' && (
                      <div className="mt-3">
                        <button
                          onClick={onOpenWholesale}
                          className="text-xs font-semibold text-emerald-800 underline hover:text-stone-950 cursor-pointer"
                        >
                          Explore ₦15k, ₦45k & ₦120k wholesale reseller bundles →
                        </button>
                      </div>
                    )}
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
