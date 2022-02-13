import Category from "../models/Category";
import schemaCategory from '../../validators/categoryValidator'

export default class CategoryControlle {
    async index(req, res) {
        try {
            const categories = await Category.findAll()
            res.status(200).json({message: 'success', categories})
        } catch (e) {
            res.status(400).json({message: e.message })
        }
    }
    async store(req, res) {
        try {
            if(!await schemaCategory.isValid(req.body)) throw new Error("Dados inválidos.")
            const categories = await Category.create(req.body)
            res.status(200).json({message: 'success', categories})
        } catch (e) {
            res.status(400).json({message: `Não foi possivel cadastrar, ${e.message}` })
        }
    }
}