import Link from "next/link";
import SafeImage from "./SafeImage";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/5">
      <div className="relative aspect-4/3 overflow-hidden bg-ink-100">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.size && (
          <span className="absolute left-0 top-4 bg-amber-brand px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950">
            {product.size}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink-900">
          {product.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
          {product.summary}
        </p>

        <ul className="mt-5 flex flex-wrap content-start gap-1.5">
          {product.uses.map((use) => (
            <li
              key={use}
              className="border border-ink-100 bg-sand-50 px-2.5 py-1 text-[11px] font-medium text-ink-500"
            >
              {use}
            </li>
          ))}
        </ul>

        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
          className="mt-auto pt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-ink-900 transition-colors group-hover:text-amber-brand-dark"
        >
          Get a rate
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
