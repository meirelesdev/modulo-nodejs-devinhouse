const multer = require('multer')
const express = require('express')
const routes = express.Router()

const confMuter = multer()
const usersController = require('../../../controllers/userController')

routes.get('/', usersController.index);
routes.get('/:id', usersController.show);
routes.post('/', usersController.createUser);

routes.post('/import', confMuter.single('users'),usersController.importUsers);

routes.patch('/:id', usersController.updateUser);
routes.delete('/:id', usersController.deleteUser);

module.exports = routes