import User from "../model/User"

export default class UserController {
    async index(req, res) {
        try {
            const users = await User.findAll()
            res.json({ message: 'success', users })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            res.json({ message: 'success', user })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
    async store(req, res) {
        const { name, nickname, email, password } = req.body
        try {
            const user = await User.create({ name, nickname, email, password_hash: password })
            res.json({ message: 'success', user })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const { name, nickname, email, password } = req.body
            const user = await User.findByPk(id)
            console.log(user)
            user.name = name || user.name
            user.nickname = nickname || user.nickname
            user.email = email || user.email
            user.password_hash = password || user.password_hash
            await user.save()
            res.json({ message: 'success', user })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
    async destroy(req, res) {
        const { id } = req.params
        try {
            const user = await User.findByPk(id)
            await user.destroy()
            res.json({ message: 'success', id })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
