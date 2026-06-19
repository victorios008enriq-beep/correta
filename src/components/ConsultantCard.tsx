import type { Consultant } from "@/data/consultants";
import { CATEGORY_META } from "@/data/consultants";

const AVATAR_GRADS = ["avatar-grad-1", "avatar-grad-2", "avatar-grad-3", "avatar-grad-4"] as const;

function initial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function ConsultantCard({ c, index }: { c: Consultant; index: number }) {
  const meta = CATEGORY_META[c.category];
  const grad = AVATAR_GRADS[index % AVATAR_GRADS.length];
  const waText = c.waMessage ?? `Olá ${c.name.split(" ")[0]}, vim pelo hub da Correta Consultoria.`;
  const waHref = `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(waText)}`;
  const mailHref = `mailto:${c.email}?subject=${encodeURIComponent("Contato via Hub Correta")}`;

  return (
    <article
      className="glass group rise-in rounded-3xl p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-22px_oklch(0.22_0.03_155/0.28)]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <header className="flex items-center gap-4">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-[1.05rem] font-semibold text-white ${grad}`}
          aria-hidden
        >
          {initial(c.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-[1.05rem] font-semibold leading-tight text-foreground">
              {c.name}
            </h3>
          </div>
          <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 text-[0.68rem] font-semibold tracking-wider text-primary-foreground">
            <span aria-hidden>{meta.emoji}</span>
            {meta.short}
          </div>
        </div>
      </header>

      <p className="mt-5 text-[0.9rem] leading-relaxed text-muted-foreground">{c.specialty}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="btn-press inline-flex h-12 min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-whatsapp text-[0.92rem] font-semibold text-whatsapp-foreground shadow-[0_6px_18px_-10px_oklch(0.66_0.16_150/0.6)] hover:shadow-[0_10px_24px_-10px_oklch(0.66_0.16_150/0.75)]"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        <a
          href={mailHref}
          className="btn-press inline-flex h-12 min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-border bg-white text-[0.92rem] font-semibold text-foreground shadow-[var(--shadow-soft)] hover:shadow-[0_10px_24px_-12px_oklch(0.22_0.03_155/0.22)]"
        >
          <GmailIcon /> Gmail
        </a>
      </div>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.52 0 .22 5.3.22 11.84a11.8 11.8 0 0 0 1.62 5.96L0 24l6.36-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.53 0 11.83-5.3 11.83-11.84 0-3.16-1.23-6.13-3.37-8.47ZM12.06 21.5h-.01a9.66 9.66 0 0 1-4.93-1.35l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.62 9.62 0 0 1-1.48-5.12c0-5.32 4.34-9.66 9.68-9.66 2.58 0 5.01 1.01 6.84 2.84a9.6 9.6 0 0 1 2.83 6.83c0 5.33-4.34 9.74-9.58 9.74Zm5.31-7.27c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02.99-1.02 2.42 0 1.43 1.04 2.81 1.19 3 .15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  );
}

/* Official Gmail "M" envelope mark with brand colors */
function GmailIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 24 18" aria-hidden>
      <path d="M1.5 18h3V8.18L0 4.77v11.73C0 17.33.67 18 1.5 18Z" fill="#4285F4" />
      <path d="M19.5 18h3c.83 0 1.5-.67 1.5-1.5V4.77L19.5 8.18V18Z" fill="#34A853" />
      <path d="M19.5 1.5v6.68L24 4.77V2.25C24 .07 21.5-1.17 19.77.16L19.5 1.5Z" fill="#FBBC04" />
      <path d="M4.5 8.18V1.5L12 7.13l7.5-5.63v6.68L12 13.82 4.5 8.18Z" fill="#EA4335" />
      <path d="M0 2.25v2.52l4.5 3.41V1.5L4.23.16C2.5-1.17 0 .07 0 2.25Z" fill="#C5221F" />
    </svg>
  );
}
