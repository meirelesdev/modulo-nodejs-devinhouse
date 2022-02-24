const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Aplicação',
        description: 'Estas é a documentação para todas as rotas do sistema.',
    },
    host: 'localhost:3333',
    schemes: ['http'],
    securityDefinitions: {
        api_key: {
            type: 'apiKey',
            name: 'authorization',
            in: 'header'
        }
    }
};

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);