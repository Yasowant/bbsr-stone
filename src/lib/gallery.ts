export type GalleryCategory =
  | "chips"
  | "stone"
  | "metal"
  | "equipment"
  | "site";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "chips", label: "Chips" },
  { id: "stone", label: "Stone" },
  { id: "metal", label: "Metal & GSB" },
  { id: "equipment", label: "Equipment" },
  { id: "site", label: "Work area & office" },
];

const range = (n: number, from = 1) =>
  Array.from({ length: n }, (_, i) => i + from);

export const gallery: GalleryItem[] = [
  ...range(9).map<GalleryItem>((i) => ({
    src: `/images/chips/chips${i}.jpg`,
    alt: `Graded stone chips stockpile ${i} at Bhubaneshwar Stone`,
    category: "chips",
  })),
  ...range(7).map<GalleryItem>((i) => ({
    src: `/images/stone/stone${i}.jpg`,
    alt: `Crushed stone and large chips ${i} at Bhubaneshwar Stone`,
    category: "stone",
  })),
  ...range(12).map<GalleryItem>((i) => ({
    src: `/images/metal/metal${i}.jpg`,
    alt: `Stone metal, Bajuri and GSB material ${i} at Bhubaneshwar Stone`,
    category: "metal",
  })),
  ...range(3).map<GalleryItem>((i) => ({
    src: `/images/excavator/excav${i}.jpg`,
    alt: `Tata Hitachi excavator ${i} working the Bhubaneshwar Stone quarry`,
    category: "equipment",
  })),
  ...range(3).map<GalleryItem>((i) => ({
    src: `/images/excavator/jcb${i}.jpg`,
    alt: `JCB backhoe loader ${i} at Bhubaneshwar Stone`,
    category: "equipment",
  })),
  ...range(20).map<GalleryItem>((i) => ({
    src: `/images/office/gallery${i}.jpg`,
    alt: `Bhubaneshwar Stone work area and office, photo ${i}`,
    category: "site",
  })),
];

/** Hero slider images. */
export const heroSlides = range(5).map((i) => ({
  src: `/images/slides/slider-0${i}.jpg`,
  alt: `Bhubaneshwar Stone crushing and aggregate operations, view ${i}`,
}));
