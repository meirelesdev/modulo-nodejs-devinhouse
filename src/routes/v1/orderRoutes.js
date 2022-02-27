const routes = require('express').Router()

const OrderController = require('../../app/controllers/OrderController')

routes.get('/orders/restaurants/:restaurant_id', OrderController.index)
routes.post('/orders', OrderController.store)
routes.get('/orders/:order_number', OrderController.show)
routes.patch('/orders/:order_number', OrderController.update)
routes.delete('/orders/:order_number', OrderController.destroy)


module.exports = routes