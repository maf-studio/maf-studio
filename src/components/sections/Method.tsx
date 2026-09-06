/**
 * Méthode — remplace les témoignages inventés et les chiffres
 * invérifiables. Montrer comment on travaille est plus convaincant
 * qu'un faux avis client, et c'est vrai.
 * La numérotation est légitime ici : c'est réellement une séquence.
 */

const ETAPES = [
  {
    titre: 'On parle vingt minutes',
    texte:
      "Vous décrivez votre situation, je vous dis si je peux aider. Il m'arrive de répondre non et de vous orienter ailleurs — c'est plus rapide pour tout le monde.",
  },
  {
    titre: 'Vous recevez un plan chiffré sous 48 heures',
    texte:
      "Ce que je fais, dans quel ordre, pour combien et en combien de temps. Un prix ferme. Pas de ligne qui apparaît en cours de route.",
  },
  {
    titre: 'Je construis, vous suivez',
    texte:
      "Un point par semaine, vingt minutes. Vous voyez le travail avancer pour de vrai, vous ne recevez pas un rapport d'avancement.",
  },
  {
    titre: 'Je vous forme, puis je m\'efface',
    texte:
      "L'outil doit tourner sans moi. Si vous préférez que je reste en maintenance, c'est possible — mais ce n'est pas le but recherché.",
  },
]

export default function Method() {
  return (
    <section id="methode" className="border-b border-rule thread-field">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="display-flat text-bone text-4xl md:text-6xl max-w-[18ch]">
          Comment ça se passe
        </h2>

        <ol className="mt-16 border-t border-rule">
          {ETAPES.map((e, i) => (
            <li
              key={e.titre}
              className="grid md:grid-cols-[5rem_1fr_1.2fr] gap-4 md:gap-10 py-8 border-b border-rule items-baseline"
            >
              <span className="display text-magenta text-3xl md:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display-flat text-bone text-xl md:text-2xl">{e.titre}</h3>
              <p className="text-dim leading-relaxed">{e.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
