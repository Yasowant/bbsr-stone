import Image from "next/image";
import Link from "next/link";
import { formattedAddress, nav, site } from "@/lib/site";
import { productCategories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink-950 text-ink-300">
      <div aria-hidden className="hatch h-1.5 w-full opacity-80" />

      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          {/* The logo is a dark-on-light mark, so it sits on a white plate
              here rather than being recoloured for the dark footer. */}
          <div className="inline-block bg-white px-4 py-3">
            <Image
              src="/images/logos/logo.png"
              alt={site.name}
              width={569}
              height={178}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Supplying stone aggregates, crushed chips, GSB, WMM, dust and armour
            rock boulders to construction projects across Odisha since{" "}
            {site.foundedYear}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={`tel:${site.phone.tel}`}
              className="bg-amber-brand px-4 py-2.5 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
            >
              Call now
            </a>
            <a
              href={`mailto:${site.email}`}
              className="border border-ink-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-amber-brand hover:text-amber-brand"
            >
              Email us
            </a>
          </div>
        </div>

        <nav aria-labelledby="footer-pages">
          <h2
            id="footer-pages"
            className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Pages
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-amber-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-products">
          <h2
            id="footer-products"
            className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            What we supply
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {productCategories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/products#${c.id}`}
                  className="transition-colors hover:text-amber-brand"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
            Reach us
          </h2>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <p className="leading-relaxed">{formattedAddress}</p>
            <p>
              <a
                className="font-semibold text-white transition-colors hover:text-amber-brand"
                href={`tel:${site.phone.tel}`}
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                className="transition-colors hover:text-amber-brand"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </address>
          <dl className="mt-6 space-y-2 border-t border-ink-800 pt-6 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.days}</dt>
                <dd
                  className={h.open ? "text-white" : "text-ink-500"}
                >
                  {h.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Managing Director: {site.managingDirector}</p>
        </div>
      </div>
    </footer>
  );
}
