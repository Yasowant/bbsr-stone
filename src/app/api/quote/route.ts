import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const QuoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  email: z
    .email("Please enter a valid email.")
    .max(160)
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  product: z.string().trim().min(1, "Please choose a material.").max(120),
  quantity: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  /** Honeypot — bots fill it, humans never see it. */
  company_website: z.string().max(0).optional().or(z.literal("")),
});

/** Very small in-memory rate limit. Swap for Upstash/Redis in production. */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call us instead." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = QuoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message ?? "Please check the form.",
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend it worked, drop it silently.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const lines = [
    `Name:      ${data.name}`,
    `Phone:     ${data.phone}`,
    `Email:     ${data.email || "—"}`,
    `Company:   ${data.company || "—"}`,
    `Material:  ${data.product}`,
    `Quantity:  ${data.quantity || "—"}`,
    "",
    data.message || "(no additional notes)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL ?? site.email;
  const from = process.env.QUOTE_FROM_EMAIL ?? `website@${new URL(site.url).hostname}`;

  if (!apiKey) {
    // No mail provider configured yet — log it so nothing is lost in dev.
    console.info("[quote request]\n" + lines);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email || undefined,
        subject: `Quote request — ${data.product} — ${data.name}`,
        text: lines,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "We could not send that. Please call us instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("Quote send failed", err);
    return NextResponse.json(
      { ok: false, error: "We could not send that. Please call us instead." },
      { status: 502 },
    );
  }
}
