const routes = require('express').Router()
const addressesRoutes = require('./v1/addressRoutes')
const restaurantsRoutes = require('./v1/restaurantsRoutes')
const categoryRoutes = require('./v1/categoriesRoutes')

routes.use('/api/v1',[ addressesRoutes, restaurantsRoutes, categoryRoutes])

module.exports = routes