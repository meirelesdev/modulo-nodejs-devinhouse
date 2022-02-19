import express from "express";
import CategoryController from '../../app/controllers/CategoryController'
import auth from "../../middlewares/auth"

const categoriesRoutes = express.Router()
const categoryController = new CategoryController()

categoriesRoutes.get('/categories', auth, categoryController.index)
categoriesRoutes.get('/categories/:id', auth, categoryController.show)
categoriesRoutes.post('/categories', auth, categoryController.store)
categoriesRoutes.patch('/categories/:id', auth, categoryController.update)
categoriesRoutes.delete('/categories/:id', auth, categoryController.destroy)

export default categoriesRoutes
