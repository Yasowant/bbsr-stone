import { site, whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 print:hidden">
      <a
        href={`tel:${site.phone.tel}`}
        aria-label={`Call ${site.shortName} on ${site.phone.display}`}
        className="grid size-13 place-items-center rounded-full bg-ink-900 text-white shadow-lg shadow-ink-900/25 transition-transform hover:scale-105 sm:hidden"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
        </svg>
      </a>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="size-7 shrink-0" fill="currentColor" aria-hidden>
          <path d="M16.04 4C9.4 4 4 9.4 4 16.04c0 2.12.55 4.18 1.6 6l-1.68 6.13 6.28-1.65a12 12 0 0 0 5.84 1.49h.01C22.68 28.01 28 22.6 28 15.97 28 9.35 22.68 4 16.04 4Zm0 21.85h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.73.98 1-3.63-.24-.37a9.86 9.86 0 1 1 8.39 4.62Zm5.43-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.08a8.1 8.1 0 0 1-2.38-1.47 9 9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.58-.35Z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-40 sm:max-w-40">
          WhatsApp us
        </span>
      </a>
    </div>
  );
}
