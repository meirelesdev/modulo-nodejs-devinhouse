import express from "express"
import TraineeController from "../../app/controllers/TraineeController"

const traineesRoutes = express.Router()
const traineeController = new TraineeController()

traineesRoutes.get('/trainees', traineeController.index)
traineesRoutes.post('/trainees', traineeController.store)
traineesRoutes.get('/trainees/:id', traineeController.show)
traineesRoutes.put('/trainees/:id', traineeController.update)

export default traineesRoutes
