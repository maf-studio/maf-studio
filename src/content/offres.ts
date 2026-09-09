/**
 * SOURCE UNIQUE DES TARIFS.
 *
 * Ce fichier est consommé par la grille, par le hero, par la FAQ et par les
 * données structurées de JsonLd.tsx. Il n'y a pas d'autre endroit où un prix
 * est écrit.
 *
 * L'ancienne règle du dépôt — « garder trois endroits synchronisés » — est
 * exactement ce qui a produit la dérive constatée : le code affichait
 * 500 / 1 090 / 300 pendant que la documentation annonçait 690 / 1 490 / 390.
 * Sur une direction artistique où le glyphe « 5 » porte la plus longue ombre
 * de la page, une divergence de chiffre devient une faute visible.
 *
 * ------------------------------------------------------------------
 * COMMENT LA GRILLE EST CONSTRUITE
 *
 * Deux contraintes non négociables, et elles seules :
 *   1. le TJM de référence de 500 EUR HT, donc le nombre de jours réels
 *      derrière chaque forfait ;
 *   2. le plafond de franchise en base de TVA de 37 500 EUR HT, donc le
 *      nombre de projets possibles dans une année.
 *
 * 37 500 / 500 = 75 jours facturables. À 500 EUR le site, il faudrait
 * 75 ventes par an. À 3 400 EUR de panier moyen, il en faut 8. Le facteur
 * limitant n'est pas le temps disponible, c'est le prix unitaire.
 *
 * Tout prix dont le rapport prix / jours réels descend sous 500 EUR est un
 * mauvais prix, quel que soit son effet commercial. La colonne `jours` existe
 * pour que ce contrôle reste faisable à la lecture.
 *
 * Aucun « à partir de » nulle part : c'est le signal du devis qui gonfle.
 * ------------------------------------------------------------------
 */

/**
 * Formate un montant en euros.
 *
 * `toLocaleString('fr-FR')` produit une espace fine insécable (U+202F) que
 * Mona Sans ne dessine pas : « 1 490 » s'affiche « 1490 ». On la remplace par
 * une espace insécable ordinaire (U+00A0), présente dans toutes les fontes.
 */
export const euros = (n: number) =>
  n.toLocaleString('fr-FR').replace(/\u202F/g, '\u00A0')

export interface Forfait {
  id: string
  nom: string
  /** Prix ferme en euros HT. Jamais un plancher. */
  prix: number
  /** Délai en jours ouvrés, tel qu'écrit sur le devis. */
  delai: number
  cible: string
  inclus: string[]
  /** Affiché à égalité typographique avec les inclusions, jamais en plus petit. */
  exclus: string[]
  /** Jours de production réels. Sert au contrôle de marge, jamais affiché. */
  jours: number
  /** Un avis assumé, pas un chiffre de vente invérifiable. */
  recommande?: boolean
}

