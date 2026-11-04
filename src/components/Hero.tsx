import React from 'react';
import { ArrowDown, Facebook, Sparkles, Scissors, TrendingUp, MessageCircle, MapPin, PackageCheck } from 'lucide-react';
import { VERIFIED_CONTACT } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onOpenWigRevamp: () => void;
  onOpenWholesale: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenWigRevamp,
  onOpenWholesale
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EC] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Story & Verified Founder Context */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Verified Origin & Founder Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600">
              <span className="inline-flex items-center gap-1.5 bg-stone-900 text-stone-100 px-2.5 py-0.5 rounded text-[11px] font-medium uppercase tracking-wide">
                <MapPin className="w-3 h-3 text-rose-300" />
                <span>Aba Hub, Abia State, Nigeria</span>
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-700">Founded by <strong>Confidence Okonkwo</strong></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-950 leading-[1.12] text-balance">
              Premium Human Hair Wigs, Expert Revamp & Aba Luxury Nightwear.
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-stone-700 font-light leading-relaxed max-w-2xl">
              Welcome to <strong>CIC Wigs and Fashion Hub 💕</strong> (CIC Nightwear Aba). Direct from our Aba production and styling center, we provide 100% raw human hair wigs, professional wig restoration, featherlight satin sleepwear, stylish bags, and high-profit B2B wholesale.
            </p>

            {/* Founder Slogan Banner */}
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/90 shadow-2xs text-xs text-stone-800 space-y-1">
              <div className="font-serif-brand font-semibold text-stone-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-700" />
                <span>Confidence’s Wholesale Reseller Philosophy:</span>
              </div>
              <p className="text-stone-600 italic">
                "{VERIFIED_CONTACT.motto}"
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="px-5 py-3 bg-stone-900 text-stone-50 text-xs sm:text-sm font-semibold rounded-lg hover:bg-stone-800 transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Shop Catalog</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenWigRevamp}
                className="px-4 py-3 bg-rose-900 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-rose-800 transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                <span>Book Wig Revamp</span>
              </button>

              <button
                onClick={onOpenWholesale}
                className="px-4 py-3 bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Wholesale Packs (From ₦15k)</span>
              </button>

              <a
                href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=Hello%20Confidence!%20💕%20I%20am%20chatting%20from%20your%20website%20to%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white text-stone-900 text-xs sm:text-sm font-medium border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Proof Strip */}
            <div className="pt-4 border-t border-stone-300/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <PackageCheck className="w-4 h-4 text-stone-800 shrink-0" />
                <span>Daily Waybill Dispatch from Aba</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scissors className="w-4 h-4 text-stone-800 shrink-0" />
                <span>48–72h Wig Revamp Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-stone-800 shrink-0" />
                <span>Dropshipping Support Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dual Showcase (Wig & Nightwear) */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Hero Card 1: Wigs & Revamp Showcase */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-stone-200 group">
              <img
                src="/images/product_human_hair_wig_1793771832193.jpg"
                alt="CIC Wigs 100% human hair bone straight frontal wig"
                onError={(e) => {
                  if (e.currentTarget.src.includes('/images/')) {
                    e.currentTarget.src = e.currentTarget.src.replace('/images/', '/');
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/85 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white flex items-center justify-between">
                <div>
                  <div className="font-serif-brand font-semibold text-sm">
                    Raw Bone Straight Frontal Wigs
                  </div>
                  <div className="text-[11px] text-stone-300">
                    100% Single-Donor Virgin Hair · Aba Studio
                  </div>
                </div>
                <button
                  onClick={onOpenWigRevamp}
                  className="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
                >
                  Revamp
                </button>
              </div>
            </div>

            {/* Hero Card 2: Luxury Satin Nightwear Aba */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-16/9 bg-stone-200 group">
              <img
                src="/images/hero_cic_nightwear_loungewear_1793771101080.jpg"
                alt="CIC Nightwear Aba satin slip dress and kimono robe"
                onError={(e) => {
                  if (e.currentTarget.src.includes('/images/')) {
                    e.currentTarget.src = e.currentTarget.src.replace('/images/', '/');
                  }
                }}
                className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/60 flex items-center justify-between">
                <div>
                  <div className="font-serif-brand font-semibold text-stone-950 text-xs sm:text-sm">
                    Luxury Silk Nightwear (Wholesale & Retail)
                  </div>
                  <div className="text-[10px] text-stone-500">
                    Direct Aba Factory Pricing · Resell at 60% Profit
                  </div>
                </div>
                <button
                  onClick={onOpenWholesale}
                  className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
                >
                  Wholesale
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
