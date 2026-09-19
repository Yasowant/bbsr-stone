"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes. Adjusting state during
  // render is React's recommended pattern here — no extra effect pass.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink-950 text-ink-300 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p>
            {site.address.line1}, {site.address.city} – {site.address.postalCode}
          </p>
          <div className="flex items-center gap-6">
            <a
              className="transition-colors hover:text-amber-brand"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <span className="text-ink-600">|</span>
            <a
              className="font-semibold text-white transition-colors hover:text-amber-brand"
              href={`tel:${site.phone.tel}`}
            >
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink-900/10 bg-sand-50/90 backdrop-blur-md"
            : "border-transparent bg-sand-50"
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/images/logos/logo.png"
              alt=""
              width={569}
              height={178}
              priority
              className="h-9 w-auto sm:h-11"
            />
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400 xl:block">
              Since 2008
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-ink-900"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-amber-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phone.tel}`}
              className="hidden items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:text-amber-brand-dark sm:inline-flex"
            >
              <PhoneIcon className="size-4" />
              {site.phone.display}
            </a>
            <Link
              href="/contact#quote"
              className="hidden bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-brand hover:text-ink-950 sm:inline-block"
            >
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center border border-ink-200 text-ink-900 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-ink-100 bg-sand-50 lg:hidden"
        >
          <nav className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink-100 py-4 font-display text-lg font-semibold text-ink-900 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 py-4">
              <a
                href={`tel:${site.phone.tel}`}
                className="bg-ink-900 px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Call {site.phone.display}
              </a>
              <Link
                href="/contact#quote"
                className="border border-ink-900 px-5 py-3.5 text-center text-sm font-semibold text-ink-900"
              >
                Request a quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
