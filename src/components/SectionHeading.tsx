import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
            align === "center" ? "justify-center" : ""
          } ${dark ? "text-amber-brand" : "text-amber-brand-dark"}`}
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
