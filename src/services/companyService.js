const { getAll, save, getPosition } = require("../utils/functions")

const getCompanies = () => {
    return getAll('companies');
}
const getCompanyById = (id) => {
    const companies = getCompanies()
    return companies.find(company => company.id === id)
}
const createOrUpdateCompany = (companyData, id = null) => {
    const companies = getCompanies()
    let newDataCompanies = []
    if(id){
        newDataCompanies = companies.map(company => {
            return company.id === id ? {...company, ...companyData } : company
        })
    } else {
        newDataCompanies = [...companies, {id: companies.length + 1, ...companyData}]
    }
    save(newDataCompanies, 'companies')
}
const deleteCompanyById = (id) => {
    const companies = getCompanies()
    const position = getPosition(companies, id)
    if(position > -1 ) {
        companies.splice(position, 1)
        save(companies, 'companies')
    } else {
        throw new Error('It is not possible to delete this company.')
    }
}

module.exports = {
    getCompanies,
    getCompanyById,
    createOrUpdateCompany,
    deleteCompanyById
}
