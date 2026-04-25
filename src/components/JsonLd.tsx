/**
 * Injects JSON-LD structured data via a <script> tag.
 * Two schemas: Person (Mohamed-Amine Fadel) + ProfessionalService (MAF STUDIO).
 */
export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohamed-Amine Fadel',
    url: 'https://maf-studio.fr',
    image: 'https://maf-studio.fr/og-image.jpg',
    jobTitle: 'Freelance Growth Ops & Digital',
    description:
      "Freelance Growth Ops & Digital basé en Île-de-France. J'aide les PME & TPE à scaler avec la stratégie, les ads, l'automatisation IA et le web.",
    sameAs: [
      'https://www.linkedin.com/in/mohamed-amine-fadel',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    knowsAbout: [
      'Growth Hacking',
      'CRM',
      'Social Media Advertising',
      'Marketing Automation',
      'Make',
      'N8N',
      'Webflow',
      'WordPress',
      'SEO',
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MAF STUDIO',
    url: 'https://maf-studio.fr',
    logo: 'https://maf-studio.fr/favicon.svg',
    image: 'https://maf-studio.fr/og-image.jpg',
    description:
      "Studio freelance Growth Ops & Digital pour les PME & TPE françaises. Services : Growth Ops & CRM, Social Ads, Automatisation IA (Make/N8N), Web (Webflow/WordPress).",
    founder: {
      '@type': 'Person',
      name: 'Mohamed-Amine Fadel',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@maf-studio.fr',
      availableLanguage: 'French',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services MAF STUDIO',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Growth Ops & CRM',
            description: 'Mise en place et optimisation CRM, séquences email, pipeline de vente automatisé.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Ads',
            description: 'Création et gestion de campagnes publicitaires Meta Ads, TikTok Ads, LinkedIn Ads.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatisation IA (Make / N8N)',
            description: "Automatisation des processus internes avec Make, N8N et intégrations IA.",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web (Webflow / WordPress)',
            description: "Création de sites web et landing pages sur Webflow et WordPress.",
          },
        },
      ],
    },
    priceRange: '€€',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
