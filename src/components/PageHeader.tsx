import Link from "next/link";
import SafeImage from "./SafeImage";

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
  breadcrumb: { href: string; label: string }[];
};

export default function PageHeader({
  eyebrow,
  title,
  lede,
  image = "/images/slides/slider-02.jpg",
  breadcrumb,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <div className="absolute inset-0 -z-10">
        <SafeImage
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
      </div>

      <div className="container-page py-16 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
            {breadcrumb.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-ink-600">/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-amber-brand" aria-current="page">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-brand">
            <span aria-hidden className="h-px w-8 bg-current" />
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
          {title}
        </h1>

        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {lede}
          </p>
        )}
      </div>

      <div aria-hidden className="hatch h-1.5 w-full opacity-70" />
    </section>
  );
}
