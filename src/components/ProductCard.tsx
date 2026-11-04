import React from 'react';
import { Eye, Plus, Star, MessageCircle, TrendingUp } from 'lucide-react';
import { Product, Currency, VERIFIED_CONTACT } from '../types';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWholesaleMode: boolean;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWholesaleMode,
  onQuickView,
  onAddToCart
}) => {
  const priceVal = product?.priceNGN ?? product?.price ?? 0;
  const wholesaleVal = product?.wholesalePriceNGN ?? 0;
  const priceUSDVal = product?.priceUSD ?? 0;
  const wholesaleUSDVal = product?.wholesalePriceUSD ?? 0;

  const displayPrice = isWholesaleMode && wholesaleVal > 0
    ? (currency === 'NGN' ? `₦${(wholesaleVal || 0).toLocaleString()}` : `$${(wholesaleUSDVal || 0).toLocaleString()}`)
    : (currency === 'NGN' ? `₦${(priceVal || 0).toLocaleString()}` : `$${(priceUSDVal || 0).toLocaleString()}`);

  const retailStrikethrough = isWholesaleMode && wholesaleVal > 0
    ? (currency === 'NGN' ? `₦${(priceVal || 0).toLocaleString()}` : `$${(priceUSDVal || 0).toLocaleString()}`)
    : null;

  const profitVal = Math.max(0, priceVal - wholesaleVal);
  const profitUSDVal = Math.max(0, priceUSDVal - wholesaleUSDVal);

  const profitPerPiece = isWholesaleMode && wholesaleVal > 0
    ? (currency === 'NGN'
        ? `+₦${(profitVal || 0).toLocaleString()} profit`
        : `+$${(profitUSDVal || 0).toLocaleString()} profit`)
    : null;

  const defaultSize = product?.sizes?.[0] || 'Standard';
  const defaultColor = product?.colors?.[0]?.name || 'Standard';

  const whatsappInquiryUrl = `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(
    `Hello Confidence! 💕 I am interested in:\n*${product?.name || 'Item'}*\n${isWholesaleMode ? `Wholesale Rate: ${displayPrice} (Bulk Order)` : `Price: ${displayPrice}`}\nPlease let me know if it's currently available in stock. Thank you!`
  )}`;

  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 transition-all duration-300 hover:shadow-lg">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product?.image || '/images/hero_cic_nightwear_loungewear_1793771101080.jpg'}
          alt={product?.name || 'Product'}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('/images/')) {
              target.src = target.src.replace('/images/', '/');
            }
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badge */}
        {product?.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/90 text-stone-100 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded backdrop-blur-xs">
            {product.badge}
          </div>
        )}

        {/* Wholesale Mode Indicator Badge */}
        {isWholesaleMode && product?.isWholesaleEligible && (
          <div className="absolute top-3 right-3 bg-emerald-700 text-white text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Aba Wholesale</span>
          </div>
        )}

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-3 py-2 bg-white text-stone-900 text-xs font-semibold rounded-md shadow hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-2 bg-emerald-700 text-white text-xs font-semibold rounded-md shadow hover:bg-emerald-800 transition-colors flex items-center gap-1.5"
            title="Inquire directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, defaultSize, defaultColor);
            }}
            className="px-3 py-2 bg-stone-900 text-white text-xs font-semibold rounded-md shadow hover:bg-rose-900 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-1.5">
          {/* Clean unboxed metadata with dot separators */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="capitalize">{(product?.category || 'fashion').replace('-', ' ')}</span>
            <span aria-hidden="true">·</span>
            <span>{product?.genderFocus || 'Universal'} Focus</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-stone-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-semibold tabular-nums">{product?.rating || 5.0}</span>
              <span className="text-stone-400">({product?.reviewsCount || 0})</span>
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif-brand text-lg font-medium text-stone-950 hover:text-rose-950 transition-colors line-clamp-1 cursor-pointer"
          >
            {product?.name || 'Luxury Fashion Item'}
          </h3>

          {/* Tagline / Micro description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {product?.tagline}
          </p>
        </div>

        {/* Bottom Details Row: Colors, Sizes, Price */}
        <div className="pt-4 mt-3 border-t border-stone-100 flex items-end justify-between gap-2">
          <div>
            {/* Color Swatch Dots */}
            <div className="flex items-center gap-1.5 mb-1.5">
              {(product?.colors || []).map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-3.5 h-3.5 rounded-full border border-stone-300 ring-1 ring-stone-200/50"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              <span className="text-[11px] text-stone-400 ml-1">
                {product?.sizes && product.sizes.length > 1
                  ? `${product.sizes[0]}–${product.sizes[product.sizes.length - 1]}`
                  : 'Standard'}
              </span>
            </div>

            {/* Price with tabular numerals */}
            <div className="space-y-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-base font-semibold text-stone-950 tabular-nums">
                  {displayPrice}
                </span>
                {retailStrikethrough && (
                  <span className="text-xs text-stone-400 line-through tabular-nums">
                    {retailStrikethrough}
                  </span>
                )}
              </div>
              {profitPerPiece && (
                <div className="text-[11px] font-semibold text-emerald-700">
                  {profitPerPiece}
                </div>
              )}
            </div>
          </div>

          {/* Primary View Details Button */}
          <button
            onClick={() => onQuickView(product)}
            className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-950 transition-all cursor-pointer whitespace-nowrap"
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  );
};
