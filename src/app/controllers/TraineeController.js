
import Trainee from "../models/Trainee";
import schemaTrainee from '../../validators/traineeValidator'

export default class TraineeController {
    async index(req, res) {
        try {
            const trainees = await Trainee.findAll()
            res.status(200).json({message: 'success', trainees})
        } catch (e) {
            res.status(400).json({message: e.message })
        }
    }
    async store(req, res) {
        try {
            if(!await schemaTrainee.isValid(req.body)) throw new Error("Dados inválidos.")
            const trainee = await Trainee.create(req.body)
            res.status(200).json({message: 'success', trainee})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel cadastrar, ${e.message}` })
        }
    }
    async show(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const trainee = await Trainee.findByPk(id)
            if(!trainee) throw new Error("Trainee não encontrado.");
            res.status(200).json({message: 'success', trainee})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel encontrar, ${e.message}` })
        }
    }
    async update(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const trainee = await Trainee.findByPk(id)
            if(!trainee) throw new Error("Trainee não encontrado.");
            trainee.update(req.body)
            await trainee.save()
            res.status(200).json({message: 'success', trainee})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel atualizar, ${e.message}` })
        }
    }
}