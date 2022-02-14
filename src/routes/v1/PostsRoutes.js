import express from "express";
import PostController from '../../app/controllers/PostController'

const postsRoutes = express.Router()
const postsController = new PostController()

postsRoutes.get('/posts', postsController.index)
postsRoutes.get('/posts/users/:id', postsController.showByUser)
postsRoutes.get('/posts/:id', postsController.show)
postsRoutes.post('/posts/users/:id', postsController.store)
postsRoutes.patch('/posts/:id', postsController.update)
postsRoutes.delete('/posts/:id', postsController.destroy)

export default postsRoutes
