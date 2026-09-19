# Content audit — what was carried over from bbsrstone.com

Everything below was collected from the live site (5 pages: `index.html`,
`products.html`, `gallery.html`, `about.html`, `contact.html`) and mapped into
the new project. Copy was rewritten for the rebuild; all facts, figures and
contact details are as published on the original site — **please have the
client confirm them before launch.**

---

## Business facts → `src/lib/site.ts`

| Field | Value |
| --- | --- |
| Legal name | Bhubaneshwar Stone Pvt. Ltd. |
| Founded | 2008 |
| Managing Director | Mr. Shashibhusan Gajendra |
| Phone | 9338375318 |
| Email | info@bbsrstone.com |
| Address | Plot No. 44, Bhagabanpur Industrial Estate, Patrapara, Bhubaneshwar – 751019, Odisha |
| Hours | Mon–Sat 10 AM – 8 PM · Sunday closed |
| Map coordinates | 20°14'15.1"N 85°45'20.5"E (20.2372428, 85.7559617) |
| Crushing capacity | 150 TPH plant + 250 TPH plant |
| Equipment | Tata Hitachi excavators, JCBs |

## Product range → `src/lib/products.ts`

Chip / aggregate sizes: **6mm, 10mm, 20mm, 30mm, 40mm, 60mm, 90mm**

Other materials: stone metal, Bajuri, GSB (Granular Sub Base), WMM (Wet Mix
Macadam), stone dust, armour rock boulders, large chips, quarry stone.

Grouped into six categories on the new `/products` page: Stone Chips &
Aggregates · Stone & Large Chips · Metal & Bajuri · GSB, WMM & Dust · Armour
Rock Boulders · Excavators & JCBs.

## Testimonials → `src/lib/content.ts`

Three customer testimonials were carried over verbatim (Paul Mitchel, Steve
Fonsi, Daniel Vebar). These read as generic placeholder content on the
original site — worth confirming or replacing with real, recent quotes.

## Images → `public/images/` (via `npm run fetch:assets`)

65 files in total:

| Folder | Files | Used for |
| --- | --- | --- |
| `logos/` | `logo1.png` | Logo (currently replaced by a `BS` wordmark — swap in a vector) |
| `slides/` | `slider-01` … `slider-05.jpg` | Home hero carousel, page headers |
| `chips/` | `chips1` … `chips9.jpg` | Chip products, gallery |
| `stone/` | `stone1` … `stone7.jpg` | Stone products, gallery |
| `metal/` | `metal1` … `metal12.jpg` | Metal / GSB / WMM / dust, gallery |
| `excavator/` | `excav1-3.jpg`, `jcb1-3.jpg` | Equipment, gallery |
| `office/` | `gallery1` … `gallery20.jpg` | Gallery — work area & office |
| root | `about-img.jpg`, `about1.jpg` | Home welcome section, MD portrait |
| root | `profile-1.jpg`, `profile-3.jpg`, `profile-7.jpg` | Testimonial avatars |

> Note: `gallery.html` referenced 20 office photos while the home page showed
> 9. The manifest uses all 20; any that 404 render as a placeholder tile.

## URL mapping

| Old | New |
| --- | --- |
| `/index.html` | `/` |
| `/products.html` | `/products` |
| `/gallery.html` | `/gallery` |
| `/about.html` | `/about` |
| `/contact.html` | `/contact` |

301 redirects for all five are already configured in `next.config.ts`.

## What was added that the original did not have

- A quote request form (`/contact#quote`) with server-side validation.
- WhatsApp deep link and click-to-call CTAs.
- Gallery category filters and a keyboard-accessible lightbox.
- `sitemap.xml`, `robots.txt`, OpenGraph/Twitter cards and `LocalBusiness`
  JSON-LD structured data.
- A 404 page.

## What the original had that is worth chasing the client for

- No social media profiles were linked anywhere — ask if they have any.
- No GST / CIN registration numbers, which Indian B2B buyers often look for.
- No pricing or minimum-order information.
- No named contact people beyond the Managing Director.
- Testimonials had no company names attached.
