import React from 'react'

/**
 * Bouton de prise de rendez-vous Cal.com.
 * Le script d'embed est chargé dans index.html et intercepte tout
 * élément portant data-cal-link. Aucune dépendance npm nécessaire.
 */
const CAL_LINK = 'amine-fadel'

interface Props {
  children: React.ReactNode
  className?: string
  link?: string
}

export default function BookingButton({ children, className = '', link = CAL_LINK }: Props) {
  return (
    <button
      type="button"
      className={className}
      data-cal-link={link}
      data-cal-config='{"theme":"dark"}'
    >
      {children}
    </button>
  )
}
