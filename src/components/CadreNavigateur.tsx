import type { ReactNode } from 'react'

/**
 * LE CADRE NAVIGATEUR — dessiné en CSS, jamais en image.
 *
 * Il remplace le gnomon comme signature du site, et il travaille quatre fois
 * plus dur pour zéro octet :
 *
 *  — il donne un bord à Black Academy, dont le fond ressort à 1,16:1 contre le
 *    mur et flotterait donc sans lui ;
 *  — il supprime l'effet « capture brute non finie » ;
 *  — il affiche la seule preuve dont le studio dispose, le nom de domaine, avec
 *    l'invitation implicite : ouvrez-le, il est en ligne ;
 *  — la pastille cisaillée à 24° y fait survivre l'unique angle du site.
 *
 * Pas de trois pastilles rouge-jaune-vert : imiter macOS est gratuit et se voit.
 * Le cadre est décoratif, le domaine figurant déjà dans le texte du lien.
 */
export default function CadreNavigateur({
  domaine,
  cle,
  children,
  compact = false,
  className = '',
}: {
  domaine: string
  cle?: string
  children: ReactNode
  compact?: boolean
  className?: string
}) {
  return (
    <div data-projet={cle} className={`cadre ${className}`}>
      <div className="cadre-barre" style={compact ? { height: 22, gap: 7, padding: '0 8px' } : undefined}>
        <span className="cadre-pastille" style={compact ? { width: 6, height: 6 } : undefined} aria-hidden="true" />
        <span
          className="mono truncate"
          style={{ color: 'var(--color-gris-nuit)', fontSize: compact ? '0.5625rem' : undefined }}
        >
          {domaine}
        </span>
        {!compact && (
          <span className="mono ml-auto" style={{ color: 'var(--color-gris-nuit)' }} aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
