import { Helmet } from 'react-helmet-async'
import { SITE_URL, LINKEDIN } from '@/site'



/**
 * Données structurées — décrit l'activité et les prix affichés.
 * Les tarifs déclarés ici doivent rester alignés avec Services.tsx :
 * une incohérence entre le balisage et la page est pénalisée.
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
          "Growth operations, publicité en ligne, automatisation et création de sites web pour les TPE et PME françaises.",
        url: SITE_URL,
        sameAs: [LINKEDIN],
        email: 'aminefadelpro@gmail.com',
        telephone: '+33666840344',
        priceRange: '€€',
        vatID: 'FR — TVA non applicable, art. 293 B du CGI',
        identifier: { '@type': 'PropertyValue', name: 'SIRET', value: '10361768400016' },
        areaServed: { '@type': 'Country', name: 'France' },
        availableLanguage: 'fr',
        founder: {
          '@type': 'Person',
          name: 'Mohamed-Amine Fadel',
          jobTitle: 'Growth Operations Manager',
          sameAs: [LINKEDIN],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Prestations',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Création de site vitrine' },
              price: '500',
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'projet' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Création de boutique en ligne' },
              price: '1090',
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'projet' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Gestion de campagnes publicitaires' },
              price: '300',
              priceCurrency: 'EUR',
              eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'mois' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Structuration CRM et growth operations' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: "Automatisation de processus et agents IA" },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'MAF Studio',
        inLanguage: 'fr-FR',
        publisher: { '@id': `${SITE_URL}/#business` },
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
