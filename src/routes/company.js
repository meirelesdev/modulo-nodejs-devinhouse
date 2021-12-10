const { index, show, createCompany, updateCompany, deleteCompany } = require('../controllers/companyController')
const express = require('express')
const routes = express.Router()

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', createCompany);
routes.patch('/:id', updateCompany);
routes.delete('/:id', deleteCompany);

module.exports = routes