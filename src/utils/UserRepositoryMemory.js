const fs = require('fs')

const createOrUpdateUser = (user) => {
    let users = getAll()
    let hasUser = users.filter(u => u.id == user.id)
    // save([...users, hasUser])
}
const save = (users) => {
    fs.writeFileSync('src/database/user.json', JSON.stringify(users))
}
const getAll = () => {
    return JSON.parse(fs.readFileSync('src/database/user.json'), 'utf8')
}
module.exports = {
    getAll,
    save,
    createOrUpdateUser
}