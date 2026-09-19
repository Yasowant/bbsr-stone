/**
 * Single source of truth for business details.
 * Update values here and they propagate to every page, the footer,
 * the JSON-LD structured data, the sitemap and the CTAs.
 */

export const site = {
  name: "Bhubaneshwar Stone Pvt. Ltd.",
  shortName: "Bhubaneshwar Stone",
  legalName: "Bhubaneshwar Stone Private Limited",
  foundedYear: 2008,
  managingDirector: "Mr. Shashibhusan Gajendra",

  tagline: "Stone aggregates, chips, GSB and boulders — delivered on time.",
  description:
    "Bhubaneshwar Stone Pvt. Ltd. supplies stone aggregates, crushed chips in every size, metal, Bajuri, GSB, WMM, stone dust and armour rock boulders to construction projects across Odisha.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bbsrstone.com",

  phone: {
    display: "+91 93383 75318",
    tel: "+919338375318",
    whatsapp: "919338375318",
  },
  email: "info@bbsrstone.com",

  address: {
    line1: "Plot No. 44, Bhagabanpur Industrial Estate",
    line2: "Patrapara",
    city: "Bhubaneswar",
    state: "Odisha",
    postalCode: "751019",
    country: "IN",
    countryName: "India",
  },

  geo: {
    latitude: 20.2372428,
    longitude: 85.7559617,
  },

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.8197760782832!2d85.75596177548353!3d20.237242828816864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzE1LjEiTiA4NcKwNDUnMjAuNSJF!5e1!3m2!1sen!2sin!4v1609254027245!5m2!1sen!2sin",

  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=20.2372428,85.7559617",

  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM", open: true },
    { days: "Sunday", time: "Closed", open: false },
  ],

  /** Machine-readable opening hours for schema.org */
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],

  capabilities: [
    { value: "2008", label: "Supplying since" },
    { value: "400 TPH", label: "Combined crushing capacity" },
    { value: "7", label: "Aggregate sizes, 6mm to 90mm" },
    { value: "Own fleet", label: "Excavators & JCBs on site" },
  ],
} as const;

export const formattedAddress = [
  site.address.line1,
  site.address.line2,
  `${site.address.city} – ${site.address.postalCode}`,
  site.address.state,
].join(", ");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const whatsappUrl = (
  message = `Hello ${site.shortName}, I would like a quote for stone aggregates.`,
) => `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
