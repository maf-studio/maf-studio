import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import App from './App'
import './index.css'

/**
 * La grammaire de mouvement est posée UNE SEULE FOIS, ici.
 *
 * `LazyMotion` + `domAnimation` avec les composants <m.*> : environ 6 ko de
 * coeur au lieu de 34. À faire avant que dix sections n'importent la
 * bibliothèque entière, pas après.
 *
 * `reducedMotion="user"` couvre les animations déclaratives. Les abonnements
 * impératifs — la course du soleil, la parallaxe — ne sont PAS couverts par
 * la media query : ils testent `useReducedMotion()` et sautent entièrement
 * l'abonnement, sinon le coût CPU reste en place pour un rendu immobile.
 *
 * Une seule courbe d'entrée, trois durées : 140 ms pour un micro-état,
 * 300 ms pour un changement d'état, 800 ms pour une entrée.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user" transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <App />
        </MotionConfig>
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>,
)
