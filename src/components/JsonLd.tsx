import { formattedAddress, site } from "@/lib/site";
import { products } from "@/lib/products";

export default function JsonLd() {
  const graph = [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      alternateName: site.shortName,
      url: site.url,
      description: site.description,
      foundingDate: String(site.foundedYear),
      founder: { "@type": "Person", name: site.managingDirector },
      telephone: site.phone.tel,
      email: site.email,
      image: `${site.url}/images/slides/slider-01.jpg`,
      logo: `${site.url}/images/logos/logo.png`,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.line1}, ${site.address.line2}`,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      hasMap: site.mapLinkUrl,
      areaServed: {
        "@type": "State",
        name: "Odisha",
      },
      openingHoursSpecification: site.openingHoursSpecification.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: s.dayOfWeek,
        opens: s.opens,
        closes: s.closes,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Stone aggregates and construction materials",
        itemListElement: products.map((p) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: p.name,
            description: p.summary,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Place",
      "@id": `${site.url}/#place`,
      name: site.name,
      address: formattedAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
