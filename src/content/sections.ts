/**
 * Les douze ancres de la page, en un seul endroit.
 *
 * Trois composants les référencent — l'en-tête, le sommaire-gnomon et le pied
 * de page — et ils ne se parlent pas. Une ancre renommée ailleurs qu'ici
 * rendrait un lien muet sans provoquer la moindre erreur de compilation.
 */
export const SECTIONS = [
  { id: 'haut', label: 'Accueil' },
  { id: 'preuves', label: 'Preuves' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'offre', label: 'Offre' },
  { id: 'livrables', label: 'Livrables' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'options', label: 'Options' },
  { id: 'garanties', label: 'Garanties' },
  { id: 'methode', label: 'Méthode' },
  { id: 'studio', label: 'Studio' },
  { id: 'faq', label: 'Questions' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Index du zénith de la course du soleil, dans le tableau ci-dessus.
 *
 * Si vous déplacez #tarifs, relisez aussi src/lib/ombres.ts : le point de
 * bascule y est mesuré sur cette section, et il se déplacerait en silence —
 * aucune erreur, aucun test rouge, juste une page dont le moment de
 * retournement ne veut plus rien dire.
 */
export const ZENITH = 5
