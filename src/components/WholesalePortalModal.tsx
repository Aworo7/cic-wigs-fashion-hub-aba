import React, { useState } from 'react';
import { X, TrendingUp, Sparkles, MessageCircle, Check, Copy, CheckCheck } from 'lucide-react';
import { WHOLESALE_PACKS, PRODUCTS } from '../data/products';
import { VERIFIED_CONTACT, Currency, WholesalePack } from '../types';

interface WholesalePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const WholesalePortalModal: React.FC<WholesalePortalModalProps> = ({
  isOpen,
  onClose,
  currency
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPriceSheet = () => {
    let sheet = `📋 *CIC WIGS & FASHION HUB - OFFICIAL WHOLESALE PRICE LIST*\n`;
    sheet += `📍 Direct from Aba Production Hub | Founder: Confidence Okonkwo\n`;
    sheet += `📞 Official WhatsApp: ${VERIFIED_CONTACT.phoneDisplay}\n\n`;
    sheet += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    
    (PRODUCTS || []).forEach((p, idx) => {
      if (p?.isWholesaleEligible) {
        const wholesaleVal = p?.wholesalePriceNGN ?? 0;
        const retailVal = p?.priceNGN ?? p?.price ?? 0;
        const wholesaleUSD = p?.wholesalePriceUSD ?? 0;
        const retailUSD = p?.priceUSD ?? 0;

        const wholesale = currency === 'NGN' ? `₦${(wholesaleVal || 0).toLocaleString()}` : `$${(wholesaleUSD || 0).toLocaleString()}`;
        const retail = currency === 'NGN' ? `₦${(retailVal || 0).toLocaleString()}` : `$${(retailUSD || 0).toLocaleString()}`;
        const profit = currency === 'NGN' 
          ? `₦${(Math.max(0, (retailVal || 0) - (wholesaleVal || 0))).toLocaleString()}` 
          : `$${(Math.max(0, (retailUSD || 0) - (wholesaleUSD || 0))).toLocaleString()}`;
        
        sheet += `${idx + 1}. *${p?.name || 'Item'}*\n`;
        sheet += `   Wholesale Price: ${wholesale} (Min: ${p?.minWholesaleQty || 6} pcs)\n`;
        sheet += `   Suggested Retail: ${retail} (Profit: ${profit}/pc)\n\n`;
      }
    });

    sheet += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    sheet += `*${VERIFIED_CONTACT.motto}*\n`;
    sheet += `Ready to order? Chat Confidence: https://wa.me/${VERIFIED_CONTACT.phoneClean}`;

    navigator.clipboard.writeText(sheet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generatePackWhatsAppUrl = (pack: WholesalePack) => {
    const packPrice = pack?.price ?? pack?.buyInNGN ?? 0;
    const packProfit = pack?.projectedProfitNGN ?? 0;
    const text = `*WHOLESALE STARTER PACK INQUIRY - CIC HUB ABA*\n\n` +
      `Hello Confidence! 💕 I want to fetch money with nighties and fashion!\n\n` +
      `📦 *Selected Bundle:* ${pack?.name || 'Starter Bundle'}\n` +
      `💰 *Buy-in:* ₦${(packPrice || 0).toLocaleString()}\n` +
      `✨ *Contents:* ${pack?.piecesCount || `${pack?.items || 10} Pieces`}\n` +
      `📈 *Projected Profit:* ₦${(packProfit || 0).toLocaleString()}\n\n` +
      `Please send me your account details and current in-stock color selections to begin. Thank you!`;

    return `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-800">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>B2B Wholesale & Dropshipping Portal</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl font-medium text-stone-950 mt-1">
              "Come Let’s Fetch Money With Nighties"
            </h2>
            <p className="text-xs text-stone-600 italic">
              — Confidence Okonkwo (Founder, CIC Nightwear Aba)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-7 text-xs text-stone-700">
          
          {/* Reseller Value Prop Banner */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-2xl p-5 sm:p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-rose-300 font-semibold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-4 h-4" />
              <span>Direct From Aba Manufacturing Hub</span>
            </div>
            <h3 className="font-serif-brand text-xl sm:text-2xl text-white font-medium">
              Start Your Fashion Brand With Zero Physical Shop Required
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
              You don’t need millions or a shop rent in Lagos or Abuja. With just your phone, data, and our direct Aba factory prices, you can resell high-demand silk nighties, loungewear, and luxury human hair wigs at 40%–70% profit margins!
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyPriceSheet}
                className="px-4 py-2 bg-white text-stone-900 rounded-lg font-semibold text-xs hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Wholesale Price Sheet Copied!' : 'Copy Full Wholesale Price Sheet'}</span>
              </button>
              <a
                href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(
                  "Hello Confidence! I am an interested wholesaler/reseller. Please add me to your wholesale broadcast list."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-xs hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Join Wholesalers WhatsApp Broadcast</span>
              </a>
            </div>
          </div>

          {/* Section 1: Reseller Starter Packs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif-brand text-lg font-semibold text-stone-950">
                1. Curated Wholesale Starter Packs
              </h4>
              <span className="text-stone-500 text-[11px]">Instant turn-key bundles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(WHOLESALE_PACKS || []).map((pack) => {
                const packPrice = pack?.price ?? pack?.buyInNGN ?? 0;
                const packProfit = pack?.projectedProfitNGN ?? 0;
                const isFeatured = pack?.id === 1 || pack?.id === 'starter-15k';

                return (
                  <div
                    key={String(pack?.id)}
                    className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                      isFeatured
                        ? 'border-rose-400 bg-rose-50/30 ring-1 ring-rose-400'
                        : 'border-stone-200 bg-white hover:border-stone-400'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 bg-rose-100/70 px-2 py-0.5 rounded">
                          {pack?.targetAudience || 'Reseller Bundle'}
                        </span>
                      </div>

                      <div>
                        <h5 className="font-serif-brand text-base font-semibold text-stone-950">
                          {pack?.name || 'Bundle'}
                        </h5>
                        <div className="text-xl font-bold text-stone-950 mt-1 tabular-nums">
                          ₦{(packPrice || 0).toLocaleString()}
                          <span className="text-xs font-normal text-stone-500 ml-1">
                            ({pack?.piecesCount || `${pack?.items || 10} Items`})
                          </span>
                        </div>
                      </div>

                      {packProfit > 0 && (
                        <div className="p-2.5 bg-emerald-50 rounded-lg text-[11px] text-emerald-800 font-medium border border-emerald-200/60">
                          💰 Estimated Profit: <strong>+₦{(packProfit || 0).toLocaleString()}</strong>
                        </div>
                      )}

                      {pack?.benefits && pack.benefits.length > 0 && (
                        <ul className="space-y-1 text-[11px] text-stone-600">
                          {pack.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="pt-4 mt-3 border-t border-stone-200">
                      <a
                        href={generatePackWhatsAppUrl(pack)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Order This Pack</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Transparent Wholesale Price Comparison Table */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif-brand text-lg font-semibold text-stone-950">
                  2. Itemized Wholesale Catalog Grid (Live Aba Factory Rates)
                </h4>
                <p className="text-[11px] text-stone-500">
                  Bulk order eligibility starts at minimum 3–6 pieces per design.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100/80 text-stone-800 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-2.5 px-3 border-b border-stone-200">Product Line</th>
                    <th className="py-2.5 px-3 border-b border-stone-200">Category</th>
                    <th className="py-2.5 px-3 border-b border-stone-200">Retail Price</th>
                    <th className="py-2.5 px-3 border-b border-stone-200 text-rose-900 bg-rose-50/60">Wholesale Price (Aba)</th>
                    <th className="py-2.5 px-3 border-b border-stone-200 text-emerald-800">Your Profit / Pc</th>
                    <th className="py-2.5 px-3 border-b border-stone-200">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 tabular-nums">
                  {(PRODUCTS || []).filter((p) => p?.isWholesaleEligible).map((item) => {
                    const retailPrice = item?.priceNGN ?? item?.price ?? 0;
                    const wholesalePrice = item?.wholesalePriceNGN ?? 0;
                    const profitNGN = Math.max(0, retailPrice - wholesalePrice);

                    return (
                      <tr key={item?.id || Math.random()} className="hover:bg-stone-50/70">
                        <td className="py-2.5 px-3 font-semibold text-stone-950">
                          {item?.name}
                        </td>
                        <td className="py-2.5 px-3 capitalize text-stone-500">
                          {item?.category?.replace('-', ' ') || 'Fashion'}
                        </td>
                        <td className="py-2.5 px-3 line-through text-stone-400">
                          ₦{(retailPrice || 0).toLocaleString()}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-rose-950 bg-rose-50/40">
                          ₦{(wholesalePrice || 0).toLocaleString()}{' '}
                          <span className="text-[10px] text-stone-500 font-normal">
                            (Min: {item?.minWholesaleQty || 6})
                          </span>
                        </td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-700">
                          +₦{(profitNGN || 0).toLocaleString()}
                        </td>
                        <td className="py-2.5 px-3">
                          <a
                            href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(
                              `Hello Confidence! I want to order bulk wholesale of:\n*${item?.name || 'Item'}*\nWholesale Rate: ₦${(wholesalePrice || 0).toLocaleString()}\nQuantity: 6+ pcs`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                          >
                            <MessageCircle className="w-3 h-3" /> Bulk Order
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-stone-600">
            Have questions about waybill dispatch from Aba? Confidence is 1 click away.
          </span>
          <a
            href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(
              "Hello Confidence! I want to inquire about bulk wholesale orders and waybill logistics from Aba."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium flex items-center gap-1.5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on Verified WhatsApp ({VERIFIED_CONTACT.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
