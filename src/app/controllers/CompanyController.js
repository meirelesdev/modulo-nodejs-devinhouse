import Company from "../models/Company";
import schemaCompany from '../../validators/companyValidator'
import Address from "../models/Address";

export default class CompanyController {

    async index(req, res) {
        try {
            const companies = await Company.findAll({
                include: [
                    {association: 'contracts'},
                    {association: 'address'},
                ]
            })
            res.status(200).json({message: 'success', companies})
        } catch (e) {
            res.status(400).json({message: e.message })
        }
    }
    async store(req, res) {
        try {
            const { cnpj, company_name, contact, rh_analyst_name, supervisor_name, address } = req.body
            const [instAddress, created ] = await Address.findOrCreate({
                where: address
            })
            const dataCompany = {
                cnpj,
                company_name,
                contact,
                rh_analyst_name,
                supervisor_name,
                address_id: Number(instAddress.dataValues.id)
            }
            if(!await schemaCompany.isValid(dataCompany)) throw new Error("Dados inválidos.")
            const company = await Company.create(dataCompany)
            res.status(200).json({message: 'success', company})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel cadastrar, ${e.message}` })
        }
    }
    async show(req, res){
        try {
            const { id } = req.params
            console.log(id)
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const company = await Company.findByPk(id, {
                include: [
                    {association: 'contracts'},
                    {association: 'address'},
                ]
            })
            if(!company) throw new Error("Empresa não encontrado.");
            res.status(200).json({message: 'success', company})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel encontrar, ${e.message}` })
        }
    }
    async update(req, res){
        try {
            const { id } = req.params
            if(!Number(id) ) throw new Error("Identificador inválido.");
            const company = await Company.findByPk(id)
            if(!company) throw new Error("Empresa não encontrado.");
            const { cnpj, company_name, contact, rh_analyst_name, supervisor_name, address } = req.body
            const [instAddress, created ] = await Address.findOrCreate({
                where: address
            })
            const dataCompany = {
                cnpj,
                company_name,
                contact,
                rh_analyst_name,
                supervisor_name,
                address_id: Number(instAddress.dataValues.id)
            }
            company.update(dataCompany)
            await company.save()
            res.status(200).json({message: 'success', company})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel atualizar, ${e.message}` })
        }
    }
}