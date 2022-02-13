import express from "express"
import categoriesRoutes from './v1/categoriesRoutes'
import traineesRoutes from './v1/traineesRoutes'

const router = express.Router()

router.use('/v1', [categoriesRoutes, traineesRoutes])

export default router
