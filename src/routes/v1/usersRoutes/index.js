const usersController = require('../../../controllers/userController')

const express = require('express')
const routes = express.Router()

routes.get('/', usersController.index);
routes.get('/:id', usersController.show);
routes.post('/', usersController.createUser);
routes.post('/import', usersController.importUsers);
routes.patch('/:id', usersController.updateUser);
routes.delete('/:id', usersController.deleteUser);

module.exports = routes