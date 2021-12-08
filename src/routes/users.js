const { index, indexOne } = require('../controllers/userController')

const express = require('express')
const route = express.Router()

route.get('/', index)
route.get('/:id', indexOne)

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

module.exports = route