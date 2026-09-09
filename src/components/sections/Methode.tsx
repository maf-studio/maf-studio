/**
 * MÉTHODE — le process rendu visible.
 *
 * C'est le substitut de preuve sociale le plus solide dont dispose MAF
 * Studio : montrer exactement ce qui se passe entre la signature et la mise
 * en ligne, jour par jour. Adveris fait la même chose à l'échelle d'une
 * agence de soixante personnes.
 *
 * Les graduations se relisent : le même instrument que le sommaire de
 * l'en-tête, mais gradué en jours au lieu de sections. Cela transforme une
 * promesse de délai en objet manipulable.
 */

const ETAPES = [
  { jour: 'J0', texte: 'On parle vingt minutes. Je vous envoie un devis ferme et une date de mise en ligne.' },
  { jour: 'J1', texte: "Vous validez, vous versez l'acompte et vous m'envoyez votre dossier. Le compteur démarre." },
  { jour: 'J2-3', texte: "J'écris les textes et je construis le site. Vous ne faites rien." },
  { jour: 'J4', texte: "Vous relisez. Vous m'envoyez une liste de corrections. Le compteur s'arrête pendant que j'attends." },
  { jour: 'J5', texte: 'Je mets en ligne, je vous remets tous les accès et le code, et je vous forme une heure.' },
]

export default function Methode() {
  return (
    <section id="methode" data-ground="jour" className="border-b border-filet">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] py-24 md:py-32">
        <span className="mono text-gris">09 — Méthode</span>
        <h2 className="h2 text-encre mt-4">Comment ça se passe</h2>

        <ol className="mt-14 border-t border-filet">
          {ETAPES.map((e) => (
            <li key={e.jour} className="grid md:grid-cols-12 gap-3 md:gap-8 py-8 border-b border-filet items-baseline">
              <span className="mono md:col-span-2 text-base" style={{ color: 'var(--accent)' }}>{e.jour}</span>
              <p className="md:col-span-10 text-encre text-lg md:text-xl leading-snug">{e.texte}</p>
            </li>
          ))}
        </ol>

        {/* Définition du délai, écrite à l'identique ici, dans la FAQ et sur
            le devis. Une promesse de délai sans point de départ écrit n'est
            pas une promesse. */}
        <p className="mt-9 mesure text-gris leading-relaxed">
          Les cinq jours ouvrés courent à partir du moment où j'ai reçu l'acompte{' '}
          <span className="text-encre">et</span> votre dossier complet : logo, photos,
          accès, textes existants s'il y en a. Le compteur s'arrête chaque fois que
          j'attends un retour de votre part, et repart à réception. Si je dépasse de
          mon fait, la pénalité s'applique.
        </p>
      </div>
    </section>
  )
}
