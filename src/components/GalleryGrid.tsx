"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SafeImage from "./SafeImage";
import { gallery, galleryFilters, type GalleryCategory } from "@/lib/gallery";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) =>
        i === null ? i : (i + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      {/* Filters */}
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {galleryFilters.map((f) => {
          const on = filter === f.id;
          const count =
            f.id === "all"
              ? gallery.length
              : gallery.filter((g) => g.category === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setActive(null);
              }}
              aria-pressed={on}
              className={`shrink-0 border px-4 py-2.5 text-sm font-semibold transition-colors ${
                on
                  ? "border-ink-900 bg-ink-900 text-white"
                  : "border-ink-200 bg-white text-ink-600 hover:border-ink-400 hover:text-ink-900"
              }`}
            >
              {f.label}
              <span
                className={`ml-2 text-xs ${on ? "text-amber-brand" : "text-ink-400"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-square w-full overflow-hidden bg-ink-100"
              aria-label={`View larger: ${item.alt}`}
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/40" />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="grid size-11 place-items-center rounded-full bg-amber-brand text-ink-950">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="mt-10 text-center text-ink-400">
          No photographs in this category yet.
        </p>
      )}

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-11 place-items-center border border-ink-700 text-white transition-colors hover:border-amber-brand hover:text-amber-brand"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 grid size-12 place-items-center text-white/70 transition-colors hover:text-amber-brand sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full">
              <SafeImage
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 92vw"
                className="size-full object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-ink-400">
              {current.alt}
              <span className="ml-2 tabular-nums text-ink-600">
                {(active ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 grid size-12 place-items-center text-white/70 transition-colors hover:text-amber-brand sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
