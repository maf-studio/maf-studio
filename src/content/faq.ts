/**
 * Les questions, dans un fichier à part : la section les affiche et
 * JsonLd.tsx les publie en FAQPage. Un seul tableau, donc aucune divergence
 * possible entre ce que lit un visiteur et ce que lit Google.
 *
 * Elles sont rangées par objection, de la plus bloquante à la plus rare.
 * Plusieurs répondent « non ». C'est délibéré : sur un marché où tout le
 * monde promet tout, l'aveu est le signal de sérieux le moins cher.
 */

export interface Question {
  q: string
  r: string
}

export const QUESTIONS: Question[] = [
  {
    q: 'Suis-je vraiment propriétaire du site ?',
    r: "Oui, entièrement. Le nom de domaine et l'hébergement sont ouverts à votre nom, avec vos coordonnées, dès le premier jour. Le code source vous est remis en archive le jour de la mise en ligne, pas à la résiliation. Je n'ai aucun moyen technique de couper votre site, et c'est un choix, pas un oubli.",
  },
  {
    q: 'Y a-t-il un abonnement obligatoire ?',
    r: "Non. Le Socle à 49 € HT par mois est optionnel, et il n'est proposé qu'à la fin de la première année, qui est incluse dans le forfait. Sans lui, votre site fonctionne exactement pareil : vous payez simplement votre hébergement directement, environ 5 € par mois. Le Socle s'arrête par un e-mail, effet à la fin du mois.",
  },
  {
    q: 'Cinq jours ouvrés, à partir de quand exactement ?',
    r: "À partir du moment où j'ai reçu votre acompte et votre dossier complet : logo, photos, accès, textes existants s'il y en a. Le compteur s'arrête chaque fois que j'attends un retour de votre part et repart à réception. Cinq jours ouvrés, c'est l'Essentiel et la Vitrine, une page. Le Complet, six pages, c'est quinze jours. La Boutique, vingt-cinq. Le Sur-mesure, trente. Ces dates sont écrites sur le devis, et si je dépasse de mon fait, vous choisissez la pénalité à la signature.",
  },
  {
    q: 'Comment un site à 500 € est-il possible ?',
    r: "Parce que le périmètre correspond à une journée de travail, et qu'il est écrit noir sur blanc. Une page, six blocs, assemblée depuis mon système de composants, et c'est vous qui fournissez les textes. Je ne prétends pas faire en un jour ce qui en demande trois. Si vous voulez que j'écrive les textes, que je pose le référencement complet et que je vous forme, c'est la Vitrine à 1 490 €. Méfiez-vous du prestataire qui annonce 500 € pour le même périmètre qu'un autre à 3 000 : soit il livre un gabarit rempli à la va-vite, soit il travaille à perte, et dans les deux cas c'est vous qui payez la différence plus tard.",
  },
  {
    q: 'Et les sites à 29 € par mois ?',
    r: "Sur trois ans vous payez 1 044 € et vous ne possédez ni le site, ni le code, ni le domaine : le jour où vous arrêtez de payer, il disparaît. Ici, l'Essentiel coûte 500 € une fois, plus environ 75 € par an de domaine et d'hébergement à votre nom. Sur trois ans, cela fait 725 €, et le site vous appartient depuis le premier jour.",
  },
  {
    q: 'Je peux le faire moi-même sur Wix. Pourquoi vous payer ?',
    r: "Vous pouvez, et ça coûte 200 à 500 € par an. Mais Wix vend un outil, pas un travail fait : l'arborescence, les textes, les photos, le référencement et les mises à jour restent à votre charge. La vraie comparaison n'est pas 500 € contre 200 € par an, c'est 500 € contre les trente heures que vous y passerez. Si votre temps a une valeur, faites le calcul.",
  },
  {
    q: "Vous êtes seul. Que se passe-t-il s'il vous arrive quelque chose ?",
    r: "Le code est chez vous, le domaine et l'hébergement sont à votre nom, et le site est construit sur des standards courants, pas sur un outil maison ni sur un tableau de bord que moi seul sais faire tourner. N'importe quel développeur reprend le dossier en une journée. C'est exactement pour cette raison que je ne livre rien de propriétaire.",
  },
  {
    q: 'Et si le design ne me plaît pas ?',
    r: "Sur les forfaits Complet, Boutique et Sur-mesure, la direction artistique est validée sur maquette avant la première ligne de code. Si après le tour de corrections inclus elle ne vous convient toujours pas, vous arrêtez : l'acompte reste acquis, le solde n'est pas dû, et nous en restons là. Sur l'Essentiel, il n'y a pas de phase de maquette séparée ; vous avez deux tours de corrections en contrepartie.",
  },
  {
    q: 'Vous avez des avis clients ?',
    r: "Non. L'activité est jeune et je n'inventerai pas de témoignage. Ce que je peux vous montrer, ce sont quatre sites livrés et en ligne aujourd'hui : black-academy.fr, avancia-formation.fr, ccampus-formation.fr et apesoft.fr. Ouvrez-les. Un site qu'on peut visiter est une preuve ; un avis anonyme n'en est pas une.",
  },
  {
    q: 'Avez-vous déjà livré une boutique en ligne ?',
    r: "Non, pas encore. Les quatre sites que je peux vous montrer sont des sites de contenu et de candidature. J'ai en revanche piloté les campagnes Google Ads et TikTok Ads d'une boutique en ligne, Seoul Mirage. Si l'absence de boutique livrée est un problème pour vous, dites-le : je préfère le dire avant plutôt que de vous laisser le découvrir.",
  },
  {
    q: 'Vous garantissez la première page sur Google ?',
    r: "Non, et personne ne le peut honnêtement. Ce qui est inclus et vérifiable : la structure, la vitesse, les balises, les données structurées, le sitemap, la fiche Google Business. Ce qui décide du reste, c'est ce que vous publiez dans la durée et la concurrence de votre secteur. Un prestataire qui vous garantit une position vend soit du hasard, soit un mot-clé que personne ne cherche.",
  },
  {
    q: 'Y aura-t-il des frais cachés ? Ça me coûte quoi par an ensuite ?',
    r: "Non, et voici la liste complète : le renouvellement du nom de domaine, environ 15 € par an, et l'hébergement, environ 5 € par mois, tous deux facturés directement à votre nom. Sur l'Essentiel, ils sont à votre charge dès le départ, soit environ 75 € la première année. À partir de la Vitrine, la première année est incluse. Ou 49 € par mois si vous prenez le Socle, qui les couvre. C'est tout. Le devis est ferme, et tout ce qui sort du périmètre écrit est chiffré et validé par vous avant d'être commencé.",
  },
  {
    q: "Pourquoi n'y a-t-il pas de TVA sur votre devis ?",
    r: "C'est la franchise en base, article 293 B du Code général des impôts : le régime légal des indépendants sous 37 500 € de chiffre d'affaires. Concrètement, le prix affiché est le prix payé. Si vous récupérez la TVA, cela ne change rien pour vous. Si vous ne la récupérez pas, c'est 20 % de moins qu'une agence assujettie à prestation identique. Le devis précise que toute TVA légalement exigible s'ajouterait au prix indiqué.",
  },
  {
    q: 'Je suis déjà engagé chez un autre prestataire.',
    r: "Regardons votre contrat ensemble : le préavis, l'échéance, et surtout qui possède le nom de domaine. Dans la plupart des cas, le domaine est récupérable s'il est demandé nommément dans la lettre de résiliation. Je construis le nouveau site en parallèle et on bascule le jour de l'échéance, sans coupure. La reprise des contenus et les redirections coûtent 490 €.",
  },
  {
    q: 'Je peux commencer petit et agrandir ensuite ?',
    r: "Oui, et c'est prévu pour. Vous montez d'un palier en payant la seule différence, dans les douze mois suivant la mise en ligne, sans refaire le site : 990 € de l'Essentiel à la Vitrine, 1 500 € de la Vitrine au Complet. Rien de ce que vous avez déjà payé n'est perdu.",
  },
  {
    q: 'Des aides peuvent-elles financer le projet ?',
    r: "Selon votre région, des dispositifs de digitalisation existent et peuvent financer une partie du projet. Règle absolue : l'aide se demande avant d'engager la dépense. Je ne les instruis pas, je ne les garantis pas et je ne les chiffre pas pour vous : renseignez-vous auprès de France Num, de votre CCI ou de votre chambre de métiers.",
  },
]
