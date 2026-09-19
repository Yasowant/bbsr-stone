import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { formattedAddress, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description: `Call ${site.phone.display}, email ${site.email} or send a quote request. Bhubaneshwar Stone Pvt. Ltd., Bhagabanpur Industrial Estate, Patrapara, Bhubaneswar 751019.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need and where it has to go"
        lede="Rates on request. Call us, send a WhatsApp message, or fill in the form and we will come back to you."
        image="/images/slides/slider-01.jpg"
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      {/* Contact cards */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page">
          <div className="grid gap-px bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              label="Call us"
              value={site.phone.display}
              href={`tel:${site.phone.tel}`}
              note="Mon–Sat, 10am–8pm"
              icon={
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
              }
            />
            <ContactCard
              label="WhatsApp"
              value="Chat with us"
              href={whatsappUrl()}
              external
              note="Fastest for quick quotes"
              icon={
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.8a11.4 11.4 0 0 1-4.6-4.1c-.3-.5-1-1.5-1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6a8 8 0 0 0 3.5 3c.3.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3Z" />
              }
            />
            <ContactCard
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
              note="We reply on working days"
              icon={
                <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4.2 7.2v.1L12 13l7.8-5.7v-.1L12 13Z" />
              }
            />
            <ContactCard
              label="Visit"
              value="Bhagabanpur Industrial Estate"
              href={site.mapLinkUrl}
              external
              note="Patrapara, Bhubaneswar 751019"
              icon={
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              }
            />
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section id="quote" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Request a quote"
              title="Send us the details"
              lede="The more you can tell us about grade, quantity and delivery location, the sharper the rate we can give you."
            />
            <div className="mt-10">
              <Suspense
                fallback={
                  <div className="h-96 animate-pulse border border-ink-200 bg-white" />
                }
              >
                <QuoteForm />
              </Suspense>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="bg-ink-900 p-8">
              <h2 className="font-display text-xl font-extrabold text-white">
                Bhubaneshwar Stone Pvt. Ltd.
              </h2>

              <dl className="mt-7 space-y-6 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-amber-brand">
                    Address
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink-300">
                    {formattedAddress}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-amber-brand">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phone.tel}`}
                      className="font-display text-lg font-bold text-white transition-colors hover:text-amber-brand"
                    >
                      {site.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-amber-brand">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink-300 transition-colors hover:text-white"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-amber-brand">
                    Opening hours
                  </dt>
                  <dd className="mt-2 space-y-1.5">
                    {site.hours.map((h) => (
                      <p
                        key={h.days}
                        className="flex justify-between gap-4 text-ink-300"
                      >
                        <span>{h.days}</span>
                        <span
                          className={h.open ? "text-white" : "text-ink-500"}
                        >
                          {h.time}
                        </span>
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal className="mt-6" delay={100}>
              <div className="aspect-4/3 w-full overflow-hidden border border-ink-200 bg-ink-100">
                <iframe
                  src={site.mapEmbedUrl}
                  title={`Map showing ${site.name} at ${formattedAddress}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full border-0"
                />
              </div>
              <a
                href={site.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-amber-brand-dark"
              >
                Open in Google Maps <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  note,
  icon,
  external,
}: {
  label: string;
  value: string;
  href: string;
  note: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col bg-white p-7 transition-colors hover:bg-sand-50"
    >
      <span className="grid size-10 place-items-center bg-sand-100 text-ink-900 transition-colors group-hover:bg-amber-brand">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="currentColor"
          aria-hidden
        >
          {icon}
        </svg>
      </span>
      <span className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-ink-400">
        {label}
      </span>
      <span className="mt-1.5 font-display text-base font-bold text-ink-900">
        {value}
      </span>
      <span className="mt-1 text-xs text-ink-400">{note}</span>
    </a>
  );
}
