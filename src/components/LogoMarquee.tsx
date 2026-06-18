import type { CSSProperties } from "react";

type Logo = { name: string; mark: string; style?: CSSProperties };

const LOGOS: Logo[] = [
  { name: "Correta Consultoria", mark: "CORRETA·", style: { letterSpacing: "0.18em", fontWeight: 700 } },
  { name: "Correta Fazendas", mark: "Fazendas", style: { fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, fontSize: "1.6rem", lineHeight: 1 } },
  { name: "Correta Gado", mark: "GADO", style: { letterSpacing: "0.32em", fontWeight: 800 } },
  { name: "Correta Genética", mark: "Genética", style: { fontFamily: "Instrument Serif, serif", fontWeight: 400, fontSize: "1.55rem" } },
  { name: "Correta DDGs", mark: "DDGs°", style: { letterSpacing: "0.08em", fontWeight: 700 } },
  { name: "Correta Agro", mark: "AGRO/24", style: { letterSpacing: "0.14em", fontWeight: 600 } },
  { name: "Correta Capital", mark: "Capital", style: { fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, fontSize: "1.55rem" } },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-10 shrink-0 items-center px-7 text-foreground/55 transition-colors hover:text-foreground/80">
      <span className="whitespace-nowrap text-[0.95rem] uppercase tracking-wide" style={logo.style}>
        {logo.mark}
      </span>
    </div>
  );
}

export function LogoMarquee() {
  // Duplicate the list so the -50% translate loop is seamless
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee-mask relative overflow-hidden py-3">
      <div className="marquee-track flex w-max items-center">
        {loop.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
