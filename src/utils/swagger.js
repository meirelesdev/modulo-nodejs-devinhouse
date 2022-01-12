const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Crud de Usuários',
        description: 'Estas é a documentação para as rotas relacionadas a Usuários.',
    },
    host: 'localhost:5000',
    schemes: ['http'],
};

const outputFile = './src/swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);