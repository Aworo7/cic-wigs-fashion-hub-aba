import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Upload, CheckCircle2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { VERIFIED_CONTACT, Currency } from '../types';

interface WigRevampModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const WigRevampModal: React.FC<WigRevampModalProps> = ({ isOpen, onClose, currency }) => {
  const [selectedTier, setSelectedTier] = useState('Bone-Straight Silk Press & Steam Treatment');
  const [hairType, setHairType] = useState('Bone Straight');
  const [hairLength, setHairLength] = useState('20 - 24 Inches');
  const [locationCity, setLocationCity] = useState('Lagos');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const tiers: { [key: string]: { priceNGN: number; priceUSD: number; description: string } } = {
    'Signature Revamp & Deep Conditioning Treatment': {
      priceNGN: 8500,
      priceUSD: 10,
      description: 'Intensive protein detox, scalp wash, deep moisture mask, tangle extraction & natural gloss restoration.'
    },
    'Bone-Straight Silk Press & Steam Treatment': {
      priceNGN: 12500,
      priceUSD: 14,
      description: 'Precision hot-comb silk press with thermal keratin seal for featherlight, bone-straight motion.'
    },
    'Closure / Frontal Replacement & Custom Bleaching': {
      priceNGN: 16000,
      priceUSD: 18,
      description: 'Replace worn/bald lace, custom ventilate sparse edges, bleach knots, and tint lace to your exact skin tone.'
    },
    'Luxe Custom Coloring & Deep Curls Restoration': {
      priceNGN: 18500,
      priceUSD: 20,
      description: 'Full dye job, piano highlights, or deep curling rod steam bounce treatment to revive dull wave patterns.'
    }
  };

  const currentTier = tiers[selectedTier] || tiers['Bone-Straight Silk Press & Steam Treatment'];
  const formattedPrice =
    currency === 'NGN'
      ? `₦${(currentTier?.priceNGN || 0).toLocaleString()}`
      : `$${(currentTier?.priceUSD || 0).toLocaleString()}`;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*WIG REVAMP BOOKING - CIC WIGS & MORE (ABA)*\n\n` +
      `👑 *Founder:* Confidence Okonkwo\n\n` +
      `👤 *Customer Name:* ${customerName || 'Customer'}\n` +
      `📞 *Phone/WhatsApp:* ${customerPhone || 'Not provided'}\n` +
      `📍 *Waybill Origin:* ${locationCity}\n` +
      `💆‍♀️ *Service Tier:* ${selectedTier}\n` +
      `💇‍♀️ *Hair Type:* ${hairType}\n` +
      `📏 *Hair Length:* ${hairLength}\n` +
      `💵 *Estimated Fee:* ${formattedPrice}\n` +
      (customNotes ? `📝 *Special Instructions:* ${customNotes}\n` : '') +
      (imagePreview ? `📷 *Wig Photo:* (I have a picture ready to send in this chat)\n` : '') +
      `\nHello Confidence! Please confirm your Aba studio waybill address and booking slot. Thank you!`;

    return `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-800" />
            <div>
              <h2 className="font-serif-brand text-xl sm:text-2xl font-medium text-stone-950">
                Book Professional Wig Revamp
              </h2>
              <p className="text-xs text-stone-500">
                Aba Hair Hub · Send your tired wigs to Confidence Okonkwo for expert restoration
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-xs text-stone-700">
          
