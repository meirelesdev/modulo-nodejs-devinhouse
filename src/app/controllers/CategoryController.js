import Category from "../model/Category"

export default class CategoryController {
    async index(_, res) {
        try {
            const posts = await Category.findAll()
            res.json({ message: 'success', posts })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async show(req, res) {
        const { id } = req.params
        try {
            const category = await Category.findByPk(id)
            res.json({ message: 'success', category })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async store(req, res) {
        try {
            const { name } = req.body
            const category = await Category.create({name})
            res.json({ message: 'success', category })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const { name } = req.body
            const category = await Category.findByPk(id)
            category.name =  name
            await category.save()
            res.json({ message: 'success', category })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params
            res.json({ message: 'success', id })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
}