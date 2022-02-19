import App from './index'
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const PORT = process.env.PORT || 3333

App.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

App.listen(PORT,()=>console.log('rodando...'))