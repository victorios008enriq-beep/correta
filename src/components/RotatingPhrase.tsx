import { useEffect, useState } from "react";

const PHRASES = [
  "🏡  Compra e Venda de Fazendas",
  "🐂  Compra e Venda de Gado",
  "🧬  Genética Bovina",
  "🌽  Comercialização de DDGs",
];

export function RotatingPhrase() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PHRASES.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative flex h-6 items-center justify-center overflow-hidden">
      <span
        key={i}
        className="text-sm text-muted-foreground"
        style={{ animation: "fadeSlide 3s ease-in-out forwards" }}
      >
        {PHRASES[i]}
      </span>
    </div>
  );
}
