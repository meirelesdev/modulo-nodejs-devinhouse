const routes = require('express').Router()

const OrderController = require('../../app/controllers/OrderController')

routes.get('/orders/restaurants/:restaurant_id', OrderController.index)
routes.post('/orders', OrderController.store)
routes.get('/orders/:order_number', OrderController.show)
routes.patch('/orders/:order_number', OrderController.update)
routes.delete('/orders/:order_number', OrderController.destroy)

// rotas para adicionar e remover itens
routes.post('/orders/:order_id/additem', OrderController.add)
routes.patch('/orders/orderitems/:item_id', OrderController.updateItem)
routes.delete('/orders/removeitem/:item_id', OrderController.remove)

module.exports = routes