import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';


//! Création du serveur web
const app = express();


//! Configuration du serveur
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//? Middleware
app.use((req, res, next) => {
    // App level middleware
    console.log(`Requete : ${req.url}`);
    next();
});

app.use(morgan('tiny'));


//! Définir les routes
app.get('/', (req, res) => {
    const today = (new Date()).toLocaleDateString('fr-be', { dateStyle: 'full' })
    res.render('index', { today });
});

app.get('/danger', (req, res) => {
    throw new Error('Ca va pété 💣');
});

//? Middleware de gestion d'erreur
//  Celui-ci se déclanche quand il y a une erreur !
//  Généralement, le middleware d'erreur est surtout utilisé en production
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Une erreur s\'est produit !')
});


//! Démarrer le serveur
app.listen(8080, () => {
    console.log(`Web server is running on port ${8080}`);
});