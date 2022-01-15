const { getAll, save, getPosition } = require("../utils/functions")

const getUsers = () => {
    return getAll('users');
}
const getUserById = (id) => {
    const users = getUsers()
    return users.find(user => user.id === id)
}
const createOrUpdateUser = (userData, id = null) => {
    const users = getUsers()
    let newDataUsers = []
    if (id) {
        newDataUsers = users.map(user => {
            return user.id === id ? { ...user, ...userData } : user
        })
    } else {
        newDataUsers = [...users, { id: users.length + 1, ...userData }]
    }
    save(newDataUsers, 'users')
}
const deleteUserById = (id) => {
    const users = getUsers()
    const position = getPosition(users, id)
    if (position > -1) {
        users.splice(position, 1)
        save(users, 'users')
    } else {
        throw new Error('It is not possible to delete this user.')
    }
}
const createUsersXLSXToObject = (dataXLSX) => {
    const TOTAL_COLUNAS = 4
    const [firstPlain] = Object.keys(dataXLSX)
    const cellsOfPlain = getCellsOfPlain(dataXLSX[firstPlain])
    const totalLinhas = cellsOfPlain.length / TOTAL_COLUNAS
    return makeArrayUsers(totalLinhas, dataXLSX, firstPlain)
}
const getCellsOfPlain = (dataPlain) => {
    return Object.keys(dataPlain).filter((cell) => {
        const isNumber = parseInt(cell.slice(1, 2))
        return !isNaN(isNumber)
    })
}
const makeArrayUsers = (totalLinhas, dataXLSX, firstPlain) => {
    const MODEL = {
        NAME: 'A',
        AGE: 'B',
        JOB: 'C',
        STATE: 'D',
    }
    const arrayUsers = []
    for (let linha = 1; linha <= totalLinhas; linha++) {
        const user = {}
        for (const key in MODEL) {
            if (dataXLSX[firstPlain][`${MODEL[key]}${linha}`].v === key.toLowerCase()) continue
            const field = key.toLowerCase()
            const value = dataXLSX[firstPlain][`${MODEL[key]}${linha}`].v
            user[field] = value
        }
        if (Object.keys(user).length > 0) {
            arrayUsers.push(user)
        }
    }
    return arrayUsers
}
module.exports = {
    getUsers,
    getUserById,
    createOrUpdateUser,
    deleteUserById,
    createUsersXLSXToObject
}
