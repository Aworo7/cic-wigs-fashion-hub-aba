import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { WigRevampModal } from './components/WigRevampModal';
import { WholesalePortalModal } from './components/WholesalePortalModal';
import { LegalModal, LegalPageType } from './components/LegalModal';
import { FAQSection } from './components/FAQSection';
import { InclusiveStory } from './components/InclusiveStory';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';
import { PRODUCTS, CATEGORY_LABELS } from './data/products';
import { Category, Product, CartItem, Currency, VERIFIED_CONTACT } from './types';
import { Search, Filter, SlidersHorizontal, Facebook, Sparkles, RotateCcw, Scissors, TrendingUp, MapPin } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [isWholesaleMode, setIsWholesaleMode] = useState<boolean>(false);

  // Modals & Drawers
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [wigRevampOpen, setWigRevampOpen] = useState(false);
  const [wholesaleOpen, setWholesaleOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPageType>('return-policy');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  // Check URL hash/path for legal pages on mount (e.g. #return-policy, #shipping, #privacy-policy)
  useEffect(() => {
    const checkLegalRoute = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash === 'return-policy' || hash === 'shipping' || hash === 'privacy-policy') {
        setLegalPage(hash as LegalPageType);
        setLegalModalOpen(true);
      }
    };
    checkLegalRoute();
    window.addEventListener('hashchange', checkLegalRoute);
    return () => window.removeEventListener('hashchange', checkLegalRoute);
  }, []);

  // Cart state with persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cic_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cic_cart', JSON.stringify(cartItems));
    } catch {
      // LocalStorage write error fallback
    }
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    size: string,
    color: string,
    quantity: number = 1,
    isWholesale: boolean = false
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color &&
          item.isWholesale === isWholesale
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [
          ...prev,
          { product, selectedSize: size, selectedColor: color, quantity, isWholesale }
        ];
      }
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (
    productId: string,
    size: string,
    color: string,
    newQty: number
  ) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return (PRODUCTS || []).filter((product) => {
      if (!product) return false;
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSize !== 'all') {
        const hasSize = (product.sizes || []).some(
          (s) => s.toLowerCase() === selectedSize.toLowerCase() || s === 'One Size'
        );
        if (!hasSize) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = (product.name || '').toLowerCase().includes(q);
        const matchesTagline = (product.tagline || '').toLowerCase().includes(q);
        const matchesDesc = (product.description || '').toLowerCase().includes(q);
        const matchesCat = (product.category || '').toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      const priceA = isWholesaleMode && a.wholesalePriceNGN ? a.wholesalePriceNGN : (a.priceNGN ?? a.price ?? 0);
      const priceB = isWholesaleMode && b.wholesalePriceNGN ? b.wholesalePriceNGN : (b.priceNGN ?? b.price ?? 0);
      const priceAUSD = isWholesaleMode && a.wholesalePriceUSD ? a.wholesalePriceUSD : (a.priceUSD ?? 0);
      const priceBUSD = isWholesaleMode && b.wholesalePriceUSD ? b.wholesalePriceUSD : (b.priceUSD ?? 0);

      if (sortBy === 'price-asc') {
        return currency === 'NGN' ? (priceA || 0) - (priceB || 0) : (priceAUSD || 0) - (priceBUSD || 0);
      }
      if (sortBy === 'price-desc') {
        return currency === 'NGN' ? (priceB || 0) - (priceA || 0) : (priceBUSD || 0) - (priceAUSD || 0);
      }
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0; // 'featured' retains curated order
    });
  }, [selectedCategory, selectedSize, searchQuery, sortBy, currency, isWholesaleMode]);

  const categoriesList: Category[] = [
    'all',
    'wigs',
    'revamp',
    'nightwear',
    'loungewear',
    'bags',
    'female-underwear',
    'male-underwear'
  ];

  const sizeOptions = ['all', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (page: LegalPageType) => {
    setLegalPage(page);
    setLegalModalOpen(true);
    window.location.hash = page;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-rose-100 selection:text-rose-950">
      
      {/* Top Navigation Bar with Verified Details */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        currency={currency}
        onToggleCurrency={() => setCurrency((c) => (c === 'NGN' ? 'USD' : 'NGN'))}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenWigRevamp={() => setWigRevampOpen(true)}
        onOpenWholesale={() => setWholesaleOpen(true)}
        isWholesaleMode={isWholesaleMode}
        onToggleWholesaleMode={() => setIsWholesaleMode((v) => !v)}
      />

      <main className="flex-1">
        {/* Boutique Hero Campaign */}
        <Hero
          onExploreClick={scrollToCatalog}
          onOpenWigRevamp={() => setWigRevampOpen(true)}
          onOpenWholesale={() => setWholesaleOpen(true)}
        />

        {/* Catalog Showcase Section */}
        <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-stone-700" />
                <span>Aba Factory Direct & Hair Salon</span>
                <span>·</span>
                <span>Founder: Confidence Okonkwo</span>
              </div>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-medium text-stone-950">
                Wigs, Revamp & Soft Life Fashion
              </h2>
              <p className="text-sm text-stone-600 max-w-xl font-light">
                Shop 100% human hair wigs, professional wig restoration services, satin nighties, loungewear, and reseller bulk packs.
              </p>
            </div>

            {/* Quick Action Triggers */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => setWigRevampOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold text-rose-900 bg-rose-50 border border-rose-300 rounded-lg hover:bg-rose-100 transition-colors shadow-2xs whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Book Wig Revamp Form</span>
              </button>

              <button
                onClick={() => setWholesaleOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors shadow-2xs whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Wholesale Price Sheet</span>
              </button>

              <button
                onClick={() => setSizeGuideOpen(true)}
                className="px-3.5 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:border-stone-900 transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
              >
                Size Chart (XS–3XL)
              </button>
            </div>
          </div>

          {/* Wholesale Mode Active Notice Banner */}
          {isWholesaleMode && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs text-emerald-950">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Aba Wholesale Mode Active:</strong> You are viewing direct factory wholesale rates. Minimum 3–6 pieces per design to qualify.
                </span>
              </div>
              <button
                onClick={() => setIsWholesaleMode(false)}
                className="text-emerald-800 underline font-semibold hover:text-emerald-950 ml-2 whitespace-nowrap cursor-pointer"
              >
                Switch to Retail
              </button>
            </div>
          )}

          {/* Interactive Filter Controls Bar */}
          <div className="pt-6 pb-6 space-y-5">
            
            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-950'
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            {/* Filter Sub-bar: Search, Sizes, and Sorting */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search wigs, revamp, nightwear, bags, boxers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900 placeholder:text-stone-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Size Selector Strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="text-xs font-medium text-stone-500 mr-1 whitespace-nowrap flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Size:
                </span>
                {sizeOptions.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2.5 py-1 text-xs font-medium rounded border transition-colors whitespace-nowrap cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {sz === 'all' ? 'All Sizes' : sz}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900 cursor-pointer"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

            {/* Active Query Status Indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
              <div>
                Showing <strong className="text-stone-900 font-semibold tabular-nums">{(filteredProducts || []).length}</strong> items
                {selectedCategory !== 'all' && (
                  <span> in <strong className="text-stone-900">{CATEGORY_LABELS[selectedCategory]}</strong></span>
                )}
                {selectedSize !== 'all' && (
                  <span> · Size <strong className="text-stone-900">{selectedSize}</strong></span>
                )}
                {searchQuery && (
                  <span> · matching <strong className="text-stone-900">"{searchQuery}"</strong></span>
                )}
              </div>

              {(selectedCategory !== 'all' || selectedSize !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSize('all');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-rose-800 hover:text-stone-950 font-medium underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Reset all filters
                </button>
              )}
            </div>

          </div>

          {/* Product Grid */}
          {(filteredProducts || []).length === 0 ? (
            <div className="py-20 text-center bg-white rounded-2xl border border-stone-200 p-8 space-y-4">
              <p className="font-serif-brand text-2xl text-stone-800">
                No matching pieces found
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                We couldn't find items matching your selected criteria. Try adjusting your size filter or searching for another term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSize('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                View Full Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(filteredProducts || []).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  isWholesaleMode={isWholesaleMode}
                  onQuickView={(p) => setViewingProduct(p)}
                  onAddToCart={(p, size, color) => handleAddToCart(p, size, color, 1, isWholesaleMode)}
                />
              ))}
            </div>
          )}

        </section>

        {/* Verified Social Media Spotlight: Facebook & TikTok */}
        <section className="bg-stone-900 text-white py-12 sm:py-16 border-y border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-stone-950/80 p-8 sm:p-10 rounded-2xl border border-stone-800 shadow-xl">
              <div className="space-y-3 max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-300">
                  <Facebook className="w-4 h-4 fill-[#1877F2] text-[#1877F2]" />
                  <span>Connect With Confidence Okonkwo</span>
                </div>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-medium text-white leading-tight">
                  Follow CIC Wigs & Fashion Hub on Facebook & TikTok
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  Watch live wig revamp tutorials, customer unboxing reactions, bone-straight hair motion videos, and instant restock alerts straight from Aba!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={VERIFIED_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 bg-[#1877F2] hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Facebook className="w-4 h-4 fill-white" />
                  <span>Facebook (@cicfashionhub)</span>
                </a>
                <a
                  href={VERIFIED_CONTACT.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>TikTok Video (@cicfashionhub)</span>
                </a>
                <a
                  href={`https://wa.me/${VERIFIED_CONTACT.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy & Customer Reviews */}
        <InclusiveStory
          onOpenWigRevamp={() => setWigRevampOpen(true)}
          onOpenWholesale={() => setWholesaleOpen(true)}
        />

        {/* 5-Question FAQ Section before Footer */}
        <FAQSection
          onOpenWigRevamp={() => setWigRevampOpen(true)}
          onOpenWholesale={() => setWholesaleOpen(true)}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
        />

      </main>

      {/* Floating WhatsApp Quick Consultation */}
      <WhatsAppFloat />

      {/* Modals & Slide-overs */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductDetailModal
        product={viewingProduct}
        currency={currency}
        isOpen={!!viewingProduct}
        onClose={() => setViewingProduct(null)}
        onAddToCart={(p, size, color, qty, isWs) => handleAddToCart(p, size, color, qty, isWs)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      <WigRevampModal
        isOpen={wigRevampOpen}
        onClose={() => setWigRevampOpen(false)}
        currency={currency}
      />

      <WholesalePortalModal
        isOpen={wholesaleOpen}
        onClose={() => setWholesaleOpen(false)}
        currency={currency}
      />

      {/* Legal Pages Modal (/return-policy, /shipping, /privacy-policy) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialPage={legalPage}
      />

      {/* Boutique Footer with Legal Links */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenWigRevamp={() => setWigRevampOpen(true)}
        onOpenWholesale={() => setWholesaleOpen(true)}
        onOpenLegal={handleOpenLegal}
      />

    </div>
  );
}
