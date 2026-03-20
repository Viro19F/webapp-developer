function makeArtwork(options) {
  const label = options.label;
  const subtitle = options.subtitle;
  const bg = options.bg;
  const panel = options.panel;
  const leaf = options.leaf;
  const accent = options.accent;
  const dot = options.dot;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900" role="img" aria-label="${label}">
    <defs>
      <linearGradient id="wash" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}" />
        <stop offset="100%" stop-color="${panel}" />
      </linearGradient>
      <linearGradient id="steam" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.8" />
        <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="720" height="900" fill="url(#wash)" />
    <circle cx="595" cy="122" r="86" fill="${dot}" fill-opacity="0.28" />
    <circle cx="600" cy="126" r="48" fill="${dot}" fill-opacity="0.16" />
    <rect x="148" y="132" width="424" height="594" rx="34" fill="${panel}" />
    <rect x="178" y="162" width="364" height="534" rx="26" fill="none" stroke="${leaf}" stroke-opacity="0.28" stroke-width="2" />
    <path d="M360 246 C418 188 484 234 462 304 C447 354 398 376 360 420 C322 376 273 354 258 304 C236 234 302 188 360 246 Z" fill="${leaf}" fill-opacity="0.92" />
    <path d="M360 248 C360 340 354 430 344 534" stroke="${panel}" stroke-opacity="0.72" stroke-width="8" stroke-linecap="round" />
    <path d="M262 582 C330 554 405 556 470 580" stroke="${accent}" stroke-width="11" stroke-linecap="round" fill="none" />
    <path d="M268 596 C332 646 392 646 454 596" stroke="${accent}" stroke-width="11" stroke-linecap="round" fill="none" />
    <rect x="238" y="640" width="244" height="24" rx="12" fill="${leaf}" fill-opacity="0.15" />
    <text x="360" y="154" text-anchor="middle" font-family="Georgia, serif" font-size="20" letter-spacing="5" fill="${leaf}" fill-opacity="0.72">MORI MATCHA</text>
    <text x="360" y="598" text-anchor="middle" font-family="Georgia, serif" font-size="50" fill="${leaf}">${label}</text>
    <text x="360" y="640" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" letter-spacing="4" fill="${leaf}" fill-opacity="0.8">${subtitle}</text>
    <path d="M216 730 C286 706 432 706 504 730" fill="none" stroke="${leaf}" stroke-opacity="0.18" stroke-width="2" />
    <rect x="282" y="720" width="156" height="48" rx="24" fill="${leaf}" fill-opacity="0.08" />
    <text x="360" y="751" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" letter-spacing="3" fill="${leaf}" fill-opacity="0.72">STONE MILLED</text>
    <path d="M170 100 C286 56 424 58 548 112" fill="none" stroke="url(#steam)" stroke-width="22" stroke-linecap="round" opacity="0.52" />
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function makeImageSet(label, subtitle, palette) {
  return [
    makeArtwork({
      label,
      subtitle,
      bg: palette.bg,
      panel: palette.panel,
      leaf: palette.leaf,
      accent: palette.accent,
      dot: palette.dot,
    }),
    makeArtwork({
      label,
      subtitle: "RITUAL EDIT",
      bg: palette.panel,
      panel: palette.bg,
      leaf: palette.leaf,
      accent: palette.dot,
      dot: palette.accent,
    }),
    makeArtwork({
      label,
      subtitle: "SMALL BATCH",
      bg: palette.dot,
      panel: palette.bg,
      leaf: palette.leaf,
      accent: palette.accent,
      dot: palette.panel,
    }),
  ];
}

