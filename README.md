# devp.in — Dev Pandya

Personal portfolio site for Dev Pandya — Head of Department, Outbound Marketing & SEO. Built as an editorial, maximalist single-page experience sourced entirely from his résumé.

Live target domain: **[devp.in](https://devp.in)**

## Architecture overview

Next.js App Router site, statically generated (no backend, no database). All copy lives in one typed data file so content and presentation stay separate:

```
src/
  app/
    layout.tsx          Root shell: fonts, metadata, JSON-LD, skip link
    page.tsx             Assembles the section components in order
    globals.css           Design tokens (color/font theme), grain overlay, utility classes
    sitemap.ts / robots.ts / opengraph-image.tsx
  components/
    layout/               Nav, Footer, SmoothScroll (Lenis + MotionConfig), CustomCursor
    sections/              Hero, Ticker, About, Impact, Experience, Systems, Operations,
                            Skills, Education, Contact — one component per page section
    ui/                    Reusable motion primitives: FadeIn, RevealText, AnimatedCounter,
                            SectionHeading, MagneticButton, NetworkCanvas
  data/
    cv.ts                  Single source of truth for every fact on the site, transcribed
                            directly from the CV. No fabricated content.
  lib/
    utils.ts                cn() classname helper
public/
  resume/                  Downloadable résumé (PDF)
  icon.svg                 Favicon
```

### Why this stack

- **Next.js (App Router) + TypeScript** — static generation, file-based routing, built-in `sitemap.ts`/`robots.ts`/`opengraph-image.tsx` conventions for SEO.
- **Tailwind CSS v4** — theme tokens declared once in `globals.css` via `@theme inline`, no separate config file needed.
- **Framer Motion** — scroll-triggered reveals, the hero's kinetic type, the magnetic contact button, and the full-screen menu transition. `MotionConfig reducedMotion="user"` at the root makes every animation respect `prefers-reduced-motion` automatically, without SSR/hydration mismatches.
- **Lenis** — smooth-scroll easing; disabled entirely for users who prefer reduced motion.
- **Canvas 2D (no Three.js)** — the "network growth" background in the hero is a lightweight generative particle graph. Three.js/WebGL was deliberately skipped: the visual is 2D and canvas keeps the bundle smaller.
- **No Supabase / backend** — this is a static résumé-driven portfolio. There's no CMS, no form submissions, and no dynamic content to justify a database. Contact is handled via `mailto:`/`tel:` links.

## Content policy

Every fact on the site — job titles, dates, metrics, tools, conference names — comes directly from the attached CV and lives in `src/data/cv.ts`. Nothing was invented. If you update the CV, edit that file; the whole site re-renders from it.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # ESLint
```

No environment variables are required — there is no `.env.example` because the site has no backend integrations.

## Deploy to Vercel

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. In Vercel: **Add New → Project → Import** the GitHub repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Deploy. Vercel builds with `next build` and serves the static/prerendered output.

## Connect devp.in

1. In the Vercel project → **Settings → Domains**, add `devp.in` (and optionally `www.devp.in` with a redirect to the apex).
2. At your domain registrar, point DNS per Vercel's instructions — typically an `A` record to Vercel's IP for the apex domain, or `ALIAS`/`ANAME` if your registrar supports it, plus a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
3. Vercel provisions the TLS certificate automatically once DNS resolves.
4. `metadataBase`, canonical URL, sitemap, and robots.txt are already hardcoded to `https://devp.in` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` — no changes needed once the domain is live.

## Remaining inputs

- **Professional photograph** — none was supplied with the CV, so the hero relies on kinetic typography and a generative network visual instead of a portrait. Drop a photo in `public/` and it can be integrated with an art-directed treatment (duotone/masked crop) if desired.
- **Social/professional links beyond LinkedIn** — the CV lists only LinkedIn. If there's a GitHub, X/Twitter, or personal blog to include, add it to `src/data/cv.ts`.
