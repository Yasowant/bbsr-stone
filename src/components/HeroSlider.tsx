"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";
import { heroSlides } from "@/lib/gallery";
import { heroCopy } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

const INTERVAL = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + heroSlides.length) % heroSlides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      INTERVAL,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      className="relative isolate overflow-hidden bg-ink-950"
      aria-roledescription="carousel"
      aria-label="Bhubaneshwar Stone operations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <SafeImage
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`size-full object-cover ${
                i === index ? "scale-105" : "scale-100"
              } transition-transform duration-[7000ms] ease-out`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="container-page relative grid min-h-[36rem] items-center py-20 lg:min-h-[42rem] lg:py-28">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-brand">
            <span aria-hidden className="h-px w-8 bg-current" />
            {heroCopy.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {heroCopy.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {heroCopy.lede}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact#quote"
              className="bg-amber-brand px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              Request a quote
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-brand hover:text-amber-brand"
            >
              WhatsApp us
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-400">
            Or call{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-semibold text-white underline decoration-amber-brand decoration-2 underline-offset-4"
            >
              {site.phone.display}
            </a>{" "}
            — Mon to Sat, 10am to 8pm
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="container-page relative pb-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Choose slide">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1 transition-all duration-300 ${
                  i === index
                    ? "w-10 bg-amber-brand"
                    : "w-5 bg-ink-600 hover:bg-ink-400"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold tabular-nums text-ink-400">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
