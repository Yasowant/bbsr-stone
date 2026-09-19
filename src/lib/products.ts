export type Product = {
  slug: string;
  name: string;
  size?: string;
  category: ProductCategory;
  summary: string;
  uses: string[];
  image: string;
};

export type ProductCategory =
  | "aggregates"
  | "stone"
  | "metal"
  | "base-material"
  | "boulders"
  | "equipment";

export const productCategories: {
  id: ProductCategory;
  name: string;
  blurb: string;
}[] = [
  {
    id: "aggregates",
    name: "Stone Chips & Aggregates",
    blurb:
      "Machine-crushed chips graded from 6mm to 90mm, screened for a consistent shape and low dust content.",
  },
  {
    id: "stone",
    name: "Stone & Large Chips",
    blurb:
      "Larger calibrated stone for sub-base work, soling, gabion filling and heavy foundations.",
  },
  {
    id: "metal",
    name: "Metal & Bajuri",
    blurb:
      "Road metal and Bajuri supplied in bulk for highway, approach road and hardstanding work.",
  },
  {
    id: "base-material",
    name: "GSB, WMM & Dust",
    blurb:
      "Graded sub-base, wet mix macadam and stone dust blended to the gradation your specification calls for.",
  },
  {
    id: "boulders",
    name: "Armour Rock Boulders",
    blurb:
      "Heavy armour rock for embankment protection, revetments, breakwaters and erosion control.",
  },
  {
    id: "equipment",
    name: "Excavators & JCBs",
    blurb:
      "Tata Hitachi excavators and JCBs working our quarries and available for loading and site support.",
  },
];

