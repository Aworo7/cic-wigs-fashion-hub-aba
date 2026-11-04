export type Category = 
  | 'all'
  | 'wigs'
  | 'revamp'
  | 'nightwear'
  | 'loungewear'
  | 'bags'
  | 'female-underwear'
  | 'male-underwear';

export interface Product {
  id: string;
  name: string;
  category: Category;
  genderFocus: 'Female' | 'Male' | 'Unisex';
  tagline: string;
  price?: number;
  priceNGN: number;
  priceUSD: number;
  wholesalePriceNGN?: number;
  wholesalePriceUSD?: number;
  minWholesaleQty?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  colors: { name: string; hex: string; class: string }[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | 'One Size' | '12 Inch' | '16 Inch' | '20 Inch' | '24 Inch' | '28 Inch')[];
  description: string;
  inclusivityHighlights: string[];
  fabricAndCare: {
    material: string;
    breathability: string;
    care: string;
    origin: string;
  };
  fitAdvice: string;
  badge?: string;
  inStock: boolean;
  isWholesaleEligible?: boolean;
}

export interface WholesalePack {
  id: string | number;
  name: string;
  price?: number;
  buyInNGN?: number;
  buyInUSD?: number;
  items?: number;
  piecesCount?: string;
  projectedProfitNGN?: number;
  targetAudience?: string;
  benefits?: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  isWholesale?: boolean;
}

export type Currency = 'NGN' | 'USD';

export interface WigRevampBooking {
  serviceTier: string;
  hairType: string;
  hairLength: string;
  locationCity: string;
  customRequests: string;
  priceNGN: number;
  userImagePreview?: string;
}

export const VERIFIED_CONTACT = {
  businessName: 'CIC Wigs & Fashion Hub',
  legalName: 'CIC Wigs and Fashion Hub (CIC Nightwear Aba)',
  founder: 'Confidence Okonkwo (Okonkwo Confidence Oluebube)',
  location: 'Aba, Abia State, Nigeria',
  phoneDisplay: '+234 812 718 1846',
  phoneClean: '2348127181846',
  facebookUrl: 'https://www.facebook.com/cicfashionhub/',
  tiktokUrl: 'https://www.tiktok.com/@cicfashionhub',
  motto: "Come let's fetch money with nighties, you don't really need a physical shop to advertise, just your phone and data."
};
