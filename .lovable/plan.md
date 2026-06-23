## Plan

1. **Photo do Pedro Salermo**
   - Upload da imagem anexada via `lovable-assets` → criar `src/assets/pedro.png.asset.json`.
   - Em `src/data/consultants.ts`, adicionar `image: pedroAsset.url` no card do Pedro (id "2"), substituindo o círculo com a letra "P".

2. **Card do Instagram da Correta**
   - Adicionar um card especial no final da grade apontando para `https://www.instagram.com/corretaagronegocios?igsh=a293NjY1MjY2cngw`.
   - Abordagem: criar um componente `InstagramCard.tsx` no mesmo estilo visual dos cards de consultores (mesmo `glass`, mesmo tamanho, mesma animação `rise-in`), mas com:
     - Avatar circular com gradiente Instagram (rosa/laranja/roxo) e ícone do Instagram.
     - Título: "Correta Agronegócios"
     - Badge: "Instagram"
     - Texto: "Siga a Correta no Instagram e acompanhe novidades, fazendas, gado e genética."
     - Um único botão grande "Abrir Instagram" (ocupando largura total) que abre o link em nova aba.
   - Renderizá-lo em `src/routes/index.tsx` como último item da grid, sempre visível (não filtrado pela busca/categoria), depois dos resultados dos consultores.

Sem outras alterações de layout ou tokens.
