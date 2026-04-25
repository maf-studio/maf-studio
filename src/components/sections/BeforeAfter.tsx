import { motion } from 'framer-motion'

const rows = [
  {
    topic: 'Suivi des leads',
    before: 'Post-it, Excel, appels oubliés',
    after: 'CRM automatisé, relances programmées, 0 lead perdu',
  },
  {
    topic: 'Budget pub',
    before: 'Dépensé sans savoir le ROI',
    after: 'Chaque euro tracké, ROAS optimisé chaque semaine',
  },
  {
    topic: 'Tâches répétitives',
    before: '3h/jour à copier-coller entre outils',
    after: 'Processus automatisés — vous vous concentrez sur l\'essentiel',
  },
  {
    topic: 'Site web',
    before: 'Un site qui existe mais ne convertit pas',
    after: 'Une machine à prospects qui tourne 24/7',
  },
  {
    topic: 'Rapports & données',
    before: 'Aucune visibilité sur ce qui marche',
    after: 'Dashboard en temps réel, décisions basées sur les chiffres',
  },
  {
    topic: 'Charge mentale',
    before: 'Tout repose sur vous, rien n\'est délégué',
    after: 'Vous pilotez la stratégie — MAF Studio gère l\'opérationnel',
  },
]

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <div className="section-line mb-5" />
          <h2
            className="font-display font-black italic text-[#0D0B18] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            LA DIFFÉRENCE EST{' '}
            <span className="text-grad-magenta">VISIBLE — ET MESURABLE.</span>
          </h2>
          <p className="mt-4 text-[#5C5875] dark:text-[#888899] text-base md:text-lg max-w-lg">
            Avant / après MAF Studio — sans détour, que des résultats concrets.
          </p>
        </motion.div>

        {/* Header row */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-4 px-2">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5875] dark:text-[#444456]">Situation</div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FF4444]">
            <span className="w-3 h-3 rounded-full bg-[#FF4444]/20 border border-[#FF4444]/40 flex-shrink-0" />
            Sans MAF Studio
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            <span className="w-3 h-3 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex-shrink-0" />
            Avec MAF Studio
          </div>
        </div>

        <div className="space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={row.topic}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group grid grid-cols-[1fr_1fr_1fr] gap-3 p-4 rounded-xl bg-white dark:bg-[#12121A] border border-[#E2DCFF] dark:border-[#1E1E2E] hover:border-[#7C3AED]/25 transition-colors duration-300"
            >
              {/* Topic */}
              <div className="flex items-center">
                <span className="text-sm font-semibold text-[#4B3F9E] dark:text-[#D0D0FF]">{row.topic}</span>
              </div>

              {/* Before */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FF4444] flex-shrink-0 text-sm">✗</span>
                <span className="text-sm text-[#5C5875] dark:text-[#666677] leading-snug">{row.before}</span>
              </div>

              {/* After */}
              <div className="flex items-start gap-2">
                <span
                  className="mt-0.5 flex-shrink-0 text-sm font-bold"
                  style={{ color: '#7C3AED' }}
                >✓</span>
                <span className="text-sm text-[#4B3F9E] dark:text-[#B0B0D0] leading-snug group-hover:text-[#3A2F8A] dark:group-hover:text-[#D0D0FF] transition-colors">{row.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(255,45,122,0.08) 100%)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <p
            className="font-display font-black italic text-[#0D0B18] dark:text-white"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Ce n'est pas de la magie.{' '}
            <span className="text-grad-main">C'est une méthode éprouvée.</span>
          </p>
          <p className="text-[#5C5875] dark:text-[#888899] text-sm mt-2">
            Et elle peut s'appliquer à votre activité en moins de 48h.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
