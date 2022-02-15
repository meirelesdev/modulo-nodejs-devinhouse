import express from "express"
import ContractController from "../../app/controllers/ContractController"

const contractsRoutes = express.Router()
const contractController = new ContractController()

contractsRoutes.get('/contracts', contractController.index)
contractsRoutes.post('/contracts', contractController.store)
contractsRoutes.get('/contracts/:id', contractController.show)
contractsRoutes.put('/contracts/:id', contractController.update)

export default contractsRoutes
