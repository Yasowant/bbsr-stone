"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image with a graceful fallback.
 *
 * Until `npm run fetch:assets` has pulled the real photographs into
 * /public/images, some paths may be missing. Rather than showing a broken
 * image, this renders a branded placeholder tile.
 */
export default function SafeImage({
  alt,
  className = "",
  ...props
}: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-ink-100 bg-[linear-gradient(135deg,transparent_45%,rgba(240,167,28,0.18)_45%,rgba(240,167,28,0.18)_55%,transparent_55%)] bg-[length:14px_14px] ${className}`}
      >
        <span className="px-3 text-center text-[10px] font-semibold uppercase tracking-widest text-ink-400">
          Photo pending
        </span>
      </span>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
