export type Category = "fazendas" | "gado" | "genetica" | "ddgs";

export type Consultant = {
  id: string;
  name: string;
  category: Category;
  specialty: string;
  whatsapp: string; // E.164 digits
  email: string;
  image?: string;
  waMessage?: string;
  waHref?: string;
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
    name: "Gustavo Pires Ribeiro",
    category: "fazendas",
    specialty: "Compra e venda de fazendas",
    whatsapp: "+55 66 9227-6659",
    email: "gustavo@corretaagronegocios.com.br",
    image: "/__l5e/assets-v1/a0bd8a13-d70e-4dfb-9b4a-2e72dee4da72/gustavo.png",
    waMessage: "Olá Gustavo quero comprar uma fazenda.",
  },
  {
    id: "2",
    name: "Pedro Salermo",
    category: "gado",
    specialty: "Compra e venda de gado",
    whatsapp: "+55 66 8458-2247",
    email: "pedro@corretaagronegocios.com.br",
    image: "/__l5e/assets-v1/36534cbb-ef86-4ddd-949d-609706110a98/pedro.jpg",
    waMessage: "Olá Pedro quero comprar um gado.",
  },
  {
    id: "3",
    name: "Vanessa Trajano",
    category: "genetica",
    specialty: "Venda de Sêmen Bovino",
    whatsapp: "+55 66 8458-2247",
    email: "vanessa@corretaagronegocios.com.br",
    image: "/__l5e/assets-v1/9b70aae7-a5c3-49ff-84a1-4cc680c1e04b/vanessa.png",
    waMessage: "Olá Vanessa quero comprar Sêmen Bovino.",
    waHref: "https://api.whatsapp.com/send/?phone=5566984582247&text=Ol%C3%A1+Vanessa+quero+comprar+S%C3%AAmen+Bovino.&type=phone_number&app_absent=0",
  },
  {
    id: "4",
    name: "Robson Proença",
    category: "ddgs",
    specialty: "Venda de DDGs",
    whatsapp: "+55 66 99665-5828",
    email: "robson@corretaagronegociis.com.br",
    image: "/__l5e/assets-v1/3836b80b-e98b-4f51-80f8-5bf7239600e4/robson.png",
    waMessage: "Olá Robson quero comprar DDGs .",
  },
];
