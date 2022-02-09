import express from "express";
import usersRoutes from "./v1/UsersRoutes";
import categoriesRoutes from "./v1/CategoriesRoutes";

const router = express.Router()

router.use('/api/v1', [usersRoutes, categoriesRoutes] )

export default router