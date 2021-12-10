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
    if(id){
        newDataUsers = users.map(user => {
            return user.id === id ? {...user, ...userData } : user
        })
    } else {
        newDataUsers = [...users, {id: users.length +1, ...userData}]
    }
    save(newDataUsers, 'users')
}
const deleteUserById = (id) => {
    const users = getUsers()
    const position = getPosition(users, id)
    if(position > -1 ) {
        users.splice(position, 1)
        save(users, 'users')
    } else {
        throw new Error('It is not possible to delete this user.')
    }
}

module.exports = {
    getUsers,
    getUserById,
    createOrUpdateUser,
    deleteUserById
}
