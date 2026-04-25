import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://maf-studio.fr'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

export default function SEO({
  title = 'MAF STUDIO — Growth Ops, Ads & Automatisation IA | Mohamed-Amine Fadel',
  description = "Freelance Growth Ops & Digital basé en Île-de-France. J'aide les PME & TPE à scaler avec la stratégie, les ads, l'automatisation IA et le web.",
  canonical = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes('MAF') ? title : `${title} | MAF STUDIO`

  return (
    <Helmet>
      {/* ── Core ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MAF STUDIO — Growth Ops & Digital pour PME" />
      <meta property="og:site_name" content="MAF STUDIO" />
      <meta property="og:locale" content="fr_FR" />

      {/* ── Twitter / X Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── LinkedIn specific ── */}
      <meta property="og:image:secure_url" content={ogImage} />

      {/* ── Extra crawl hints ── */}
      <meta name="author" content="Mohamed-Amine Fadel" />
      <meta name="keywords" content="growth ops, freelance growth, social ads, automatisation IA, make, n8n, webflow, wordpress, PME, TPE, Île-de-France, CRM, digital marketing" />
      <meta name="theme-color" content="#7C3AED" />
    </Helmet>
  )
}
