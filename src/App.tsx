import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BarreMobile from '@/components/layout/BarreMobile'
import Home from '@/pages/Home'

// Les pages légales sont des obligations, pas du trafic : elles n'ont rien à
// faire dans le bundle initial.
const MentionsLegales = lazy(() => import('@/pages/MentionsLegales'))
const Confidentialite = lazy(() => import('@/pages/Confidentialite'))
const Introuvable = lazy(() => import('@/pages/Introuvable'))

/** Les ancres de l'ancien site. Des liens ont été envoyés par e-mail : ils
 *  doivent continuer d'arriver quelque part de sensé. */
const ANCIENNES_ANCRES: Record<string, string> = {
  '#services': '#offre',
  '#a-propos': '#studio',
  '#avantages': '#garanties',
}

function Navigation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const cible = ANCIENNES_ANCRES[hash]
    if (cible) {
      document.querySelector(cible)?.scrollIntoView()
      return
    }
    // Sans cela, on change de route et on reste au milieu de la page.
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* Premier élément focusable de la page. */}
      <a href="#contenu"
         className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-encre focus:text-jour focus:px-5 focus:py-3 mono">
        Aller au contenu
      </a>

      <div className="min-h-screen bg-jour">
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            {/* Sans cette route, toute URL inconnue renvoyait un 200 avec un
                <main> vide : ni utile au visiteur, ni lisible par un moteur. */}
            <Route path="*" element={<Introuvable />} />
          </Routes>
        </Suspense>
        <Footer />
        <BarreMobile />
      </div>

      {/* Couche de grain, au-dessus de tout et cliquable à travers. */}
      <div className="grain" aria-hidden="true" />
    </BrowserRouter>
  )
}
