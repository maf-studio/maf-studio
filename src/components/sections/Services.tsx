import BookingButton from '@/components/BookingButton'

/**
 * Services — quatre piliers, traités inégalement.
 * Le web est en tête et occupe toute la largeur : c'est la porte
 * d'entrée commerciale et le seul bloc qui affiche un prix de départ.
 * Les trois autres sont séparés par des filets, pas des cartes.
 */

const PILIERS = [
  {
    titre: 'Growth ops & CRM',
    texte:
      "Votre CRM est un tableur, ou un logiciel que plus personne n'ouvre. Je le structure, j'y branche vos vraies étapes de vente, et je fais partir les relances sans que vous ayez à y penser.",
    outils: 'Zoho, HubSpot, Pipedrive',
    prix: 'Sur devis',
  },
  {
    titre: 'Publicité en ligne',
    texte:
      "Meta, TikTok, Snapchat. Je monte les campagnes, je pilote le budget au quotidien, et chaque mois vous recevez un chiffre : ce que vous a coûté un client acquis.",
    outils: 'Meta Ads, TikTok Ads, Snapchat Ads',
    prix: '300 € HT / mois',
    note: 'hors budget publicitaire',
  },
  {
    titre: 'Automatisation',
    texte:
      "Les tâches que vous refaites chaque semaine : établir un devis, relancer un impayé, trier les demandes entrantes. Je les passe en workflow, avec un agent IA branché dessus quand ça vaut le coup.",
    outils: 'Make, n8n, Claude',
    prix: 'Sur devis',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-rule">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="display-flat text-bone text-4xl md:text-6xl max-w-[16ch]">
          Quatre choses, faites correctement
        </h2>
        <p className="mt-6 text-dim text-lg max-w-[52ch]">
          Vous n'avez probablement pas besoin des quatre. On regarde ensemble
          par quoi commencer.
        </p>

        {/* Bloc web — mis en avant, seul à porter une grille tarifaire */}
        <div className="cut mt-16 bg-ink-2 border border-rule">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-rule">
              <h3 className="display text-bone text-4xl md:text-5xl">Site web</h3>
              <p className="mt-5 text-dim leading-relaxed max-w-[46ch]">
                Un site qui dit ce que vous vendez et qui donne envie de vous
                appeler. Webflow ou WordPress, selon ce que vous voulez pouvoir
                modifier vous-même sans m'appeler.
              </p>
              <ul className="mt-7 space-y-2.5 text-sm text-dim">
                {[
                  'Livré en 5 jours ouvrés',
                  'Rédaction des textes comprise',
                  'Vous êtes propriétaire du site et du nom de domaine',
                  'Formation à la prise en main, 1 heure',
                  'Pages supplémentaires chiffrées à part',
                ].map((l) => (
                  <li key={l} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-magenta" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center gap-8">
              {[
                { n: 'Site vitrine', p: '500', d: 'une page, pensée pour la prise de contact' },
                { n: 'Boutique en ligne', p: '1 090', d: 'catalogue, paiement, suivi des ventes' },
              ].map((o) => (
                <div key={o.n}>
                  <div className="text-sm text-dim">{o.n}</div>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-xs text-dim">à partir de</span>
                    <span className="display-flat text-bone text-4xl md:text-5xl">
                      {o.p} €
                    </span>
                    <span className="text-sm text-dim">HT</span>
                  </div>
                  <div className="mt-1.5 text-sm text-dim">{o.d}</div>
                </div>
              ))}
              <BookingButton className="cut-sm bg-violet px-6 py-3.5 text-sm font-bold text-white hover:bg-magenta transition-colors duration-200 self-start">
                Demander un devis
              </BookingButton>
            </div>
          </div>
        </div>

        {/* Trois autres piliers — filets, pas de cartes */}
        <div className="mt-4 grid md:grid-cols-3 border border-rule bg-ink-2">
          {PILIERS.map((p, i) => (
            <div
              key={p.titre}
              className={`p-8 md:p-10 flex flex-col ${
                i < PILIERS.length - 1 ? 'border-b md:border-b-0 md:border-r border-rule' : ''
              }`}
            >
              <h3 className="display-flat text-bone text-2xl">{p.titre}</h3>
              <p className="mt-4 text-sm text-dim leading-relaxed grow">{p.texte}</p>
              <div className="mt-7 pt-5 border-t border-rule">
                <div className="text-xs text-dim">{p.outils}</div>
                <div className="mt-2 text-bone font-bold">{p.prix}</div>
                {p.note && <div className="text-xs text-dim mt-0.5">{p.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
