import { motion } from 'framer-motion'

const pains = [
  {
    num: '01',
    title: 'Vous investissez en publicité sans savoir ce qui génère vraiment des résultats.',
    desc: 'Budget dispersé, ciblage approximatif, attribution impossible. Résultat : vous continuez à dépenser sans pouvoir mesurer le retour.',
    color: '#FF2D7A',
  },
  {
    num: '02',
    title: 'Vos équipes perdent des heures sur des tâches qui pourraient être automatisées.',
    desc: 'Relances manuelles, transferts de données entre outils, tableaux interminables. Chaque heure mobilisée sur ces tâches est une heure perdue sur votre cœur de métier.',
    color: '#7C3AED',
  },
  {
    num: '03',
    title: 'Votre site web génère peu de contact — et encore moins de clients.',
    desc: "Design daté, message imprécis, absence d'appel à l'action. Votre site existe. Il ne travaille pas pour vous.",
    color: '#FF2D7A',
  },
]

export default function Problem() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle left glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,45,122,0.07) 0%, transparent 70%)' }}
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
            CES SITUATIONS VOUS SONT FAMILIÈRES ?
          </h2>
          <p className="mt-4 text-[#5C5875] dark:text-[#888899] text-base md:text-lg max-w-lg">
            La plupart des PME françaises vivent avec ces trois freins en permanence.{' '}
            <span className="text-[#4B3F9E] dark:text-[#D0D0FF]">Peu de consultants proposent des solutions concrètes — et encore moins les mettent en œuvre.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative p-7 rounded-2xl card-surface overflow-hidden hover:border-[#7C3AED]/30 transition-colors duration-300"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: pain.color }}
              />

              <div
                className="font-display font-black italic text-6xl leading-none mb-5 opacity-15"
                style={{ color: pain.color }}
              >
                {pain.num}
              </div>

              <h3 className="text-[#0D0B18] dark:text-[#F0F0FF] font-semibold text-lg leading-snug mb-3">
                {pain.title}
              </h3>
              <p className="text-[#5C5875] dark:text-[#888899] text-sm leading-relaxed">{pain.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${pain.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Connector arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-[#5C5875] dark:text-[#888899] text-sm mb-3">La solution existe. Et elle ne suppose pas de recruter.</p>
          <div className="flex items-center justify-center gap-2 text-[#7C3AED] font-semibold text-sm">
            <span>Voici comment MAF Studio peut intervenir</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >↓</motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
