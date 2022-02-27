const routes = require('express').Router()

const AddressController = require('../../app/controllers/AddressController')

routes.get('/addresses', AddressController.index)
routes.post('/addresses', AddressController.store)
routes.get('/addresses/:id', AddressController.show)
routes.patch('/addresses/:id', AddressController.update)
routes.delete('/addresses/:id', AddressController.destroy)


module.exports = routes