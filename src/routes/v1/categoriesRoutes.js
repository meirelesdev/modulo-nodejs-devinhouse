import express from "express";
import CategoryControlle from "../../app/controllers/CategoryController";
const categoriesRoutes = express.Router()
const categoryController = new CategoryControlle()

categoriesRoutes.get('/categories', categoryController.index)
categoriesRoutes.post('/categories', categoryController.store)

export default categoriesRoutes
