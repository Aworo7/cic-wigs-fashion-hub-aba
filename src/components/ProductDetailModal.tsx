import React, { useState } from 'react';
import { X, Star, Check, MessageCircle, ShieldCheck, Truck, Sparkles, Facebook, TrendingUp, CreditCard, Building2, MapPin } from 'lucide-react';
import { Product, Currency, VERIFIED_CONTACT } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number, isWholesale: boolean) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onAddToCart,
  onOpenSizeGuide
}) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [isWholesaleBuy, setIsWholesaleBuy] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [addedToast, setAddedToast] = useState(false);

  const unitPriceNGN = isWholesaleBuy && product?.wholesalePriceNGN ? product.wholesalePriceNGN : (product?.priceNGN ?? product?.price ?? 0);
  const unitPriceUSD = isWholesaleBuy && product?.wholesalePriceUSD ? product.wholesalePriceUSD : (product?.priceUSD ?? 0);

  const formattedTotalPrice =
    currency === 'NGN'
      ? `₦${((unitPriceNGN || 0) * (quantity || 1)).toLocaleString()}`
      : `$${((unitPriceUSD || 0) * (quantity || 1)).toLocaleString()}`;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity, isWholesaleBuy);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Confidence! 💕 I am interested in purchasing from CIC Wigs & Fashion Hub (Aba):\n\n*${product.name}*\n` +
    `Tier: ${isWholesaleBuy ? 'WHOLESALE BULK (Aba Factory Rate)' : 'RETAIL'}\n` +
    `Size: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\n` +
    `Estimated Total: ${formattedTotalPrice}\n\n` +
    `Could you please confirm current stock and waybill dispatch? Thank you!`
  );

  const paystackWhatsAppMessage = encodeURIComponent(
    `Hello Confidence! 💕 I want to pay for *${product.name}* (Size: ${selectedSize}, Color: ${selectedColor}, Qty: ${quantity}) - ${formattedTotalPrice} via Paystack card payment.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Asset Gallery */}
        <div className="md:w-1/2 bg-stone-100 flex flex-col justify-between p-4 sm:p-6 border-b md:border-b-0 md:border-r border-stone-200">
          <div className="relative aspect-4/3 sm:aspect-square rounded-xl overflow-hidden bg-stone-200">
            <img
              src={activeImage}
              alt={product?.name || 'Product'}
              onError={(e) => {
                if (e.currentTarget.src.includes('/images/')) {
                  e.currentTarget.src = e.currentTarget.src.replace('/images/', '/');
                }
              }}
              className="w-full h-full object-cover object-center"
            />
            {product?.badge && (
              <span className="absolute top-3 left-3 bg-stone-900/90 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Alternate Image Switcher if available */}
          {product?.secondaryImage && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImage === product.image ? 'border-stone-900' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={product.image}
                  alt="Primary angle"
                  onError={(e) => {
                    if (e.currentTarget.src.includes('/images/')) {
                      e.currentTarget.src = e.currentTarget.src.replace('/images/', '/');
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage(product.secondaryImage!)}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImage === product.secondaryImage ? 'border-stone-900' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={product.secondaryImage}
                  alt="Styled angle"
                  onError={(e) => {
                    if (e.currentTarget.src.includes('/images/')) {
                      e.currentTarget.src = e.currentTarget.src.replace('/images/', '/');
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          )}

          {/* Trust points */}
          <div className="mt-4 pt-4 border-t border-stone-200/80 text-xs text-stone-600 space-y-1.5 hidden sm:block">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Authentic Aba direct manufacturing & 100% human hair guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-stone-700 shrink-0" />
              <span>Daily park waybill to Lagos, Abuja, Port Harcourt & couriers</span>
            </div>
          </div>
        </div>

        {/* Right Column: PDP Purchase Module */}
        <div className="md:w-1/2 p-5 sm:p-8 overflow-y-auto space-y-5">
          {/* Metadata & Rating */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span className="capitalize">{product.category.replace('-', ' ')}</span>
              <span>·</span>
              <span>{product.genderFocus} Focus</span>
              <span>·</span>
              <div className="flex items-center gap-1 text-stone-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-semibold tabular-nums">{product.rating}</span>
                <span className="text-stone-500">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="font-serif-brand text-2xl sm:text-3xl font-medium text-stone-950 leading-tight">
              {product.name}
            </h2>

            {/* Pricing block with wholesale switcher */}
            <div className="flex items-center gap-3 pt-1">
              <div className="text-2xl font-semibold text-stone-900 tabular-nums">
                {formattedTotalPrice}
              </div>
              {isWholesaleBuy && product.wholesalePriceNGN && (
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Aba Wholesale Price
                </span>
              )}
            </div>
          </div>

          {/* Wholesale Tier Switcher if Eligible */}
          {product.isWholesaleEligible && product.wholesalePriceNGN && (
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-900 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-700" /> Buying Tier:
                </span>
                <div className="inline-flex rounded-lg border border-stone-300 p-0.5 bg-white">
                  <button
                    onClick={() => {
                      setIsWholesaleBuy(false);
                      setQuantity(1);
                    }}
                    className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                      !isWholesaleBuy ? 'bg-stone-900 text-white font-medium' : 'text-stone-600'
                    }`}
                  >
                    Retail
                  </button>
                  <button
                    onClick={() => {
                      setIsWholesaleBuy(true);
                      setQuantity(product.minWholesaleQty || 6);
                    }}
                    className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                      isWholesaleBuy ? 'bg-emerald-800 text-white font-medium' : 'text-stone-600'
                    }`}
                  >
                    Wholesale (Min {product.minWholesaleQty || 6} pcs)
                  </button>
                </div>
              </div>
              {isWholesaleBuy && (
                <p className="text-[11px] text-emerald-700 leading-snug">
                  ✓ Wholesale rate: ₦{(product?.wholesalePriceNGN || 0).toLocaleString()} / piece. Resellers earn approx ₦{(((product?.priceNGN ?? product?.price ?? 0) - (product?.wholesalePriceNGN || 0)) * (quantity || 1)).toLocaleString()} total profit on this batch!
                </p>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-stone-700 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Inclusivity & Comfort Highlights */}
          <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 space-y-2">
            <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-700" />
              <span>Inclusive Comfort & Quality Highlights</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1 list-disc list-inside">
              {product.inclusivityHighlights.map((hl, idx) => (
                <li key={idx} className="leading-snug">
                  {hl}
                </li>
              ))}
            </ul>
          </div>

          {/* Color Selector */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-stone-800">
              <span>Color / Shade: <strong className="text-stone-950">{selectedColor}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                    selectedColor === color.name ? 'border-stone-900 ring-2 ring-stone-300' : 'border-stone-200 hover:border-stone-400'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <Check className={`w-3.5 h-3.5 ${color.hex === '#1e2022' || color.hex === '#171923' || color.hex === '#1a1918' ? 'text-white' : 'text-stone-900'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Length Selector */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-stone-800">
                {product.category === 'wigs' ? 'Hair Length:' : 'Size:'}{' '}
                <strong className="text-stone-950">{selectedSize}</strong>
              </span>
              <button
                onClick={onOpenSizeGuide}
                className="text-stone-600 hover:text-stone-950 font-medium underline cursor-pointer"
              >
                Inclusive Size Chart (XS–3XL)
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white text-stone-800 border-stone-300 hover:border-stone-500'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 italic">
              Fit Advice: {product.fitAdvice}
            </p>
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-stone-800">Quantity:</span>
            <div className="inline-flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
              <button
                onClick={() => setQuantity(Math.max(isWholesaleBuy ? (product.minWholesaleQty || 6) : 1, quantity - 1))}
                className="px-3 py-1 text-sm font-semibold text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-1 text-xs font-semibold tabular-nums text-stone-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-sm font-semibold text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Action CTAs & Dedicated Payment Section */}
          <div className="pt-2 space-y-3">
            <button
              onClick={handleAdd}
              className="w-full py-3.5 bg-stone-900 text-white font-semibold text-sm rounded-xl hover:bg-stone-800 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Add to Shopping Bag</span>
              <span className="text-stone-300 tabular-nums">· {formattedTotalPrice}</span>
            </button>

            {/* Direct WhatsApp Order */}
            <a
              href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-700 text-white font-medium text-sm rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire / Order Directly on WhatsApp</span>
            </a>

            {/* --- PAYMENT OPTIONS SECTION --- */}
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/90 space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center justify-between">
                <span>Payment & Settlement Options</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-bold lowercase">
                  <MapPin className="w-3 h-3" /> Pay on Delivery available in Aba
                </span>
              </div>

              {/* 1. Paystack Placeholder Button */}
              <a
                href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${paystackWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Pay with Paystack Card, USSD or Bank"
                className="w-full py-2.5 px-3 bg-[#0ba4db]/10 hover:bg-[#0ba4db]/20 text-[#0ba4db] border border-[#0ba4db]/30 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Pay with Paystack (Card / USSD) — Coming Soon</span>
              </a>

              {/* 2. Bank Transfer Box */}
              <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs text-stone-700 flex items-start gap-2">
                <Building2 className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>Bank Transfer:</strong> Bank details will be displayed after WhatsApp confirmation — Chat Confidence on <strong className="text-stone-900">{VERIFIED_CONTACT.phoneDisplay}</strong>
                </p>
              </div>

              {/* 3. Text Badge */}
              <div className="text-center pt-0.5">
                <span className="text-[11px] text-stone-500 italic">
                  * All orders verified before park waybill dispatch from Aba.
                </span>
              </div>
            </div>

            {/* Facebook direct validation */}
            <div className="pt-1 text-center">
              <a
                href={VERIFIED_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:underline"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>See live try-ons & wig videos on Facebook (@cicfashionhub)</span>
              </a>
            </div>

            {/* Toast feedback */}
            {addedToast && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-900 text-xs font-medium rounded-lg text-center animate-in fade-in duration-200">
                ✓ Added {quantity} × {product.name} ({selectedSize}, {selectedColor}) to your bag!
              </div>
            )}
          </div>

          {/* Fabric & Origin Accordion-style details */}
          <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 space-y-1.5">
            <div><strong>Material Quality:</strong> {product.fabricAndCare.material}</div>
            <div><strong>Breathability:</strong> {product.fabricAndCare.breathability}</div>
            <div><strong>Care:</strong> {product.fabricAndCare.care}</div>
            <div><strong>Production Hub:</strong> {product.fabricAndCare.origin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