          {/* Quick Notice */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <div className="text-stone-700 space-y-1">
              <span className="font-semibold text-stone-900 block">
                How Waybill to Aba Works:
              </span>
              <span>
                You drop your wig at any commercial park or courier in your state (Lagos, Abuja, PH, etc.) heading to Aba. Confidence’s team receives it, treats & restyles it in 48–72 hours, and waybills it back to you sparkling like brand new!
              </span>
            </div>
          </div>

          {/* 1. Select Service Tier */}
          <div className="space-y-2">
            <label className="font-semibold text-stone-900 block uppercase tracking-wider text-[11px]">
              1. Select Hair Revamp Treatment Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(tiers).map(([tierName, tierData]) => (
                <button
                  key={tierName}
                  type="button"
                  onClick={() => setSelectedTier(tierName)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedTier === tierName
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-400 bg-white'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-stone-950">{tierName}</div>
                    <div className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                      {tierData.description}
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-bold text-stone-900 tabular-nums">
                    {currency === 'NGN' ? `₦${(tierData?.priceNGN || 0).toLocaleString()}` : `$${(tierData?.priceUSD || 0).toLocaleString()}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Hair Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-stone-900 block mb-1">
                Hair Texture / Style
              </label>
              <select
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
              >
                <option value="Bone Straight">Bone Straight</option>
                <option value="Deep Wave / Curls">Deep Wave / Curls</option>
                <option value="Body Wave">Body Wave</option>
                <option value="Bob Cut / Blunt Cut">Bob Cut / Blunt Cut</option>
                <option value="Kinky / Afro Straight">Kinky / Afro Straight</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-stone-900 block mb-1">
                Hair Length
              </label>
              <select
                value={hairLength}
                onChange={(e) => setHairLength(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900"
              >
                <option value="10 - 14 Inches">10 - 14 Inches</option>
                <option value="16 - 18 Inches">16 - 18 Inches</option>
                <option value="20 - 24 Inches">20 - 24 Inches</option>
                <option value="26 - 30 Inches">26 - 30 Inches</option>
                <option value="32+ Inches">32+ Inches</option>
              </select>
            </div>
          </div>

          {/* 3. Customer & City */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="font-semibold text-stone-900 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Sandra E."
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-stone-900 block mb-1">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="e.g. 08123456789"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-stone-900 block mb-1">
                Your State / City
              </label>
              <select
                value={locationCity}
                onChange={(e) => setLocationCity(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs text-stone-800"
              >
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Aba (Local Dropoff)">Aba (Local Dropoff)</option>
                <option value="Enugu / Owerri">Enugu / Owerri</option>
                <option value="Asaba / Onitsha / Warri">Asaba / Onitsha / Warri</option>
                <option value="Benin City / Ibadan / Kano">Benin / Ibadan / Kano</option>
                <option value="International / Diaspora">International / Diaspora</option>
              </select>
            </div>
          </div>

          {/* 4. Photo Preview Upload */}
          <div className="space-y-1.5">
            <label className="font-semibold text-stone-900 block uppercase tracking-wider text-[11px]">
              Optional: Upload Current Wig Photo for Assessment
            </label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg cursor-pointer transition-colors text-xs font-medium text-stone-800">
                <Upload className="w-3.5 h-3.5" />
                <span>Choose Wig Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {imagePreview ? (
                <div className="flex items-center gap-2">
                  <img
                    src={imagePreview}
                    alt="Uploaded wig preview"
                    className="w-10 h-10 object-cover rounded-lg border border-stone-300"
                  />
                  <span className="text-[11px] text-emerald-700 font-medium">
                    Photo attached!
                  </span>
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="text-[11px] text-stone-400 hover:text-stone-700 underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <span className="text-[11px] text-stone-400">
                  You can also send your wig photo directly in WhatsApp.
                </span>
              )}
            </div>
          </div>

          {/* 5. Special Notes */}
          <div>
            <label className="font-semibold text-stone-900 block mb-1">
              Special Requests (e.g. tighten cap, trim ends, bleach lace)
            </label>
            <input
              type="text"
              placeholder="e.g. Please replace frontal and give it a center part"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-stone-50/50 text-xs"
            />
          </div>

        </div>

        {/* Footer with direct WhatsApp submission */}
        <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-stone-500">Estimated Revamp Fee:</div>
            <div className="text-xl font-bold text-stone-950 tabular-nums">
              {formattedPrice}
            </div>
          </div>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Revamp Details to Confidence on WhatsApp ({VERIFIED_CONTACT.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
