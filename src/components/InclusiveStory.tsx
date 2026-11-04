import React from 'react';
import { Facebook, Sparkles, Heart, ShieldCheck, Star, MapPin, TrendingUp, Scissors, MessageCircle } from 'lucide-react';
import { REVIEWS } from '../data/products';
import { VERIFIED_CONTACT } from '../types';

interface InclusiveStoryProps {
  onOpenWigRevamp: () => void;
  onOpenWholesale: () => void;
}

export const InclusiveStory: React.FC<InclusiveStoryProps> = ({
  onOpenWigRevamp,
  onOpenWholesale
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
              <span className="w-6 h-px bg-stone-400" />
              <span>Behind the Brand · Aba Production Hub</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-950 leading-tight">
              Meet Confidence Okonkwo & The CIC Vision
            </h2>

            <p className="text-stone-700 text-base leading-relaxed font-light">
              Founded by <strong>Confidence Okonkwo</strong> (Okonkwo Confidence Oluebube) in the commercial engine of <strong>Aba, Abia State</strong>, CIC Wigs & Fashion Hub was built with one unapologetic mission: empowering women to look breathtakingly luxurious while building personal wealth.
            </p>

            <div className="p-4 bg-white/90 rounded-xl border border-stone-300 shadow-2xs space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>The Reseller Revolution:</span>
              </div>
              <p className="text-stone-800 text-sm italic font-medium">
                "{VERIFIED_CONTACT.motto}"
              </p>
              <p className="text-stone-600 text-xs">
                With a low-ticket buy-in starting at just <strong>₦15,000</strong>, Confidence has trained hundreds of young women, university students, and stay-at-home mothers across Nigeria to become independent fashion merchants without paying a dime for brick-and-mortar rent.
              </p>
            </div>

            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              Operating as a digital-first, cloud-based merchant directly out of Aba’s renowned manufacturing and distribution network, CIC ships daily via commercial transport parks and logistics couriers directly to major hubs (Lagos, Abuja, Port Harcourt, Enugu) and international clients.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenWholesale}
                className="inline-flex items-center gap-2 px-5 py-3 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>View Wholesale Price Grid & Starter Packs</span>
              </button>

              <button
                onClick={onOpenWigRevamp}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-stone-900 border border-stone-300 text-xs font-semibold rounded-lg hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-rose-800" />
                <span>Book Wig Revamp Service</span>
              </button>
            </div>
          </div>

          {/* Right Visual Bento Feature */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
                <Scissors className="w-5 h-5 text-rose-800" />
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  Wig Revamp Mastery
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Deep moisture detox, lace repairs, closure ventilation, and bone-straight silk pressing for tired hair pieces.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
                <Sparkles className="w-5 h-5 text-rose-800" />
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  Aba Direct Factory Nightwear
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Liquid silk slip dresses and kimono robes cut for XS to 3XL curves with uncompromised comfort.
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="p-5 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
                <MapPin className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  Nationwide Park Waybills
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Direct dispatch from Aba parks (Peace, Jammal, Libra, God is Good) straight to your city within 24–48 hours.
                </p>
              </div>

              <div className="p-5 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-xs space-y-2">
                <div className="text-xs font-medium uppercase tracking-widest text-stone-400">
                  Concierge Support
                </div>
                <div className="font-serif-brand text-xl font-medium text-white">
                  Direct Stylist Consultation
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Personal 1-on-1 assistance for wholesale onboarding, custom wig measurements, and urgent waybill dispatches.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Real Customer Reviews Section */}
        <div className="pt-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Verified Aba Dispatch Feedback
            </div>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-medium text-stone-950">
              Trusted by Resellers & Hair Lovers Across Nigeria
            </h3>
            <p className="text-xs text-stone-600">
              Real reviews from verified retail and wholesale clients of Confidence Okonkwo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-xs">
                  <div className="font-semibold text-stone-950">{rev.author}</div>
                  <div className="text-stone-500 text-[11px]">{rev.location}</div>
                  <div className="text-stone-400 text-[10px] mt-1 font-medium truncate">
                    {rev.product}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
