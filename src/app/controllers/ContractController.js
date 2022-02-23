
import Contract from "../models/Contract";
import schemaContract from '../../validators/contractValidator'
import Trainee from "../models/Trainee";
import Company from "../models/Company";
import Category from "../models/Category";

export default class ContractController {
    async index(req, res) {
        try {
            const contracts = await Contract.findAll({
                attributes:['id','start_validity','end_validity','status' ,'remuneration','extra'],
                include: [
                    {association: 'trainee'},
                    {association: 'category'},
                    {association: 'company'},
                ]})
            res.status(200).json({message: 'success', contracts})
        } catch (e) {
            res.status(400).json({message: e.message })
        }
    }
    async store(req, res) {
        try {
            const { trainee_id , category_id , company_id, start_validity, end_validity, remuneration, extra } = req.body
            
            const trainee = await Trainee.findByPk(trainee_id);
            if(!trainee) throw new Error("Trainee ainda não cadastrado.")
            
            const category = await Category.findByPk(category_id);
            if(!category) throw new Error("Categoria ainda não cadastrado.")

            const company = await Company.findByPk(company_id);
            if(!company) throw new Error("Company ainda não cadastrado.")
            
            if(!await schemaContract.isValid(req.body)) throw new Error("Dados inválidos.")
            const contract = await Contract.create({trainee_id , category_id , company_id, start_validity, end_validity, remuneration, extra})
            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel cadastrar, ${e.message}` })
        }
    }
    async show(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const contract = await Contract.findByPk(id, {
                attributes:['id','start_validity','end_validity','status' ,'remuneration','extra'],
                include: [
                    {association: 'trainee'},
                    {association: 'category'},
                    {association: 'company'},
                ]})
            if(!contract) throw new Error("Contrato não encontrado.");
            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel encontrar, ${e.message}` })
        }
    }
    async update(req, res){
        try {
            const { id } = req.params
            const {
                start_validity,
                end_validity,
                remuneration,
                status,
                extra,
                category_id
            } = req.body
            
            if(!Number(id) ) throw new Error("Identificador inválido.");

            const contract = await Contract.findByPk(id)
            if(!contract) throw new Error("Contrato não encontrado.");
            if(!contract.status && status) throw new Error("Este contrato já esta desativado.");

            const category = await Category.findByPk(category_id)
            if(!category) throw new Error("Nova categoria não encontrado.");

            contract.start_validity = new Date(start_validity)
            contract.end_validity = new Date(end_validity)
            contract.remuneration = remuneration
            contract.status = status
            contract.extra = extra
            contract.category = category.id
            
            await contract.save()

            res.status(200).json({message: 'success', contract})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel atualizar, ${e.message}` })
        }
    }
}