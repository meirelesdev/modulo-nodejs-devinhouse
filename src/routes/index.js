import express from "express"
import categoriesRoutes from './v1/categoriesRoutes'
import companiesRoutes from './v1/companiesRoutes'
import traineesRoutes from './v1/traineesRoutes'
import contractsRoutes from './v1/contractsRoutes'

const router = express.Router()

const routes = [
    categoriesRoutes,
    traineesRoutes,
    companiesRoutes,
    contractsRoutes
]

router.use('/v1', routes)

export default router
