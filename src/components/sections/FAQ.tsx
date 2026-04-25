import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "Je suis une petite structure — est-ce que MAF Studio est adapté à ma situation ?",
    a: "C'est précisément pour ce type de structure que MAF Studio a été conçu. Les grandes agences proposent des contrats conséquents avec plusieurs interlocuteurs. Nous travaillons avec des PME et TPE qui ont besoin de résultats tangibles, pas de livrables en diapositives. Vous n'avez pas besoin d'un budget important pour commencer.",
  },
  {
    q: "Combien de temps avant de voir des premiers résultats ?",
    a: "Cela dépend du service. Pour l'automatisation et le CRM, une différence est perceptible en 1 à 2 semaines. Pour les Social Ads, comptez 3 à 4 semaines d'optimisation des campagnes. Pour le web, la livraison intervient généralement en 10 à 15 jours. Un calendrier précis est défini dès le lancement.",
  },
  {
    q: "Vous travaillez avec plusieurs clients simultanément — quel niveau de suivi puis-je espérer ?",
    a: "Le nombre de clients actifs est volontairement limité pour garantir un suivi de qualité. Vous avez accès direct à votre interlocuteur — pas à un account manager ou à un junior. Un point hebdomadaire peut être mis en place si vous le souhaitez.",
  },
  {
    q: "Quelle est concrètement la première étape ?",
    a: "Un appel découverte gratuit de 30 minutes. Nous faisons le point sur votre situation, vos objectifs et vos outils actuels. À l'issue de cet échange, vous repartez avec au moins trois pistes d'action concrètes — que vous choisissiez de travailler avec nous ou non. Aucun engagement.",
  },
  {
    q: "Certaines missions sont-elles sous-traitées ?",
    a: "Growth Ops, Automatisation et Social Ads sont réalisés en direct. Pour le web, nous faisons appel à un designer partenaire de confiance selon les besoins du projet. Dans tous les cas, vous avez un interlocuteur unique. Aucune surprise.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <div className="section-line mx-auto mb-5" />
          <h2
            className="font-display font-black italic text-[#0D0B18] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            VOS QUESTIONS,{' '}
            <span className="text-grad-violet">NOS RÉPONSES.</span>
          </h2>
          <p className="mt-4 text-[#5C5875] dark:text-[#888899] text-base">
            Des réponses directes aux questions que nos prospects posent le plus souvent.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl overflow-hidden border border-[#E2DCFF] dark:border-[#1E1E2E] bg-white dark:bg-[#12121A] hover:border-[#7C3AED]/25 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#0D0B18] dark:text-[#D0D0FF] text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? 'linear-gradient(135deg, #7C3AED, #FF2D7A)' : 'rgba(124,58,237,0.08)',
                    color: open === i ? 'white' : '#5C5875',
                  }}
                >
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-[#7C3AED]/30 via-[#FF2D7A]/20 to-transparent mb-4" />
                      <p className="text-[#5C5875] dark:text-[#888899] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
