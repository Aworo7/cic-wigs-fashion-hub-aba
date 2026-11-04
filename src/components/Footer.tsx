import React from 'react';
import { Facebook, MessageCircle, Heart, Phone, MapPin, Scissors, TrendingUp, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Category, VERIFIED_CONTACT } from '../types';
import { LegalPageType } from './LegalModal';

interface FooterProps {
  onSelectCategory: (cat: Category) => void;
  onOpenSizeGuide: () => void;
  onOpenWigRevamp: () => void;
  onOpenWholesale: () => void;
  onOpenLegal: (page: LegalPageType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenSizeGuide,
  onOpenWigRevamp,
  onOpenWholesale,
  onOpenLegal
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Verified Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="font-serif-brand text-2xl font-medium tracking-tight text-white block">
              CIC Wigs & Fashion Hub 💕
            </a>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Direct from the commercial production network in Aba, Abia State. Founded by <strong>Confidence Okonkwo</strong>. Specializing in 100% human hair wigs, professional wig revamp treatments, luxury satin nightwear, loungewear, and B2B wholesale reseller packs.
            </p>
            <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-stone-300 text-[11px] italic">
              "{VERIFIED_CONTACT.motto}"
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/25 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all font-medium border border-emerald-500/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {VERIFIED_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={VERIFIED_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/25 text-blue-300 hover:bg-blue-600 hover:text-white transition-all font-medium border border-blue-500/30"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                <span>Facebook Page</span>
              </a>
              <a
                href={VERIFIED_CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white transition-all font-medium border border-stone-700"
              >
                <span>TikTok: @cicfashionhub</span>
              </a>
            </div>
          </div>

          {/* Col 3: Wigs & Services */}
          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px]">
              Hair & Revamp
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('wigs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Raw Human Hair Wigs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWigRevamp}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left font-medium text-rose-400 flex items-center gap-1"
                >
                  <Scissors className="w-3 h-3" /> Book Wig Revamp Service
                </button>
              </li>
              <li>
                <span className="text-stone-400">Bone-Straight Silk Pressing</span>
              </li>
              <li>
                <span className="text-stone-400">Frontal / Closure Replacement</span>
              </li>
              <li>
                <span className="text-stone-400">Custom Coloring & Steam Curls</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Wholesale & Soft Life Fashion */}
          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px]">
              Wholesale & Fashion
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={onOpenWholesale}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left font-medium text-emerald-400 flex items-center gap-1"
                >
                  <TrendingUp className="w-3 h-3" /> Wholesale Reseller Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('nightwear')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Aba Satin Nightwear & Robes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('loungewear')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Comfortable Co-Ord Loungewear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('bags')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Stylish Pebbled Handbags
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inclusive Sizing Guide (XS–3XL)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Logistics & Legal Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-medium uppercase tracking-wider text-[11px]">
              Logistics & Legal
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span className="text-emerald-400 font-semibold">{VERIFIED_CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Aba, Abia State, Nigeria</span>
              </div>
            </div>

            {/* Legal Pages Links */}
            <div className="pt-2 border-t border-stone-800 space-y-1.5">
              <div>
                <button
                  onClick={() => onOpenLegal('return-policy')}
                  className="hover:text-white text-stone-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3 text-rose-400" />
                  <span>Return Policy (No Intimates / 48hrs Wigs)</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => onOpenLegal('shipping')}
                  className="hover:text-white text-stone-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Truck className="w-3 h-3 text-emerald-400" />
                  <span>Shipping & Waybill (Peace/Jammal/GIGM)</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => onOpenLegal('privacy-policy')}
                  className="hover:text-white text-stone-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-blue-400" />
                  <span>Privacy Policy</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright & Legal Links Bar */}
        <div className="pt-10 mt-10 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {VERIFIED_CONTACT.legalName}. Founded by Confidence Okonkwo. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegal('return-policy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Return Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('shipping')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Shipping & Waybill
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('privacy-policy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>in Aba, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
