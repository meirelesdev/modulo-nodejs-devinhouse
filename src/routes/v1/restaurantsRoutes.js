const routes = require('express').Router()

const RestaurantsController = require('../../app/controllers/RestaurantsController')

routes.get('/restaurants', RestaurantsController.index)
routes.post('/restaurants', RestaurantsController.store)
routes.get('/restaurants/:id', RestaurantsController.show)
routes.patch('/restaurants/:id', RestaurantsController.update)
routes.delete('/restaurants/:id', RestaurantsController.destroy)

module.exports = routes