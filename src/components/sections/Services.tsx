import { motion } from 'framer-motion'
import CalendlyButton from '@/components/CalendlyButton'

const services = [
  {
    icon: '⬡',
    badge: 'Growth & CRM',
    title: 'Growth Ops & CRM',
    headline: 'Un pipeline commercial structuré — qui travaille même en dehors des heures de bureau.',
    desc: "Mise en place et optimisation de votre CRM, séquences d'emails, relances automatisées. Chaque lead est suivi, chaque opportunité est exploitée.",
    points: [
      'Mise en place CRM (HubSpot, Notion, Airtable…)',
      'Séquences email & SMS automation',
      'Pipeline de vente structuré et tracké',
      'Reporting hebdomadaire et suivi des performances',
    ],
    color: '#7C3AED',
    gradient: 'from-[#7C3AED]/15 to-transparent',
  },
  {
    icon: '◈',
    badge: 'Publicité',
    title: 'Social Ads',
    headline: 'Des campagnes publicitaires qui génèrent de vrais clients, pas des statistiques.',
    desc: "Meta Ads, TikTok Ads, LinkedIn — nous créons, lançons et optimisons des campagnes dont chaque résultat est mesurable. Le ROAS, pas les impressions.",
    points: [
      'Stratégie créa + copywriting des annonces',
      'Ciblage précis et audiences Custom / Lookalike',
      'Tests A/B systématiques',
      'Reporting ROAS et optimisation continue',
    ],
    color: '#FF2D7A',
    gradient: 'from-[#FF2D7A]/15 to-transparent',
  },
  {
    icon: '⟡',
    badge: 'IA & No-Code',
    title: 'Automatisation IA',
    headline: "Vos processus internes tournent seuls — vous vous concentrez sur votre valeur ajoutée.",
    desc: "Avec Make et N8N, nous automatisons facturation, onboarding, notifications et transferts de données. Sans développeur, sans friction.",
    points: [
      'Audit de vos processus manuels',
      'Création de workflows Make / N8N',
      'Intégration IA (ChatGPT, Claude, Perplexity)',
      'Formation et documentation pour votre équipe',
    ],
    color: '#7C3AED',
    gradient: 'from-[#7C3AED]/15 to-transparent',
  },
  {
    icon: '◱',
    badge: 'Web',
    title: 'Web Webflow & WordPress',
    headline: 'Un site conçu pour convertir — pas pour exister.',
    desc: "Landing pages performantes, sites vitrine crédibles, refonte complète avec un message précis. Chaque projet est sur-mesure, livré en moins de deux semaines.",
    points: [
      'Design sur-mesure, mobile-first',
      'Copywriting persuasif intégré',
      'SEO technique & optimisation Core Web Vitals',
      'Déployé en moins de 2 semaines',
    ],
    color: '#FF2D7A',
    gradient: 'from-[#FF2D7A]/15 to-transparent',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 strings-bg overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.5))' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.1) 0%, transparent 65%)' }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="section-line mb-5" />
          <h2
            className="font-display font-black italic text-[#0D0B18] dark:text-white leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            CE QUE NOUS FAISONS{' '}
            <span className="text-grad-main">CONCRÈTEMENT</span>
          </h2>
          <p className="mt-4 text-[#5C5875] dark:text-[#888899] text-base md:text-lg max-w-lg">
            Pas de jargon. Pas de promesses sans substance. Voici exactement ce que vous obtenez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl card-surface overflow-hidden hover:border-[#7C3AED]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top gradient tint */}
              <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${s.gradient} opacity-60 pointer-events-none`} />

              {/* Corner icon */}
              <div className="absolute top-6 right-6 text-4xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: s.color }}
              >{s.icon}</div>

              <div className="relative p-7">
                {/* Badge */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
                  style={{
                    background: `${s.color}18`,
                    color: s.color,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  {s.badge}
                </span>

                <h3
                  className="font-display font-black italic text-[#0D0B18] dark:text-white mb-1 leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-semibold mb-4 text-sm"
                  style={{ color: s.color }}
                >
                  {s.headline}
                </p>
                <p className="text-[#5C5875] dark:text-[#888899] text-sm leading-relaxed mb-6">{s.desc}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[#5C5875] dark:text-[#A0A0C0]">
                      <span
                        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                        style={{ background: `${s.color}20`, color: s.color }}
                      >✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom hover line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <CalendlyButton className="relative group px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A]" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.08)' }}
            />
            <span className="relative">Réserver un appel de découverte →</span>
          </CalendlyButton>
        </motion.div>
      </div>
    </section>
  )
}
