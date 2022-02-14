import express from "express";
import usersRoutes from "./v1/UsersRoutes";
import categoriesRoutes from "./v1/CategoriesRoutes";
import postsRoutes from "./v1/PostsRoutes";

const router = express.Router()

router.use('/api/v1', [usersRoutes, categoriesRoutes, postsRoutes] )

export default router