/**
 * FAQ — <details> natif : accessible au clavier, fonctionne sans JS,
 * aucune dépendance d'animation. La retenue est un choix ici.
 */

const QUESTIONS = [
  {
    q: 'Le budget publicitaire est-il compris dans les 300 € ?',
    r: "Non. Les 300 € couvrent mon travail : création des campagnes, pilotage quotidien, reporting mensuel. Ce que vous versez à Meta ou TikTok est séparé et payé directement à la plateforme. Comptez au minimum 500 € par mois de budget pour que les campagnes aient de quoi apprendre.",
  },
  {
    q: 'Pourquoi 500 € quand une agence en demande 3 000 ?',
    r: "Parce que je suis seul : pas de bureaux, pas de chef de projet, pas de commercial à rémunérer. Le revers, c'est que je prends peu de clients en même temps — il y a parfois deux ou trois semaines d'attente avant de démarrer.",
  },
  {
    q: 'Combien de temps pour un site ?',
    r: "Cinq jours ouvrés pour une page, à partir du moment où j'ai vos textes, vos photos et vos accès. En pratique le délai dépend surtout de votre réactivité : la partie technique n'est presque jamais ce qui ralentit un projet.",
  },
  {
    q: 'Je suis vraiment propriétaire du site ?',
    r: "Oui. Le nom de domaine est déposé à votre nom, l'hébergement est à votre nom, et je vous remets tous les accès à la livraison. Si on arrête de travailler ensemble, vous ne perdez rien et vous n'avez rien à racheter.",
  },
  {
    q: 'Vous travaillez avec quels outils ?',
    r: "Zoho, HubSpot ou Pipedrive côté CRM. Make et n8n pour l'automatisation. Meta, TikTok et Snapchat côté publicité. Webflow ou WordPress pour le web. Si vous avez déjà quelque chose en place qui fonctionne, je m'adapte plutôt que de tout remplacer.",
  },
  {
    q: 'Comment ça se passe, à distance ?',
    r: "Tout se fait à distance, où que vous soyez en France. Un point hebdomadaire en visio de vingt minutes, et un canal écrit entre deux — mail, WhatsApp ou Slack, comme vous préférez. Vous avez accès aux mêmes outils que moi : vous voyez le travail avancer en temps réel, vous n'attendez pas un rapport.",
  },
  {
    q: "Et si les campagnes ne donnent rien ?",
    r: "On fixe ensemble un objectif chiffré au démarrage — un coût par contact à ne pas dépasser, par exemple. Si au bout de deux mois on en est loin, soit on change d'approche, soit on arrête. Il n'y a pas d'engagement de douze mois chez moi.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-rule">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <h2 className="display-flat text-bone text-4xl md:text-5xl">
            Les questions qu'on me pose
          </h2>

          <div className="border-t border-rule">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="group border-b border-rule">
                <summary className="cursor-pointer list-none py-6 flex gap-6 items-start justify-between text-bone font-semibold text-lg hover:text-magenta transition-colors">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-2 shrink-0 w-3.5 h-px bg-magenta relative after:absolute after:inset-0 after:bg-magenta after:rotate-90 after:transition-transform group-open:after:rotate-0"
                  />
                </summary>
                <p className="pb-6 pr-10 text-dim leading-relaxed max-w-[62ch]">{item.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
