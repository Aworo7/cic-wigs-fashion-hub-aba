import React, { useState } from 'react';
import { X, ShieldCheck, Truck, RefreshCw, FileText } from 'lucide-react';

export type LegalPageType = 'return-policy' | 'shipping' | 'privacy-policy';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: LegalPageType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialPage = 'return-policy'
}) => {
  const [activeTab, setActiveTab] = useState<LegalPageType>(initialPage);

  // Sync if initialPage changes
  React.useEffect(() => {
    if (initialPage) setActiveTab(initialPage);
  }, [initialPage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-stone-800" />
            <div>
              <h2 className="font-serif-brand text-xl sm:text-2xl font-medium text-stone-950">
                CIC Wigs & Fashion Hub Policies
              </h2>
              <p className="text-xs text-stone-500">
                Official transparency terms direct from our Aba Production Hub
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close policy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 sm:px-6 pt-3 border-b border-stone-200 bg-stone-50/60 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('return-policy')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'return-policy'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5 text-rose-800" />
            <span>Return & Exchange Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'shipping'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Truck className="w-3.5 h-3.5 text-emerald-800" />
            <span>Shipping & Waybill Logistics</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy-policy')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy-policy'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-xs text-stone-700 leading-relaxed">
          
          {/* 1. RETURN POLICY */}
          {activeTab === 'return-policy' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-950 font-medium">
                ⚠️ <strong>Key Policy Summary:</strong> For strict hygiene reasons, there are <strong>NO returns on intimates and underwears</strong>. For human hair wigs, an inspection claim window of <strong>48 hours from waybill arrival</strong> applies.
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  1. Underwear & Intimates Policy (Strict Hygiene Protocol)
                </h3>
                <p>
                  Due to federal sanitary regulations and the intimate nature of personal undergarments (bralettes, panties, shaping briefs, and bamboo boxers), <strong>all underwear and intimate sales are strictly final</strong>. We cannot accept returns, refunds, or exchanges on these items once dispatched. Please consult our <em>Inclusive Size Guide</em> or chat with our styling concierge before confirming sizes.
                </p>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  2. Human Hair Wigs & Wig Revamp (48-Hour Inspection Window)
                </h3>
                <p>
                  Every raw human hair wig and revamp unit undergoes rigorous quality inspection before leaving our Aba studio. Upon receiving your waybill:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-stone-600">
                  <li>You must inspect the unit within <strong>48 hours of park arrival or courier delivery</strong>.</li>
                  <li>Lace must remain <strong>uncut, unbleached, and unplucked</strong>.</li>
                  <li>Hair must be in its original pristine state without perfume, oil, washing, or wear.</li>
                  <li>If an incorrect length or specification was delivered, notify our Aba team immediately with clear unboxing photos to initiate an exchange or adjustment.</li>
                </ul>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  3. Nightwear & Loungewear Sets (7-Day Sizing Exchange)
                </h3>
                <p>
                  Satin nightgowns, kimono robes, and loungewear sets may be exchanged for alternative sizes within <strong>7 days of delivery</strong> provided tags remain attached, packaging is intact, and garments show zero signs of wear or perfume. Return dispatch logistics are covered by the buyer unless an error was made by our dispatch team.
                </p>
              </div>
            </div>
          )}

          {/* 2. SHIPPING & WAYBILL POLICY */}
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium">
                🚚 <strong>Aba Commercial Waybill Network:</strong> Daily direct dispatches via Peace Mass, Jammal, GIGM, and Libra Logistics with <strong>24–48 hours transit to Lagos, Port Harcourt, and Abuja</strong>.
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  1. Commercial Transport Parks (Fastest & Most Reliable in Nigeria)
                </h3>
                <p>
                  Operating directly from the central production district in Aba, Abia State, we route orders and revamped wigs daily through established interstate commercial transport hubs:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-stone-600">
                  <li><strong>Peace Mass Transit & Jammal Transport:</strong> Daily direct morning & evening dispatch to Lagos (Ojota, Jibowu, Alaba, Maza-Maza), Abuja (Utako), Port Harcourt (Waterlines), Onitsha, Enugu, Owerri, Asaba, Benin, and Kano.</li>
                  <li><strong>GIG Logistics & Speedaf Courier:</strong> Doorstep parcel delivery available upon customer request.</li>
                  <li><strong>Transit Time:</strong> 24 to 48 hours for South-East, South-South, and Lagos/Abuja destinations.</li>
                </ul>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  2. Waybill Tracking & Collection
                </h3>
                <p>
                  Immediately your package is lodged at the park in Aba, our logistics desk snaps and sends your official <strong>Waybill Waybill Receipt</strong> containing:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-stone-600">
                  <li>The Vehicle Registration / Manifest Number.</li>
                  <li>The Driver's or Park Clerk's direct phone number.</li>
                  <li>Estimated arrival time at your destination park.</li>
                </ul>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  3. Local Aba Pickup & International Air Cargo
                </h3>
                <p>
                  Local customers and resellers in Aba can pick up orders or drop off wigs directly at our studio. For international diaspora orders (UK, US, Canada, Ghana), we ship via DHL Express / FedEx with tracking provided within 3–5 working days.
                </p>
              </div>
            </div>
          )}

          {/* 3. PRIVACY POLICY */}
          {activeTab === 'privacy-policy' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 font-medium">
                🔒 <strong>Data Protection:</strong> Your personal contact details, measurements, and waybill delivery destinations are guarded with strict confidentiality.
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-brand text-base font-semibold text-stone-950">
                  1. Information We Collect
                </h3>
                <p>
                  When you book a wig revamp, join a wholesale reseller tier, or purchase catalog fashion, we collect your name, WhatsApp phone number, city, and delivery destination solely to process your orders, generate waybills, and provide customer support.
                </p>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  2. Zero Sharing with Third Parties
                </h3>
                <p>
                  We never sell, rent, or lease customer data. Your contact details are only shared with authorized logistics drivers/parks (e.g. Peace Mass or Jammal) strictly for parcel collection identification.
                </p>

                <h3 className="font-serif-brand text-base font-semibold text-stone-950 pt-2">
                  3. WhatsApp & Social Messaging Consent
                </h3>
                <p>
                  By initiating an order or revamp booking through our portal, you consent to receive direct order receipts, dispatch updates, and wholesale inventory alerts from Confidence Okonkwo's official desk. You may opt out of promotional broadcasts at any time.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex justify-between items-center text-xs">
          <span className="text-stone-500">
            Have questions about a policy? Chat with Confidence's desk.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
