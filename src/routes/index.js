import express from "express";
import usersRoutes from "./v1/UsersRoutes";
import categoriesRoutes from "./v1/CategoriesRoutes";
import permissionsRoutes from "./v1/PermissionsRoutes";
import rolesRoutes from "./v1/RolesRoutes";
import postsRoutes from "./v1/PostsRoutes";

const router = express.Router()
router.get('/', (req, res)=>{
    // #swagger.ignore = true
    res.redirect('/api/v1/docs')
})
router.use('/api/v1', [usersRoutes, categoriesRoutes, postsRoutes, rolesRoutes, permissionsRoutes] )

export default router