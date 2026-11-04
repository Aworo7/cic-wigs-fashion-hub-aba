export const PRODUCTS = [
  { id: 1, name: "Luxury Human Hair Wig - Body Wave", category: "Wigs & Hair", price: 115000, originalPrice: 135000, image: "/product_human_hair_wig_1793771832193.jpg", imageUrl: "/product_human_hair_wig_1793771832193.jpg", rating: 4.9, reviews: 127, badge: "BEST SELLER", description: "Premium 100% human hair" },
  { id: 2, name: "Comfort Lace Underwear Set - 5 Pack", category: "Intimates", price: 12500, originalPrice: 15000, image: "/product_comfort_underwears_1793771102921.jpg", imageUrl: "/product_comfort_underwears_1793771102921.jpg", rating: 4.8, reviews: 89, badge: "Standard", description: "Soft breathable lace" },
  { id: 3, name: "Stylish Designer Handbag Collection", category: "Stylish Bags", price: 38500, originalPrice: 45000, image: "/product_stylish_bag_1793771103336.jpg", imageUrl: "/product_stylish_bag_1793771103336.jpg", rating: 4.7, reviews: 64, badge: "NEW", description: "Elegant bag" },
  { id: 4, name: "Palais Satin Draped Kimono Robe & Slip Set", category: "Nightwear (Aba)", price: 35000, originalPrice: 42000, image: "/product_silk_nightwear_1793771102697.jpg", imageUrl: "/product_silk_nightwear_1793771102697.jpg", rating: 4.9, reviews: 54, badge: "CUSTOMER FAVORITE", description: "Luxury satin kimono" },
  { id: 5, name: "Cloudknit Ribbed Two-Piece Lounge Set", category: "Loungewear", price: 29900, originalPrice: 35000, image: "/product_cozy_loungewear_1793771102073.jpg", imageUrl: "/product_cozy_loungewear_1793771102073.jpg", rating: 4.8, reviews: 94, badge: "TRENDING NOW", description: "Ultra-soft lounge" },
  { id: 6, name: "Sovereign Pebbled Leather Dual Tote Bag", category: "Bags", price: 44000, originalPrice: 50000, image: "/product_stylish_bag_1793771103336.jpg", imageUrl: "/product_stylish_bag_1793771103336.jpg", rating: 4.8, reviews: 42, badge: "LIMITED STOCK", description: "Premium leather tote" },
  { id: 7, name: "Wig Revamp & Styling Service", category: "BOOK REVAMP", price: 15000, originalPrice: 18000, image: "/service_wig_revamp_styling_1793771831838.jpg", imageUrl: "/service_wig_revamp_styling_1793771831838.jpg", rating: 5.0, reviews: 203, badge: "TOP RATED", description: "Professional wig revamp" }
];

export const CATEGORY_LABELS: Record<string, string> = {
  "Wigs & Hair": "Wigs & Hair",
  "Intimates": "Intimates",
  "Stylish Bags": "Stylish Bags",
  "Nightwear (Aba)": "Nightwear (Aba)",
  "Loungewear": "Loungewear",
  "Bags": "Bags",
  "BOOK REVAMP": "BOOK REVAMP"
};

export const products = PRODUCTS;

export const REVIEWS = [
  { id: 1, name: "Amara Johnson", rating: 5, comment: "The wig quality is absolutely amazing!", productId: 1, date: "2024-12-15" },
  { id: 2, name: "Sarah Williams", rating: 5, comment: "Best loungewear!", productId: 5, date: "2024-12-10" },
  { id: 3, name: "Chioma Okafor", rating: 5, comment: "The kimono robe is pure luxury!", productId: 4, date: "2024-12-05" }
];

export const WHOLESALE_PACKS = [
  { id: 1, name: "Starter Pack - 10 Wigs", price: 850000, items: 10, description: "Perfect for small businesses" },
  { id: 2, name: "Growth Pack - 25 Wigs", price: 1950000, items: 25, description: "Most popular" },
  { id: 3, name: "Enterprise Pack - 50 Wigs", price: 3500000, items: 50, description: "Best value" }
];

export const HERO_IMAGES = [
  { id: 1, url: "/hero_cic_nightwear_loungewear_1793771101080.jpg" }
];
