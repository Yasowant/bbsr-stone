import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import { gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — Our Quarry, Plant & Office",
  description: `${gallery.length} photographs from the Bhubaneshwar Stone crushing plants, stockpiles, equipment fleet and office at Bhagabanpur Industrial Estate, Bhubaneswar.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A few moments from our work area and office"
        lede="Stockpiles, crushers, the equipment fleet and the team — photographed on site at Bhagabanpur Industrial Estate."
        image="/images/slides/slider-04.jpg"
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
