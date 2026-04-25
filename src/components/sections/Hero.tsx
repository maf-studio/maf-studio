import { motion } from 'framer-motion'
import Particles from '@/components/Particles'
import CalendlyButton from '@/components/CalendlyButton'
import { useTheme } from '@/contexts/ThemeContext'

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { isDark } = useTheme()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden strings-bg">

      {/* Deep violet radial glow — emanating from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)' }}
      />
      {/* Secondary magenta glow — top right */}
      <div className="absolute -top-20 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,45,122,0.10) 0%, transparent 65%)' }}
      />
      {/* Far left accent */}
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 65%)' }}
      />

      <Particles />

      {/* Horizontal subtle line across center */}
      <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.15) 30%, rgba(255,45,122,0.15) 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-10 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-8"
        >
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#7C3AED]" />
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6B30C9] dark:text-[#9D5CF5]">
            Mohamed-Amine Fadel · MAF Studio
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#FF2D7A]" />
        </motion.div>

        {/* Main headline — diagonal, massive, italic */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transform: 'rotate(-1.5deg)' }}
          >
            <h1 className="font-display font-black italic leading-[0.88] tracking-tight select-none">
              <span
                className="block text-[#0D0B18] dark:text-white"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 9rem)' }}
              >
                VOTRE MOTEUR
              </span>
              <span
                className="block text-grad-main"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 9rem)' }}
              >
                DE CROISSANCE,
              </span>
              <span
                className="block text-[#0D0B18] dark:text-white"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
              >
                OPÉRATIONNEL EN 48H.
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-base md:text-lg text-[#5C5875] dark:text-[#888899] max-w-xl mx-auto leading-relaxed"
        >
          Growth Ops, Social Ads, Automatisation IA & Web —{' '}
          <span className="text-[#4B3F9E] dark:text-[#D0D0FF]">un partenaire qui exécute, pas un consultant qui conseille.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary — ouvre Calendly en popup */}
          <CalendlyButton className="relative group px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A] transition-all duration-300" />
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #9D5CF5, #FF2D7A)' }}
            />
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: '0 0 40px rgba(255,45,122,0.4), 0 0 80px rgba(124,58,237,0.25)' }}
            />
            <span className="relative flex items-center gap-2">
              Discutons de votre projet
              <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
            </span>
          </CalendlyButton>

          {/* Secondary */}
          <button
            onClick={() => scrollTo('#services')}
            className="px-8 py-4 text-base font-semibold text-[#5C5875] dark:text-[#A0A0C0] hover:text-[#0D0B18] dark:hover:text-white rounded-xl border border-[#E2DCFF] dark:border-[#1E1E2E] hover:border-[#7C3AED]/50 bg-transparent hover:bg-[#7C3AED]/8 transition-all duration-300"
          >
            Découvrir nos services ↓
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12 flex-wrap"
        >
          {[
            { val: '30+', label: 'PME accompagnées' },
            { val: '3×', label: 'ROI moyen' },
            { val: '48h', label: 'pour démarrer' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-display font-black italic text-3xl md:text-4xl text-grad-main"
              >{val}</div>
              <div className="text-xs text-[#5C5875] dark:text-[#888899] mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${isDark ? '#0A0A0F' : '#F8F7FF'})` }}
      />
    </section>
  )
}
