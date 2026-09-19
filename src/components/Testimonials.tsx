import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import { testimonialAvatars, testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-96 rounded-full bg-amber-brand/10 blur-3xl"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Customers"
          title="What contractors say about working with us"
          tone="dark"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col border border-ink-700 bg-ink-800 p-8">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-8 text-amber-brand"
                  fill="currentColor"
                >
                  <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H7a3 3 0 0 1 3-3Zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-3a3 3 0 0 1 3-3Z" />
                </svg>

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-200">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink-700 pt-6">
                  <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-ink-700">
                    <SafeImage
                      src={testimonialAvatars[i] ?? testimonialAvatars[0]}
                      alt=""
                      fill
                      sizes="44px"
                      className="size-full object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-ink-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
