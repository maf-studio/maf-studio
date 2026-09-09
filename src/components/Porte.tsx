import type { ReactNode } from 'react'
import { useOmbre } from '@/lib/ombres'

/**
 * Un objet DEBOUT, donc un objet qui projette.
 *
 * Le contenu est rendu deux fois : une fois en clair pour l'oeil et le
 * lecteur d'écran, une fois en `aria-hidden` derrière lui, cisaillé, pour
 * l'ombre. C'est ce doublon qui permet la loi 3 — le texte n'anime jamais
 * ni son opacité ni sa position, seule son ombre bouge. LCP acquis à la
 * première frame, aucun CLS, et un échec de JS laisse un site complet.
 *
 * À n'utiliser que sur la classe fermée des objets debout : titres, plaques,
 * captures, boutons pleins, portrait, traits du sommaire. Tout le reste est
 * couché sur le plan et ne projette rien. Maximum deux porteurs par écran.
 */
export default function Porte({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ombre = useOmbre<HTMLDivElement>()

  return (
    <div className={`porte ${className}`}>
      <div ref={ombre} className="ombre" aria-hidden="true">
        {children}
      </div>
      {children}
    </div>
  )
}
