import express from "express";
import PermissionController from '../../app/controllers/PermissionController'
import auth from "../../middlewares/auth"

const permissionsRoutes = express.Router()
const permissionController = new PermissionController()

permissionsRoutes.get('/permissions', auth, permissionController.index)
permissionsRoutes.get('/permissions/:id', auth, permissionController.show)
permissionsRoutes.post('/permissions', auth, permissionController.store)
permissionsRoutes.patch('/permissions/:id', auth, permissionController.update)
permissionsRoutes.delete('/permissions/:id', auth, permissionController.destroy)

export default permissionsRoutes