const PRODUCTS = [
  {
    id: "dawn-ceremonial",
    name: "Dawn Ceremonial",
    category: "ceremonial",
    price: 32,
    size: "30g tin",
    origin: "Uji, Kyoto",
    tasting: "sweet pea, vanilla, fresh almond",
    badge: "Best seller",
    description:
      "A bright first-harvest matcha for clean, silky bowls with almost no bitterness. Built for people who want the full ritual and a soft finish.",
    details:
      "Stone-milled from shaded spring leaves. Best whisked with water only and served in your calmest bowl.",
    ingredients: "100% first-harvest Japanese tencha",
    serving: "2g matcha to 60ml water, whisk 15 seconds",
    featured: true,
    palette: {
      bg: "#f3eedf",
      panel: "#d8dfc5",
      leaf: "#42593d",
      accent: "#c48959",
      dot: "#b6c08f",
    },
    related: ["daily-cloud", "stone-whisk-kit", "yuzu-matcha-bites"],
  },
  {
    id: "field-ceremonial",
    name: "Field Ceremonial",
    category: "ceremonial",
    price: 36,
    size: "30g tin",
    origin: "Yame, Fukuoka",
    tasting: "spinach, cashew cream, melon rind",
    badge: "New harvest",
    description:
      "A deeper ceremonial grade with more umami and density. Ideal for people who want a savory cup that still lands smooth.",
    details:
      "Slow-grown leaves with a richer body. Makes a dense koicha-style bowl if you want a more concentrated ritual.",
    ingredients: "100% first-harvest Japanese tencha",
    serving: "2g matcha to 50ml water, whisk slowly for body",
    featured: true,
    palette: {
      bg: "#e7ecde",
      panel: "#f5f1e7",
      leaf: "#314932",
      accent: "#b57c47",
      dot: "#c9d2b6",
    },
    related: ["dawn-ceremonial", "travel-sifter-set", "oat-latte-blend"],
  },
  {
    id: "daily-cloud",
    name: "Daily Cloud",
    category: "everyday",
    price: 24,
    size: "80g pouch",
    origin: "Shizuoka",
    tasting: "oat biscuit, cut grass, toasted rice",
    badge: "Daily pick",
    description:
      "An easygoing everyday matcha for lattes, iced drinks, and quick morning whisking. Less precious, still clean.",
    details:
      "Balanced for milk without vanishing. If you want one bag for home and office, this is the one.",
    ingredients: "Japanese green tea powder",
    serving: "3g matcha to 150ml milk or water",
    featured: true,
    palette: {
      bg: "#f0ead5",
      panel: "#d4dfb8",
      leaf: "#435a37",
      accent: "#d19b67",
      dot: "#adb989",
    },
    related: ["oat-latte-blend", "stone-whisk-kit", "dawn-ceremonial"],
  },
  {
    id: "oat-latte-blend",
    name: "Oat Latte Blend",
    category: "latte",
    price: 22,
    size: "100g pouch",
    origin: "Kagoshima",
    tasting: "cereal milk, pistachio, vanilla",
    badge: "Cafe style",
    description:
      "A smoother, rounder blend made to punch through oat milk and still taste like tea. Weekday friendly and easy to love.",
    details:
      "Blend of matcha and hojicha for more warmth and less edge. A good first bag for anyone entering matcha through lattes.",
    ingredients: "Matcha, hojicha powder",
    serving: "4g blend to 180ml milk",
    featured: false,
    palette: {
      bg: "#eee4d2",
      panel: "#d9cfb4",
      leaf: "#4a5f3d",
      accent: "#c58a52",
      dot: "#b0bf95",
    },
    related: ["daily-cloud", "hojicha-sunset", "yuzu-matcha-bites"],
  },
  {
    id: "stone-whisk-kit",
    name: "Stone Whisk Kit",
    category: "tools",
    price: 48,
    size: "Bowl, whisk, scoop",
    origin: "Made in Japan",
    tasting: "starter ritual set",
    badge: "Starter set",
    description:
      "Everything you need to stop shaking matcha in a jar and start making it properly. Balanced for first buyers and gift-ready.",
    details:
      "Includes a matte clay bowl, bamboo chasen, matching scoop, and a simple ritual card tucked in the box.",
    ingredients: "Ceramic bowl, bamboo whisk, bamboo scoop",
    serving: "Use with any of our ceremonial or everyday tins",
    featured: true,
    palette: {
      bg: "#efe7db",
      panel: "#d6d3c8",
      leaf: "#334839",
      accent: "#b77544",
      dot: "#b6c2a8",
    },
    related: ["dawn-ceremonial", "travel-sifter-set", "daily-cloud"],
  },
  {
    id: "travel-sifter-set",
    name: "Travel Sifter Set",
    category: "tools",
    price: 26,
    size: "Tin sifter and scoop",
    origin: "Osaka",
    tasting: "portable prep",
    badge: "For the office",
    description:
      "A compact way to keep lumps out of your cup when you are making matcha at work or on the move.",
    details:
      "Slim brass-tone sifter lid with a travel scoop sized for quick hotel kettles and shared office kitchens.",
    ingredients: "Stainless steel sifter, metal scoop",
    serving: "Sift 2g before whisking for a smoother cup",
    featured: false,
    palette: {
      bg: "#f5efdf",
      panel: "#d8e1cc",
      leaf: "#42553a",
      accent: "#d29457",
      dot: "#bec89c",
    },
    related: ["field-ceremonial", "stone-whisk-kit", "daily-cloud"],
  },
  {
    id: "hojicha-sunset",
    name: "Hojicha Sunset",
    category: "latte",
    price: 19,
    size: "90g pouch",
    origin: "Kyoto",
    tasting: "toasted hazelnut, cacao, soft smoke",
    badge: "Evening cup",
    description:
      "Roasted green tea powder for the customers who want the ritual without the extra lift. Warm, nutty, and very forgiving.",
    details:
      "Less caffeine, lots of comfort. Use it for late afternoon lattes or shaken iced drinks with oat milk.",
    ingredients: "Roasted green tea powder",
    serving: "4g hojicha to 180ml milk",
    featured: false,
    palette: {
      bg: "#f0e6d6",
      panel: "#d2cab8",
      leaf: "#4d5842",
      accent: "#b86f43",
      dot: "#b8c29f",
    },
    related: ["oat-latte-blend", "yuzu-matcha-bites", "travel-sifter-set"],
  },
  {
    id: "yuzu-matcha-bites",
    name: "Yuzu Matcha Bites",
    category: "treats",
    price: 14,
    size: "Box of 12",
    origin: "Madrid kitchen",
    tasting: "white chocolate, citrus peel, green tea",
    badge: "Counter favorite",
    description:
      "Small matcha sweets made for the tasting bar and packed for take-home. Bright yuzu keeps them from tasting heavy.",
    details:
      "Hand-finished in the shop kitchen. Good with ceremonial bowls, better with a friend who says they do not like matcha.",
    ingredients: "White chocolate, cream, matcha, candied yuzu",
    serving: "Serve cool beside a whisked bowl",
    featured: true,
    palette: {
      bg: "#f7efdf",
      panel: "#dbe1ba",
      leaf: "#425339",
      accent: "#d39a4e",
      dot: "#c3c98e",
    },
    related: ["dawn-ceremonial", "oat-latte-blend", "hojicha-sunset"],
  },
];

for (const product of PRODUCTS) {
  product.images = makeImageSet(product.name, product.size.toUpperCase(), product.palette);
}

const PRODUCT_MAP = Object.fromEntries(PRODUCTS.map((product) => [product.id, product]));

window.MATCHA_PRODUCTS = {
  list: PRODUCTS,
  map: PRODUCT_MAP,
  categories: [
    { id: "all", label: "Everything" },
    { id: "ceremonial", label: "Ceremonial" },
    { id: "everyday", label: "Everyday" },
    { id: "latte", label: "Lattes" },
    { id: "tools", label: "Tools" },
    { id: "treats", label: "Treats" },
  ],
};
