import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-amber-brand">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #0a0d11 0 14px, transparent 14px 28px)",
        }}
      />
      <div className="container-page relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
            Need a rate for your next load?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-900/80">
            Tell us the material, the quantity and where it needs to go. We will
            come back with a price — usually the same working day.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact#quote"
            className="bg-ink-950 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Request a quote
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="border-2 border-ink-950 px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink-950 transition-colors hover:bg-ink-950 hover:text-amber-brand"
          >
            {site.phone.display}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink-950/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink-950 transition-colors hover:border-ink-950"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
