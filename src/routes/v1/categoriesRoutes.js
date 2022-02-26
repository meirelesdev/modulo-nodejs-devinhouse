const routes = require('express').Router()

const CategoryController = require('../../app/controllers/CategoryController')

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.get('/categories/:id', CategoryController.show)
routes.patch('/categories/:id', CategoryController.update)
routes.delete('/categories/:id', CategoryController.destroy)

module.exports = routes