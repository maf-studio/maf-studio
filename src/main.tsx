import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

/**
 * Aucune bibliothèque d'animation.
 *
 * Tout le mouvement du site est en CSS, piloté par la position de défilement
 * (`animation-timeline: view()`). Il tourne hors du fil principal, ne coûte
 * pas un kilo-octet de JavaScript, et se dégrade tout seul : un navigateur
 * qui ne connaît pas la propriété affiche la page complète et immobile.
 *
 * framer-motion a été retiré : il pesait plus lourd que tout le reste du
 * code applicatif réuni, pour des effets que le navigateur sait faire seul.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
