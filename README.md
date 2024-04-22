# Mon projet API

## Installation
1. Clonez ce référentiel.
2. Installer les dépendances : `npm install`
3. Configurez votre connexion MongoDB (mettez à jour `.env` si nécessaire).
4. Démarrez le serveur : `npm start`

## Variables d'environnement
Créez un fichier `.env` avec les variables suivantes :
- `PORT` : Numéro de port du serveur (par défaut : 3000)
- `MONGODB_URI` : chaîne de connexion MongoDB

## Documentation API
Accédez à la documentation Swagger sur : http://localhost:3000/api-docs

## Itinéraires
- `/api/users/purchases` : Obtenez l'historique des achats de l'utilisateur
- Ajoutez d'autres itinéraires selon vos besoins

## Licence
Ce projet est sous licence MIT.