import { motion } from 'framer-motion'
import CalendlyButton from '@/components/CalendlyButton'

export default function Footer() {
  return (
    <footer className="relative border-t border-[#E2DCFF] dark:border-[#1E1E2E] bg-[#F8F7FF] dark:bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#FF2D7A] flex items-center justify-center">
                <span className="font-display font-black italic text-white text-sm leading-none">M</span>
              </div>
              <span className="font-display font-black italic text-[#0D0B18] dark:text-white text-base uppercase tracking-wide">
                MAF <span className="text-[#7C3AED]">Studio</span>
              </span>
            </div>
            <p className="text-xs text-[#5C5875] dark:text-[#444456] max-w-xs leading-relaxed">
              Growth Ops · Social Ads · Automatisation IA · Web
              <br />Pour les PME & TPE françaises qui veulent scaler.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#5C5875] dark:text-[#444456]">
            {[
              ['#services', 'Services'],
              ['#before-after', 'Avant/Après'],
              ['#faq', 'FAQ'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#888899] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <CalendlyButton
            className="flex-shrink-0 px-5 py-2.5 text-sm font-bold text-white rounded-xl"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #FF2D7A)' }}
          >
            On travaille ensemble ?
          </CalendlyButton>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E2DCFF] dark:border-[#1E1E2E] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C5875] dark:text-[#333344]">
          <span>© 2024 MAF Studio — Mohamed-Amine Fadel. Tous droits réservés.</span>
          <motion.span
            className="flex items-center gap-1"
          >
            Fait avec
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-[#FF2D7A]"
            >♥</motion.span>
            et sans compromis
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
