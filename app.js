import express from 'express';


//! Création du serveur web
const app = express();

//TODO Configuration du serveur

//! Définir les routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/danger', (req, res) => {
    throw new Error('Ca va pété 💣');
});


//! Démarrer le serveur
app.listen(8080, () => {
    console.log(`Web server is running on port ${8080}`);
});