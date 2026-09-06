# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (Vite HMR)
npm run build      # type-check then bundle for production
npm run lint       # ESLint
npm run preview    # preview the production build locally
```

There is no test suite configured.

## Environment

Copy `.env.example` to `.env.local` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Architecture

Single-page marketing site for MAF Studio (freelance growth ops / digital agency). One route (`/`), one page (`Home`), composed of ordered sections.

**Provider stack** (`main.tsx`): `HelmetProvider` → `ThemeProvider` → `BrowserRouter` → `App`

**Page composition** (`src/pages/Home.tsx`):
`SEO` + `JsonLd` + `Navbar` + `Hero` -> `Services` -> `Method` -> `About` -> `FAQ` -> `Contact` + `Footer`.
`Proof.tsx` exists but is intentionally NOT mounted: it must be filled with a real, verifiable client case first.


**Theme**: dark only. The light theme and `ThemeContext` were removed; there are no `dark:` variants left.


**Booking**: Cal.com (`cal.com/amine-fadel`). The embed loader lives in `index.html`; `BookingButton.tsx` just sets `data-cal-link`. Calendly was removed (paid).


**UI**: no component library. shadcn/ui and `components.json` were removed — nothing imported them.


**Styling**: Tailwind v4 via `@tailwindcss/vite`. Tokens in `src/index.css` under `@theme`. Single typeface: **Archivo Variable** (wdth 62-125 + wght 100-900 + italic), self-hosted via `@fontsource-variable/archivo` and imported in `index.css`. No call to fonts.googleapis.com: one fewer third-party request, and no visitor IP handed to Google (RGPD). Inter and Geist were removed deliberately.
Utilities: `.display` / `.display-flat` (headlines), `.thread-field` (the diagonal thread motif), `.cut` / `.cut-sm` (diagonal corner clip replacing border-radius).
Hard rule: **no gradients as decoration**, no glow shadows, no scroll-triggered fade-ups. One animated sequence exists, on Hero load.


**SEO**: `react-helmet-async` manages `<head>`. `src/components/SEO.tsx` handles Open Graph / Twitter cards. `src/components/JsonLd.tsx` injects structured data. `public/sitemap.xml` and `public/robots.txt` are static.

**Path alias**: `@/` maps to `src/`.

## Pricing displayed on the site

Keep these three places in sync or the structured data will contradict the page:
`Services.tsx`, `JsonLd.tsx` (`hasOfferCatalog`), and the FAQ answer about the ads package.

- Site vitrine: from 690 EUR excl. VAT
- Online shop: from 1490 EUR excl. VAT
- Ads management: 390 EUR excl. VAT / month, ad spend not included
- Growth ops & CRM, automation: on quote
