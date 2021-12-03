const express = require('express')
const cors = require('cors')
const multer = require('multer')

const { createFolder } = require('./utils')
const app = express()

const upload = multer()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.status(200).json({message:'funcioando...'})
})

app.post('/', upload.single('file'), (req, res)=>{
    console.log(req.file)
    res.status(200).json({message:'funcioando...'})
})

app.post('/save', (req, res)=>{
    const { name } = req.body
    console.log(req.body)
    const msg = createFolder(`src/${name}`)

    res.status(201).json({message:msg})
})
const port = 5000
app.listen(port,()=>console.log('Server rodando na porta '+ port))