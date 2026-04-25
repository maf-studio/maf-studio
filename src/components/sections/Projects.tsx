import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'NeoBank Dashboard',
    category: 'Web App',
    desc: 'Interface bancaire nouvelle génération avec visualisation de données en temps réel et animations fluides.',
    tags: ['React', 'D3.js', 'Framer Motion'],
    color: '#7C3AED',
    size: 'large',
  },
  {
    title: 'Helios Brand',
    category: 'Branding',
    desc: 'Identité visuelle complète pour une startup tech : logo, charte, motion design.',
    tags: ['Figma', 'After Effects'],
    color: '#00D4FF',
    size: 'small',
  },
  {
    title: 'Quantum Store',
    category: 'E-commerce',
    desc: 'Boutique e-commerce premium avec expérience 3D produit et checkout optimisé.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    color: '#7C3AED',
    size: 'small',
  },
  {
    title: 'ArtSpace Platform',
    category: 'SaaS',
    desc: 'Plateforme de collaboration pour créatifs avec gestion de projets et partage de fichiers.',
    tags: ['React', 'TypeScript', 'WebSocket'],
    color: '#00D4FF',
    size: 'large',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00D4FF]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#0078A8] dark:text-[#00D4FF] uppercase tracking-[0.2em] mb-4 block">
            Notre travail
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D0B18] dark:text-white mb-4">
            Projets <span className="text-gradient-cyan">récents</span>
          </h2>
          <p className="text-[#5C5875] dark:text-[#A0A0C0] max-w-xl mx-auto text-lg">
            Chaque projet est une opportunité de repousser les limites du design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-[#E2DCFF] dark:border-[#2A2A3E] bg-white dark:bg-[#12121A] cursor-pointer ${
                project.size === 'large' ? 'md:row-span-1' : ''
              }`}
            >
              {/* Mock preview area */}
              <div
                className="relative h-56 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-32 h-32 rounded-full border border-dashed opacity-10"
                  style={{ borderColor: project.color }}
                />
                <div
                  className="relative z-10 text-6xl font-black opacity-20 select-none"
                  style={{ color: project.color }}
                >
                  {project.title.charAt(0)}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    className="text-xs font-medium border"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    {project.category}
                  </Badge>
                  <span className="text-[#5C5875] dark:text-[#6B7280] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Voir le projet →
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0D0B18] dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-[#5C5875] dark:text-[#6B7280] leading-relaxed mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#F0EEFF] dark:bg-[#1A1A28] text-[#5C5875] dark:text-[#A0A0C0] border border-[#E2DCFF] dark:border-[#2A2A3E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${project.color}30` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
