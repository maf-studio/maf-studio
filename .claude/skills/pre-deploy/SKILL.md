---
name: pre-deploy
description: Checklist de vérification avant déploiement du site MAF Studio.
  Auto-invoke quand l'utilisateur écrit "check".
---

# Checklist pré-déploiement MAF Studio

Avant chaque déploiement, vérifie dans cet ordre :

1. Lancer les tests : `npm run lint`
2. Vérifier le build : `npm run build`
3. Tester en local : `npm run preview`
4. Vérifier que les variables d'environnement sont bien renseignées dans .env.local
5. Vérifier que le formulaire de contact EmailJS fonctionne
6. Vérifier l'affichage mobile (responsive)
7. Vérifier que Calendly s'ouvre correctement

Si tout est vert → déploiement autorisé.