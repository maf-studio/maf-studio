/**
 * LES ARTICLES.
 *
 * Structure prête, volontairement vide : publier de faux articles pour
 * « remplir » le blog est le meilleur moyen de perdre la confiance que tout
 * le reste du site cherche à construire. On écrira les vrais.
 *
 * Chaque article vise une intention de recherche précise. C'est la raison
 * d'être du blog : la page d'accueil ne peut se positionner que sur un seul
 * groupe de requêtes, une page par sujet en couvre autant qu'on en écrit.
 *
 * Le champ `resume` sert à la fois de chapô sur la page et de meta
 * description : une seule source, donc pas de divergence possible entre ce
 * que lit un visiteur et ce que lit Google.
 */

export interface Article {
  /** Segment d'URL. Minuscules, tirets, sans accent : il ne changera plus. */
  slug: string
  titre: string
  /** Chapô ET meta description. 150 à 160 caractères. */
  resume: string
  /** Date de publication au format AAAA-MM-JJ. */
  date: string
  /** Temps de lecture en minutes, arrondi. */
  minutes: number
  /** La requête que cet article vise. Sert à éviter d'en écrire deux sur le même sujet. */
  intention: string
  /** Corps de l'article, en blocs. */
  corps: Bloc[]
}

export type Bloc =
  | { type: 'p'; texte: string }
  | { type: 'h2'; texte: string }
  | { type: 'liste'; items: string[] }

export const ARTICLES: Article[] = []

export const trouverArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug)
