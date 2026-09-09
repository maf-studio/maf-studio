import { useEffect, useRef, useState } from 'react'
import BookingButton from '@/components/BookingButton'
import { SECTIONS, ZENITH } from '@/content/sections'

/**
 * En-tête 72 px et SOMMAIRE-GNOMON.
 *
 * Les douze traits ne sont pas une barre de progression déguisée : chacun
 * porte l'ombre qu'il aurait à la position de scroll de sa propre section.
 * Le trait 06 — TARIFS — est donc parfaitement vertical en permanence, ce
 * qui rend le zénith lisible sans jamais nommer la métaphore. Le sommaire
 * est fait de la seule chose que ce site possède en propre, et il coûte
 * douze div.
 */

/** Le trait i porte l'ombre de sa propre section. Statique, donc gratuit. */
function traitStyle(i: number) {
  const t = (i - ZENITH) / 6
  return {
    transform: `skewX(${(-20 * t).toFixed(1)}deg)`,
    height: `${(10 + Math.abs(t) * 8).toFixed(1)}px`,
  }
}

const LIENS = ['realisations', 'offre', 'tarifs', 'garanties', 'faq'] as const

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false)
  const [actif, setActif] = useState(0)
  const boutonRef = useRef<HTMLButtonElement>(null)

  // Section courante, pour le libellé « 06 / 12 — TARIFS ».
  useEffect(() => {
    const io = new IntersectionObserver(
      (entrees) => {
        const vue = entrees.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!vue) return
        const i = SECTIONS.findIndex((s) => s.id === vue.target.id)
        if (i >= 0) setActif(i)
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: [0.15, 0.5] },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Échap ferme, et le focus revient sur le bouton qui a ouvert.
  useEffect(() => {
    if (!ouvert) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOuvert(false)
        boutonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [ouvert])

  const courante = SECTIONS[actif]

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-jour border-b border-filet">
      <nav className="h-full max-w-[1400px] mx-auto px-6 md:px-[6vw] flex items-center justify-between gap-6"
           aria-label="Navigation principale">
        <a href="#haut"
           className="text-encre text-lg tracking-tight shrink-0"
           style={{ fontVariationSettings: "'wdth' 118, 'wght' 800" }}>
          MAF STUDIO
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {LIENS.map((id) => (
            <a key={id} href={`#${id}`} className="mono text-gris hover:text-encre transition-colors py-3">
              {SECTIONS.find((s) => s.id === id)?.label}
            </a>
          ))}
        </div>

        {/* Le sommaire-gnomon */}
        <nav aria-label="Sommaire de la page" className="hidden xl:flex items-center gap-4 ml-auto lg:ml-0">
          <ol className="flex items-end gap-[5px]">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="flex items-end">
                <a href={`#${s.id}`}
                   aria-label={`${String(i + 1).padStart(2, '0')} — ${s.label}`}
                   aria-current={i === actif ? 'true' : undefined}
                   className="block w-px transition-colors"
                   style={{
                     ...traitStyle(i),
                     backgroundColor: i === actif ? 'var(--accent-large)' : 'var(--color-ombre)',
                   }} />
              </li>
            ))}
          </ol>
          <span className="mono text-gris whitespace-nowrap tabular-nums">
            {String(actif + 1).padStart(2, '0')} / 12 — {courante.label}
          </span>
        </nav>

        <BookingButton className="pilule hidden sm:inline-flex bg-encre text-jour mono px-5 py-3 shrink-0 whitespace-nowrap">
          Réserver 20 minutes
        </BookingButton>

        <button
          ref={boutonRef}
          type="button"
          onClick={() => setOuvert(!ouvert)}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`w-6 h-px bg-encre transition-transform ${ouvert ? 'translate-y-[3px] rotate-[24deg]' : ''}`} />
          <span className={`w-6 h-px bg-encre transition-transform ${ouvert ? '-translate-y-[3px] -rotate-[24deg]' : ''}`} />
        </button>
      </nav>

      <div id="menu-mobile" hidden={!ouvert}
           className="md:hidden bg-jour border-b border-filet px-6 pb-8 pt-2 max-h-[calc(100svh-72px)] overflow-y-auto">
        <ol>
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setOuvert(false)}
                 className="flex items-baseline gap-4 py-3.5 border-b border-filet text-encre">
                <span className="mono text-gris">{String(i + 1).padStart(2, '0')}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </header>
  )
}
