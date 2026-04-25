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
`SEO` + `JsonLd` + `Navbar` (fixed) + `Hero` → `Problem` → `Services` → `BeforeAfter` → `FAQ` → `FinalCTA` + `Footer`

**Theme system** (`src/contexts/ThemeContext.tsx`): `isDark` state persisted to `localStorage`, toggled by the Navbar. Dark mode applied via a `.dark` class on `<html>`. All components use `dark:` Tailwind variants.

**Calendly integration** (`src/components/CalendlyButton.tsx`): Calendly JS widget loaded via `index.html` script tag. `openCalendly()` is exported for imperative use. The `CalendlyButton` component wraps it. Calendly API requires hex colors *without* `#` — see `getPageSettings()`.

**UI components** (`src/components/ui/`): shadcn/ui components generated with `npx shadcn add <component>`. Config is in `components.json` (style: `base-nova`, alias `@/components/ui`).

**Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`). Theme tokens defined in `src/index.css` under `@theme`. Custom utility classes defined there too (`.text-grad-main`, `.glow-violet`, `.glow-magenta`, `.strings-bg`, etc.). The display font is **Barlow Condensed** (loaded via Google Fonts in `index.html`); body font is **Geist Variable** (loaded via `@fontsource-variable/geist`).

**SEO**: `react-helmet-async` manages `<head>`. `src/components/SEO.tsx` handles Open Graph / Twitter cards. `src/components/JsonLd.tsx` injects structured data. `public/sitemap.xml` and `public/robots.txt` are static.

**Path alias**: `@/` maps to `src/`.
