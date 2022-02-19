import express from "express";
import PostController from '../../app/controllers/PostController'
import auth from "../../middlewares/auth"

const postsRoutes = express.Router()
const postsController = new PostController()

postsRoutes.get('/posts', postsController.index)
postsRoutes.get('/posts/:id', postsController.show)

postsRoutes.get('/posts/users/:id', auth, postsController.showByUser)
postsRoutes.post('/posts/users/:id', auth, postsController.store)
postsRoutes.patch('/posts/:id', auth, postsController.update)
postsRoutes.delete('/posts/:id', auth, postsController.destroy)

export default postsRoutes
