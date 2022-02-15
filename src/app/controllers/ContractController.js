
import Contract from "../models/Contract";
import schemaContract from '../../validators/contractValidator'

export default class ContractController {
    async index(req, res) {
        try {
            const contracts = await Contract.findAll()
            res.status(200).json({message: 'success', contracts})
        } catch (e) {
            res.status(400).json({message: e.message })
        }
    }
    async store(req, res) {
        try {
            // if(!await schemaContract.isValid(req.body)) throw new Error("Dados inválidos.")
            const contract = await Contract.create(req.body)
            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel cadastrar, ${e.message}` })
        }
    }
    async show(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const contract = await Contract.findByPk(id)
            if(!contract) throw new Error("Contrato não encontrado.");
            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel encontrar, ${e.message}` })
        }
    }
    async update(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const contract = await Contract.findByPk(id)
            if(!contract) throw new Error("Contrato não encontrado.");
            contract.update(req.body)
            await contract.save()
            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel atualizar, ${e.message}` })
        }
    }
}