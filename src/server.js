const fileSystem = require('fs')
const express = require('express')
const cors = require('cors')
const usersRoutes = require('./routes/users')

const app = express()
const bodyParser = express.json()

app.use(bodyParser)
app.use(cors())

app.use('/users', usersRoutes)

const port = 5000
app.listen(port,()=>console.log('Server rodando na porta '+ port))