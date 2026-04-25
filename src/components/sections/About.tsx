import { motion } from 'framer-motion'

const values = [
  { icon: '◈', title: 'Innovation', desc: 'Toujours à la pointe des dernières technologies et tendances design.' },
  { icon: '✦', title: 'Excellence', desc: 'Chaque pixel compte. Nous ne livrons que le meilleur.' },
  { icon: '◯', title: 'Collaboration', desc: 'Votre vision, notre expertise. Un partenariat créatif authentique.' },
]

const stack = ['React', 'Next.js', 'TypeScript', 'Figma', 'Three.js', 'Framer', 'Tailwind', 'Node.js', 'GraphQL', 'Vercel']

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7C3AED]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-[#7C3AED] uppercase tracking-[0.2em] mb-4 block">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D0B18] dark:text-white mb-6">
              Nous sommes
              <br />
              <span className="text-gradient-violet">MAF Studio</span>
            </h2>
            <p className="text-[#5C5875] dark:text-[#A0A0C0] text-lg leading-relaxed mb-6">
              Un studio créatif fondé sur la conviction que le design digital doit être
              aussi beau que fonctionnel. Nous combinons esthétique futuriste et
              ingénierie de pointe pour créer des expériences qui marquent les esprits.
            </p>
            <p className="text-[#5C5875] dark:text-[#6B7280] leading-relaxed mb-10">
              De la conception à la livraison, chaque projet est traité avec la même
              rigueur et la même passion. Notre équipe pluridisciplinaire couvre le
              design, le développement et la stratégie digitale.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="text-center p-4 rounded-xl bg-white dark:bg-[#12121A] border border-[#E2DCFF] dark:border-[#2A2A3E]">
                  <div className="text-2xl text-[#7C3AED] mb-2">{v.icon}</div>
                  <div className="text-sm font-semibold text-[#0D0B18] dark:text-white mb-1">{v.title}</div>
                  <div className="text-xs text-[#5C5875] dark:text-[#6B7280] leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech stack + visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-[#E2DCFF] dark:border-[#2A2A3E] bg-white dark:bg-[#12121A] p-8 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    {['#FF6B6B', '#FFD93D', '#6BCB77'].map((c) => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-xs text-[#5C5875] dark:text-[#6B7280] font-mono">maf-studio.config.ts</span>
                </div>

                <div className="font-mono text-sm space-y-1">
                  <div><span className="text-[#00D4FF]">const</span> <span className="text-[#9D5CF5]">studio</span> <span className="text-[#0D0B18] dark:text-white">= {'{'}</span></div>
                  <div className="pl-4"><span className="text-[#5C5875] dark:text-[#A0A0C0]">name</span><span className="text-[#0D0B18] dark:text-white">: </span><span className="text-green-600 dark:text-green-400">'MAF Studio'</span><span className="text-[#0D0B18] dark:text-white">,</span></div>
                  <div className="pl-4"><span className="text-[#5C5875] dark:text-[#A0A0C0]">mission</span><span className="text-[#0D0B18] dark:text-white">: </span><span className="text-green-600 dark:text-green-400">'Créer le futur'</span><span className="text-[#0D0B18] dark:text-white">,</span></div>
                  <div className="pl-4"><span className="text-[#5C5875] dark:text-[#A0A0C0]">stack</span><span className="text-[#0D0B18] dark:text-white">: [</span></div>
                  {stack.slice(0, 4).map((s) => (
                    <div key={s} className="pl-8"><span className="text-yellow-600 dark:text-yellow-300">'{s}'</span><span className="text-[#0D0B18] dark:text-white">,</span></div>
                  ))}
                  <div className="pl-8"><span className="text-[#5C5875] dark:text-[#6B7280]">// + {stack.length - 4} more</span></div>
                  <div className="pl-4"><span className="text-[#0D0B18] dark:text-white">],</span></div>
                  <div className="pl-4"><span className="text-[#5C5875] dark:text-[#A0A0C0]">passion</span><span className="text-[#0D0B18] dark:text-white">: </span><span className="text-[#7C3AED]">Infinity</span></div>
                  <div><span className="text-[#0D0B18] dark:text-white">{'}'}</span></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#F0EEFF] dark:bg-[#12121A] text-[#5C5875] dark:text-[#A0A0C0] border border-[#E2DCFF] dark:border-[#2A2A3E] hover:border-[#7C3AED]/40 hover:text-[#0D0B18] dark:hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
