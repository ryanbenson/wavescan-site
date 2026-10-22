# wavescan-site

The website for [Wavescan](https://github.com/wavescan/wavescan), the free Wuthering Waves echo scanner. It's a one-page site built with Vite, Vue 3 and TypeScript, using the same toolchain versions as the app.

## Run it

You need Node 24 (see `.nvmrc`).

```bash
npm ci
npm run dev       # local dev server
npm run check     # lint + type check, tests, production build (what CI should run)
npm run build     # static files in dist/
```

`dist/` is plain static files, so it can be hosted anywhere (GitHub Pages, Cloudflare Pages, Netlify).

## Where things live

| Path | What it is |
|---|---|
| `src/style.css` | Colour and font tokens (the app's Echo Glass scheme: dark by default, light behind the toggle) and shared styles: slanted buttons and tags, panels, section labels, FAQ lists |
| `src/sections/` | One component per page section, in page order in `src/App.vue` |
| `src/components/` | Pieces used by sections: nav, footer, icons, the hero echo panel, the setup checker |
| `src/links.ts` | Every outside link. **`discord` is empty until there's a public invite**; Discord buttons stay hidden until it's set |
| `src/roadmap.ts` | The roadmap. Keep it in step with the app's `docs/roadmap.md` |
| `src/compat.ts` | The "Will it work for me?" rules, with tests in `compat.spec.ts` |
| `src/sections/DownloadSection.vue` | Download buttons. Set each `href` when the first signed release ships |

## Writing for the site

Players of every age read this site, in many countries, often in their second language. Keep the words simple:

- Short sentences. One idea per sentence.
- Use the names players see in the game and the app (**Bag → Echoes**, **Start watching**), and mark them with `<span class="ui">`.
- Say what to do, not how the code works.
- Facts about the app (requirements, privacy, connections) come from the app's README. Change them there first.

## Privacy

The site follows the app's rules: no analytics, no trackers, no cookies. Fonts are self-hosted through `@fontsource`, so visitors don't connect to Google Fonts. The only thing stored is the light/dark choice, in the visitor's own browser.

## Not affiliated

Wavescan is a fan project. It isn't affiliated with or endorsed by Kuro Games. Wuthering Waves and related names and images are trademarks of Kuro Games.
