const express = require('express')
const routes = express.Router()
const usersRoutes = require('./usersRoutes')
const eventsRoutes = require('./eventsRoutes')

routes.use('/users', usersRoutes)
routes.use('/events', eventsRoutes)

module.exports = routes