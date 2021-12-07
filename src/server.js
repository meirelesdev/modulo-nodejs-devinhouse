const fileSystem = require('fs')

const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()
const upload = multer()

app.use(express.json())
app.use(cors())


app.patch('/users', (req, res)=>{

})


const port = 5000
app.listen(port,()=>console.log('Server rodando na porta '+ port))