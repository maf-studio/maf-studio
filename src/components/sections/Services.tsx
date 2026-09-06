import BookingButton from '@/components/BookingButton'

/**
 * Services — quatre piliers, traités inégalement.
 * Le web est en tête : c'est la porte d'entrée commerciale et le seul
 * bloc qui affiche un prix de départ.
 *
 * Structure du bloc web : argumentaire à gauche, tarifs à droite,
 * et ce qui est inclus en bandeau horizontal en bas. Les éléments
 * inclus ne se battent plus avec les prix pour l'attention.
 */

const INCLUS = [
  { titre: '5 jours ouvrés', detail: 'de la validation à la mise en ligne' },
  { titre: 'Textes rédigés', detail: 'vous fournissez la matière, j\'écris' },
  { titre: 'À votre nom', detail: 'site, hébergement et nom de domaine' },
  { titre: 'Formation 1 h', detail: 'pour modifier le site sans moi' },
]

const OFFRES = [
  {
    nom: 'Site vitrine',
    prix: '500',
    detail: 'Une page, pensée pour la prise de contact.',
    precision: 'Pages supplémentaires chiffrées à part.',
  },
  {
    nom: 'Boutique en ligne',
    prix: '1 090',
    detail: 'Catalogue, paiement, suivi des ventes.',
  },
]

const PILIERS = [
  {
    titre: 'Growth ops & CRM',
    texte:
      "Votre CRM est un tableur, ou un logiciel que plus personne n'ouvre. Je le structure, j'y branche vos vraies étapes de vente, et je fais partir les relances sans que vous ayez à y penser.",
    outils: 'Zoho, HubSpot, Pipedrive',
    prix: 'Sur devis',
    note: 'chiffré sous 48 heures',
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
    note: 'chiffré sous 48 heures',
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

        {/* ── Bloc web ─────────────────────────────────────────── */}
        <div className="cut mt-16 bg-ink-2 border border-rule">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-rule">
              <h3 className="display text-bone text-4xl md:text-5xl">Site web</h3>
              <p className="mt-5 text-dim leading-relaxed max-w-[42ch]">
                Un site qui dit ce que vous vendez et qui donne envie de vous
                appeler. Webflow ou WordPress, selon ce que vous voulez pouvoir
                modifier vous-même sans m'appeler.
              </p>
              <BookingButton className="cut-sm mt-8 self-start bg-magenta px-7 py-3.5 text-sm font-bold text-white hover:bg-violet transition-colors duration-200">
                Demander un devis
              </BookingButton>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center divide-y divide-rule">
              {OFFRES.map((o, i) => (
                <div key={o.nom} className={i === 0 ? 'pb-7' : 'pt-7'}>
                  <div className="flex items-baseline gap-2 text-sm text-dim">
                    <span className="text-bone font-semibold">{o.nom}</span>
                    <span>— à partir de</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="display-flat text-bone text-5xl md:text-6xl">
                      {o.prix} €
                    </span>
                    <span className="text-sm text-dim">HT</span>
                  </div>
                  <p className="mt-2.5 text-sm text-dim max-w-[34ch]">
                    {o.detail}
                    {o.precision && (
                      <span className="block mt-0.5 text-dim/70">{o.precision}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bandeau « inclus » — pleine largeur, sous les deux colonnes */}
          <div className="border-t border-rule grid sm:grid-cols-2 lg:grid-cols-4">
            {INCLUS.map((it, i) => (
              <div
                key={it.titre}
                className={`px-8 md:px-10 py-6 ${
                  i < INCLUS.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-rule' : ''
                } ${i === 1 ? 'lg:border-r' : ''} ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}`}
              >
                <div className="h-0.5 w-5 bg-magenta" />
                <div className="mt-3 text-bone font-semibold text-sm">{it.titre}</div>
                <div className="mt-1 text-sm text-dim leading-snug">{it.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Trois autres piliers ─────────────────────────────── */}
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
                <div className="text-xs text-dim mt-0.5">{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
