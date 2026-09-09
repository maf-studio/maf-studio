import { useEffect, useRef } from 'react'
import { useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { ecrireOmbres, longueurMax } from '@/lib/ombres'

/**
 * LA COURSE DU SOLEIL.
 *
 * Un SEUL abonnement au scroll dans tout le site. Il écrit directement le
 * `transform` des calques inscrits au registre (voir src/lib/ombres.ts).
 *
 * PIÈGE À CONNAÎTRE. `midi` est la position mesurée de la section #tarifs.
 * Si les sections sont réordonnées un jour, le zénith atterrit silencieusement
 * sur la mauvaise section : aucune erreur, aucun test rouge, juste une page
 * dont le point de bascule ne veut plus rien dire. Si vous déplacez #tarifs,
 * relisez ce fichier et src/content/sections.ts.
 */
export default function Soleil() {
  const reduce = useReducedMotion()
  const midi = useRef(0.5)
  const lmax = useRef(2.15)

  const { scrollYProgress } = useScroll()
  const lisse = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  // Mesure du zénith. Recalculée au resize ET après le chargement des fontes :
  // avant `fonts.ready`, la hauteur du document est celle du texte en police
  // de repli, donc la position de #tarifs est fausse.
  useEffect(() => {
    if (reduce) return

    const mesurer = () => {
      lmax.current = longueurMax()
      const cible = document.getElementById('tarifs')
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (!cible || h <= 0) return
      const centre = cible.getBoundingClientRect().top + window.scrollY + cible.offsetHeight / 2
      midi.current = Math.min(0.92, Math.max(0.08, (centre - window.innerHeight / 2) / h))
    }

    mesurer()
    document.fonts?.ready.then(mesurer)

    let tid = 0
    const auResize = () => {
      window.clearTimeout(tid)
      tid = window.setTimeout(mesurer, 150)
    }
    window.addEventListener('resize', auResize, { passive: true })
    return () => {
      window.clearTimeout(tid)
      window.removeEventListener('resize', auResize)
    }
  }, [reduce])

  // Sous prefers-reduced-motion on ne s'abonne pas du tout. Mettre les
  // amplitudes à zéro laisserait tout le coût CPU en place pour rien : le
  // repli est déjà peint en CSS, soleil figé bas et immobile.
  useMotionValueEvent(lisse, 'change', (v) => {
    if (reduce) return
    const m = midi.current
    const t = (v - m) / (v >= m ? 1 - m || 1 : m || 1)
    ecrireOmbres(t, lmax.current)
  })

  return null
}
