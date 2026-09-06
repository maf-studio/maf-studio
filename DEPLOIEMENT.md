# Mettre le site en ligne — Vercel + domaine IONOS

Ton site est un build statique. **L'hébergement Vercel est gratuit** pour ce
type de projet. Ton seul coût est le domaine, déjà acheté chez IONOS.

---

## 1. Envoyer le code sur GitHub

Depuis ton dossier `maf-studio`, dans le terminal :

```bash
git add .
git commit -m "Refonte complète : design, tarifs, Cal.com, mentions légales"
git push
```

Si le dépôt n'existe pas encore sur GitHub : crée-le vide sur github.com
(sans README), puis :

```bash
git remote add origin https://github.com/TON-PSEUDO/maf-studio.git
git branch -M main
git push -u origin main
```

**Vérifie ensuite sur GitHub que `.env.local` n'apparaît pas** dans la liste
des fichiers. Le `.gitignore` le couvre via le motif `*.local`, mais un coup
d'œil coûte cinq secondes.

---

## 2. Importer le projet dans Vercel

1. `vercel.com/new`
2. **Import Git Repository** → choisis `maf-studio`
3. Vercel lit le fichier `vercel.json` et configure tout seul : framework
   Vite, commande `npm run build`, dossier de sortie `dist`. **Ne change
   rien.**
4. **Deploy**

Deux minutes plus tard, ton site est en ligne sur une adresse en
`.vercel.app`. Chaque `git push` sur `main` redéploiera automatiquement.

---

## 3. Les variables EmailJS

Sur `dashboard.emailjs.com` :

| Où | Ce que tu récupères |
|---|---|
| Email Services → Add New Service → Gmail | **Service ID** |
| Email Templates → Create New Template | **Template ID** |
| Account → General | **Public Key** |

Le template doit contenir **exactement** ces quatre variables, sinon tu
recevras des mails vides :

```
{{from_name}}   {{reply_to}}   {{besoin}}   {{message}}
```

Puis dans Vercel : **Settings → Environment Variables**. Ajoute les trois
clés (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
`VITE_EMAILJS_PUBLIC_KEY`) pour les trois environnements.

⚠️ **Les variables `VITE_` sont figées au moment du build.** Après les avoir
ajoutées, va dans l'onglet Deployments et clique **Redeploy** sur le dernier
déploiement — sinon elles ne seront pas prises en compte.

Tant que ce n'est pas fait, le formulaire affiche automatiquement ton adresse
mail en repli. Le site reste utilisable.

---

## 4. Brancher le domaine IONOS

### Côté Vercel

**Settings → Domains** → saisis ton domaine (avec et sans `www`).
Vercel affiche alors une carte avec **les valeurs exactes à recopier**.

### Côté IONOS

**Domaines & SSL** → clique sur ton domaine → onglet **DNS**.

Crée ou modifie ces deux enregistrements :

| Type | Nom / Host | Valeur | TTL |
|---|---|---|---|
| A | `@` | `76.76.21.21` | 3600 |
| CNAME | `www` | *la valeur affichée par Vercel* | 3600 |

**La cible du CNAME est propre à ton projet** — de la forme
`xxxxx.vercel-dns-xxx.com`. Recopie celle de ta carte de domaine Vercel, ne
prends aucune valeur trouvée sur un forum.

Deux pièges classiques :

- IONOS crée souvent un enregistrement A par défaut vers une page de
  parking. **Modifie-le**, n'en ajoute pas un second : deux A sur le même
  nom provoquent des pannes intermittentes.
- Si IONOS a auto-créé un enregistrement A pour `www`, supprime-le. `www`
  doit être un CNAME, pas un A.

Compte de quelques minutes à quelques heures de propagation. Le certificat
HTTPS est émis automatiquement par Vercel une fois les records valides.

### Puis mets l'URL à jour dans le code

Si ton domaine n'est pas `maf-studio.fr`, modifie-le à **trois endroits** :

1. `src/site.ts` → constante `SITE_URL` (alimente le SEO et les données
   structurées)
2. `index.html` → balises `og:url` et `canonical`
3. `public/sitemap.xml` → balise `<loc>`

---

## 5. Vérifier avant d'annoncer

- [ ] Le site s'ouvre sur ton téléphone
- [ ] `ton-domaine.fr/mentions-legales` en accès direct affiche la page
      (et non une 404) — c'est `vercel.json` qui gère ça
- [ ] Le bouton « Réserver 20 minutes » ouvre bien Cal.com sur un créneau
      de 20 minutes
- [ ] Le formulaire de contact t'envoie réellement un mail
- [ ] Le cadenas HTTPS est présent

## Reste à produire

- [ ] `public/og-image.jpg` en 1200×630 — sans elle, tes partages LinkedIn
      et WhatsApp s'afficheront sans visuel
- [ ] Vérifier que `apesoft.fr` est présentable (son robots.txt bloque la
      vérification automatique)
- [ ] Mentions légales : l'hébergeur déclaré doit être **Vercel Inc.,
      440 N Barranca Ave #4133, Covina, CA 91723, États-Unis**
- [ ] Supprimer le paragraphe « médiation de la consommation » si tu ne
      factures que des professionnels

## Coût annuel

| Poste | Coût |
|---|---|
| Hébergement Vercel (Hobby) | 0 € |
| Domaine IONOS | déjà payé |
| Cal.com | 0 € |
| EmailJS (200 mails/mois) | 0 € |

## Note

`public/_redirects` est conservé pour Cloudflare Pages et Netlify. Vercel
l'ignore et utilise `vercel.json`. Garder les deux ne coûte rien et te
laisse la possibilité de changer d'hébergeur sans retoucher le code.