export const FORFAITS: Forfait[] = [
  {
    id: 'essentiel',
    nom: 'Essentiel',
    prix: 500,
    delai: 5,
    cible: "Artisan, indépendant, association, lancement d'activité. Vous avez besoin d'exister en ligne et d'être appelé, sans y passer un budget.",
    inclus: [
      'Une page unique, 6 blocs, construite pour une seule action',
      'Design assemblé depuis le système de composants MAF Studio',
      'Version mobile traitée comme un écran à part entière',
      "Formulaire, bouton d'appel direct, lien WhatsApp, plan d'accès, horaires",
      'Référencement technique de base : titres, balises, sitemap, vitesse',
      "Mesure d'audience sans cookie, donc aucun bandeau de consentement à subir",
      'Mise en ligne, remise du code source et de 100 % des accès',
      '1 tour de corrections',
      'Garantie de conformité sans limite de durée',
    ],
    exclus: [
      'Rédaction des textes : vous les fournissez, ou 490 € pour que je les écrive',
      'Pages supplémentaires (290 € l’unité)',
      'Maquette sur-mesure (690 €)',
      'Nom de domaine et hébergement, à ouvrir à votre nom (environ 75 € la première année)',
      'Blog, boutique, logo, photographies, publicité',
    ],
    jours: 1,
  },
  {
    id: 'vitrine',
    nom: 'Vitrine',
    prix: 1490,
    delai: 5,
    cible: "TPE établie qui veut une page qui travaille vraiment : écrite pour convaincre, trouvable sur Google, et dont vous gardez la main.",
    inclus: [
      'Tout Essentiel, plus :',
      "Tous les textes rédigés à partir d'un entretien de cadrage de 45 minutes",
      'Référencement technique complet : données structurées, balises sociales, robots',
      'Mentions légales et politique de confidentialité rédigées',
      'Nom de domaine, hébergement et certificat à votre nom, première année incluse',
      'Une heure de formation en visio, enregistrée, plus un mémo écrit',
      '2 tours de corrections',
    ],
    exclus: ['Pages supplémentaires (290 € l’unité)', 'Maquette sur-mesure (690 €)', 'Blog', 'Boutique', 'Publicité'],
    jours: 3,
    recommande: true,
  },
  {
    id: 'complet',
    nom: 'Complet',
    prix: 2990,
    delai: 15,
    cible: "TPE et PME avec plusieurs prestations ou plusieurs zones, besoin d'exister sur des recherches précises. C'est le forfait qui correspond à la majorité des demandes réelles.",
    inclus: [
      'Tout Vitrine, plus :',
      '6 pages entièrement rédigées',
      "Atelier de cadrage d'une heure trente",
      'Maquette sur-mesure validée par vous avant la moindre ligne de code',
      'Pack SEO local : fiche Google Business créée et optimisée, page de zone, Search Console, suivi du premier mois',
      'Blog prêt à publier, gabarit et article de démonstration rédigé',
      'Prise de rendez-vous en ligne',
      '3 tours de corrections',
      'Sortie après maquette',
    ],
    exclus: ['Boutique', 'Espace client', 'Multilingue (690 €)', 'Fonctionnalité sur mesure', 'Publicité'],
    jours: 6,
  },
  {
    id: 'boutique',
    nom: 'Boutique',
    prix: 4900,
    delai: 25,
    cible: 'Commerçant, producteur, marque naissante, catalogue court et photos existantes. Jusqu’à 30 références.',
    inclus: [
      'Tout Complet, plus :',
      'Boutique jusqu’à 30 références importées depuis votre fichier',
      'Paiement carte, Apple Pay, Google Pay',
      'Transporteurs, frais de port par zone, TVA',
      'Fiches produits rédigées pour 15 références',
      'Pages légales e-commerce complètes : CGV, rétractation, retours, livraison',
      'Tunnel de commande, e-mails transactionnels, relance de panier',
      'Formation 2 heures',
      "30 jours d'assistance après la mise en ligne",
    ],
    exclus: [
      'ERP, marketplace, multi-entrepôt, tarifs par client',
      'Plus de 30 références (8 € par référence saisie au-delà)',
      "Abonnement de la plateforme, souscrit par vous et à votre nom",
    ],
    jours: 9,
  },
]

/**
 * Traité à part, en bandeau sous la grille : son périmètre se définit, il ne
 * se compare pas ligne à ligne avec les autres.
 */
export const SUR_MESURE: Forfait = {
  id: 'sur-mesure',
  nom: 'Sur-mesure',
  prix: 7500,
  delai: 30,
  cible:
    "Organisme de formation, école, cabinet, association, structure avec un parcours à construire. C'est le registre de black-academy.fr et d'avancia-formation.fr, déjà livrés et en ligne.",
  inclus: [
    '12 pages entièrement rédigées',
    'Une fonctionnalité sur mesure : simulateur, calculateur, tunnel de candidature, espace de dépôt',
    'Direction artistique dédiée, 2 pistes présentées, une retenue et déclinée',
    'Recette écrite point par point, remise avec le site',
    "60 jours d'assistance et un point d'accompagnement à 30 jours",
    '4 tours de corrections',
    "Une refonte complète entre dans ce forfait au même prix, précédée de l'audit à 490 € intégralement déduit",
  ],
  exclus: [
    'Au-delà de ce périmètre, le devis est chiffré en jours et détaillé ligne par ligne avant signature',
  ],
  jours: 12,
}

/** Récurrent. Proposé à la fin de la première année incluse, jamais à la signature. */
export interface Abonnement {
  id: string
  nom: string
  prix: number
  unite: string
  /** Le calcul écrit sous la carte : il doit être refaisable par le prospect. */
  calcul: string
  inclus: string[]
  limite?: string
}

