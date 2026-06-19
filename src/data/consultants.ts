export type Category = "fazendas" | "gado" | "genetica" | "ddgs";

export type Consultant = {
  id: string;
  name: string;
  category: Category;
  specialty: string;
  whatsapp: string; // E.164 digits
  email: string;
};

export const CATEGORY_META: Record<Category, { label: string; short: string; emoji: string }> = {
  fazendas: { label: "Fazendas", short: "Fazendas", emoji: "🏡" },
  gado: { label: "Gado", short: "Gado", emoji: "🐂" },
  genetica: { label: "Genética", short: "Genética", emoji: "🧬" },
  ddgs: { label: "DDGs", short: "DDGs", emoji: "🌽" },
};

export const CONSULTANTS: Consultant[] = [
  {
    id: "1",
    name: "Rafael Andrade",
    category: "fazendas",
    specialty: "Compra e venda de fazendas",
    whatsapp: "+5566999990001",
    email: "rafael@corretaconsultoria.com.br",
  },
  {
    id: "2",
    name: "Mariana Lopes",
    category: "gado",
    specialty: "Negociação de gado de corte e cria",
    whatsapp: "+5566999990002",
    email: "mariana@corretaconsultoria.com.br",
  },
  {
    id: "3",
    name: "Bruno Tavares",
    category: "genetica",
    specialty: "Genética bovina e melhoramento de rebanhos",
    whatsapp: "+5566999990003",
    email: "bruno@corretaconsultoria.com.br",
  },
  {
    id: "4",
    name: "Camila Ribeiro",
    category: "ddgs",
    specialty: "Comercialização de DDGs e nutrição animal",
    whatsapp: "+5566999990004",
    email: "camila@corretaconsultoria.com.br",
  },
];
