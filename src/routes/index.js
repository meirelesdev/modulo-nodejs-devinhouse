const express = require('express')
const routes = express.Router()
const companiesRoutes = require('./v1/companiesRoutes')
const usersRoutes = require('./v1/usersRoutes')

routes.use('/api/v1/', [companiesRoutes, usersRoutes])


module.exports = routes