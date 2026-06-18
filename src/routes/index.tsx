import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LogoMarquee } from "@/components/LogoMarquee";
import { RotatingPhrase } from "@/components/RotatingPhrase";
import { ConsultantCard } from "@/components/ConsultantCard";
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

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex max-w-xl flex-col">
        {/* HERO — compact */}
        <header
          className="flex flex-col justify-between px-5 pt-5 pb-3"
          style={{ minHeight: 190 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground"
                aria-hidden
              >
                <span className="text-[0.95rem] font-bold">C</span>
              </div>
              <div className="leading-tight">
                <p className="text-[0.78rem] font-semibold tracking-[0.18em] text-primary">
                  CORRETA
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Consultoria · Agronegócios
                </p>
              </div>
            </div>
            <span className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
              Hub · 2026
            </span>
          </div>

          <LogoMarquee />

          <div className="space-y-1.5 text-center">
            <h1 className="truncate text-[1.05rem] font-semibold tracking-tight text-foreground">
              Encontre o especialista ideal para o seu negócio.
            </h1>
            <RotatingPhrase />
          </div>
        </header>

        {/* STICKY SEARCH + FILTERS */}
        <div className="sticky top-0 z-30 border-b border-border/70 bg-background/85 px-5 pt-3 pb-3 backdrop-blur-md">
          <label className="relative block">
            <span className="sr-only">Pesquisar consultor</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Pesquisar consultor..."
              className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 shadow-[var(--shadow-soft)] outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
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
                      "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-[0.82rem] font-medium transition-all " +
                      (active
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "border-border bg-card text-foreground/70 hover:border-primary/30 hover:text-foreground")
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
        <section className="flex flex-col gap-3 px-5 py-5">
          {list.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card/60 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Nenhum consultor encontrado para esta busca.
              </p>
            </div>
          ) : (
            list.map((c, i) => <ConsultantCard key={c.id} c={c} index={i} />)
          )}
        </section>

        {/* FOOTER — minimal */}
        <footer className="mt-auto flex items-center justify-center gap-2 border-t border-border/60 px-5 py-5 text-[0.72rem] text-muted-foreground">
          <span
            className="grid h-5 w-5 place-items-center rounded-md bg-primary text-[0.6rem] font-bold text-primary-foreground"
            aria-hidden
          >
            C
          </span>
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
