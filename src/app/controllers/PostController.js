import Post from "../model/Post"
import schemaPost from "../../validators/postValidator/schema";
export default class PostController {
    async index(req, res) {
        // #swagger.tags = ['Post']
        try {
            const posts = await Post.findAll({
                include:[
                    {
                        association: 'category',
                        required: false
                    },
                    {
                        association: 'author',
                        required: false
                    },
                ]
            })
            res.status(200).json({posts})
        } catch (error) {
            res.status(400).json(
                { message: error.message }
            )
        }
    }
    async show(req, res) {
        // #swagger.tags = ['Post']
        try {
            const { id } = req.params
            const post = await Post.findByPk(id, {
                include: [
                    {association: 'category'},
                    {association: 'author'},
                ]
            })
            const category = await post.getCategory()
            console.log(category)
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async showByUser(req, res) {
        // #swagger.tags = ['Post']
        try {
            const { id } = req.params
            console.log(id)
            const post = await Post.addScope('activesPost', null,{override: true}).find({
                where: {
                    user_id: id
                }
            })
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async store(req, res) {
        // #swagger.tags = ['Post']
        try {
            const { id } = req.params
            const data = {...req.body, user_id: id}
            if (! await schemaPost.isValid(data)) throw new Error('Dados para cadastrar post invalidos.')
            const post = await Post.create(data)
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async update(req, res) {
        // #swagger.tags = ['Post']
        try {
            const { id } = req.params
            const { title, content, url_cover, status, is_fake_new } = req.body
            const post = await Post.findByPk(id)

            post.title = title || post.title
            post.content = content || post.content
            post.url_cover = url_cover || post.url_cover
            post.status = status || post.status
            post.is_fake_new = is_fake_new || post.is_fake_new

            await post.save()
            res.json({ message: 'success', post })
        } catch (e) {
            res.json({ message: e.message })
        }
    }
    async destroy(req, res) {
        // #swagger.tags = ['Post']
        try {
            const { id } = req.params
            const post = await Post.findByPk(id)
            if(!post) throw new Error("Não foi possivel deletar o post informado.")
            await post.destroy()
            res.json({ message: 'success', id })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}