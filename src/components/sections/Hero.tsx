import { motion, useReducedMotion } from 'framer-motion'
import BookingButton from '@/components/BookingButton'

/**
 * Hero — composition asymétrique alignée sur un rail à gauche.
 * Une seule séquence animée sur toute la page : les fils se tendent,
 * puis le titre se pose. Rien d'autre ne bouge au scroll.
 */
export default function Hero() {
  const reduce = useReducedMotion()
  const draw = (delay: number) =>
    reduce
      ? { pathLength: 1, opacity: 1 }
      : { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const }, opacity: { duration: 0.2, delay } } }

  const line = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: '110%' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section className="relative min-h-[100svh] flex items-center border-b border-rule overflow-hidden">
      {/* Les fils. Tendus depuis le coin supérieur droit, ils traversent
          le titre — c'est le motif de marque, pas un fond décoratif. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[
          { d: 'M1520 -60 L120 900', c: 'var(--color-violet)', w: 1, o: 0.55, t: 0.15 },
          { d: 'M1620 -60 L220 900', c: 'var(--color-violet)', w: 1, o: 0.28, t: 0.25 },
          { d: 'M1720 -60 L320 900', c: 'var(--color-magenta)', w: 1, o: 0.4, t: 0.35 },
          { d: 'M1840 -60 L440 900', c: 'var(--color-violet)', w: 1, o: 0.16, t: 0.45 },
        ].map((s, i) => (
          <motion.path
            key={i}
            d={s.d}
            stroke={s.c}
            strokeWidth={s.w}
            strokeOpacity={s.o}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={draw(s.t)}
          />
        ))}
      </svg>

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 md:px-10 pt-32 pb-20">
        <div>
          <h1 className="display text-bone">
            {['La croissance,', 'ça se pilote.'].map((t, i) => (
              <span key={t} className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ fontSize: 'clamp(2.7rem, 9.4vw, 8.5rem)' }}
                  {...line(0.45 + i * 0.12)}
                >
                  {t}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 grid md:grid-cols-[minmax(0,32rem)_auto] gap-10 md:gap-16 md:items-end"
        >
          <p className="text-lg md:text-xl text-dim leading-relaxed">
            Je construis et j'opère les systèmes d'acquisition des TPE et PME
            françaises. CRM, publicité, automatisation, site web — montés pour
            tourner sans vous une fois en place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <BookingButton className="cut-sm bg-magenta px-7 py-4 text-[0.95rem] font-bold text-white hover:bg-violet transition-colors duration-200">
              Réserver 20 minutes
            </BookingButton>
            <a
              href="#services"
              className="cut-sm border border-rule px-7 py-4 text-[0.95rem] font-semibold text-bone hover:border-violet transition-colors duration-200 text-center"
            >
              Voir les tarifs
            </a>
          </div>
        </motion.div>

        {/* Ligne de crédibilité — uniquement des faits vérifiables.
            Aucun chiffre de résultat tant qu'il n'y a pas de cas réel. */}
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-16 pt-6 border-t border-rule text-sm text-dim"
        >
          4 ans en growth operations chez Skooleo · Zoho, Make, n8n, Meta, TikTok ·
          Travail à distance, partout en France
        </motion.p>
      </div>
    </section>
  )
}
