import { Helmet } from 'react-helmet-async'
import { SITE_URL, LINKEDIN, EMAIL, TEL_LIEN } from '@/site'
import { FORFAITS, ABONNEMENTS } from '@/content/offres'
import { QUESTIONS } from '@/content/faq'
import { REALISATIONS } from '@/data/realisations'

/**
 * Données structurées, alimentées par les mêmes tableaux que la page.
 *
 * Aucun prix n'est réécrit ici : ils viennent de src/content/offres.ts, et
 * les questions de src/content/faq.ts. C'était la principale source de
 * dérive du dépôt — le balisage a continué à déclarer à Google des offres de
 * CRM et d'automatisation longtemps après leur retrait, et des prix qui ne
 * correspondaient plus à la page.
 *
 * INTERDITS ABSOLUS ICI : aggregateRating et review. MAF Studio n'a aucun
 * avis. Les inventer dans le balisage est une allégation trompeuse, et Google
 * sanctionne les avis auto-déclarés.
 *
 * Les @id du graphe sont #business et #website : ne créez jamais de section
 * de page portant ces id, elles entreraient en collision.
 */
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: 'MAF Studio',
        description:
          "Agence web et digitale : création de sites vitrines, boutiques en ligne et sites sur-mesure, et pilotage de la publicité en ligne, pour les TPE et PME françaises.",
        url: SITE_URL,
        sameAs: [LINKEDIN],
        email: EMAIL,
        telephone: TEL_LIEN,
        priceRange: '€€',
        vatID: 'TVA non applicable, article 293 B du CGI',
        identifier: { '@type': 'PropertyValue', name: 'SIRET', value: '10361768400016' },
        areaServed: { '@type': 'Country', name: 'France' },
        availableLanguage: 'fr',
        founder: {
          '@type': 'Person',
          name: 'Mohamed-Amine Fadel',
          jobTitle: 'Fondateur, concepteur et développeur web',
          sameAs: [LINKEDIN],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Prestations',
          itemListElement: [
            ...FORFAITS.map((f) => ({
              '@type': 'Offer',
              name: f.nom,
              itemOffered: { '@type': 'Service', name: `Création de site : forfait ${f.nom}` },
              price: String(f.prix),
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'projet' },
            })),
            ...ABONNEMENTS.map((a) => ({
              '@type': 'Offer',
              name: a.nom,
              itemOffered: { '@type': 'Service', name: `Abonnement ${a.nom}` },
              price: String(a.prix),
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'mois' },
            })),
          ],
        },
        workExample: REALISATIONS.map((r) => ({
          '@type': 'WebSite',
          name: r.nom,
          url: r.url,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'MAF Studio',
        inLanguage: 'fr-FR',
        publisher: { '@id': `${SITE_URL}/#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: QUESTIONS.map((q) => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: { '@type': 'Answer', text: q.r },
        })),
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
