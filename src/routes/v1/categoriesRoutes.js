import express from "express";
import CategoryController from "../../app/controllers/CategoryController";


const categoriesRoutes = express.Router()
const categoryController = new CategoryController()


categoriesRoutes.get('/categories', categoryController.index)
categoriesRoutes.post('/categories', categoryController.store)

export default categoriesRoutes
