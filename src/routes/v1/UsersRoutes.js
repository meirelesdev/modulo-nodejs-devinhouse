import express from "express"
import UserController from '../../app/controllers/UserController'

const usersRoutes = express.Router()
const userController = new UserController()

usersRoutes.get('/users', userController.index)
usersRoutes.get('/users/:id', userController.show)
usersRoutes.post('/users', userController.store)
usersRoutes.patch('/users/:id', userController.update)
usersRoutes.delete('/users/:id', userController.destroy)

export default usersRoutes