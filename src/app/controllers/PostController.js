import Post from "../model/Post"

export default class PostController {
    async index(_, res) {
        try {
            const posts = await Post.findAll()
            res.json({ message: 'success', posts })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async show(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findByPk(id)
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async showByUser(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findAll({
                where: {
                    user_id : id,
                }
            })
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async store(req, res) {
        try {
            const { id } = req.params
            const { title, content, url_cover, status, is_fake_new } = req.body

            const post = await Post.create({ title, content, url_cover, status, is_fake_new, user_id: id })
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const { title, content, url_cover, status, is_fake_new } = req.body
            const post = await Post.findByPk(id)

            post.title = title ||  post.title
            post.content = content ||  post.content
            post.url_cover = url_cover ||  post.url_cover
            post.status = status || post.status
            post.is_fake_new = is_fake_new ||  post.is_fake_new
            
            await post.save()
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async destroy(req, res) {
        const { id } = req.params
        try {
            const post = await Post.findByPk(id)
            await post.destroy()
            res.json({ message: 'success', id })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}