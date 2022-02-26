const routes = require('express').Router()

const AddressesController = require('../../app/controllers/AddressesController')

routes.get('/addresses', AddressesController.index)
routes.post('/addresses', AddressesController.store)
routes.get('/addresses/:id', AddressesController.show)
routes.patch('/addresses/:id', AddressesController.update)
routes.delete('/addresses/:id', AddressesController.destroy)


module.exports = routes