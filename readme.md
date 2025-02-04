# Demo 02 - Express

## Création du projet projet
- Initialisation du package npm
```
npm init
```

- Installation des packages necessaires \
  _Choix du moteur de vue [Liste dispo](https://www.javatpoint.com/expressjs-template)_
```
npm install express@5
npm install handlebars express-handlebars
npm install morgan

# Alternative
npm install express@5 handlebars express-handlebars morgan
```

- Customiser le fichier « package.json »
  - Ajouter les scripts _(start, dev)_
  - Définir le type de projet _(commonjs, module)_

- Initialisation de git \
  _Ne pas oublie le .gitignore !_
```
git init
```

## Principe de fonctionnement des middlewares
_Les middlewares sont des fonctions qui seront executé à la reception d'une requete._ \
_Le passage au prochain middleware est déclanché par l'utilisation de la méthode "next"._
![Principe middleware](/ressources/middleware.png)