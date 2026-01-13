# LP Samuel — Landing Page com Astro

Projeto exclusivo da Landing Page de Samuel Santiago — Gestor de Projetos e Produtos. Construído com Astro e Tailwind CSS, focado em performance, acessibilidade e fácil manutenção.

## Stack

- Astro (v5)
- Tailwind CSS (v4 via plugin `@tailwindcss/vite`)
- ESLint + Prettier

## Executar localmente

Pré-requisitos: Node.js 18+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (padrão: http://localhost:4321).

Para build de produção e preview:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

- [astro.config.mjs](astro.config.mjs) — configuração do Astro/Vite (inclui Tailwind via plugin).
- [src/pages/index.astro](src/pages/index.astro) — página principal que orquestra as seções.
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — layout base, meta/`<head>` e estrutura global.
- Componentes em [src/components/](src/components): `Hero.astro`, `Stats.astro`, `DNASection.astro`, `CredibilitySection.astro`, `PricingSection.astro`, `AboutSection.astro`, `PodcastSection.astro`, `FAQSection.astro`, `Header.astro`, `Footer.astro`.
- Estilos em [src/styles/](src/styles): `global.css`, `hero-effects.css`, tokens em [src/styles/tokens/](src/styles/tokens).
- Imagens em [src/assets/images/](src/assets/images) (formato `.avif`).
- Arquivos públicos em [public/](public) (favicon, etc.).

## Customização rápida

- Conteúdo: ajuste textos e CTAs nos componentes em [src/components/](src/components). Ex.: `AboutSection.astro`, `Hero.astro`, `PricingSection.astro`.
- Título/SEO: altere o `<title>` em [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro).
- Estilos globais: fontes, tema e Tailwind em [src/styles/global.css](src/styles/global.css).
- Tokens de design: variáveis e efeitos em [src/styles/tokens/variables.css](src/styles/tokens/variables.css) e [src/styles/tokens/pricing-effects.css](src/styles/tokens/pricing-effects.css).
- Imagens: substitua/adicione assets em [src/assets/images/](src/assets/images).

## Qualidade de código

```bash
npm run lint      # checa lint
npm run prettier  # formata arquivos
```

## Deploy

- Vercel/Netlify: build `npm run build` e publish `dist/`.
- CI: use `npm ci` seguido de `npm run build`.

## Créditos

Desenvolvido por Pixelteams.
