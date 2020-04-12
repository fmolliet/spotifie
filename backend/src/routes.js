const { Router } = require('express');

const upload = require('./configs/storage');
const SingleController = require('./controllers/SingleController');
const ArtistController = require('./controllers/ArtistController');
const ListenController = require('./controllers/ListenController');

const routes = Router();

routes.get('/listen', ListenController.get);

routes.get('/artists', ArtistController.index )
    .post('/artists', ArtistController.store );

routes.get('/singles', SingleController.index )
    .post('/singles', upload.single('audio'), SingleController.store )
    .delete('/singles/:id', SingleController.delete);


module.exports = routes;