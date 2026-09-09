import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BarreMobile from '@/components/layout/BarreMobile'
import Home from '@/pages/Home'

// Tout ce qui n'est pas l'accueil sort du bundle initial. La page d'entrée
// n'a aucune raison de transporter le code des pages qu'on n'a pas ouvertes.
const PageTarifs = lazy(() => import('@/pages/PageTarifs'))
const PageRealisations = lazy(() => import('@/pages/PageRealisations'))
const Blog = lazy(() => import('@/pages/Blog'))
const ArticlePage = lazy(() => import('@/pages/Article'))
const MentionsLegales = lazy(() => import('@/pages/MentionsLegales'))
const Confidentialite = lazy(() => import('@/pages/Confidentialite'))
const Introuvable = lazy(() => import('@/pages/Introuvable'))

/** Les ancres et routes de l'ancien site. Des liens ont été envoyés par
 *  e-mail et depuis des devis : ils doivent continuer d'arriver quelque part
 *  de sensé plutôt que sur une page vide. */
const ANCIENNES: Record<string, string> = {
  '#services': '/tarifs',
  '#a-propos': '/#studio',
  '#avantages': '/tarifs',
  '#programme': '/tarifs',
}

function Navigation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const cible = ANCIENNES[hash]
    if (cible) {
      window.location.replace(cible)
      return
    }
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
      return
    }
    // Sans cela, on change de page et on reste au milieu de la précédente.
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* Premier élément focusable de la page. */}
      <a href="#contenu"
         className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-encre focus:sur focus:px-5 focus:py-3 mono">
        Aller au contenu
      </a>

      <div className="min-h-screen bg-papier">
        <Navbar />
        <Suspense fallback={<div className="min-h-[60svh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarifs" element={<PageTarifs />} />
            <Route path="/realisations" element={<PageRealisations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
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
