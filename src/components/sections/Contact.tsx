import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import BookingButton from '@/components/BookingButton'
import { EMAIL, TEL, TEL_LIEN } from '@/site'

/**
 * CONTACT — deux températures, deux boutons.
 *
 * Chaud : un créneau réservé tout de suite. Froid : un devis écrit, pour
 * quelqu'un qui n'a pas envie de parler maintenant. Les deux mènent au même
 * endroit, mais forcer la conversation fait perdre les seconds.
 *
 * Le formulaire est durci : la clé publique EmailJS est nécessairement dans
 * le bundle et le quota gratuit est de 200 envois par mois. Un pot de miel et
 * un délai minimal de soumission suffisent à écarter les robots simples, sans
 * imposer un captcha au visiteur légitime.
 *
 * Le repli mailto est conservé, ainsi que la saisie de l'utilisateur en cas
 * d'échec : perdre un message rédigé est la pire chose qu'un formulaire
 * puisse faire.
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const BESOINS = [
  '— Choisissez —',
  'Site vitrine (une page)',
  'Site vitrine (plusieurs pages)',
  'Boutique en ligne',
  "Refonte d'un site existant",
  'Sur-mesure',
  'Publicité en ligne',
  'Autre',
]

type Etat = 'idle' | 'envoi' | 'ok' | 'erreur'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', besoin: BESOINS[0], message: '' })
  const [etat, setEtat] = useState<Etat>('idle')
  const potDeMiel = useRef<HTMLInputElement>(null)
  // Horodatage posé au montage, jamais pendant le rendu : lire l'heure
  // pendant un rendu le rend impur et casse les rendus concurrents.
  const ouvertA = useRef(0)
  useEffect(() => {
    ouvertA.current = Date.now()
  }, [])

  const configOk = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

  async function envoyer(e: React.FormEvent) {
    e.preventDefault()
    // Un robot remplit tous les champs, y compris ceux qu'il ne voit pas,
    // et soumet en moins de trois secondes. On sort en silence : lui dire
    // qu'il a été détecté l'aide à contourner.
    if (potDeMiel.current?.value || Date.now() - ouvertA.current < 3000) {
      setEtat('ok')
      return
    }
    if (!configOk) {
      setEtat('erreur')
      return
    }
    setEtat('envoi')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.nom, reply_to: form.email, besoin: form.besoin, message: form.message },
        { publicKey: PUBLIC_KEY },
      )
      setEtat('ok')
    } catch {
      setEtat('erreur')
    }
  }

  const champ =
    'w-full bg-transparent border-0 border-b bord px-0 py-3 sur placeholder-gris focus:outline-none focus:border-b-2 transition-[border-color,border-width] duration-150'

  return (
    <section id="contact" data-sol="papier" className="border-b bord">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="mono sourd">12 — Contact</span>
            <h2 className="h2 sur mt-4">Parlons de votre projet</h2>

            <div className="mt-10 flex flex-col sm:flex-row lg:flex-col gap-3">
              <BookingButton className="pilule bg-encre sur mono action px-7 py-4 text-center">
                Réserver 20 minutes
              </BookingButton>
              <a href="#formulaire"
                 className="pilule mono action px-7 py-4 text-center sur border bord hover:bord-fort transition-colors">
                Recevoir un devis
              </a>
            </div>

            <div className="mt-10 pt-6 border-t bord space-y-1.5">
              <a href={`tel:${TEL_LIEN}`} className="mono block py-2 sur">{TEL}</a>
              <a href={`mailto:${EMAIL}`} className="mono block py-2 sur break-all">{EMAIL}</a>
            </div>
            <p className="mt-4 text-[0.95rem] sourd leading-relaxed">
              Je réponds sous un jour ouvré, à toute demande, client ou non.
            </p>
          </div>

          <div id="formulaire" className="lg:col-span-6 lg:col-start-7">
            {/* aria-live : sans lui, un lecteur d'écran ne sait pas que le
                formulaire a été remplacé par une confirmation. */}
            <div aria-live="polite">
              {etat === 'ok' ? (
                <div className="border bord p-8">
                  <h3 className="h3 sur text-2xl">Message reçu.</h3>
                  <p className="mt-3 sourd">
                    Je vous réponds sous un jour ouvré{form.email ? ` à ${form.email}` : ''}.
                  </p>
                </div>
              ) : (
                <form onSubmit={envoyer} noValidate={false}>
                  {/* Pot de miel. Jamais display:none — certains robots
                      l'ignorent ; hors flux et hors tabulation. */}
                  <div aria-hidden="true" className="absolute w-px h-px overflow-hidden -left-[9999px]">
                    <label htmlFor="societe">Ne pas remplir</label>
                    <input id="societe" name="societe" type="text" tabIndex={-1} autoComplete="off" ref={potDeMiel} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label htmlFor="nom" className="mono block sourd mb-1">Votre nom</label>
                      <input id="nom" name="nom" required autoComplete="name" value={form.nom} className={champ}
                             onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mono block sourd mb-1">Votre email</label>
                      <input id="email" name="email" type="email" required autoComplete="email" value={form.email} className={champ}
                             onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="besoin" className="mono block sourd mb-1">Votre besoin</label>
                    <select id="besoin" name="besoin" value={form.besoin} className={champ}
                            onChange={(e) => setForm({ ...form, besoin: e.target.value })}>
                      {BESOINS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="mono block sourd mb-1">Où vous en êtes</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} className={`${champ} resize-y`}
                              placeholder="Ex : j'ai un site WordPress de 2019 que je n'arrive plus à modifier et je perds des demandes de devis."
                              onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button type="submit" disabled={etat === 'envoi'}
                          className="pilule mt-8 w-full bg-encre sur mono action px-6 py-4 disabled:opacity-50">
                    {etat === 'envoi' ? 'Envoi en cours' : 'Envoyer'}
                  </button>

                  <p className="mt-5 text-[0.85rem] sourd leading-relaxed">
                    En envoyant ce formulaire, vous acceptez que vos coordonnées soient
                    utilisées pour vous répondre. Elles ne sont ni revendues, ni utilisées
                    à d'autres fins.{' '}
                    <Link to="/confidentialite" className="underline underline-offset-2">
                      Politique de confidentialité
                    </Link>
                  </p>

                  {etat === 'erreur' && (
                    <p className="mt-4 text-[0.95rem]" role="alert" style={{ color: 'var(--accent)' }}>
                      {configOk ? "L'envoi a échoué." : "Le formulaire n'est pas encore configuré."}{' '}
                      Votre message est toujours là. Écrivez-moi directement à{' '}
                      <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
