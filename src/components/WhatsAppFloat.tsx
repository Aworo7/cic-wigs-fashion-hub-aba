import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { VERIFIED_CONTACT } from '../types';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-stone-900 text-stone-100 text-xs py-2 px-3.5 rounded-xl shadow-lg border border-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Chat with Confidence Okonkwo on WhatsApp ({VERIFIED_CONTACT.phoneDisplay}) 💕</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white cursor-pointer ml-1 text-xs"
            aria-label="Close tooltip"
          >
            ✕
          </button>
        </div>
      )}

      {/* WhatsApp Button linking directly to verified phone */}
      <a
        href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=Hello%20Confidence!%20💕%20I%20am%20chatting%20from%20CIC%20Wigs%20and%20Fashion%20Hub%20website%20to%20inquire%20about%20wigs,%20revamp,%20or%20nightwear.`}
        target="_blank"
        rel="noopener noreferrer"
        title={`Chat with Confidence Okonkwo on WhatsApp (${VERIFIED_CONTACT.phoneDisplay})`}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
