const { index, show, createUser, updateUser, deleteUser } = require('../controllers/userController')

const express = require('express')
const routes = express.Router()

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', createUser);
routes.patch('/:id', updateUser);
routes.delete('/:id', deleteUser);

module.exports = routes