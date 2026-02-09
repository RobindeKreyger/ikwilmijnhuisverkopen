# Project Verkoopklaar — Marketing MVP

Conversion-first marketing site voor **Project Verkoopklaar** (Vlaanderen). Gebouwd met Next.js App Router + TypeScript + Tailwind en klaar voor statische deploy via Netlify.

## Lokale ontwikkeling

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000) in je browser.

## Build & export

De site is geconfigureerd voor **static export**.

```bash
npm run build
```

De statische output komt in de `out/` map.

## Deploy via GitHub + Netlify

1. **Push naar GitHub**
   - Commit je wijzigingen.
   - Push naar je GitHub repository.

2. **Netlify instellingen**
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Netlify Forms**
   - De formulieren werken zonder extra setup dankzij `data-netlify`.
   - Na succesvolle submit ga je naar `/thank-you`.

## Inhoud aanpassen

Alle pagina's zitten in `src/app`:

- `/` — Home
- `/hoe-het-werkt`
- `/prijzen`
- `/biedingen-analyse`
- `/faq`
- `/contact`
- `/privacy`
- `/thank-you`

### Assets

- `public/favicon.svg`
- `public/og-image.svg`
- `public/robots.txt`
- `public/sitemap.xml`

## Analytics

Een optionele Plausible snippet staat in `src/app/layout.tsx`. Pas de `data-domain` aan of verwijder deze volledig.
