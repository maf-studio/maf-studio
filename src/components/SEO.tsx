import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@/site'


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
  title = 'MAF Studio — Growth ops et automatisation pour TPE et PME',
  description = "Freelance growth ops : CRM, publicité Meta et TikTok, automatisation, sites web. À distance partout en France. Site vitrine dès 500 € HT.",
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
      <meta property="og:image:alt" content="MAF Studio — Growth ops et digital pour TPE et PME" />
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
      <meta name="keywords" content="growth ops, freelance growth, social ads, automatisation IA, make, n8n, webflow, wordpress, PME, TPE, freelance à distance, CRM, digital marketing" />
      <meta name="theme-color" content="#08070C" />
    </Helmet>
  )
}
