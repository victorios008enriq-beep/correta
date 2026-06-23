## Mudanças

### 1. Renomear botão "Gmail" → "E-mail"
Em `src/components/ConsultantCard.tsx`, trocar o texto do botão de `Gmail` para `E-mail`. O ícone colorido do Gmail e o link `mailto:` permanecem iguais.

### 2. Abrir e-mail no desktop
Hoje o botão usa apenas `href="mailto:..."`. No celular o SO já tem um app de e-mail padrão associado, então abre direto. No desktop, muitos navegadores (especialmente Chrome) não têm um handler padrão configurado e o clique simplesmente não faz nada visível.

Solução: abrir o **Gmail web (compose)** em uma nova aba como fallback no desktop, mantendo `mailto:` no mobile (que é o que o usuário pediu para não mexer).

Implementação no `ConsultantCard.tsx`:
- Detectar se é mobile via `navigator.userAgent` (ou `matchMedia("(pointer: coarse)")`) no `onClick` do link.
- Se for desktop: `e.preventDefault()` e abrir `https://mail.google.com/mail/?view=cm&fs=1&to=<email>&su=Contato%20via%20Hub%20Correta` em nova aba.
- Se for mobile: deixar o `mailto:` original funcionar normalmente.

Assim a versão mobile continua exatamente igual (abre o app de e-mail nativo), e o desktop passa a abrir o Gmail web — que cobre a maioria dos usuários e não depende de configuração local.

Nenhuma outra alteração de layout, tokens ou dados.
