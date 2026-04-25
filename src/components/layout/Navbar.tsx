import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import { useTheme } from '@/contexts/ThemeContext'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Avant/Après', href: '#before-after' },
  { label: 'FAQ', href: '#faq' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F8F7FF]/90 dark:bg-[#0A0A0F]/85 backdrop-blur-2xl border-b border-[#E2DCFF] dark:border-[#1E1E2E]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 rounded-md bg-[#7C3AED] opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#FF2D7A] flex items-center justify-center">
              <span className="font-display font-black text-white text-sm italic leading-none">M</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black italic text-[#0D0B18] dark:text-white text-base tracking-wide uppercase">
              MAF <span className="text-[#7C3AED]">Studio</span>
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-sm font-medium text-[#5C5875] dark:text-[#888899] hover:text-[#0D0B18] dark:hover:text-white transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-[#5C5875] dark:text-[#888899] hover:text-[#7C3AED] dark:hover:text-[#9D5CF5] hover:bg-[#7C3AED]/8 dark:hover:bg-[#7C3AED]/12 transition-all duration-200"
        >
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon size={17} /> : <Sun size={17} />}
          </motion.div>
        </button>

        {/* CTA */}
        <div className="hidden md:block">
          <CalendlyButton className="relative px-5 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)' }}
            />
            <span className="relative">On travaille ensemble ?</span>
          </CalendlyButton>
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 bg-[#0D0B18] dark:bg-white transition-all duration-300 origin-center ${
                open && i === 0 ? 'rotate-45 translate-y-2' :
                open && i === 1 ? 'opacity-0 scale-x-0' :
                open && i === 2 ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#F8F7FF]/95 dark:bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#E2DCFF] dark:border-[#1E1E2E]"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => { scrollTo(href); setOpen(false) }}
                  className="text-left py-2 text-[#5C5875] dark:text-[#888899] hover:text-[#0D0B18] dark:hover:text-white transition-colors font-medium"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={toggle}
                className="flex items-center gap-2.5 py-2 text-[#5C5875] dark:text-[#888899] hover:text-[#7C3AED] dark:hover:text-[#9D5CF5] transition-colors font-medium"
              >
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
                <span>{isDark ? 'Mode clair' : 'Mode sombre'}</span>
              </button>
              <CalendlyButton
                className="mt-2 py-3 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A] w-full"
              >
                On travaille ensemble ?
              </CalendlyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
