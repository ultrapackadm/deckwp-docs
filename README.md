# DeckWP Docs

> Public documentation for [DeckWP](https://deckwp.com) — getting started,
> API reference, guides, comparisons.

Published at: **https://docs.deckwp.com** (hosting setup pending).

## Stack

[VitePress](https://vitepress.dev) — Vue-powered static site generator.
Fast builds, native dark mode, full-text search built in.

## Local development

```bash
git clone git@github.com:ultrapackadm/deckwp-docs.git
cd deckwp-docs
npm install
npm run docs:dev    # http://localhost:5173
```

Build for production:

```bash
npm run docs:build
# Output: docs/.vitepress/dist/
```

## Structure

```
docs/
├── .vitepress/
│   └── config.ts            # site config (nav, sidebar, theme)
├── index.md                 # landing page
├── getting-started/
│   ├── pair-your-first-site.md
│   └── auto-vs-manual-install.md
├── api/
│   ├── connector-rest-reference.md
│   ├── hmac-authentication.md
│   └── webhooks.md
├── guides/
│   ├── bulk-updates.md
│   ├── backup-and-rollback.md
│   ├── scheduled-updates.md
│   ├── whitelabel.md
│   └── multisite.md
└── compare/
    ├── vs-manage-gpl.md     # SEO landing for "Manage GPL alternative"
    ├── vs-zeebrar.md
    ├── vs-managewp.md
    └── vs-mainwp.md
```

## Contributing

Docs PRs welcome. Style: clear, concrete, examples-first. Avoid marketing
fluff in technical pages — that lives on the marketing site at
[deckwp.com](https://deckwp.com).

## License

MIT. Use anything from these docs in your own posts/tutorials with
attribution.

