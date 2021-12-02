const express = require('express')
const { createFolder } = require('./utils')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({message:'funcioando...'})
})
app.post('/', (req, res)=>{
    const { name } = req.body
    console.log(name)
    const msg = createFolder(name)
    res.status(201).json({message:msg})
})

app.listen(5000,()=>console.log('rodando...'))