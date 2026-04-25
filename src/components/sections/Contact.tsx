import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full bg-[#F0EEFF] dark:bg-[#12121A] border border-[#E2DCFF] dark:border-[#2A2A3E] rounded-xl px-4 py-3 text-[#0D0B18] dark:text-white text-sm placeholder-[#9992B5] dark:placeholder-[#6B7280] focus:outline-none focus:border-[#7C3AED]/60 focus:bg-[#E8E4FF] dark:focus:bg-[#1A1A28] transition-all duration-200'

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#7C3AED]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#7C3AED] uppercase tracking-[0.2em] mb-4 block">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D0B18] dark:text-white mb-4">
            Démarrons votre{' '}
            <span className="text-gradient-violet">projet</span>
          </h2>
          <p className="text-[#5C5875] dark:text-[#A0A0C0] max-w-lg mx-auto text-lg">
            Décrivez-nous votre vision. Nous vous répondons sous 24h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-gradient rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-20 rounded-2xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative py-16 text-center"
            >
              <div className="text-5xl mb-4">✦</div>
              <h3 className="text-2xl font-bold text-[#0D0B18] dark:text-white mb-2">Message envoyé !</h3>
              <p className="text-[#5C5875] dark:text-[#A0A0C0]">Nous vous répondrons dans les prochaines 24h.</p>
              <Button
                onClick={() => setSent(false)}
                className="mt-8 bg-[#F0EEFF] dark:bg-[#1A1A28] border border-[#E2DCFF] dark:border-[#2A2A3E] text-[#0D0B18] dark:text-white hover:bg-[#E2DCFF] dark:hover:bg-[#2A2A3E]"
              >
                Envoyer un autre message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-[#5C5875] dark:text-[#6B7280] uppercase tracking-wider mb-2 block">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-[#5C5875] dark:text-[#6B7280] uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jean@company.fr"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-[#5C5875] dark:text-[#6B7280] uppercase tracking-wider mb-2 block">
                  Type de projet
                </label>
                <select
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-[#12121A]">Sélectionner un type...</option>
                  <option value="web" className="bg-[#12121A]">Site web / Application</option>
                  <option value="branding" className="bg-[#12121A]">Branding & Identité</option>
                  <option value="ecommerce" className="bg-[#12121A]">E-commerce</option>
                  <option value="motion" className="bg-[#12121A]">Motion Design</option>
                  <option value="other" className="bg-[#12121A]">Autre</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-[#5C5875] dark:text-[#6B7280] uppercase tracking-wider mb-2 block">
                  Décrivez votre projet
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Parlez-nous de votre projet, vos objectifs, votre deadline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <p className="text-xs text-[#5C5875] dark:text-[#6B7280]">
                  ✓ Réponse garantie sous 24h · ✓ Devis gratuit · ✓ Sans engagement
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#9D5CF5] hover:to-[#7C3AED] text-white border-0 glow-violet px-8 py-6 h-auto text-base whitespace-nowrap"
                >
                  Envoyer le message →
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
