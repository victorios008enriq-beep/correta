import type { Consultant } from "@/data/consultants";
import { CATEGORY_META } from "@/data/consultants";

function initial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function ConsultantCard({ c }: { c: Consultant }) {
  const meta = CATEGORY_META[c.category];
  const waHref = `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Olá ${c.name.split(" ")[0]}, vim pelo hub da Correta Consultoria.`,
  )}`;
  const mailHref = `mailto:${c.email}?subject=${encodeURIComponent("Contato via Hub Correta")}`;

  return (
    <article className="group rounded-3xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_oklch(0.22_0.02_145/0.18)]">
      <header className="flex items-center gap-4">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-semibold text-primary-foreground"
          style={{ backgroundColor: `var(--cat-${c.category})` }}
          aria-hidden
        >
          {initial(c.name)}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[1.05rem] font-semibold leading-tight text-foreground">
            {c.name}
          </h3>
          <p className="mt-0.5 truncate text-[0.82rem] text-muted-foreground">{c.specialty}</p>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide"
          style={{
            backgroundColor: `color-mix(in oklab, var(--cat-${c.category}) 12%, transparent)`,
            color: `var(--cat-${c.category})`,
          }}
        >
          {meta.emoji} {meta.short}
        </span>
      </header>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-whatsapp text-sm font-semibold text-whatsapp-foreground transition-all active:scale-[0.98]"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        <a
          href={mailHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gmail text-sm font-semibold text-gmail-foreground transition-all active:scale-[0.98]"
        >
          <GmailIcon /> Gmail
        </a>
      </div>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.52 0 .22 5.3.22 11.84a11.8 11.8 0 0 0 1.62 5.96L0 24l6.36-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.53 0 11.83-5.3 11.83-11.84 0-3.16-1.23-6.13-3.37-8.47ZM12.06 21.5h-.01a9.66 9.66 0 0 1-4.93-1.35l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.62 9.62 0 0 1-1.48-5.12c0-5.32 4.34-9.66 9.68-9.66 2.58 0 5.01 1.01 6.84 2.84a9.6 9.6 0 0 1 2.83 6.83c0 5.33-4.34 9.74-9.58 9.74Zm5.31-7.27c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02.99-1.02 2.42 0 1.43 1.04 2.81 1.19 3 .15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  );
}
function GmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.6 5.6L19.6 6H4.4Zm15.6 1.7-7.4 5.45a1 1 0 0 1-1.2 0L4 7.7v9.8c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.7Z" />
    </svg>
  );
}
