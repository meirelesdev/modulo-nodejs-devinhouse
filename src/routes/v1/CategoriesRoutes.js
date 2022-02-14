import express from "express";
import CategoryController from '../../app/controllers/CategoryController'

const categoriesRoutes = express.Router()
const categoryController = new CategoryController()

categoriesRoutes.get('/categories', categoryController.index)
categoriesRoutes.get('/categories/:id', categoryController.show)
categoriesRoutes.post('/categories', categoryController.store)
categoriesRoutes.patch('/categories/:id', categoryController.update)
categoriesRoutes.delete('/categories/:id', categoryController.destroy)

export default categoriesRoutes
