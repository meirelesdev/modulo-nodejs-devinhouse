import express from "express";
import RoleController from '../../app/controllers/RoleController'
import auth from "../../middlewares/auth"

const rolesRoutes = express.Router()
const roleController = new RoleController()

rolesRoutes.get('/roles', auth, roleController.index)
rolesRoutes.get('/roles/:id', auth, roleController.show)
rolesRoutes.post('/roles', auth, roleController.store)
rolesRoutes.patch('/roles/:id', auth, roleController.update)
rolesRoutes.delete('/roles/:id', auth, roleController.destroy)

export default rolesRoutes
