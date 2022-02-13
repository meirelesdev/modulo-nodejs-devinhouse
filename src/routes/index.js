import express from "express"

import categoriesRoutes from './v1/categoriesRoutes'
const router = express.Router()

router.use('/v1', [categoriesRoutes])

export default router
