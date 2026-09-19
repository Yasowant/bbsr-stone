# Bhubaneshwar Stone Pvt. Ltd. — website

A rebuild of **bbsrstone.com** on Next.js 15 (App Router), React 19, TypeScript
and Tailwind CSS v4.

---

## Quick start

```bash
npm install
npm run fetch:assets   # pulls the photographs off the live site
npm run dev            # http://localhost:3000
```

Node 18.18+ is required (Node 20 LTS or newer recommended).

### 1. Install dependencies

```bash
npm install
```

### 2. Get the images

The photographs are **not** bundled in this repo. One script pulls all 65 of
them from the existing site into `public/images/`, preserving the folder
structure the code expects:

```bash
npm run fetch:assets          # skips anything already downloaded
npm run fetch:assets -- --force   # re-download everything
```

Anything that fails to download simply renders as a neutral "photo pending"
tile — nothing breaks. Drop final photographs into the matching path in
`public/images/` whenever the client supplies better ones.

> Prefer not to host the images yourself yet? `next.config.ts` already
> allow-lists `bbsrstone.com` as a remote image host, so you can point
> `src` values at `https://bbsrstone.com/images/...` instead.

### 3. Environment variables

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used by metadata, OpenGraph and the sitemap |
| `RESEND_API_KEY` | Optional. Sends quote requests by email via [Resend](https://resend.com) |
| `QUOTE_TO_EMAIL` | Where quote requests land (defaults to `info@bbsrstone.com`) |
| `QUOTE_FROM_EMAIL` | Verified sender address on your mail provider |

Without `RESEND_API_KEY` the quote form still validates and returns success —
submissions are logged to the server console so nothing is lost in development.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run fetch:assets` | Download photographs from the live site |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx           Root layout, metadata, fonts, JSON-LD
│   ├── page.tsx             Home
│   ├── products/page.tsx    Products, grouped by category
│   ├── gallery/page.tsx     Filterable gallery
│   ├── about/page.tsx       About
│   ├── contact/page.tsx     Contact details, map, quote form
│   ├── api/quote/route.ts   Quote form endpoint (zod + rate limit + honeypot)
│   ├── sitemap.ts           /sitemap.xml
│   ├── robots.ts            /robots.txt
│   ├── not-found.tsx        404
│   └── globals.css          Tailwind v4 theme tokens
├── components/              Header, Footer, HeroSlider, GalleryGrid, QuoteForm …
└── lib/
    ├── site.ts              ← business details (edit here first)
    ├── products.ts          ← product catalogue
    ├── gallery.ts           ← image manifest
    └── content.ts           ← editorial copy
```

**Everything the client is likely to want changed lives in `src/lib/`.** Phone
number, address, opening hours, product list, gallery images and page copy are
all data, not markup.

---

## What's in the rebuild

- **Modern industrial design** — dark ink and amber, sharp edges, big type.
- **Fully responsive**, mobile-first, with a proper mobile navigation drawer.
- **Filterable gallery** with a keyboard-accessible lightbox (arrow keys, Esc).
- **Quote request form** with server-side zod validation, an in-memory rate
  limit, a honeypot field and optional Resend delivery.
- **WhatsApp + click-to-call** — floating WhatsApp button, tap-to-call on
  mobile, phone number in the header and footer.
- **SEO** — per-page metadata, OpenGraph and Twitter cards, `sitemap.xml`,
  `robots.txt`, and `LocalBusiness` / `Organization` JSON-LD with the real
  address, geo-coordinates, opening hours and product catalogue.
- **Accessibility** — skip link, visible focus rings, ARIA on the carousel and
  lightbox, `prefers-reduced-motion` respected throughout.
- **Performance** — `next/image` with AVIF/WebP, server components by default,
  client JavaScript only where it is actually needed.

---

## Deploying

The site is a standard Next.js app and deploys to Vercel with no configuration:

```bash
npx vercel
```

Set `NEXT_PUBLIC_SITE_URL` (and the Resend variables, if used) in the hosting
provider's environment settings. For a self-hosted Node server, `npm run build`
followed by `npm run start` is all that's needed.

---

## Before launch — a short checklist

- [ ] Run `npm run fetch:assets`, then swap in higher-resolution photographs
      where the originals are small.
- [ ] Replace the `BS` wordmark in `Header.tsx` / `Footer.tsx` with the real
      logo file once the client supplies a vector version.
- [ ] Confirm the three customer testimonials in `src/lib/content.ts` with the
      client — they were carried over from the old site and are worth
      refreshing.
- [ ] Confirm the GST / CIN details if the client wants them in the footer.
- [ ] Add a privacy notice if the quote form will store submissions.
- [ ] Set up 301 redirects from the old `.html` URLs:
      `/index.html → /`, `/products.html → /products`,
      `/gallery.html → /gallery`, `/about.html → /about`,
      `/contact.html → /contact`.
- [ ] Claim / update the Google Business Profile so the JSON-LD has something
      to reinforce.
