import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BookingButton from '@/components/BookingButton'

/**
 * En-tête 72 px, sur le mur, sur toutes les pages.
 *
 * Elle ne change pas de sol au défilement : une barre qui s'éclaircit en
 * cours de route demande soit du JavaScript, soit une astuce de timeline qui
 * laisse un état illisible là où elle n'est pas supportée. Une barre sombre
 * permanente est lisible partout, et elle prolonge le mur du premier écran.
 *
 * Le sommaire de douze traits a disparu avec la page unique : il n'avait de
 * sens que sur une page qui contenait tout. Il reste sa meilleure idée, la
 * position rendue lisible, sous forme d'une barre de progression fine —
 * pilotée par une timeline de scroll CSS, donc sans une ligne de JavaScript
 * et sans écouteur d'événement.
 */

const LIENS = [
  { to: '/realisations', label: 'Réalisations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/blog', label: 'Journal' },
]

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false)
  const boutonRef = useRef<HTMLButtonElement>(null)

  // Échap ferme, et le focus revient sur le bouton qui a ouvert le menu.
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

  const lien = ({ isActive }: { isActive: boolean }) =>
    `nav-lien py-3 transition-colors ${isActive ? 'sur' : 'sourd hover:sur'}`

  return (
    <header data-sol="mur" className="fixed top-0 inset-x-0 z-50 h-[72px] bg-mur border-b bord">
      <nav className="h-full max-w-[1400px] mx-auto px-6 md:px-[6vw] flex items-center justify-between gap-6"
           aria-label="Navigation principale">
        <Link to="/" viewTransition
              className="logotype sur shrink-0">
          MAF STUDIO
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {LIENS.map((l) => (
            <NavLink key={l.to} to={l.to} viewTransition className={lien}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <BookingButton className="action hidden sm:inline-flex px-5 py-3 shrink-0 whitespace-nowrap bg-papier"
          style={{ color: 'var(--color-mur)' }}>
          Réserver 20 minutes
        </BookingButton>

        <button
          ref={boutonRef}
          type="button"
          onClick={() => setOuvert(!ouvert)}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-[5px] sur"
        >
          <span className={`w-6 h-px transition-transform ${ouvert ? 'translate-y-[3px] rotate-[24deg]' : ''}`} style={{ background: 'currentColor' }} />
          <span className={`w-6 h-px transition-transform ${ouvert ? '-translate-y-[3px] -rotate-[24deg]' : ''}`} style={{ background: 'currentColor' }} />
        </button>
      </nav>

      {/* La position dans la page, en une barre. Timeline de scroll CSS :
          zéro écouteur, zéro recalcul, et elle disparaît proprement là où la
          propriété n'existe pas. */}
      <div aria-hidden="true" className="progression" />

      <div id="menu-mobile" hidden={!ouvert}
           className="md:hidden bg-papier border-b bord px-6 pb-8 pt-2" data-sol="papier">
        <Link to="/" viewTransition onClick={() => setOuvert(false)}
              className="block py-3.5 border-b bord sur nav-lien">Accueil</Link>
        {LIENS.map((l) => (
          <NavLink key={l.to} to={l.to} viewTransition onClick={() => setOuvert(false)}
                   className="block py-3.5 border-b bord sur nav-lien">
            {l.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
