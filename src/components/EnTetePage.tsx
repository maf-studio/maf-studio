
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
    <section data-sol="papier" className="border-b bord overflow-clip">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[6vw] pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <p className="mono sourd">{surtitre}</p>
        <h1 className="manifeste sur mt-5">{titre}</h1>
        <p className="mt-12 mx-auto max-w-[62ch] sourd">{intro}</p>
      </div>
    </section>
  )
}
