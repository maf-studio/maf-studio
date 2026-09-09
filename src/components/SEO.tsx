import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@/site'

/**
 * SEO réduit aux SEULES balises qui varient d'une route à l'autre.
 *
 * Auparavant, index.html et ce composant écrivaient tous les deux la
 * description, les og:*, les twitter:* et la canonique : elles se
 * dupliquaient dans le <head>. Pire, sur les pages légales, le
 * « index, follow » statique cohabitait avec le « noindex, follow » injecté
 * ici — deux directives contradictoires au même endroit.
 *
 * Décision : les balises de partage restent statiques dans index.html, parce
 * que ce sont les seules que lisent LinkedIn, WhatsApp et Slack, qui
 * n'exécutent pas de JavaScript. Ici, uniquement ce qui change par route.
 */
export default function SEO({
  title = 'MAF Studio — Agence web et digitale, site en ligne en 5 jours ouvrés',
  canonical = SITE_URL,
  noIndex = false,
}: {
  title?: string
  canonical?: string
  noIndex?: boolean
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? 'noindex, follow' : 'index, follow'} />
    </Helmet>
  )
}
