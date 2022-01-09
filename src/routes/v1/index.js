const express = require('express')
const routes = express.Router()
const usersRoutes = require('./usersRoutes')
const eventsRoutes = require('./eventsRoutes')

routes.use('/v1/users', usersRoutes)
routes.use('/v1/events', eventsRoutes)

module.exports = routes