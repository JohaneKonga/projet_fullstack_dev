# Mon projet API

## Installation

1. Clonez ce référentiel.
2. Installer les dépendances : `npm install`
3. Configurez votre connexion MongoDB (mettez à jour `.env` si nécessaire).
4. Démarrez le serveur : `npm run start`

## Variables d'environnement

Créez un fichier `.env` avec les variables suivantes :

- `PORT` : Numéro de port du serveur (par défaut : 3000)
- `MONGODB_URI` : URI de connexion MongoDB
- `ACCESS_TOKEN_KEY`: code secret utilisé pour crypter le token
- `REFRESH_TOKEN_KEY`: code secret utilisé pour crypter le refresh token

## Initialisation des données(en mode développement ou test)

1. Tapez la commande `node seed.js` pour éxecuter le script
2. Démarrez le serveur de développement: `npm run dev`

## Documentation API

Accédez à la documentation Swagger sur : http://localhost:3000/api/docs

## routes

- `POST /auth/login` : pour l'authentification et la génération de tokens
- `POST /auth/register` : pour inscrire un nouvel utilisateur
- `POST /auth/logout` : pour déconnecter un utilisateur
- `/api/offers` : Pour le CRUD (Create, Read, Update, Delete) des Offers
  - `POST /api/offers` : Créer une offre
  - `GET /api/offers` : Lire toutes les offres
  - `GET /api/offers/me` : Lire toutes mes offres
  - `GET /api/offers/details/:id` : Lire une offre par son ID
  - `PATCH /api/offers/:id` : Mettre à jour une offre par son ID
  - `DELETE /api/offers/:id` : Supprimer une offre par son ID
- `/api/purchases` : Pour le CRUD des Purchases
  - `POST /api/purchases` : Créer une achat
  - `GET /api/purchases` : Lire toutes les achats
  - `GET /api/purchases/me` : Lire toutes mes achats
  - `GET /api/purchases/details/:id` : Lire une achat par son ID
  - `PATCH /api/purchases/:id` : Mettre à jour une achat par son ID
  - `DELETE /api/purchases/:id` : Supprimer une achat par son ID
- `/api/users` : Pour le CRUD des Users
  - `GET /api/users` : Lire tous les utilisateurs
  - `GET /api/users/details/:id` : Lire un utilisateur par son ID
  - `PATCH /api/users/:id` : Mettre à jour un utilisateur par son ID
  - `DELETE /api/users/:id` : Supprimer un utilisateur par son ID

## Licence

Ce projet est sous licence MIT.
