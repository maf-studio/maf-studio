import Porte from '@/components/Porte'

/**
 * En-tête commun aux pages intérieures. Même respiration que le hero de
 * l'accueil, en plus court : un titre qui porte son ombre, une phrase, rien.
 */
export default function EnTetePage({
  surtitre,
  titre,
  intro,
}: {
  surtitre: string
  titre: string
  intro: string
}) {
  return (
    <section data-ground="jour" className="border-b border-filet overflow-clip">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <p className="mono text-gris">{surtitre}</p>
        <div className="ombre-coupee inline-block mt-5">
          <Porte>
            <h1 className="display text-encre">{titre}</h1>
          </Porte>
        </div>
        <p className="mt-12 mx-auto max-w-[62ch] text-gris">{intro}</p>
      </div>
    </section>
  )
}
