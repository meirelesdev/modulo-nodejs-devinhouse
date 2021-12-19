const { getCompanies, getCompanyById, createOrUpdateCompany, deleteCompanyById } = require('../services/companyService')
const { isEmpty } = require('../utils/functions')

const index = async (req, res) => {
    const companies = await getCompanies()
    return res.status(200).json({ message: "sucesso", data: companies })
}
const show = async (req, res) => {
    const { id } = req.params
    const company = await getCompanyById(parseInt(id))
    try {
        if (!company) {
            throw new Error("Company not found.")
        }
        return res.status(200).json({ message: "sucesso", data: company })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const createCompany = async (req, res) => {
    const data = req.body
    try {
        if (isEmpty(data)) {
            throw new Error('No data to save.')
        }
        createOrUpdateCompany(data)
        return res.status(200).json({ message: "Sucesso: Empresa criada." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const updateCompany = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        if (isEmpty(data)) throw new Error('No data to update.')
        createOrUpdateCompany(data, parseInt(id))
        return res.status(200).json({ message: "Sucesso: Empresa atualizado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const deleteCompany = async (req, res) => {
    const { id } = req.params
    try {
        if(!id) {
            throw new Error('It is not possible to delete this company.')
        }
        deleteCompanyById(parseInt(id))
        return res.status(200).json({ message: "Sucesso: empresa deletada." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}

module.exports = {
    index,
    show,
    createCompany,
    updateCompany,
    deleteCompany
}