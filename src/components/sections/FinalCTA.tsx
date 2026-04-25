import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from '@/components/Particles'
import CalendlyButton from '@/components/CalendlyButton'

// ─── EmailJS config (variables injectées par Vite au build) ──────────────────
const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

// ─── Types ───────────────────────────────────────────────────────────────────
type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  service: string
  message: string
}

const SERVICE_LABELS: Record<string, string> = {
  growth:     'Growth Ops & CRM',
  ads:        'Social Ads',
  automation: 'Automatisation IA (Make / N8N)',
  web:        'Web (Webflow / WordPress)',
  other:      'Autre',
}

// ─── Composant ───────────────────────────────────────────────────────────────
export default function FinalCTA() {
  const formRef = useRef<HTMLFormElement>(null)

  const [form, setForm] = useState<FormState>({
    name: '', email: '', service: '', message: '',
  })
  // Honeypot — doit rester vide ; tout bot qui le remplit est ignoré silencieusement
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const isLoading = status === 'loading'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Anti-spam : honeypot rempli → on fait semblant d'envoyer, on ne fait rien
    if (honeypot) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name:    form.name,
          reply_to:     form.email,
          service_type: SERVICE_LABELS[form.service] ?? form.service,
          message:      form.message,
          // L'adresse de destination est configurée dans le template EmailJS
          // (aminefadelpro@gmail.com) — ne pas exposer ici côté client.
        },
        { publicKey: EJS_KEY },
      )
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      console.error('[EmailJS]', err)
      setErrorMsg("L'envoi a échoué. Veuillez réessayer ou nous écrire directement à hello@maf-studio.fr")
      setStatus('error')
    }
  }

  // ─── Styles partagés ───────────────────────────────────────────────────────
  const inputCls =
    'w-full bg-[#F0EEFF] dark:bg-[#0F0F17] border border-[#E2DCFF] dark:border-[#1E1E2E] rounded-xl px-4 py-3.5 text-sm ' +
    'text-[#0D0B18] dark:text-[#F0F0FF] placeholder-[#9992B5] dark:placeholder-[#444456] focus:outline-none focus:border-[#7C3AED]/60 ' +
    'focus:bg-[#E8E4FF] dark:focus:bg-[#12121A] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <section id="contact" className="relative py-32 overflow-hidden strings-bg">

      {/* Glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(255,45,122,0.05) 35%, transparent 65%)' }}
        />
      </div>
      <Particles />

      <div className="relative z-10 max-w-4xl mx-auto px-5">

        {/* ── Headline ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-line mx-auto mb-6" />
          <h2
            className="font-display font-black italic text-[#0D0B18] dark:text-white leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
          >
            PAR OÙ
            <br />
            <span className="text-grad-main">COMMENCER ?</span>
          </h2>
          <p className="mt-6 text-[#5C5875] dark:text-[#888899] text-base md:text-lg max-w-md mx-auto">
            Un premier appel de 30 minutes. Gratuit. Sans engagement.{' '}
            <span className="text-[#4B3F9E] dark:text-[#D0D0FF]">Vous repartez avec des pistes d'action concrètes.</span>
          </p>

          <CalendlyButton
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold
                       text-white rounded-xl border border-[#7C3AED]/40 hover:border-[#7C3AED]
                       hover:bg-[#7C3AED]/10 transition-all duration-200"
          >
            📅 Réserver un créneau →
          </CalendlyButton>
        </motion.div>

        {/* ── Carte formulaire ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'var(--card)',
            border: '1px solid rgba(124,58,237,0.25)',
            boxShadow: '0 0 60px rgba(124,58,237,0.10), 0 0 120px rgba(255,45,122,0.05)',
          }}
        >
          {/* Barre top dégradée */}
          <div className="h-1 w-full bg-gradient-to-r from-[#7C3AED] via-[#FF2D7A] to-[#7C3AED]" />

          <AnimatePresence mode="wait">
            {/* ── État succès ─────────────────────────────────────────────── */}
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="p-12 md:p-16 flex flex-col items-center text-center"
              >
                {/* Cercle checkmark animé */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                  className="relative w-20 h-20 rounded-full flex items-center justify-center mb-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(255,45,122,0.2))',
                    border: '2px solid rgba(124,58,237,0.5)',
                  }}
                >
                  {/* Glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.3), transparent)' }}
                  />
                  <motion.svg
                    width="32" height="32" viewBox="0 0 32 32" fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.path
                      d="M6 16L13 23L26 9"
                      stroke="url(#ck-grad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="ck-grad" x1="6" y1="16" x2="26" y2="9" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9D5CF5" />
                        <stop offset="1" stopColor="#FF2D7A" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div
                    className="font-display font-black italic text-grad-main mb-3"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    Message bien reçu.
                  </div>
                  <p className="text-[#5C5875] dark:text-[#A0A0C0] text-base mb-1">
                    Nous vous répondons dans les{' '}
                    <span className="text-[#4B3F9E] dark:text-[#D0D0FF] font-semibold">24h</span> — souvent avant.
                  </p>
                  <p className="text-[#5C5875] dark:text-[#666677] text-sm mt-2 max-w-sm mx-auto">
                    En attendant, notez deux ou trois objectifs que vous souhaitez atteindre dans les 90 prochains jours. Ce sera notre point de départ.
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-3 text-sm font-medium text-[#5C5875] dark:text-[#888899] hover:text-[#0D0B18] dark:hover:text-white border border-[#E2DCFF] dark:border-[#1E1E2E] hover:border-[#7C3AED]/40 rounded-xl transition-all duration-200"
                >
                  Envoyer un nouveau message
                </motion.button>
              </motion.div>
            ) : (
              /* ── Formulaire ──────────────────────────────────────────────── */
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* ── Honeypot anti-spam — invisible pour les humains ───────
                    Les bots remplissent les champs cachés ; on rejette silencieusement.  */}
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                >
                  <label htmlFor="hp_website">Ne pas remplir</label>
                  <input
                    id="hp_website"
                    type="text"
                    name="hp_website"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Prénom */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5875] dark:text-[#444456] mb-2">
                    Votre prénom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Mohamed"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    disabled={isLoading}
                    className={inputCls}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5875] dark:text-[#444456] mb-2">
                    Votre email professionnel
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="vous@votreentreprise.fr"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    disabled={isLoading}
                    className={inputCls}
                  />
                </div>

                {/* Service */}
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5875] dark:text-[#444456] mb-2">
                    Votre besoin
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    disabled={isLoading}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="" className="bg-[#12121A]">Choisir un service…</option>
                    <option value="growth"     className="bg-[#12121A]">Growth Ops &amp; CRM</option>
                    <option value="ads"        className="bg-[#12121A]">Social Ads</option>
                    <option value="automation" className="bg-[#12121A]">Automatisation IA (Make / N8N)</option>
                    <option value="web"        className="bg-[#12121A]">Web (Webflow / WordPress)</option>
                    <option value="other"      className="bg-[#12121A]">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#5C5875] dark:text-[#444456] mb-2">
                    Décrivez votre situation en quelques lignes
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Votre activité, votre situation actuelle, vos objectifs…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    disabled={isLoading}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Erreur */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      key="err"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="md:col-span-2 text-sm text-[#FF6B6B] bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 rounded-xl px-4 py-3"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Footer du form */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#5C5875] dark:text-[#444456]">
                    Appel 30 min gratuit · Réponse sous 24h · Sans engagement
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative group flex-shrink-0 px-8 py-3.5 text-sm font-bold text-white rounded-xl overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed min-w-[160px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#FF2D7A]" />
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.08)' }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <Spinner />
                          Envoi en cours…
                        </>
                      ) : (
                        <>Envoyer <span className="group-hover:translate-x-1 transition-transform inline-block">→</span></>
                      )}
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-[#5C5875] dark:text-[#444456] text-xs mt-8"
        >
          Plus de 30 PME françaises font confiance à MAF Studio ·{' '}
          <a href="mailto:hello@maf-studio.fr" className="text-[#7C3AED] hover:text-[#9D5CF5] transition-colors">
            hello@maf-studio.fr
          </a>
        </motion.p>
      </div>
    </section>
  )
}

// ─── Spinner SVG inline ───────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
