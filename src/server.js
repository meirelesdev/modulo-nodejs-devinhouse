const fileSystem = require('fs')
const express = require('express')
const cors = require('cors')
const routes = require('./routes/v1/index')

const app = express()
const bodyParser = express.json()

app.use(bodyParser)
app.use(cors())

app.use(routes)

const port = 5000
app.listen(port,()=>console.log('Server rodando na porta '+ port))