export const ABONNEMENTS: Abonnement[] = [
  {
    id: 'socle',
    nom: 'Socle',
    prix: 49,
    unite: '€ HT / mois',
    calcul: '49 € pour 30 minutes, contre 120 € l’heure en intervention ponctuelle.',
    inclus: [
      'Hébergement, nom de domaine, certificat, sur vos comptes et à votre nom',
      'Sauvegardes quotidiennes, 30 jours d’historique',
      'Mises à jour techniques et de sécurité',
      'Surveillance de disponibilité',
      '30 minutes de modifications par mois, cumulables sur 3 mois',
      'Réponse sous 1 jour ouvré',
    ],
  },
  {
    id: 'croissance',
    nom: 'Croissance',
    prix: 290,
    unite: '€ HT / mois',
    calcul:
      '290 € pour 3 heures, soit 97 € l’heure contre 120 € en intervention ponctuelle. L’abonnement est moins cher que le travail à la demande.',
    inclus: [
      'Tout Socle, plus :',
      '3 heures par mois que vous affectez : pages, contenu, retouches, référencement, corrections',
      'Heures cumulables sur 3 mois',
      'Suivi du référencement, fiche Google Business entretenue',
      "Rapport mensuel d'une page",
      'Un point de 30 minutes par trimestre',
    ],
    limite: '12 places',
  },
  {
    id: 'pilotage',
    nom: 'Pilotage publicitaire',
    prix: 490,
    unite: '€ HT / mois',
    calcul:
      'Plancher de budget média : 800 € HT par mois et par plateforme. En dessous, la mission est refusée — aucune donnée d’optimisation exploitable n’est produite.',
    inclus: [
      'Réservé aux sites construits par MAF Studio',
      'Une plateforme au choix, compte publicitaire à votre nom, avec votre carte',
      'Structure de campagne, annonces, visuels',
      'Suivi des conversions posé et vérifié',
      'Optimisation hebdomadaire',
      "Rapport mensuel d'une page",
      'Au-delà de 3 300 € HT par mois de média : 15 % du budget',
      'Installation initiale : 690 € HT, une fois',
    ],
    limite: 'maximum 2 clients',
  },
]

export interface Option {
  nom: string
  prix: string
  /** Les 5 visibles portent l'ancrage ; le reste vit dans un <details> crawlable. */
  visible: boolean
  detail?: string
}

export const OPTIONS: Option[] = [
  { nom: 'Rédaction de vos textes', prix: '490 €', visible: true, detail: 'incluse à partir de Vitrine' },
  { nom: 'Page supplémentaire', prix: '290 €', visible: true },
  { nom: 'Article de blog rédigé et publié', prix: '240 €', visible: true, detail: '840 € les quatre' },
  { nom: "Audit écrit d'un site existant", prix: '490 €', visible: true, detail: 'déduit du forfait si commande sous 30 jours' },
  { nom: 'Fiche Google Business seule', prix: '290 €', visible: true },
  { nom: 'Carnet de 4 heures', prix: '440 €', visible: true, detail: '110 € l’heure, valable 12 mois' },

  { nom: 'Maquette sur-mesure', prix: '690 €', visible: false },
  { nom: 'Pack SEO local', prix: '790 €', visible: false },
  { nom: 'Tour de corrections supplémentaire', prix: '340 €', visible: false },
  { nom: 'Kit de marque (logo, palette, typo, favicon, sources)', prix: '990 €', visible: false },
  { nom: 'Migration d’un site existant avec redirections 301', prix: '490 €', visible: false },
  { nom: 'Deuxième langue', prix: '690 €', visible: false },
  { nom: 'Prise de rendez-vous en ligne', prix: '190 €', visible: false },
  { nom: 'Saisie de références produit au-delà de 30', prix: '8 €', visible: false, detail: 'l’unité' },
  { nom: 'Intervention ponctuelle', prix: '120 €', visible: false, detail: 'l’heure' },
  { nom: 'Heure de formation supplémentaire', prix: '95 €', visible: false },
  { nom: 'Installation publicitaire', prix: '690 €', visible: false },
]

/**
 * Dire ce qu'on ne fait pas est le signal de sérieux le moins cher du marché.
 */
export const NON_PROPOSE = [
  'Photographie',
  'Vidéo',
  'Community management',
  'Abonnement de contenu',
  'SEO au forfait mensuel avec objectif de position',
  'Application métier',
  'E-commerce complexe',
]

/**
 * L'ANCRAGE — le mécanisme de conversion central.
 *
 * Le seul dispositif de la page qui transforme un prix en démonstration
 * vérifiable par le prospect lui-même. Il exige que toutes les options citées
 * soient présentes sur la page avec leur prix, sinon le calcul n'est pas
 * refaisable et l'argument s'effondre.
 */
