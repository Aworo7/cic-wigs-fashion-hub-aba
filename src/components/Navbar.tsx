import React, { useState } from 'react';
import { ShoppingBag, Facebook, MessageCircle, Menu, X, Sparkles, TrendingUp, Scissors } from 'lucide-react';
import { Category, Currency, VERIFIED_CONTACT } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: Currency;
  onToggleCurrency: () => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onOpenSizeGuide: () => void;
  onOpenWigRevamp: () => void;
  onOpenWholesale: () => void;
  isWholesaleMode: boolean;
  onToggleWholesaleMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onToggleCurrency,
  selectedCategory,
  onSelectCategory,
  onOpenSizeGuide,
  onOpenWigRevamp,
  onOpenWholesale,
  isWholesaleMode,
  onToggleWholesaleMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const navLinks: { label: string; cat: Category }[] = [
    { label: 'Wigs & Hair', cat: 'wigs' },
    { label: 'Nightwear (Aba)', cat: 'nightwear' },
    { label: 'Loungewear', cat: 'loungewear' },
    { label: 'Stylish Bags', cat: 'bags' },
    { label: 'Intimates', cat: 'female-underwear' }
  ];

  const handleNavClick = (cat: Category) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top Announcement Bar with Verified Phone & Location */}
      {announcementVisible && (
        <div className="bg-stone-900 text-stone-100 text-xs py-2 px-4 flex items-center justify-between">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center text-stone-200">
            <span className="flex items-center gap-1.5 font-light tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-rose-300 shrink-0" />
              <span>
                <strong>CIC Wigs & Fashion Hub</strong> · Founder: <strong>Confidence Okonkwo</strong> (Aba, Abia State)
              </span>
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <a
              href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-white font-medium underline"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp: {VERIFIED_CONTACT.phoneDisplay}
            </a>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-300 italic">
              "{VERIFIED_CONTACT.motto}"
            </span>
          </div>
          <button
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Dismiss announcement"
            className="text-stone-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navigation Row - Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col shrink-0 group text-left cursor-pointer"
          >
            <span className="font-serif-brand text-2xl sm:text-3xl font-medium tracking-tight text-stone-950 group-hover:text-rose-950 transition-colors whitespace-nowrap">
              CIC Wigs & Fashion Hub
            </span>
            <span className="text-[11px] font-sans tracking-widest text-stone-500 uppercase -mt-0.5">
              Confidence Okonkwo · Aba, Nigeria
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((item) => (
              <button
                key={item.cat}
                onClick={() => handleNavClick(item.cat)}
                className={`transition-colors whitespace-nowrap py-1 border-b-2 cursor-pointer ${
                  selectedCategory === item.cat
                    ? 'text-stone-950 border-stone-900 font-semibold'
                    : 'border-transparent text-stone-600 hover:text-stone-950 hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Quick action triggers */}
            <button
              onClick={onOpenWigRevamp}
              className="text-stone-800 hover:text-rose-900 text-xs font-semibold uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-rose-900 transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <Scissors className="w-3.5 h-3.5 text-rose-700" />
              <span>Book Revamp</span>
            </button>

            <button
              onClick={onOpenWholesale}
              className="text-stone-800 hover:text-emerald-800 text-xs font-semibold uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-emerald-800 transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Wholesale Hub</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action & Utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            
            {/* Wholesale vs Retail pricing toggle */}
            <button
              onClick={onToggleWholesaleMode}
              title="Toggle Wholesale Reseller Price View"
              className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                isWholesaleMode
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-600'
              }`}
            >
              <TrendingUp className="w-3 h-3" />
              <span>{isWholesaleMode ? 'Wholesale Prices Active' : 'Wholesale Mode'}</span>
            </button>

            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              title={`Switch currency (Current: ${currency})`}
              className="px-2 py-1 text-xs font-semibold rounded border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              {currency === 'NGN' ? '🇳🇬 ₦ NGN' : '🇺🇸 $ USD'}
            </button>

            {/* Verified WhatsApp direct contact */}
            <a
              href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}?text=Hello%20Confidence!%20💕%20I%20am%20visiting%20CIC%20Wigs%20and%20Fashion%20Hub%20and%20would%20like%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Chat with Confidence Okonkwo on WhatsApp (${VERIFIED_CONTACT.phoneDisplay})`}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Facebook direct page link */}
            <a
              href={VERIFIED_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit CIC Fashion Hub on Facebook"
              className="hidden sm:flex items-center p-2 text-[#1877F2] hover:bg-blue-50/70 border border-stone-200 rounded-lg transition-colors"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-2.5 rounded-full text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-950 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-[#FAF8F5] px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Aba Hub Catalog
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('all')}
              className={`text-left py-2 text-base font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all' ? 'text-rose-900 font-semibold' : 'text-stone-800'
              }`}
            >
              All Collections
            </button>
            {navLinks.map((item) => (
              <button
                key={item.cat}
                onClick={() => handleNavClick(item.cat)}
                className={`text-left py-2 text-base font-medium transition-colors cursor-pointer ${
                  selectedCategory === item.cat ? 'text-rose-900 font-semibold' : 'text-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWigRevamp();
              }}
              className="w-full text-left py-2 text-sm text-stone-900 font-semibold flex items-center gap-2 cursor-pointer"
            >
              <Scissors className="w-4 h-4 text-rose-700" />
              <span>Book Wig Revamp Service</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWholesale();
              }}
              className="w-full text-left py-2 text-sm text-emerald-800 font-semibold flex items-center gap-2 cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Wholesale Portal ("Fetch Money with Nighties")</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeGuide();
              }}
              className="w-full text-left py-2 text-sm text-stone-700 hover:text-stone-950 font-medium cursor-pointer"
            >
              Inclusive Sizing Guide (XS–3XL)
            </button>

            <a
              href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-emerald-700 font-medium"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Confidence ({VERIFIED_CONTACT.phoneDisplay})
            </a>

            <a
              href={VERIFIED_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-blue-700 font-medium"
            >
              <Facebook className="w-4 h-4" /> Visit Facebook Page (@cicfashionhub)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
