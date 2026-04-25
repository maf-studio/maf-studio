import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sophie M.',
    role: 'Fondatrice, agence immobilière',
    text: "En 3 semaines, MAF Studio a automatisé mon suivi de leads et mis en place un CRM qui tourne tout seul. Je n'avais jamais eu autant de visibilité sur mon pipe commercial.",
    stars: 5,
  },
  {
    name: 'Karim B.',
    role: 'CEO, e-commerce mode',
    text: "Mon ROAS a augmenté de 40% en un mois. Chaque euro publicitaire est maintenant tracké et optimisé. C'est exactement ce dont j'avais besoin pour scaler sans brûler mon budget.",
    stars: 5,
  },
  {
    name: 'Laura D.',
    role: 'Directrice, cabinet de conseil',
    text: "Les tâches qui me prenaient 3h par jour sont maintenant automatisées. J'ai récupéré mon temps et je me concentre enfin sur ce qui compte vraiment pour mes clients.",
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
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
            ILS EN{' '}
            <span className="text-grad-main">TÉMOIGNENT.</span>
          </h2>
          <p className="mt-4 text-[#5C5875] dark:text-[#888899] text-base md:text-lg max-w-lg">
            Pas de discours — uniquement ce que nos clients ont observé après avoir travaillé avec MAF Studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-7 rounded-2xl bg-white dark:bg-[#12121A] border border-[#E2DCFF] dark:border-[#1E1E2E] hover:border-[#7C3AED]/30 transition-colors duration-300"
            >
              <Stars count={t.stars} />
              <p className="flex-1 text-[#3D3560] dark:text-[#C0C0D8] text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-[#E2DCFF] dark:border-[#1E1E2E] pt-5">
                <p className="text-sm font-semibold text-[#0D0B18] dark:text-white">{t.name}</p>
                <p className="text-xs text-[#5C5875] dark:text-[#888899] mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