export const ANCRAGE = {
  lignes: [
    { libelle: 'Vitrine', montant: 1490 },
    { libelle: '5 pages supplémentaires à 290 €', montant: 1450 },
    { libelle: 'Maquette sur-mesure', montant: 690 },
    { libelle: 'Pack SEO local', montant: 790 },
    { libelle: 'Un tour de corrections', montant: 340 },
  ],
  total: 4760,
  prixReel: 2990,
}

export const GARANTIES = [
  {
    titre: 'Propriété totale, immédiate, écrite',
    texte:
      "Le nom de domaine, l'hébergement et tous les comptes tiers sont ouverts à votre nom, avec vos coordonnées, dès le premier jour. Le code source vous est remis en archive le jour de la mise en ligne, pas à la résiliation. Je n'ai aucun moyen technique de couper votre site, et c'est volontaire.",
  },
  {
    titre: 'Devis ferme',
    texte:
      "Le prix affiché est le prix facturé. Le devis liste ce qui est inclus et ce qui ne l'est pas. Toute demande hors périmètre est chiffrée et validée par écrit avant d'être commencée.",
  },
  {
    titre: 'Délai ferme avec pénalité, au choix',
    texte:
      "5, 15, 25 ou 30 jours ouvrés selon le forfait, avec une date écrite sur le devis. Si je dépasse de mon fait, vous choisissez à la signature : 5 % du forfait déduits par semaine entamée, plafonnés à 20 %, ou trois mois de Socle offerts. Le compteur démarre à réception de l'acompte et du dossier complet, et se suspend chaque fois que j'attends un retour de votre part.",
  },
  {
    titre: 'Garantie de conformité, sans limite de durée',
    texte:
      "Tout défaut imputable à la construction du site — lien mort, formulaire qui n'envoie plus, affichage cassé sur un appareil courant — est corrigé gratuitement, avec ou sans abonnement, tant que le site n'a pas été modifié par un tiers.",
  },
  {
    titre: 'Sortie après maquette',
    texte:
      "Sur Complet, Boutique et Sur-mesure : si la direction artistique ne vous convient pas après le tour de corrections inclus, vous arrêtez là. L'acompte de 40 % reste acquis, le solde n'est pas dû, les maquettes ne vous sont pas cédées. L'Essentiel et la Vitrine n'ont pas de phase de maquette séparée : ils reçoivent des tours de corrections en contrepartie.",
  },
  {
    titre: 'Aucun engagement, et reprise en main chiffrée',
    texte:
      "Les abonnements s'arrêtent par un simple e-mail, effet à la fin du mois en cours : sans préavis, sans lettre recommandée, sans pénalité. Sur simple demande et sans frais : transfert de l'hébergement et du domaine, remise du code et de tous les accès, export complet, sous 7 jours ouvrés — y compris si vous partez chez un concurrent, et à vie. Le site reste en ligne.",
  },
  {
    titre: 'Rien de propriétaire, un seul interlocuteur',
    texte:
      "Aucune brique maison, aucun tableau de bord que moi seul sais faire tourner. Hébergement standard, code standard, plateforme standard : n'importe quel développeur reprend le site en une journée. Et la personne qui répond au téléphone est celle qui écrit, dessine, développe et met en ligne.",
  },
]

/**
 * Écrit au même endroit et dans le même corps de texte que les garanties.
 * Personne ne peut tenir ces promesses, et celui qui les donne le sait.
 */
export const NON_GARANTI =
  "Aucun résultat de trafic, aucune position Google, aucun taux de conversion, aucun chiffre d'affaires."

export const PAIEMENT = {
  base: '40 % à la signature, 60 % à la livraison avant mise en ligne.',
  fractionne: 'Trois fois sans frais à partir de Complet (40 / 30 / 30), montants et dates exacts inscrits sur le devis.',
  essentiel:
    "L'Essentiel à 500 € se règle en une fois à la livraison : en dessous de ce montant, un échéancier coûte plus cher à gérer qu'il ne rend service.",
  remise:
    "Aucune remise, jamais. Si le budget ne passe pas, on descend d'un palier ou on retire des options : le prix du palier ne bouge pas.",
}

export const MENTION_TVA = 'Prix en euros hors taxes. TVA non applicable, article 293 B du CGI.'

/** Le forfait dont le prix est annoncé dans le hero. */
export const FORFAIT_ENTREE = FORFAITS[0]
