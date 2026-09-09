import type { ReactNode } from 'react'

/**
 * Un objet DEBOUT, donc un objet qui projette.
 *
 * Le contenu est rendu deux fois : une fois en clair pour l'oeil et le
 * lecteur d'écran, une fois en `aria-hidden` derrière lui, cisaillé, pour
 * l'ombre. C'est ce doublon qui permet la loi du site — le texte n'anime
 * jamais ni son opacité ni sa position, seule son ombre bouge. Le LCP est
 * acquis à la première frame et il n'y a aucun décalage de mise en page.
 *
 * L'allongement de l'ombre au défilement est entièrement en CSS
 * (voir `.porte > .ombre` dans index.css). Aucun JavaScript ici.
 *
 * À n'utiliser que sur la classe fermée des objets debout : titres, plaques,
 * captures, boutons pleins. Tout le reste est couché sur le plan et ne
 * projette rien. Maximum deux porteurs par écran.
 */
export default function Porte({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`porte ${className}`}>
      <div className="ombre" aria-hidden="true">
        {children}
      </div>
      {children}
    </div>
  )
}
