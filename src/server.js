const express = require('express');
const app = express()
const routes = require('./routes')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

app.use(express.json())
app.use(routes);

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.listen(5000, () => console.log('Executando'))