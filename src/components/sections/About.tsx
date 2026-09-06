import mingo from '@/assets/mingo.jpg'
import { LINKEDIN } from '@/site'

export default function About() {
  return (
    <section id="a-propos" className="border-b border-rule thread-field">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
          <div className="shrink-0">
            <img
              src={mingo}
              alt="Mohamed-Amine Fadel, fondateur de MAF Studio"
              width={288}
              height={288}
              loading="lazy"
              className="cut w-[128px] h-[128px] md:w-[144px] md:h-[144px] object-cover"
            />
            <div className="mt-5">
              <div className="display-flat text-bone text-lg">Mohamed-Amine Fadel</div>
              <div className="text-sm text-dim mt-1">Growth ops freelance · à distance</div>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 py-2 text-sm text-magenta hover:underline"
              >
                Profil LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="display text-bone text-5xl md:text-7xl">
              Qui vous
              <br />
              répondra
            </h2>

            <div className="mt-8 space-y-6 text-lg text-dim leading-relaxed max-w-[58ch]">
              <p>
                Pendant quatre ans, j'ai été growth operations manager chez
                Skooleo, un CFA français. Mon travail consistait à faire tourner
                l'acquisition : structurer le CRM, automatiser les relances et
                la répartition des dossiers, rendre les chiffres lisibles pour
                ceux qui décidaient.
              </p>
              <p>
                J'ai monté MAF Studio pour faire la même chose au bénéfice
                d'entreprises plus petites, qui n'ont pas les moyens de recruter
                quelqu'un à temps plein pour s'en occuper.
              </p>
              <p className="text-bone">
                Je travaille seul et à distance. Vous n'aurez pas de chef de
                projet intermédiaire, et la personne qui vous répond au
                téléphone est celle qui fait le travail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
