import { useEffect, useState } from 'react'
import BookingButton from '@/components/BookingButton'

const LIENS = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Méthode', href: '#methode' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Questions', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1180px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="display text-bone text-xl tracking-tight">
          MAF <span className="text-magenta">Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LIENS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-dim hover:text-bone transition-colors">
              {l.label}
            </a>
          ))}
          <BookingButton className="cut-sm bg-magenta px-5 py-2.5 text-sm font-bold text-white hover:bg-violet transition-colors">
            Réserver 20 min
          </BookingButton>
        </div>

        <button
          type="button"
          onClick={() => setOuvert(!ouvert)}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-px bg-bone transition-transform ${ouvert ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`w-6 h-px bg-bone transition-transform ${ouvert ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {ouvert && (
        <div className="md:hidden bg-ink border-b border-rule px-6 pb-8 pt-2">
          {LIENS.map((l) => (
            <a
              key={l.href} href={l.href} onClick={() => setOuvert(false)}
              className="block py-3.5 text-bone border-b border-rule"
            >
              {l.label}
            </a>
          ))}
          <BookingButton className="cut-sm mt-6 w-full bg-magenta px-5 py-3.5 text-sm font-bold text-white">
            Réserver 20 min
          </BookingButton>
        </div>
      )}
    </header>
  )
}
