/**
 * Réalisations — la seule preuve dont MAF Studio dispose réellement.
 *
 * Règle de cette liste : chaque ligne décrit ce qui a été CONSTRUIT, jamais
 * ce que ça a rapporté. Aucun résultat client n'est vérifié, donc aucun n'est
 * affiché. Tous les liens sont ouverts : le visiteur peut vérifier lui-même.
 *
 * La distinction entre `realisations` et `contributions` n'est pas cosmétique.
 * Revendiquer un site entier quand on n'en a fait qu'une partie est le genre
 * de détail qui se vérifie en un clic et qui coûte la confiance.
 */

export interface Projet {
  nom: string
  url: string
  /** Le secteur, affiché en surtitre. */
  secteur: string
  /** Ce qui a été livré. Factuel, vérifiable en ouvrant le lien. */
  fait: string
  /** Type de site, sert à prouver la couverture de l'offre. */
  nature: 'Site vitrine' | 'Site + tunnel' | 'Boutique en ligne'
  /**
   * Capture du premier écran, servie depuis public/realisations.
   *
   * Ce n'est pas une illustration : c'est la preuve. Un site d'agence web qui
   * annonce « des sites en ligne, pas des maquettes » sans montrer un seul
   * pixel de ces sites se sabote lui-même. Les captures sont prises sur les
   * sites réellement en production, jamais retouchées.
   */
  image?: string
  /** Palette dominante de la capture, pour teinter le cadre au survol. */
  teinte?: string
}

/** Sites conçus et livrés de bout en bout. */
export const REALISATIONS: Projet[] = [
  {
    nom: 'Black Academy',
    url: 'https://www.black-academy.fr/',
    secteur: 'CFA restauration',
    fait: "Site complet et tunnel de candidature, du formulaire jusqu'à la prise de contact.",
    nature: 'Site + tunnel',
    image: '/realisations/black-academy.webp',
    teinte: '#0A0A0A',
  },
  {
    nom: 'Avancia Formation',
    url: 'https://www.avancia-formation.fr/',
    secteur: 'Organisme de formation',
    fait: "Site d'une formation certifiante : programme détaillé en neuf modules, synthèse du parcours et parcours de candidature.",
    nature: 'Site + tunnel',
    image: '/realisations/avancia.webp',
    teinte: '#0E0D0B',
  },
  {
    nom: 'Campus Compétences',
    url: 'https://ccampus-formation.fr/',
    secteur: 'Organisme de formation',
    fait: "Site vitrine d'une formation certifiante à distance, éligible CPF, avec le programme et les modalités d'inscription.",
    nature: 'Site vitrine',
    image: '/realisations/campus.webp',
    teinte: '#1E3A5F',
  },
  {
    nom: 'Apesoft',
    url: 'https://apesoft.fr/',
    secteur: 'Éditeur logiciel',
    fait: "Site vitrine et prise de rendez-vous pour un audit.",
    nature: 'Site vitrine',
    image: '/realisations/apesoft.webp',
    teinte: '#7C3AED',
  },
]

/**
 * Projets sur lesquels l'intervention est réelle mais partielle, ou d'une
 * autre nature que la création du site. Séparés volontairement : les présenter
 * comme des réalisations complètes serait faux, les cacher serait dommage.
 *
 * Seoul Mirage est la seule preuve d'acquisition payante du portefeuille.
 * Aucun chiffre de performance n'est affiché parce qu'aucun n'est vérifié :
 * on nomme le travail fait, pas un résultat invérifiable.
 */
export const CONTRIBUTIONS: Projet[] = [
  {
    nom: 'Skooleo',
    url: 'https://skooleo.fr/',
    secteur: 'CFA, edtech',
    fait: "Quatre ans en growth operations : structuration du CRM, automatisation des relances et de la répartition des dossiers, tableaux de bord. Contribution au site.",
    nature: 'Site vitrine',
  },
  {
    nom: 'Seoul Mirage',
    url: 'https://seoulmirage.com/',
    secteur: 'E-commerce cosmétique',
    fait: "Gestion des campagnes publicitaires TikTok Ads et Google Ads de la boutique.",
    nature: 'Boutique en ligne',
  },
]

/** Barre de logos. Ordre volontaire : les sites livrés d'abord. */
export const TOUS_LES_PROJETS = [...REALISATIONS, ...CONTRIBUTIONS]
