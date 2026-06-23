import instagramAvatar from "@/assets/instagram-correta.png.asset.json";

const INSTAGRAM_URL =
  "https://www.instagram.com/corretaagronegocios?igsh=a293NjY1MjY2cngw";

export function InstagramCard({ index }: { index: number }) {
  return (
    <article
      className="glass group rise-in rounded-3xl p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-22px_oklch(0.22_0.03_155/0.28)]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <header className="flex items-center gap-4">
        <img
          src={instagramAvatar.url}
          alt="Correta Agronegócios"
          className="h-14 w-14 shrink-0 rounded-full object-cover shadow-[0_2px_8px_-2px_oklch(0.22_0.03_155/0.18)]"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[1.05rem] font-semibold leading-tight text-foreground">
            Correta Agronegócios
          </h3>
          <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 text-[0.68rem] font-semibold tracking-wider text-primary-foreground">
            <span aria-hidden>📸</span>
            Instagram
          </div>
        </div>
      </header>

      <p className="mt-5 text-[0.9rem] leading-relaxed text-muted-foreground">
        Siga a Correta no Instagram e acompanhe novidades, fazendas, gado e genética.
      </p>

      <div className="mt-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-press inline-flex h-12 w-full min-h-[44px] items-center justify-center gap-2 rounded-2xl text-[0.92rem] font-semibold text-white shadow-[0_6px_18px_-10px_oklch(0.55_0.2_350/0.6)] hover:shadow-[0_10px_24px_-10px_oklch(0.55_0.2_350/0.75)]"
          style={{
            background:
              "linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
          }}
        >
          <InstagramIcon /> Abrir Instagram
        </a>
      </div>
    </article>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
