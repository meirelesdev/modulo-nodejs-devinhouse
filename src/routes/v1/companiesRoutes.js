import express from "express";
import CompanyController from '../../app/controllers/CompanyController'

const companiesRoutes = express.Router()
const companyController = new CompanyController()

companiesRoutes.get('/companies', companyController.index)
companiesRoutes.get('/companies/:id', companyController.show)
companiesRoutes.post('/companies', companyController.store)
companiesRoutes.put('/companies/:id', companyController.update)

export default companiesRoutes
