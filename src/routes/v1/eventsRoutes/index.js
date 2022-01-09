const eventsController = require('../../../controllers/eventsController')

const express = require('express')
const routes = express.Router()

routes.get('/', eventsController.index);
routes.get('/searchevents', eventsController.searchEventByDate);

routes.get('/:id', eventsController.show);
routes.get('/owner/:idOwner', eventsController.showByOwner);
routes.get('/guest/:idGuest', eventsController.showByGuest);

routes.post('/', eventsController.createEvent);
routes.patch('/:id', eventsController.updateEvent);
routes.delete('/:id', eventsController.deleteEvent);

module.exports = routes