require('dotenv/config')
require('./database')
const express = require("express");
const swaggerUI = require('swagger-ui-express')

const swaggerFile = require('./swagger.json')
const App = require("./app");
const routes = require('./routes')


const PORT = process.env.PORT || 3333
const HOST = process.env.HOST || `http://localhost:${PORT}`

const app = new App(express());

app.addMiddleware(express.json());
app.addRoutes(routes)

app.addDocs('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.run(PORT, () => {
    console.log(`Server is running ${HOST}`);
});
