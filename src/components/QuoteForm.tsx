"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-ink-900";
const label =
  "mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-ink-500";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "We could not send that. Please call us instead.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink-200 bg-white p-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber-brand text-ink-950">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-500">
          Thank you. We will come back to you with a rate shortly. For anything
          urgent, call{" "}
          <a
            className="font-semibold text-ink-900 underline decoration-amber-brand decoration-2 underline-offset-4"
            href={`tel:${site.phone.tel}`}
          >
            {site.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 border border-ink-900 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-ink-200 bg-white p-6 sm:p-9"
      noValidate
    >
      {/* Honeypot — real people never see or fill this */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required className={field} placeholder="Full name" />
        </div>

        <div>
          <label className={label} htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            className={field}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="you@company.com" />
        </div>

        <div>
          <label className={label} htmlFor="company">
            Company / site
          </label>
          <input id="company" name="company" className={field} placeholder="Optional" />
        </div>

        <div>
          <label className={label} htmlFor="product">
            Material required *
          </label>
          <select
            id="product"
            name="product"
            required
            defaultValue={preselected}
            className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234c5765%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          >
            <option value="">Select a material…</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>

        <div>
          <label className={label} htmlFor="quantity">
            Approximate quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            className={field}
            placeholder="e.g. 200 CFT / 15 trucks"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Delivery location & notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${field} resize-y`}
            placeholder="Where should it be delivered, and by when?"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 border-l-2 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {message}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink-900 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-brand hover:text-ink-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        <p className="text-xs text-ink-400">
          We reply on working days between 10am and 8pm.
        </p>
      </div>
    </form>
  );
}
