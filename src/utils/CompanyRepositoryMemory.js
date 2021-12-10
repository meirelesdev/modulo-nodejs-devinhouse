const fs = require('fs')

const createOrUpdateCompany = (company) => {
    let companies = getAll()
    let hasCompany = companies.filter(u => u.id == company.id)
    console.log(hasCompany)
}
const save = (companies) => {
    fs.writeFileSync('src/database/company.json', JSON.stringify(companies))
}
const getAll = () => {
    return JSON.parse(fs.readFileSync('src/database/company.json'), 'utf8')
}
module.exports = {
    getAll,
    save,
    createOrUpdateCompany
}