export const products: Product[] = [
  // ── Chips & aggregates ────────────────────────────────────────────────
  {
    slug: "chips-6mm",
    name: "6mm Stone Chips",
    size: "6 mm",
    category: "aggregates",
    summary:
      "The finest graded chip we crush. Clean, angular and near dust-free after screening.",
    uses: ["Plaster and flooring mixes", "Precast products", "Tile bedding"],
    image: "/images/chips/chips1.jpg",
  },
  {
    slug: "chips-10mm",
    name: "10mm Stone Chips",
    size: "10 mm",
    category: "aggregates",
    summary:
      "The everyday concrete chip — consistent gradation batch after batch.",
    uses: ["RCC and slab work", "Pavers and kerbs", "Ready-mix plants"],
    image: "/images/chips/chips2.jpg",
  },
  {
    slug: "chips-20mm",
    name: "20mm Stone Chips",
    size: "20 mm",
    category: "aggregates",
    summary:
      "Our highest-volume grade, used across structural concrete on almost every site we serve.",
    uses: ["Structural concrete", "Foundations and columns", "Road surfacing"],
    image: "/images/chips/chips3.jpg",
  },
  {
    slug: "chips-30mm",
    name: "30mm Stone Chips",
    size: "30 mm",
    category: "aggregates",
    summary:
      "A step up in size for mass concrete pours and heavier base layers.",
    uses: ["Mass concrete", "Base course", "Drainage layers"],
    image: "/images/chips/chips4.jpg",
  },
  {
    slug: "chips-40mm",
    name: "40mm Stone Chips",
    size: "40 mm",
    category: "aggregates",
    summary:
      "Coarse aggregate for sub-base, soling and bulk fill where strength matters more than finish.",
    uses: ["Sub-base and soling", "Culverts", "Hardcore fill"],
    image: "/images/chips/chips5.jpg",
  },
  {
    slug: "chips-60mm",
    name: "60mm Stone Chips",
    size: "60 mm",
    category: "aggregates",
    summary:
      "Heavy graded stone for load-bearing layers and stabilising soft ground.",
    uses: ["Road foundations", "Yard stabilisation", "Gabion fill"],
    image: "/images/chips/chips6.jpg",
  },
  {
    slug: "chips-90mm",
    name: "90mm Stone Chips",
    size: "90 mm",
    category: "aggregates",
    summary:
      "The largest chip grade we produce, crushed and screened to order.",
    uses: ["Heavy soling", "Embankment work", "Rail and industrial ballast"],
    image: "/images/chips/chips7.jpg",
  },

  // ── Stone & large chips ───────────────────────────────────────────────
  {
    slug: "large-chips",
    name: "Large Chips",
    category: "stone",
    summary:
      "Oversized crushed stone for foundations and civil works that need bulk and bite.",
    uses: ["Foundation filling", "Soling layers", "Site levelling"],
    image: "/images/stone/stone1.jpg",
  },
  {
    slug: "quarry-stone",
    name: "Quarry Stone",
    category: "stone",
    summary:
      "Run-of-quarry stone straight from our own faces, loaded and despatched in bulk.",
    uses: ["Bulk fill", "Retaining structures", "Access roads"],
    image: "/images/stone/stone2.jpg",
  },
  {
    slug: "boulder-stone",
    name: "Boulder Stone",
    category: "stone",
    summary:
      "Uncrushed boulders for civil work where mass and durability come first.",
    uses: ["Slope protection", "Foundation packing", "Landscaping"],
    image: "/images/stone/stone3.jpg",
  },

  // ── Metal & Bajuri ────────────────────────────────────────────────────
  {
    slug: "stone-metal",
    name: "Stone Metal",
    category: "metal",
    summary:
      "Road metal crushed to specification for bituminous and concrete pavements.",
    uses: ["Road pavements", "Bituminous mixes", "Shoulder work"],
    image: "/images/metal/metal1.jpg",
  },
  {
    slug: "bajuri",
    name: "Bajuri",
    category: "metal",
    summary:
      "Fine crushed material supplied in bulk for base layers and compaction work.",
    uses: ["Base layers", "Compaction", "Approach roads"],
    image: "/images/metal/metal2.jpg",
  },

  // ── GSB, WMM, dust ────────────────────────────────────────────────────
  {
    slug: "gsb",
    name: "GSB — Granular Sub Base",
    category: "base-material",
    summary:
      "Blended and graded sub-base material meeting the gradation band your project specifies.",
    uses: ["Highway sub-base", "Industrial flooring", "Parking yards"],
    image: "/images/metal/metal5.jpg",
  },
  {
    slug: "wmm",
    name: "WMM — Wet Mix Macadam",
    category: "base-material",
    summary:
      "Wet mix macadam produced to order for base course layers on road projects.",
    uses: ["Road base course", "Widening works", "Service roads"],
    image: "/images/metal/metal7.jpg",
  },
  {
    slug: "stone-dust",
    name: "Stone Dust",
    category: "base-material",
    summary:
      "Crusher dust from our screening plant — a clean, consistent fine aggregate.",
    uses: ["Paver bedding", "Backfill", "Block and brick manufacture"],
    image: "/images/metal/metal9.jpg",
  },

  // ── Boulders ──────────────────────────────────────────────────────────
  {
    slug: "armour-rock",
    name: "Armour Rock Boulders",
    category: "boulders",
    summary:
      "Large armour rock selected by weight class for coastal and river protection works.",
    uses: ["Revetments and breakwaters", "River training", "Erosion control"],
    image: "/images/stone/stone5.jpg",
  },

  // ── Equipment ─────────────────────────────────────────────────────────
  {
    slug: "excavators",
    name: "Tata Hitachi Excavators",
    category: "equipment",
    summary:
      "Our own excavator fleet works the quarry faces and loads despatches without waiting on hired plant.",
    uses: ["Quarry extraction", "Bulk loading", "Site support"],
    image: "/images/excavator/excav1.jpg",
  },
  {
    slug: "jcb",
    name: "JCB Backhoe Loaders",
    category: "equipment",
    summary:
      "JCBs on site for stockpile handling, loading and general earthmoving.",
    uses: ["Stockpile handling", "Loading", "Earthmoving"],
    image: "/images/excavator/jcb1.jpg",
  },
];

export const aggregateSizes = [
  "6mm",
  "10mm",
  "20mm",
  "30mm",
  "40mm",
  "60mm",
  "90mm",
] as const;

export const productsByCategory = (id: ProductCategory) =>
  products.filter((p) => p.category === id);
