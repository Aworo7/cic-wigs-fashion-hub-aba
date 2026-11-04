import React, { useState } from 'react';
import { X, Copy, CheckCheck, MessageCircle, Sparkles, Send } from 'lucide-react';
import { VERIFIED_CONTACT } from '../types';

interface PitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchModal: React.FC<PitchModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pitchMessage = 
`Hello Confidence, good day! 💕

My name is [Your Name]. I came across your incredible work at *CIC Wigs and Fashion Hub* (CIC Nightwear Aba) and I truly admire how you've empowered so many women with your motto: *"Come let’s fetch money with nighties, you don't really need a physical shop to advertise, just your phone and data."*

I noticed on your Facebook and TikTok that your WhatsApp is constantly flooded with:
1. Resellers asking for wholesale price sheets over and over again.
2. Clients sending screenshots of old wigs asking for revamp pricing.
3. Retailers checking what colors and sizes of satin sleepwear are in stock.

Because of this, I built a *complete, bespoke, luxury website mockup specifically tailored to your business* that solves all three problems:

✨ *What I built for you:*
• *Automated Wig Revamp Booking Form:* Clients choose their revamp tier (Silk Press, Frontal replacement, Deep conditioning), select their waybill city (Lagos, Abuja, PH, etc.), upload wig photos, and get an instant quote directly into your WhatsApp in one clean format.
• *Live B2B Wholesale Portal:* Resellers can see your ₦15k, ₦45k, and ₦120k starter packs and view Aba factory rates without messaging you back and forth.
• *Direct WhatsApp Ordering:* Every product order arrives pre-formatted in your WhatsApp with the item, size, color, and delivery address.

You can preview the live interactive website I designed for you here:
👉 ${window.location.origin}

Would you be open to a quick 5-minute chat on WhatsApp to see how we can deploy this to your official domain to save you hours of customer support every day?

Looking forward to your reply, Confidence! Warm regards.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pitchMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    window.open(
      `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(pitchMessage)}`,
      '_blank'
    );
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
                Tailored Pitch Message for Confidence
              </h2>
              <p className="text-xs text-stone-500">
                Ready-to-send proposal directly addressing Confidence Okonkwo by name
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close pitch modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Container */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
          <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
            💡 <strong>Pitch Strategy:</strong> This message highlights Confidence's exact pain points (reseller price requests, messy revamp screenshots, stock checks) and shows how this website automates her sales from Aba to the world.
          </div>

          <div className="relative">
            <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto border border-stone-800 max-h-80">
              {pitchMessage}
            </pre>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-stone-900 font-semibold border border-stone-300 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Pitch Copied to Clipboard!' : 'Copy Pitch Message'}</span>
          </button>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send to Confidence's WhatsApp ({VERIFIED_CONTACT.phoneDisplay})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
