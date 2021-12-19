const { getAll, save, getPosition } = require("../utils/functions");
const { getUserById } = require("./userService");

const getCompanies = async () => {
    const companiesData = getAll('companies')
    const companies = companiesData.map(async (company) => {
        const employees = company.employees.map(async (employee) => await getUserById(employee.id))
        const owner = await getUserById(company.owner.id)
        const employeesResolved = await Promise.all(employees)
        return { ...company, employees: employeesResolved, owner }
    })
    return Promise.all(companies)
}
const getCompanyById = async (id) => {
    const companies = await getCompanies()
    const company = companies.find(company => company.id === id)
    const dataEmployees = company.employees.map(async (employee) => await getUserById(employee.id))
    company.employees = await Promise.all(dataEmployees)
    company.owner = await getUserById(company.owner.id)
    return Promise.resolve(company)
}

const createOrUpdateCompany = async (companyData, id = null) => {
    const companies = await getCompanies()
    let newDataCompanies = []
    if (id) {
        newDataCompanies = companies.map(company => {
            return company.id === id ? { ...company, ...companyData } : company
        })
    } else {
        newDataCompanies = [...companies, { id: companies.length + 1, ...companyData }]
    }
    save(newDataCompanies, 'companies')
}
const deleteCompanyById = async (id) => {
    const companies = await getCompanies()
    const position = getPosition(companies, id)
    if (position > -1) {
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
