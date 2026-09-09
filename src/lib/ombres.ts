import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * LE REGISTRE DES OMBRES.
 *
 * Ce fichier ne contient aucun composant, uniquement le registre et le hook
 * d'inscription. La boucle de scroll qui l'alimente vit dans
 * src/components/Soleil.tsx.
 *
 * Deux choses qu'il ne faut surtout pas refaire autrement :
 *
 *  1. On n'écrit AUCUNE variable CSS globale. Écrire sur `:root` à chaque
 *     frame invalide le style de tout le document, sur toute la page. Ici la
 *     boucle ne touche que les quelques éléments réellement inscrits.
 *
 *  2. `contain: paint` est interdit sur les porteurs (voir index.css) : il
 *     découperait exactement les ombres qui doivent déborder. C'est
 *     `contain: layout style`.
 */

const registre = new Set<HTMLElement>()

/** 2,15 en desktop. Sur 390 px de large, une ombre de 2,15x sort entièrement
 *  de l'écran et ne se lit plus : on descend à 1,3. */
export const longueurMax = () => (window.innerWidth < 768 ? 1.3 : 2.15)

/** Écrit la même transformation sur tous les calques inscrits. */
export function ecrireOmbres(t: number, lmax: number) {
  const L = (lmax * Math.abs(t)).toFixed(3)
  const A = (-38 * t).toFixed(2)
  const transform = `skewX(${A}deg) scaleY(${-Number(L)})`
  for (const el of registre) el.style.transform = transform
}

/**
 * Inscrit un calque d'ombre auprès de la course du soleil.
 *
 * Le calque n'est inscrit que pendant qu'il est à l'écran, et `will-change`
 * est retiré à la sortie : le laisser en permanence force la composition de
 * couches qui ne bougent pas, et coûte de la mémoire graphique pour rien.
 */
export function useOmbre<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.willChange = 'transform'
          registre.add(el)
        } else {
          registre.delete(el)
          el.style.willChange = ''
        }
      },
      { rootMargin: '25% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      registre.delete(el)
    }
  }, [reduce])

  return ref
}
