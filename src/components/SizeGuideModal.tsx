import React, { useState } from 'react';
import { X, Check, Ruler, Info } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'female-sleep' | 'female-bra' | 'male-underwear'>(
    'female-sleep'
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-stone-800" />
            <div>
              <h2 className="font-serif-brand text-xl sm:text-2xl font-medium text-stone-950">
                CIC Inclusive Sizing & Fit Guide
              </h2>
              <p className="text-xs text-stone-500">
                Thoughtfully tailored for all body shapes from XS through 3XL
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Functional segmented buttons) */}
        <div className="px-5 sm:px-6 pt-4 border-b border-stone-200 bg-stone-50/50 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('female-sleep')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'female-sleep'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Nightwear & Loungewear (Her)
          </button>
          <button
            onClick={() => setActiveTab('female-bra')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'female-bra'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Seamless Bralettes & Briefs
          </button>
          <button
            onClick={() => setActiveTab('male-underwear')}
            className={`pb-3 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
              activeTab === 'male-underwear'
                ? 'border-stone-900 text-stone-950'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Men’s Comfort Boxer Briefs
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Nightwear & Loungewear Table */}
          {activeTab === 'female-sleep' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200">
                  <thead className="bg-stone-100/70 text-stone-800 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 border-b border-stone-200">Size</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">US / UK Equivalent</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Bust (Inches)</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Waist (Inches)</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Hips (Inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700 tabular-nums">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">XS</td>
                      <td className="py-2.5 px-3">US 0–2 | UK 4–6</td>
                      <td className="py-2.5 px-3">31" – 33"</td>
                      <td className="py-2.5 px-3">24" – 26"</td>
                      <td className="py-2.5 px-3">34" – 36"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">S</td>
                      <td className="py-2.5 px-3">US 4–6 | UK 8–10</td>
                      <td className="py-2.5 px-3">34" – 36"</td>
                      <td className="py-2.5 px-3">27" – 29"</td>
                      <td className="py-2.5 px-3">37" – 39"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">M</td>
                      <td className="py-2.5 px-3">US 8–10 | UK 12–14</td>
                      <td className="py-2.5 px-3">37" – 39"</td>
                      <td className="py-2.5 px-3">30" – 32"</td>
                      <td className="py-2.5 px-3">40" – 42"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">L</td>
                      <td className="py-2.5 px-3">US 12–14 | UK 16–18</td>
                      <td className="py-2.5 px-3">40" – 42"</td>
                      <td className="py-2.5 px-3">33" – 35"</td>
                      <td className="py-2.5 px-3">43" – 45"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">XL</td>
                      <td className="py-2.5 px-3">US 16–18 | UK 20–22</td>
                      <td className="py-2.5 px-3">43" – 45"</td>
                      <td className="py-2.5 px-3">36" – 38"</td>
                      <td className="py-2.5 px-3">46" – 48"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">2XL</td>
                      <td className="py-2.5 px-3">US 20–22 | UK 24–26</td>
                      <td className="py-2.5 px-3">46" – 49"</td>
                      <td className="py-2.5 px-3">39" – 42"</td>
                      <td className="py-2.5 px-3">49" – 52"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">3XL</td>
                      <td className="py-2.5 px-3">US 24–26 | UK 28–30</td>
                      <td className="py-2.5 px-3">50" – 53"</td>
                      <td className="py-2.5 px-3">43" – 46"</td>
                      <td className="py-2.5 px-3">53" – 56"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="font-semibold text-stone-900 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-stone-700" /> Fit Tip:
                </div>
                <p>
                  Our sleepwear is crafted with a relaxed ease of movement. If you fall between sizes or love an airy, draped bedtime silhouette, we suggest sizing up.
                </p>
              </div>
            </div>
          )}

          {/* Female Underwear & Bralettes Table */}
          {activeTab === 'female-bra' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200">
                  <thead className="bg-stone-100/70 text-stone-800 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 border-b border-stone-200">Bralette Size</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Recommended Cup Sizes</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Underbust Band</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Matching Briefs Hip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700 tabular-nums">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">XS</td>
                      <td className="py-2.5 px-3">30A, 30B, 32A</td>
                      <td className="py-2.5 px-3">26" – 28"</td>
                      <td className="py-2.5 px-3">33" – 35"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">S</td>
                      <td className="py-2.5 px-3">32B, 32C, 34A, 34B</td>
                      <td className="py-2.5 px-3">28" – 30"</td>
                      <td className="py-2.5 px-3">36" – 38"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">M</td>
                      <td className="py-2.5 px-3">34C, 34D, 36A, 36B</td>
                      <td className="py-2.5 px-3">31" – 33"</td>
                      <td className="py-2.5 px-3">39" – 41"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">L</td>
                      <td className="py-2.5 px-3">36C, 36D, 38B, 38C</td>
                      <td className="py-2.5 px-3">34" – 36"</td>
                      <td className="py-2.5 px-3">42" – 44"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">XL</td>
                      <td className="py-2.5 px-3">38D, 38DD, 40C, 40D</td>
                      <td className="py-2.5 px-3">37" – 39"</td>
                      <td className="py-2.5 px-3">45" – 47"</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">2XL</td>
                      <td className="py-2.5 px-3">40DD, 42C, 42D, 42DD</td>
                      <td className="py-2.5 px-3">40" – 43"</td>
                      <td className="py-2.5 px-3">48" – 51"</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">3XL</td>
                      <td className="py-2.5 px-3">42E, 44C, 44D, 44DD</td>
                      <td className="py-2.5 px-3">44" – 47"</td>
                      <td className="py-2.5 px-3">52" – 55"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="font-semibold text-stone-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" /> Wireless Flexibility:
                </div>
                <p>
                  Our wireless bralettes are constructed with 4-way micro-elasticity that naturally adapts to fluctuating breast volume during cycles or nursing.
                </p>
              </div>
            </div>
          )}

          {/* Male Underwear Table */}
          {activeTab === 'male-underwear' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200">
                  <thead className="bg-stone-100/70 text-stone-800 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 border-b border-stone-200">Size</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Waist (Inches)</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Waist (cm)</th>
                      <th className="py-2.5 px-3 border-b border-stone-200">Trouser Fit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700 tabular-nums">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">S</td>
                      <td className="py-2.5 px-3">29" – 31"</td>
                      <td className="py-2.5 px-3">74 – 79 cm</td>
                      <td className="py-2.5 px-3">Slim / Tailored</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">M</td>
                      <td className="py-2.5 px-3">32" – 34"</td>
                      <td className="py-2.5 px-3">81 – 86 cm</td>
                      <td className="py-2.5 px-3">Standard</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">L</td>
                      <td className="py-2.5 px-3">35" – 37"</td>
                      <td className="py-2.5 px-3">89 – 94 cm</td>
                      <td className="py-2.5 px-3">Comfort Fit</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">XL</td>
                      <td className="py-2.5 px-3">38" – 40"</td>
                      <td className="py-2.5 px-3">96 – 102 cm</td>
                      <td className="py-2.5 px-3">Relaxed</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-950">2XL</td>
                      <td className="py-2.5 px-3">41" – 44"</td>
                      <td className="py-2.5 px-3">104 – 112 cm</td>
                      <td className="py-2.5 px-3">Extended Comfort</td>
                    </tr>
                    <tr className="bg-stone-50/50">
                      <td className="py-2.5 px-3 font-semibold text-stone-950">3XL</td>
                      <td className="py-2.5 px-3">45" – 48"</td>
                      <td className="py-2.5 px-3">114 – 122 cm</td>
                      <td className="py-2.5 px-3">Generous Cut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="font-semibold text-stone-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" /> 3D Anatomical Pouch:
                </div>
                <p>
                  Bamboo modal boxers feature a non-constrictive ergonomic front contour that stays supportive without tightness or inner thigh friction.
                </p>
              </div>
            </div>
          )}

          {/* How to Measure Section */}
          <div className="border-t border-stone-200 pt-4 text-xs text-stone-600 space-y-2">
            <h4 className="font-semibold text-stone-900">How to Measure Accurately</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-2.5 bg-stone-50 rounded-lg">
                <span className="font-medium text-stone-900 block mb-0.5">1. Bust / Chest:</span>
                Measure around the fullest part of the bust or chest, keeping the tape level.
              </div>
              <div className="p-2.5 bg-stone-50 rounded-lg">
                <span className="font-medium text-stone-900 block mb-0.5">2. Natural Waist:</span>
                Measure around your natural waistline, slightly above your belly button.
              </div>
              <div className="p-2.5 bg-stone-50 rounded-lg">
                <span className="font-medium text-stone-900 block mb-0.5">3. Fullest Hips:</span>
                Stand with feet together and measure around the fullest curve of your hips/glutes.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-[#FAF8F5] flex justify-between items-center text-xs">
          <span className="text-stone-500">
            Unsure of your exact fit? Our WhatsApp stylist can assist you in seconds.
          </span>
          <a
            href="https://wa.me/2348100000000?text=Hello%20CIC%20Fashion%20Hub!%20I%20need%20help%20choosing%20my%20size"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium whitespace-nowrap cursor-pointer"
          >
            Chat with Fit Stylist
          </a>
        </div>
      </div>
    </div>
  );
};
