# Project Verkoopklaar (MVP marketing site)

## PDF one-pager
De MVP one-pager staat als statisch bestand in `public/verkoopklaar-mvp.pdf`.

### Lokaal genereren
```bash
pnpm install
pnpm pdf
```

Commit daarna het gegenereerde bestand (`public/verkoopklaar-mvp.pdf`) zodat Netlify geen PDF hoeft te genereren.

## Netlify deploy (static export)
- Build command: `pnpm build`
- Publish directory: `out`
- Node versie: `20.11.1` (zie `.nvmrc` en `netlify.toml`)

### Checklist bij deploy issues
- Controleer dat `next.config.mjs` `output: "export"` bevat.
- Controleer dat de publish directory `out` is.
- Check of dynamische routes `generateStaticParams()` definiëren.
- Controleer de Node-versie (lokale versie vs Netlify).
