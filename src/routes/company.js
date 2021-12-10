const { index, show, createUser, updateUser, deleteUser } = require('../controllers/companyController')
const express = require('express')
const routes = express.Router()

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', createUser);
routes.patch('/:id', updateUser);
routes.delete('/:id', deleteUser);

// route.post('/users', (req, res)=>{
//     const user = req.body
//     createOrUpdateUser(user)
//     return res.status(200).json({message: "Retorno do metodo post"})
// })
// route.put('/users', (req, res)=>{
//     return res.status(200).json({message: "Retorno do metodo put"})
// })

// route.patch('/users', (req, res)=>{
//     return res.status(200).json({message: "Retorno do metodo patch"})
// })
// route.delete('/users', (req, res)=>{
//     return res.status(200).json({message: "Retorno do metodo delete"})
// })

module.exports = routes