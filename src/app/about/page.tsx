import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { aboutCopy, whyUs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Supplying Odisha Since 2008",
  description: `Bhubaneshwar Stone Pvt. Ltd. was founded in ${site.foundedYear} by ${site.managingDirector}. Two crushing plants, a full range of aggregate grades and our own excavator fleet.`,
  alternates: { canonical: "/about" },
};

const milestones = [
  {
    year: "2008",
    title: "The company is founded",
    body: `${site.managingDirector} establishes Bhubaneshwar Stone Pvt. Ltd. to supply construction-grade aggregate to projects around Bhubaneswar.`,
  },
  {
    year: "Crushing",
    title: "Two plants, 400 TPH combined",
    body: "A 150 TPH unit and a 250 TPH unit let us hold every chip grade in stock rather than crushing to order.",
  },
  {
    year: "Fleet",
    title: "Excavators and JCBs in-house",
    body: "Tata Hitachi excavators and JCBs work the faces and load despatches, so schedules are ours to keep.",
  },
  {
    year: "Today",
    title: "A full material range",
    body: "Chips from 6mm to 90mm, stone metal, Bajuri, GSB, WMM, dust and armour rock boulders — from one supplier.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A Bhubaneswar aggregate supplier that owns its supply chain"
        lede={`Founded in ${site.foundedYear} and still run by ${site.managingDirector}.`}
        image="/images/slides/slider-05.jpg"
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our story" title={aboutCopy.title} />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-500">
              {aboutCopy.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-5">
            <div className="border border-ink-100 bg-white">
              <div className="relative aspect-4/5 w-full bg-ink-100">
                <SafeImage
                  src="/images/about1.jpg"
                  alt={`${site.managingDirector}, Managing Director of ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  className="size-full object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-brand-dark">
                  Managing Director
                </p>
                <p className="mt-2 font-display text-xl font-extrabold text-ink-900">
                  {site.managingDirector}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  Leading the company since {site.foundedYear}, with a focus on
                  material quality, honest pricing and delivery dates that are
                  actually met.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-ink-900 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we are set up"
            title="Capability, not just capacity"
            tone="dark"
          />

          <ol className="mt-14 grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 80}>
                <div className="flex h-full flex-col bg-ink-900 p-8">
                  <span className="inline-flex w-fit bg-amber-brand px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-ink-950">
                    {m.year}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What you get"
            title="Four reasons contractors keep coming back"
            align="center"
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="flex h-full gap-5 border border-ink-100 bg-white p-8">
                  <span className="grid size-11 shrink-0 place-items-center bg-ink-900 font-display text-sm font-extrabold text-amber-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block bg-ink-900 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-brand hover:text-ink-950"
            >
              Browse our products
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
