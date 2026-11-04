import { Product, Category } from '../types';

export const PRODUCTS: Product[] = [
  // --- 1. HUMAN HAIR WIGS & HAIR CARE ---
  {
    id: 'cic-wig-01',
    name: 'Raw Double-Drawn Bone Straight Frontal Wig (100% Human Hair)',
    category: 'wigs',
    genderFocus: 'Female',
    tagline: 'Silky, tangle-free Vietnamese bone straight hair with pre-plucked HD lace frontal',
    priceNGN: 115000,
    priceUSD: 125,
    wholesalePriceNGN: 88000,
    wholesalePriceUSD: 95,
    minWholesaleQty: 3,
    rating: 5.0,
    reviewsCount: 84,
    image: '/src/assets/images/product_human_hair_wig_1793771832193.jpg',
    colors: [
      { name: 'Natural Black 1B', hex: '#1a1918', class: 'bg-[#1a1918]' },
      { name: 'Piano Highlight 4/27', hex: '#63472c', class: 'bg-[#63472c]' },
      { name: 'Burgundy 99J', hex: '#4a1525', class: 'bg-[#4a1525]' }
    ],
    sizes: ['16 Inch', '20 Inch', '24 Inch', '28 Inch'],
    description:
      'Direct from the CIC Wigs Aba hub. 100% authentic unprocessed human hair with aligned cuticles. Features a melt-skin invisible HD swiss lace frontal, pre-bleached knots, and an elastic security strap that requires zero glue for an all-day natural hairline.',
    inclusivityHighlights: [
      'Adjustable internal cap fits small, medium, and large head circumferences (21"–23.5")',
      'Zero synthetic fillers; takes bleach, heat up to 230°C, and custom coloring flawlessly',
      'Ultra-thin transparent HD lace melts imperceptibly across all Melanin skin tones',
      'Double-drawn fullness from root to ends without thin straggly tips'
    ],
    fabricAndCare: {
      material: '100% Single-Donor Virgin Human Hair',
      breathability: 'Ventilated breathable dome cap for all-day scalp comfort',
      care: 'Wash with sulfate-free shampoo; apply argan serum and air dry flat',
      origin: 'Processed and styled at CIC Hair Studio, Aba'
    },
    fitAdvice: 'Pre-fitted with adjustable elastic band and internal security combs. Wear glued or 100% glueless.',
    badge: 'CIC Luxury Hair',
    inStock: true,
    isWholesaleEligible: true
  },
  {
    id: 'cic-revamp-01',
    name: 'Signature Bone-Straight Silk Press & Wig Revamp Service',
    category: 'revamp',
    genderFocus: 'Female',
    tagline: 'Send in your worn-out, frizzy, or tangled wig for total luxury restoration & styling',
    priceNGN: 12500,
    priceUSD: 14,
    wholesalePriceNGN: 9500,
    wholesalePriceUSD: 11,
    minWholesaleQty: 3,
    rating: 4.9,
    reviewsCount: 142,
    image: '/src/assets/images/service_wig_revamp_styling_1793771831838.jpg',
    colors: [
      { name: 'Silk Press Straight', hex: '#262626', class: 'bg-[#262626]' },
      { name: 'Bouncy Wand Curls', hex: '#524036', class: 'bg-[#524036]' },
      { name: 'Body Wave Revival', hex: '#785b46', class: 'bg-[#785b46]' }
    ],
    sizes: ['One Size'],
    description:
      'Don’t throw away your old wigs! Confidence Okonkwo’s signature revamp treatment transforms dull, stiff, or tangled hair back to salon-fresh glass luster. Includes intensive deep-conditioning detox, knot re-bleaching, lace wash, customized baby hair restyling, and precision hot-comb pressing.',
    inclusivityHighlights: [
      'We accept waybills nationwide to Aba: from Lagos, Port Harcourt, Abuja, Owerri, Enugu, and international drops',
      'Works wonders on bone straight, body wave, deep curls, and bob wigs of any density',
      'Includes lace repair, closure re-tightening, and replacement of loose elastic bands',
      'Fast 48–72 hour turnaround with dispatch tracking'
    ],
    fabricAndCare: {
      material: 'Keratin protein infusion & Moroccan argan thermal treatment',
      breathability: 'Restores natural bounce, silkiness, and cuticular movement',
      care: 'We ship back in a satin protective storage bag with care manual',
      origin: 'Crafted by Confidence Okonkwo & master stylists in Aba'
    },
    fitAdvice: 'Simply select your revamp tier, submit your wig details, and waybill to our Aba dispatch hub.',
    badge: 'Top Service',
    inStock: true,
    isWholesaleEligible: true
  },

  // --- 2. NIGHTWEAR (ABA DIRECT FACTORY) ---
  {
    id: 'cic-nightwear-01',
    name: 'Serene Mulberry Silk Lace Slip & Robe Set',
    category: 'nightwear',
    genderFocus: 'Female',
    tagline: 'Featherlight silk indulgence with scalloped French lace trims',
    priceNGN: 38500,
    priceUSD: 42,
    wholesalePriceNGN: 24500,
    wholesalePriceUSD: 27,
    minWholesaleQty: 6,
    rating: 4.9,
    reviewsCount: 68,
    image: '/src/assets/images/product_silk_nightwear_1793771102697.jpg',
    secondaryImage: '/src/assets/images/hero_cic_nightwear_loungewear_1793771101080.jpg',
    colors: [
      { name: 'Dusky Rose', hex: '#b78386', class: 'bg-[#b78386]' },
      { name: 'Champagne Glow', hex: '#e8d8c8', class: 'bg-[#e8d8c8]' },
      { name: 'Midnight Onyx', hex: '#1e2022', class: 'bg-[#1e2022]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description:
      'The crown jewel of CIC Nightwear Aba. Crafted with a liquid-like satin drape that glides over curves without clinging. Features delicate scalloped lace detailing along the neckline and hem, adjustable bias-cut straps, and a matching wrap robe for quiet luxury at home.',
    inclusivityHighlights: [
      'Tailored with bias-cut fluidity to naturally flatter Petite to 3XL frames',
      'Adjustable slide straps for custom bust lift and coverage (Cup A through E)',
      'Hypoallergenic, temperature-regulating natural silk feel keeps skin cool in humid climates',
      'Non-restrictive silhouette with gentle side slits for effortless movement'
    ],
    fabricAndCare: {
      material: '100% 22-Momme Mulberry Silk finish with French corded lace',
      breathability: 'Ultra-breathable, natural thermo-regulating fiber',
      care: 'Hand wash cold or gentle cycle in laundry bag; dry flat in shade',
      origin: 'Produced at CIC Fashion Hub factory in Aba, Abia State'
    },
    fitAdvice: 'True to relaxed luxury fit. If in-between sizes or preferring extra room for lounging, size up.',
    badge: 'Reseller Goldmine',
    inStock: true,
    isWholesaleEligible: true
  },
  {
    id: 'cic-nightwear-02',
    name: 'Palais Satin Draped Kimono Robe & Slip Ensemble',
    category: 'nightwear',
    genderFocus: 'Female',
    tagline: 'Floor-skimming silk luster with self-tie belt and deep side pockets',
    priceNGN: 35000,
    priceUSD: 39,
    wholesalePriceNGN: 22000,
    wholesalePriceUSD: 24,
    minWholesaleQty: 6,
    rating: 4.9,
    reviewsCount: 53,
    image: '/src/assets/images/hero_cic_nightwear_loungewear_1793771101080.jpg',
    colors: [
      { name: 'Champagne Silk', hex: '#e8d8c8', class: 'bg-[#e8d8c8]' },
      { name: 'Blush Mauve', hex: '#cca4a7', class: 'bg-[#cca4a7]' },
      { name: 'Emerald Velvet', hex: '#264e36', class: 'bg-[#264e36]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description:
      'Channel timeless glamour every morning and night. The Palais Kimono features a dramatic kimono sleeve, an interior security tie to prevent accidental slips, a wide sash belt, and hidden side seam pockets. The smooth sateen fabric provides full opacity and luxurious skin glide.',
    inclusivityHighlights: [
      'Interior modesty security tie guarantees a snug, slip-free closure on all silhouettes',
      'Accommodates broad shoulders and full bustlines comfortably without tightness',
      'Generous wrap overlap covers completely when sitting or walking',
      'Wrinkle-resistant luxury weave makes it travel-friendly'
    ],
    fabricAndCare: {
      material: 'Premium Charmeuse Silk Blend with anti-static finish',
      breathability: 'Silky smooth drape with light airy breeze circulation',
      care: 'Machine wash gentle in protective bag or hand wash cool',
      origin: 'CIC Production Hub, Aba'
    },
    fitAdvice: 'Generous kimono cut with adjustable wrap tie. Fits all body types gracefully.',
    badge: 'Customer Favorite',
    inStock: true,
    isWholesaleEligible: true
  },

  // --- 3. LOUNGEWEAR ---
  {
    id: 'cic-loungewear-01',
    name: 'CloudKnit Ribbed Two-Piece Lounge Co-Ord',
    category: 'loungewear',
    genderFocus: 'Female',
    tagline: 'Ultra-soft wide-leg lounge trousers paired with a relaxed drop-shoulder top',
    priceNGN: 29500,
    priceUSD: 34,
    wholesalePriceNGN: 18500,
    wholesalePriceUSD: 21,
    minWholesaleQty: 6,
    rating: 4.8,
    reviewsCount: 94,
    image: '/src/assets/images/product_cozy_loungewear_1793771102073.jpg',
    colors: [
      { name: 'Oat Milk Cream', hex: '#e6ded4', class: 'bg-[#e6ded4]' },
      { name: 'Soft Sage', hex: '#a8b5a0', class: 'bg-[#a8b5a0]' },
      { name: 'Warm Mocha', hex: '#6f5647', class: 'bg-[#6f5647]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description:
      'The quintessential everyday uniform designed to blur the line between relaxing at home and looking impeccably put-together outdoors. Features a breathable ribbed organic cotton-modal knit that is soft against sensitive skin, an elasticized non-digging drawstring waist, and relaxed wide legs.',
    inclusivityHighlights: [
      'Inclusive sizing from XS through 3XL with generous 4-way stretch',
      'Ultra-gentle wide elastic waistband that accommodates maternity & postpartum bodies',
      'Deep functional side pockets designed to securely hold smartphones and essentials',
      'Anti-pill rib knit retains shape after repeated washes'
    ],
    fabricAndCare: {
      material: '92% Organic Cotton, 8% Modal Rib Knit',
      breathability: 'High airflow waffle texture keeps you sweat-free all day',
      care: 'Machine wash gentle cold; tumble dry low or flat dry',
      origin: 'CIC Textile Workshop, Aba'
    },
    fitAdvice: 'Relaxed, fluid drape. Model is 5’7 wearing size M.',
    badge: 'Trending Now',
    inStock: true,
    isWholesaleEligible: true
  },

  // --- 4. STYLISH BAGS ---
  {
    id: 'cic-bag-01',
    name: 'Sovereign Pebbled Leather Dual Tote & Satchel',
    category: 'bags',
    genderFocus: 'Female',
    tagline: 'Architectural silhouette with custom brushed champagne-gold hardware',
    priceNGN: 44000,
    priceUSD: 48,
    wholesalePriceNGN: 28000,
    wholesalePriceUSD: 31,
    minWholesaleQty: 3,
    rating: 5.0,
    reviewsCount: 42,
    image: '/src/assets/images/product_stylish_bag_1793771103336.jpg',
    colors: [
      { name: 'Caramel Tan', hex: '#9d5b2c', class: 'bg-[#9d5b2c]' },
      { name: 'Truffle Noir', hex: '#242426', class: 'bg-[#242426]' },
      { name: 'Warm Biscuit', hex: '#c5a88c', class: 'bg-[#c5a88c]' }
    ],
    sizes: ['One Size'],
    description:
      'Handcrafted from premium scratch-resistant vegan pebbled leather that maintains its structured shape while softening to the touch. Featuring reinforced dual rolled handles, a detachable crossbody strap, and multi-compartment interior storage with protective brass base feet.',
    inclusivityHighlights: [
      'Ergonomically weighted to minimize shoulder strain during all-day wear',
      'Adjustable 120cm strap accommodates diverse heights and outerwear layers',
      'Padded internal sleeve fits up to a 13-inch laptop, tablet, and cosmetics pouch',
      'Water-repellent, wipe-clean finish for enduring daily resilience'
    ],
    fabricAndCare: {
      material: 'Full-grain textured vegan pebble leather with microsuede lining',
      breathability: 'Structured, stain-resistant and moisture-protective exterior',
      care: 'Wipe gently with damp microfiber cloth; store in complimentary dust bag',
      origin: 'Artisanal leathercraft workshop'
    },
    fitAdvice: 'Generous everyday capacity without being bulky. Height: 28cm | Width: 36cm | Depth: 14cm.',
    badge: 'Limited Stock',
    inStock: true,
    isWholesaleEligible: true
  },

  // --- 5. FEMALE INTIMATES & UNDERWEAR ---
  {
    id: 'cic-female-underwear-01',
    name: 'BareComfort Zero-Wire Seamless Bralette & Brief Set',
    category: 'female-underwear',
    genderFocus: 'Female',
    tagline: 'Second-skin contouring with 360-degree laser-cut edge technology',
    priceNGN: 18500,
    priceUSD: 22,
    wholesalePriceNGN: 11000,
    wholesalePriceUSD: 13,
    minWholesaleQty: 6,
    rating: 4.9,
    reviewsCount: 112,
    image: '/src/assets/images/product_comfort_underwears_1793771102921.jpg',
    colors: [
      { name: 'Nude Almond', hex: '#d1b29a', class: 'bg-[#d1b29a]' },
      { name: 'Rose Clay', hex: '#b3827d', class: 'bg-[#b3827d]' },
      { name: 'Clean Noir', hex: '#1c1b1f', class: 'bg-[#1c1b1f]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description:
      'Say goodbye to poking underwires and restrictive back hooks. Our BareComfort wireless bralette uses bonded micro-stretch bands and breathable removable teardrop pads to lift and support naturally. Paired with high-waist laser-cut briefs that guarantee invisible lines under form-fitting outfits.',
    inclusivityHighlights: [
      'Engineered for all body shapes (Cup sizes 30A to 44DD) with zero underwire pressure',
      '100% pure organic cotton antibacterial gusset lining for sensitive intimate wellness',
      'Smooth laser-cut edges eliminate panty lines (VPL) under skirts and leggings',
      'Wider, non-slip shoulder straps that disperse weight without digging into shoulders'
    ],
    fabricAndCare: {
      material: '78% High-Gauge Microfiber, 22% Spandex; 100% Cotton Gusset',
      breathability: 'Micro-perforated moisture-wicking weave prevents sweat buildup',
      care: 'Machine wash cool in wash bag; air dry',
      origin: 'Dermatologist tested intimates partner'
    },
    fitAdvice: 'High elasticity. Stretches comfortably up to 2.5x without bagging out.',
    badge: 'Top Rated',
    inStock: true,
    isWholesaleEligible: true
  },

  // --- 6. MALE UNDERWEAR & ESSENTIALS ---
  {
    id: 'cic-male-underwear-01',
    name: 'Aura Bamboo Ergonomic Stretch Boxer Briefs (3-Pack)',
    category: 'male-underwear',
    genderFocus: 'Male',
    tagline: 'Thermo-cooling bamboo modal trunks with anti-ride-up leg bands',
    priceNGN: 24500,
    priceUSD: 28,
    wholesalePriceNGN: 15500,
    wholesalePriceUSD: 18,
    minWholesaleQty: 6,
    rating: 4.8,
    reviewsCount: 57,
    image: '/src/assets/images/product_comfort_underwears_1793771102921.jpg',
    colors: [
      { name: 'Slate Heather', hex: '#636c78', class: 'bg-[#636c78]' },
      { name: 'Charcoal Navy', hex: '#2d3748', class: 'bg-[#2d3748]' },
      { name: 'Classic Black', hex: '#171923', class: 'bg-[#171923]' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description:
      'A true game-changer in male comfort essentials. Spun from ultra-soft eco-certified bamboo modal fibers that naturally deter odor and wick moisture 3x faster than traditional cotton. Features an anatomical 3D support contour pouch and flatlock anti-chafing seams.',
    inclusivityHighlights: [
      'Generous ergonomic 3D pouch provides gentle separation and all-day ventilation',
      'Non-ride-up stay-put leg cuffs designed for active days, workouts, and office hours',
      'Extended size range through 3XL (Waist 30" to 50")',
      'Tagless interior label prevents skin irritation and itching'
    ],
    fabricAndCare: {
      material: '95% Bamboo Modal, 5% Lycra Elastane',
      breathability: 'Naturally hypoallergenic and thermoregulating for tropical climates',
      care: 'Machine wash cold; gentle cycle; hang dry',
      origin: 'Eco-certified bamboo modal knit'
    },
    fitAdvice: 'Standard athletic fit with supportive stretch. If you prefer a looser boxer feel, size up.',
    badge: 'Essential',
    inStock: true,
    isWholesaleEligible: true
  }
];

export const CATEGORY_LABELS: { [key in Category]: string } = {
  all: 'All Collections',
  wigs: 'Human Hair Wigs',
  revamp: 'Wig Revamp Service',
  nightwear: 'Beautiful Nightwear',
  loungewear: 'Comfortable Loungewear',
  bags: 'Stylish Bags',
  'female-underwear': 'Female Underwears',
  'male-underwear': 'Male Underwears'
};

export const WHOLESALE_PACKS = [
  {
    id: 'starter-15k',
    name: 'Micro-Reseller Starter Pack',
    buyInNGN: 15000,
    buyInUSD: 18,
    piecesCount: '3 Luxury Nightwear Sets',
    projectedProfitNGN: 12000,
    targetAudience: 'Students & Stay-at-home Mums',
    benefits: [
      '3 Bestselling Satin Nightwear Sets (assorted colors)',
      'High-resolution photos & video bundle without watermarks',
      'Confidence’s WhatsApp Reseller Coaching Guide',
      'Access to exclusive Aba wholesale dispatch'
    ]
  },
  {
    id: 'starter-45k',
    name: 'Fast-Track Retail Bundle',
    buyInNGN: 45000,
    buyInUSD: 52,
    piecesCount: '10 Mixed Satin Sets + 2 Handbags',
    projectedProfitNGN: 38000,
    targetAudience: 'Online Boutique Sellers & Instagram Stores',
    benefits: [
      '10 Mixed Satin Kimono Robes & Nighties',
      '2 Chic Structured Handbags',
      'Full Wholesale Price Lock for 6 months',
      'Priority waybill handling to your state park'
    ]
  },
  {
    id: 'starter-120k',
    name: 'Mega Boutique Stockist Pack',
    buyInNGN: 120000,
    buyInUSD: 135,
    piecesCount: '25 Sleepwear Sets + 1 Raw Human Hair Wig',
    projectedProfitNGN: 95000,
    targetAudience: 'Physical Boutiques & Established Merchants',
    benefits: [
      '25 Assorted Luxury Nightwear & Loungewear pieces',
      '1 20-inch 100% Human Hair Bone Straight Frontal Wig',
      'Dedicated 1-on-1 WhatsApp concierge line with Confidence',
      'Zero-charge drop-shipping directly to your customers'
    ]
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Chiamaka N.',
    location: 'Lagos (Waybilled via Jammal Park)',
    rating: 5,
    verified: true,
    product: 'Signature Bone-Straight Silk Press & Wig Revamp Service',
    comment:
      'I sent two completely dead, tangled 24-inch frontal wigs from Lagos to Confidence in Aba. When they arrived back via peace park, I literally screamed! They are so bone straight, bouncy, and smell heavenly. Confidence is the undisputed wig revamping queen in Nigeria!'
  },
  {
    id: 'rev-2',
    author: 'Blessing K.',
    location: 'Port Harcourt (Wholesale Reseller)',
    rating: 5,
    verified: true,
    product: 'Micro-Reseller Starter Pack (₦15,000)',
    comment:
      'Confidence’s motto is real: "Come let’s fetch money with nighties, you don’t need a physical shop!" I started with just ₦15,000 on WhatsApp while taking care of my toddler. In my first week, I sold all 3 sets and made ₦11,000 clean profit. Now I order 20 sets every single month!'
  },
  {
    id: 'rev-3',
    author: 'Halima A.',
    location: 'Abuja (Direct Retail Shopper)',
    rating: 5,
    verified: true,
    product: 'Serene Mulberry Silk Lace Slip & Robe Set',
    comment:
      'The silk is extraordinarily soft and doesn’t stick to the skin in humid weather! I ordered size 2XL and the fit across my chest and hips is so flattering. My order arrived within 48 hours from Aba. CIC is truly my go-to fashion hub now 💕'
  },
  {
    id: 'rev-4',
    author: 'Emeka D.',
    location: 'Enugu, Nigeria',
    rating: 5,
    verified: true,
    product: 'Aura Bamboo Ergonomic Stretch Boxer Briefs (3-Pack)',
    comment:
      'My wife actually bought these for me while getting her nightwear set. Honestly, the most breathable boxers I own. No rolling, no chafing. 10/10 recommendation for men who care about comfort.'
  }
];
