import { useState } from 'react'
import emailjs from '@emailjs/browser'
import BookingButton from '@/components/BookingButton'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL = 'aminefadelpro@gmail.com'
const TEL = '06 66 84 03 44'

const BESOINS = ['Site web', 'Publicité', 'CRM', 'Automatisation', 'Je ne sais pas encore']

type Etat = 'idle' | 'envoi' | 'ok' | 'erreur'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', besoin: BESOINS[0], message: '' })
  const [etat, setEtat] = useState<Etat>('idle')

  const configOk = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!configOk) {
      setEtat('erreur')
      return
    }
    setEtat('envoi')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nom,
          reply_to: form.email,
          besoin: form.besoin,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY },
      )
      setEtat('ok')
    } catch {
      setEtat('erreur')
    }
  }

  const champ =
    'w-full bg-ink border border-rule px-4 py-3 text-bone text-sm placeholder-dim focus:outline-none focus:border-violet transition-colors'

  return (
    <section id="contact" className="border-b border-rule">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="display text-bone text-5xl md:text-7xl">
              Parlons de
              <br />
              votre projet
            </h2>
            <p className="mt-8 text-dim text-lg leading-relaxed max-w-[42ch]">
              Décrivez votre situation en deux lignes. Je réponds sous 24 heures
              ouvrées, et je vous dis franchement si je suis le bon interlocuteur.
            </p>

            <div className="mt-12 space-y-5 border-t border-rule pt-8">
              <BookingButton className="cut-sm bg-magenta px-7 py-4 text-[0.95rem] font-bold text-white hover:bg-violet transition-colors duration-200">
                Réserver 20 minutes
              </BookingButton>
              <div className="text-sm space-y-1.5 pt-2">
                <a href={`mailto:${EMAIL}`} className="block text-dim hover:text-magenta transition-colors">
                  {EMAIL}
                </a>
                <a href={`tel:+33${TEL.slice(1).replace(/\s/g, '')}`} className="block text-dim hover:text-magenta transition-colors">
                  {TEL}
                </a>
              </div>
            </div>
          </div>

          <div className="cut bg-ink-2 border border-rule p-8 md:p-10">
            {etat === 'ok' ? (
              <div className="py-16">
                <h3 className="display-flat text-bone text-2xl">Message reçu.</h3>
                <p className="mt-3 text-dim">
                  Je vous réponds sous 24 heures ouvrées à l'adresse {form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nom" className="block text-sm text-dim mb-2">Votre nom</label>
                    <input
                      id="nom" required value={form.nom} className={champ}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-dim mb-2">Votre email</label>
                    <input
                      id="email" type="email" required value={form.email} className={champ}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="besoin" className="block text-sm text-dim mb-2">Votre besoin</label>
                  <select
                    id="besoin" value={form.besoin} className={champ}
                    onChange={(e) => setForm({ ...form, besoin: e.target.value })}
                  >
                    {BESOINS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-dim mb-2">Où vous en êtes</label>
                  <textarea
                    id="message" required rows={5} value={form.message} className={champ}
                    placeholder="Ex : j'ai un site WordPress de 2019 que je n'arrive plus à modifier et je perds des demandes de devis."
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit" disabled={etat === 'envoi'}
                  className="cut-sm w-full bg-violet px-6 py-4 text-sm font-bold text-white hover:bg-magenta disabled:opacity-50 transition-colors duration-200"
                >
                  {etat === 'envoi' ? 'Envoi en cours' : 'Envoyer'}
                </button>

                {etat === 'erreur' && (
                  <p className="text-sm text-magenta" role="alert">
                    {configOk
                      ? "L'envoi a échoué."
                      : "Le formulaire n'est pas encore configuré."}{' '}
                    Écrivez-moi directement à{' '}
                    <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
