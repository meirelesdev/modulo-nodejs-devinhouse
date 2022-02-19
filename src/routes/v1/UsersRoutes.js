import express from "express"
import UserController from '../../app/controllers/UserController'
import auth from "../../middlewares/auth"

const usersRoutes = express.Router()
const userController = new UserController()

usersRoutes.get('/users', auth, userController.index)
usersRoutes.get('/users/:id', auth, userController.show)
usersRoutes.post('/users', userController.store)
usersRoutes.patch('/users/:id', auth, userController.update)
usersRoutes.delete('/users/:id', auth, userController.destroy)

usersRoutes.post('/refresh', userController.refreshToken)
usersRoutes.post('/session', userController.session)
usersRoutes.post('/login', userController.login)


export default usersRoutes