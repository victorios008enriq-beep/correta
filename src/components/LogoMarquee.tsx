import correta from "@/assets/logo_correta.png.asset.json";
import semex from "@/assets/logo_semex.png.asset.json";
import alvorada from "@/assets/logo_alvorada.png.asset.json";

type Logo = { name: string; src: string; bg?: string };

const LOGOS: Logo[] = [
  { name: "Correta Consultoria Agronegócios", src: correta.url },
  { name: "Semex Brasil", src: semex.url },
  { name: "Alvorada Bioenergia", src: alvorada.url, bg: "dark" },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-14 shrink-0 items-center px-6">
      <img
        src={logo.src}
        alt={logo.name}
        className="h-full w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
        loading="lazy"
      />
    </div>
  );
}

export function LogoMarquee() {
  const loop = [...LOGOS, ...LOGOS, ...LOGOS];
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
