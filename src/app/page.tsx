import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { products, aggregateSizes } from "@/lib/products";
import { gallery } from "@/lib/gallery";
import { aboutCopy, whyUs } from "@/lib/content";
import { site } from "@/lib/site";

const featured = products.filter((p) =>
  ["chips-10mm", "chips-20mm", "chips-40mm", "gsb", "wmm", "armour-rock"].includes(
    p.slug,
  ),
);

export default function HomePage() {
  const stripe = gallery.filter((g) => g.category === "site").slice(0, 6);

  return (
    <>
      <HeroSlider />

      {/* Capability strip */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-px bg-ink-100 lg:grid-cols-4">
            {site.capabilities.map((c) => (
              <div key={c.label} className="bg-white px-5 py-8 text-center">
                <p className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                  {c.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-ink-400">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-100 sm:aspect-4/3 lg:aspect-4/5">
              <SafeImage
                src="/images/about-img.jpg"
                alt="Bhubaneshwar Stone crushing plant and aggregate stockpiles"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-amber-brand px-7 py-6 sm:-right-6">
              <p className="font-display text-4xl font-extrabold leading-none text-ink-950">
                {new Date().getFullYear() - site.foundedYear}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink-900">
                Years in business
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={aboutCopy.title}
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-500">
              {aboutCopy.paragraphs.slice(0, 2).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="bg-ink-900 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-brand hover:text-ink-950"
              >
                More about us
              </Link>
              <Link
                href="/products"
                className="border border-ink-300 px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink-900 transition-colors hover:border-ink-900"
              >
                See the range
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Size rail */}
      <section className="bg-ink-900 py-14">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <h2 className="font-display text-2xl font-extrabold text-white">
                Every chip size, in stock
              </h2>
              <p className="mt-2 text-sm text-ink-400">
                Crushed and screened at our own plants — no waiting for a batch
                to be made up.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {aggregateSizes.map((s) => (
                <li
                  key={s}
                  className="border border-ink-700 px-5 py-3 font-display text-base font-bold text-white transition-colors hover:border-amber-brand hover:text-amber-brand"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our products"
              title="Materials we supply"
              lede="From 6mm chips to armour rock boulders — sourced from our own quarries and crushed on our own plant."
            />
            <Reveal>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border-b-2 border-amber-brand pb-1 text-sm font-bold uppercase tracking-wide text-ink-900"
              >
                All products <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why contractors stay with us"
            title="Quarry to site, under one roof"
            lede="We own the crushers and the plant that loads the trucks, which is why our delivery dates tend to hold."
            align="center"
          />

          <ul className="mt-14 grid gap-px bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col bg-white p-8">
                  <span className="font-display text-sm font-extrabold text-amber-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Gallery"
              title="A few moments from our work area and office"
            />
            <Reveal>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border-b-2 border-amber-brand pb-1 text-sm font-bold uppercase tracking-wide text-ink-900"
              >
                View gallery <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stripe.map((img, i) => (
              <Reveal as="li" key={img.src} delay={i * 60}>
                <Link
                  href="/gallery"
                  className="group relative block aspect-square overflow-hidden bg-ink-100"
                >
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, 45vw"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
