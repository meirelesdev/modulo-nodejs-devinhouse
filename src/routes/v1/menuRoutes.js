const routes = require('express').Router()

const MenuRoutes = require('../../app/controllers/MenuController')

routes.get('/menus', MenuRoutes.index)
routes.post('/menus', MenuRoutes.store)
routes.get('/menus/:id', MenuRoutes.show)
routes.patch('/menus/:id', MenuRoutes.update)
routes.delete('/menus/:id', MenuRoutes.destroy)

module.exports = routes