import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { LogoMarquee } from "@/components/LogoMarquee";
import { RotatingPhrase } from "@/components/RotatingPhrase";
import { ConsultantCard } from "@/components/ConsultantCard";
import { ConsultantCardSkeleton } from "@/components/ConsultantCardSkeleton";
import { InstagramCard } from "@/components/InstagramCard";
import { CATEGORY_META, CONSULTANTS, type Category } from "@/data/consultants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Correta Consultoria · Hub de Contatos" },
      { name: "description", content: "Encontre o especialista ideal da Correta Consultoria Agronegócios e fale com um toque." },
      { property: "og:title", content: "Correta Consultoria · Hub de Contatos" },
      { property: "og:description", content: "Fazendas, Gado, Genética e DDGs — fale direto com o consultor certo." },
    ],
  }),
  component: Index,
});

type Filter = "all" | Category;

const FILTERS: { id: Filter; label: string; emoji?: string }[] = [
  { id: "all", label: "Todos" },
  { id: "fazendas", label: "Fazendas", emoji: "🏡" },
  { id: "gado", label: "Gado", emoji: "🐂" },
  { id: "genetica", label: "Genética", emoji: "🧬" },
  { id: "ddgs", label: "DDGs", emoji: "🌽" },
];

function Index() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [booting, setBooting] = useState(true);
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 650);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (booting) return;
    setReloading(true);
    const t = setTimeout(() => setReloading(false), 260);
    return () => clearTimeout(t);
  }, [filter]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CONSULTANTS.filter((c) => {
      if (filter !== "all" && c.category !== filter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.specialty.toLowerCase().includes(q) ||
        CATEGORY_META[c.category].label.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  const showSkeleton = booting || reloading;


  return (
    <div className="min-h-screen">
      <main
        className="mx-auto flex max-w-xl flex-col"
        style={{
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        {/* HERO — compact */}
        <header
          className="flex flex-col gap-4 px-5 pb-3"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)" }}
        >
          <LogoMarquee />

          <div className="space-y-1.5 text-center">
            <h1 className="text-balance text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground">
              Encontre o especialista ideal para o seu negócio.
            </h1>
            <RotatingPhrase />
          </div>
        </header>

        {/* STICKY SEARCH + FILTERS */}
        <div className="sticky top-0 z-30 border-b border-white/40 bg-[oklch(0.955_0.028_150/0.7)] px-5 pt-3 pb-3 backdrop-blur-xl">
          <label className="relative block">
            <span className="sr-only">Pesquisar consultor</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Pesquisar consultor..."
              className="glass h-12 w-full rounded-2xl pl-11 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 shadow-[var(--shadow-soft)] outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            />
          </label>

          <div className="-mx-5 mt-3 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-2">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    className={
                      "btn-press inline-flex h-10 min-h-[40px] shrink-0 items-center gap-1.5 rounded-full border px-4 text-[0.82rem] font-medium " +
                      (active
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_6px_16px_-8px_oklch(0.45_0.09_155/0.55)]"
                        : "glass text-foreground/75 hover:text-foreground")
                    }
                  >
                    {f.emoji && <span aria-hidden>{f.emoji}</span>}
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONSULTANTS */}
        <section className="flex flex-col gap-4 px-5 py-6">
          {showSkeleton ? (
            Array.from({ length: 4 }).map((_, i) => <ConsultantCardSkeleton key={`sk-${i}`} />)
          ) : list.length === 0 ? (
            <div className="glass rise-in rounded-3xl p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Nenhum consultor encontrado para esta busca.
              </p>
            </div>
          ) : (
            <>
              {list.map((c, i) => (
                <ConsultantCard key={`${filter}-${c.id}`} c={c} index={i} />
              ))}
              <InstagramCard index={list.length} />
            </>
          )}
        </section>

        {/* FOOTER — minimal */}
        <footer
          className="mt-auto flex items-center justify-center gap-2 border-t border-border/60 px-5 pt-5 text-[0.72rem] text-muted-foreground"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
        >
          <span className="font-medium text-foreground/80">Correta Consultoria</span>
          <span className="text-muted-foreground/60">·</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
