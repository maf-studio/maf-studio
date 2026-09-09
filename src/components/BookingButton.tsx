import type { ReactNode } from 'react'
import { CAL_LINK } from '@/site'

/**
 * Bouton de prise de rendez-vous Cal.com, chargé AU PREMIER CLIC.
 *
 * L'embed vivait dans <head> et se chargeait pour tout le monde, y compris
 * les visiteurs qui ne réservent jamais. Deux gains à l'avoir sorti de là :
 * le chemin critique s'allège, et surtout l'adresse IP du visiteur n'est plus
 * transmise à un tiers sans la moindre interaction de sa part. Ce qui était
 * un aveu à écrire dans la politique de confidentialité devient un argument.
 */

let chargement: Promise<void> | null = null

function chargerCal(): Promise<void> {
  if (chargement) return chargement
  chargement = new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://app.cal.com/embed/embed.js'
    s.async = true
    s.onload = () => {
      const w = window as unknown as { Cal?: (...a: unknown[]) => void }
      w.Cal?.('init', { origin: 'https://app.cal.com' })
      w.Cal?.('ui', { theme: 'light', styles: { branding: { brandColor: '#141310' } } })
      resolve()
    }
    s.onerror = () => reject(new Error('cal'))
    document.head.appendChild(s)
  })
  return chargement
}

export default function BookingButton({
  children,
  className = '',
  link = CAL_LINK,
}: {
  children: ReactNode
  className?: string
  link?: string
}) {
  async function ouvrir() {
    try {
      await chargerCal()
      const w = window as unknown as { Cal?: (...a: unknown[]) => void }
      w.Cal?.('modal', { calLink: link })
    } catch {
      // Le script est bloqué (extension, réseau) : on n'enferme personne
      // dans un bouton mort.
      window.open(`https://cal.com/${link}`, '_blank', 'noopener')
    }
  }

  return (
    <button type="button" className={className} onClick={ouvrir}>
      {children}
    </button>
  )
}
