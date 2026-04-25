import React from 'react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; pageSettings?: Record<string, unknown> }) => void
    }
  }
}

const CALENDLY_URL = 'https://calendly.com/aminefadelpro'

// Couleurs en hex SANS le # (contrainte de l'API Calendly).
function getPageSettings() {
  const isDark = document.documentElement.classList.contains('dark')
  return isDark
    ? { backgroundColor: '0A0A0F', primaryColor: '7C3AED', textColor: 'F0F0FF', hideEventTypeDetails: false, hideLandingPageDetails: false }
    : { backgroundColor: 'F8F7FF', primaryColor: '7C3AED', textColor: '0D0B18', hideEventTypeDetails: false, hideLandingPageDetails: false }
}

/** Ouvre le popup Calendly depuis n'importe où dans le code. */
export function openCalendly(url = CALENDLY_URL) {
  window.Calendly?.initPopupWidget({ url, pageSettings: getPageSettings() })
}

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Surcharge l'URL par défaut (ex : lien direct vers un type d'événement spécifique). */
  url?: string
}

export default function CalendlyButton({ children, className = '', style, url }: Props) {
  return (
    <button type="button" onClick={() => openCalendly(url)} className={className} style={style}>
      {children}
    </button>
  )
}
