import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-ink-950">
      <div className="container-page grid min-h-[60vh] place-items-center py-24 text-center">
        <div>
          <p className="font-display text-7xl font-extrabold text-amber-brand">
            404
          </p>
          <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">
            That page is not here
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-400">
            The link may be out of date. Try our products page, or call us on{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-semibold text-white underline decoration-amber-brand decoration-2 underline-offset-4"
            >
              {site.phone.display}
            </a>
            .
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="bg-amber-brand px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink-950"
            >
              Back to home
            </Link>
            <Link
              href="/products"
              className="border border-ink-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-brand hover:text-amber-brand"
            >
              See products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
