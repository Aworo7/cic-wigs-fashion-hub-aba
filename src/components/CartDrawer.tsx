import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, CreditCard, Building2, MapPin } from 'lucide-react';
import { CartItem, Currency, VERIFIED_CONTACT } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, size: string, color: string, newQty: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const rawSubtotalNGN = items.reduce((sum, item) => {
    const unitPrice = item.isWholesale && item.product.wholesalePriceNGN ? item.product.wholesalePriceNGN : item.product.priceNGN;
    return sum + unitPrice * item.quantity;
  }, 0);

  const rawSubtotalUSD = items.reduce((sum, item) => {
    const unitPrice = item.isWholesale && item.product.wholesalePriceUSD ? item.product.wholesalePriceUSD : item.product.priceUSD;
    return sum + unitPrice * item.quantity;
  }, 0);

  const discountAmountNGN = (rawSubtotalNGN * discountPercent) / 100;
  const discountAmountUSD = (rawSubtotalUSD * discountPercent) / 100;

  const finalTotalNGN = rawSubtotalNGN - discountAmountNGN;
  const finalTotalUSD = rawSubtotalUSD - discountAmountUSD;

  const formattedTotal =
    currency === 'NGN'
      ? `₦${finalTotalNGN.toLocaleString()}`
      : `$${finalTotalUSD.toLocaleString()}`;

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'CICCOMFORT' || code === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoSuccess('10% VIP comfort discount applied!');
    } else if (code === 'ABAWHOLESALE' || code === 'FETCHMONEY') {
      setDiscountPercent(15);
      setPromoSuccess('15% Aba Reseller VIP discount applied!');
    } else {
      setPromoError('Invalid code. Try "CICCOMFORT" or "FETCHMONEY"');
    }
  };

  const generateWhatsAppCheckoutUrl = () => {
    let orderText = `*NEW ORDER - CIC WIGS & FASHION HUB (ABA)* 💕\n`;
    orderText += `👑 Founder: Confidence Okonkwo\n\n`;
    items.forEach((item, index) => {
      const unitPrice = item.isWholesale && item.product.wholesalePriceNGN ? item.product.wholesalePriceNGN : item.product.priceNGN;
      orderText += `${index + 1}. *${item.product.name}*\n`;
      orderText += `   Tier: ${item.isWholesale ? 'WHOLESALE BULK' : 'RETAIL'}\n`;
      orderText += `   Size/Length: ${item.selectedSize} | Color: ${item.selectedColor}\n`;
      orderText += `   Qty: ${item.quantity} × ${
        currency === 'NGN' ? `₦${unitPrice.toLocaleString()}` : `$${unitPrice}`
      }\n\n`;
    });

    if (discountPercent > 0) {
      orderText += `Discount: ${discountPercent}% off applied\n`;
    }
    orderText += `*Total Order Value:* ${formattedTotal}\n`;
    if (customerName) orderText += `Customer: ${customerName}\n`;
    if (customerPhone) orderText += `Phone: ${customerPhone}\n`;
    if (customerAddress) orderText += `Waybill/Delivery Destination: ${customerAddress}\n`;

    orderText += `\nHello Confidence! Please confirm stock availability and send payment details for dispatch from Aba. Thank you!`;

    return `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(orderText)}`;
  };

  const generatePaystackWhatsAppUrl = () => {
    const text = `Hello Confidence! 💕 I want to pay for my bag order (${items.length} items, Total: ${formattedTotal}) via Paystack card payment. Please send me the payment link!`;
    return `https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  const handleCompleteWebCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }
    const generatedId = `CIC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <h2 className="font-serif-brand text-xl font-medium text-stone-950">
              Your Shopping Bag
            </h2>
            <p className="text-xs text-stone-500">
              {items.length === 0
                ? 'Your bag is empty'
                : `${items.reduce((s, i) => s + i.quantity, 0)} items selected · Dispatch from Aba`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 rounded-lg hover:bg-stone-200/50 cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderConfirmed ? (
            /* Order Success View */
            <div className="text-center py-12 px-4 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="font-serif-brand text-2xl font-medium text-stone-950">
                Order Received! 💕
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                Thank you, <strong>{customerName}</strong>! Your order reference is{' '}
                <strong className="text-stone-900 font-mono">{orderId}</strong>.
                Confidence Okonkwo’s Aba dispatch team is packaging your items.
              </p>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 text-left space-y-1">
                <div><strong>Phone:</strong> {customerPhone}</div>
                <div><strong>Waybill / Delivery:</strong> {customerAddress}</div>
                <div><strong>Total Amount:</strong> {formattedTotal}</div>
              </div>
              <a
                href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=${encodeURIComponent(
                  `Hello Confidence! I just placed order ${orderId} on the website. Here are my details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Notify Confidence on WhatsApp
              </a>
              <div>
                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    setShowCheckoutForm(false);
                    onClose();
                  }}
                  className="text-xs text-stone-500 hover:text-stone-900 underline mt-4 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : showCheckoutForm ? (
            /* Direct Checkout Form View */
            <form onSubmit={handleCompleteWebCheckout} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Customer & Waybill Details
                </span>
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="text-xs text-rose-800 hover:underline cursor-pointer"
                >
                  ← Back to Bag
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chidinma Okafor"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08123456789"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Waybill Park / Address & State *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="e.g. Peace Mass Park / Jammal Park, Lagos OR Home delivery address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Special Sizing or Wholesale Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Assorted colors / Urgent dispatch"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-stone-50/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
                >
                  Confirm & Place Order ({formattedTotal})
                </button>
              </div>
            </form>
          ) : items.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16 space-y-3">
              <p className="text-sm text-stone-500">Your bag is currently empty.</p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Discover Wigs, Nightwear & Loungewear
              </button>
            </div>
          ) : (
            /* Itemized list */
            <div className="space-y-3">
              {items.map((item, idx) => {
                const unitPrice = item.isWholesale && item.product.wholesalePriceNGN ? item.product.wholesalePriceNGN : item.product.priceNGN;
                const unitPriceUSD = item.isWholesale && item.product.wholesalePriceUSD ? item.product.wholesalePriceUSD : item.product.priceUSD;
                const itemPrice =
                  currency === 'NGN'
                    ? `₦${(unitPrice * item.quantity).toLocaleString()}`
                    : `$${(unitPriceUSD * item.quantity).toLocaleString()}`;

                return (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${item.isWholesale ? 'ws' : 'rt'}-${idx}`}
                    className="flex gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-stone-200 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-serif-brand text-xs font-semibold text-stone-950 line-clamp-1">
                              {item.product.name}
                            </h4>
                            {item.isWholesale && (
                              <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1 rounded">
                                Bulk
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-500">
                            Size: {item.selectedSize} · {item.selectedColor}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)
                          }
                          className="text-stone-400 hover:text-rose-700 transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        {/* Stepper */}
                        <div className="inline-flex items-center border border-stone-300 rounded bg-white text-xs">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                item.quantity - 1
                              )
                            }
                            className="px-2 py-0.5 text-stone-600 hover:bg-stone-100 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 font-medium tabular-nums text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                item.quantity + 1
                              )
                            }
                            className="px-2 py-0.5 text-stone-600 hover:bg-stone-100 cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-xs font-semibold text-stone-900 tabular-nums">
                          {itemPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Controls */}
        {!orderConfirmed && items.length > 0 && !showCheckoutForm && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
            {/* Promo code bar */}
            <div className="space-y-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (e.g. FETCHMONEY)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-3 py-1.5 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoSuccess && (
                <div className="text-[11px] text-emerald-700 font-medium">{promoSuccess}</div>
              )}
              {promoError && (
                <div className="text-[11px] text-rose-700 font-medium">{promoError}</div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="text-xs space-y-1 text-stone-600 border-t border-stone-200/80 pt-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="tabular-nums font-medium text-stone-900">
                  {currency === 'NGN'
                    ? `₦${rawSubtotalNGN.toLocaleString()}`
                    : `$${rawSubtotalUSD.toLocaleString()}`}
                </span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>VIP Discount ({discountPercent}%):</span>
                  <span className="tabular-nums font-medium">
                    -{currency === 'NGN'
                      ? `₦${discountAmountNGN.toLocaleString()}`
                      : `$${discountAmountUSD.toLocaleString()}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between font-bold text-stone-950 text-sm pt-1 border-t border-stone-200">
                <span>Estimated Total:</span>
                <span className="tabular-nums">{formattedTotal}</span>
              </div>
            </div>

            {/* Action Buttons: WhatsApp Direct Order to Confidence */}
            <div className="space-y-2 pt-1">
              <a
                href={generateWhatsAppCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 text-white text-xs font-semibold rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp with Confidence</span>
              </a>

              {/* --- PAYMENT OPTIONS SECTION --- */}
              <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200 space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-600 flex items-center justify-between">
                  <span>Payment Options</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold lowercase">
                    <MapPin className="w-3 h-3" /> Pay on Delivery available in Aba
                  </span>
                </div>

                {/* 1. Paystack Button */}
                <a
                  href={generatePaystackWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-[#0ba4db]/10 hover:bg-[#0ba4db]/20 text-[#0ba4db] border border-[#0ba4db]/30 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Pay with Paystack (Card / USSD) — Coming Soon</span>
                </a>

                {/* 2. Bank Transfer Box */}
                <div className="p-2 bg-white rounded-lg border border-stone-200 text-[11px] text-stone-700 flex items-start gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-stone-600 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong>Bank Transfer:</strong> Bank details will be displayed after WhatsApp confirmation — Chat Confidence on <strong className="text-stone-900">{VERIFIED_CONTACT.phoneDisplay}</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full py-2 bg-stone-900 text-white text-xs font-medium rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Express Web Waybill Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-center pt-0.5">
              <span className="text-[10px] text-stone-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
                Aba production dispatch · Commercial transport parks & logistics couriers
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
