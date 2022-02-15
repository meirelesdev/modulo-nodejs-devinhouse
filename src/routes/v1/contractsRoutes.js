import express from "express"
import TraineeController from "../../app/controllers/TraineeController"

const contractsRoutes = express.Router()
const traineeController = new TraineeController()

contractsRoutes.get('/trainees', traineeController.index)
contractsRoutes.post('/trainees', traineeController.store)
contractsRoutes.get('/trainees/:id', traineeController.show)
contractsRoutes.put('/trainees/:id', traineeController.update)

export default contractsRoutes
