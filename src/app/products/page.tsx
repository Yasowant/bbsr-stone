import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { productCategories, products, aggregateSizes } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products — Stone Chips, Metal, GSB, WMM & Boulders",
  description:
    "Stone chips from 6mm to 90mm, stone metal, Bajuri, GSB, WMM, stone dust and armour rock boulders, supplied in bulk across Odisha by Bhubaneshwar Stone Pvt. Ltd.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our products"
        title="Aggregates, base materials and boulders"
        lede="Everything below is crushed, screened and stocked at our own plants near Bhubaneswar. Tell us the grade and the quantity, and we will quote."
        image="/images/slides/slider-03.jpg"
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
      />

      {/* Size quick-reference */}
      <section className="border-b border-ink-100 bg-white py-10">
        <div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-400">
            Chip sizes available
          </p>
          <ul className="flex flex-wrap gap-2">
            {aggregateSizes.map((s) => (
              <li
                key={s}
                className="bg-sand-100 px-4 py-2 font-display text-sm font-bold text-ink-900"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {productCategories.map((category, ci) => {
        const items = products.filter((p) => p.category === category.id);
        if (items.length === 0) return null;

        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 py-16 lg:py-20 ${
              ci % 2 === 1 ? "bg-white" : ""
            }`}
          >
            <div className="container-page">
              <Reveal className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-ink-100 pb-5">
                <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                  {category.name}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-brand-dark">
                  {items.length} {items.length === 1 ? "product" : "products"}
                </span>
              </Reveal>

              <Reveal>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
                  {category.blurb}
                </p>
              </Reveal>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={(i % 3) * 80}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
