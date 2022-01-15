const xlsx = require('xlsx')
const { getUsers, getUserById, createOrUpdateUser, deleteUserById, createUsersXLSXToObject } = require('../services/userService')
const { isEmpty } = require('../utils/functions')


const index = async (req, res) => {
    const users = getUsers()
    return res.status(200).json({ message: "sucesso", data: users })
}
const show = async (req, res) => {
    const { id } = req.params
    try {
        const user = getUserById(parseInt(id))
        if (!user) {
            throw new Error("User not found.")
        }
        return res.status(200).json({ message: "sucesso", data: user })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const createUser = async (req, res) => {
    const data = req.body
    try {
        if (isEmpty(data)) {
            throw new Error('No data to save.')
        }
        createOrUpdateUser(data)
        return res.status(200).json({ message: "Sucesso: Usuario criado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const updateUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        if (isEmpty(data)) throw new Error('No data to update.')
        createOrUpdateUser(data, parseInt(id))
        return res.status(200).json({ message: "Sucesso: Usuario atualizado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        if(!id) {
            throw new Error('It is not possible to delete this user.')
        }
        deleteUserById(parseInt(id))
        return res.status(200).json({ message: "Sucesso: usuario deletado." })
    } catch (e) {
        return res.status(404).json({ message: e.message })
    }
}
const importUsers = async (req, res) => {
    try {
        if(!req.file) throw new Error("Sem arquivo para processar")
        const { Sheets:file } = xlsx.read(req.file.buffer, {type: 'buffer'})
        const data = createUsersXLSXToObject(file)
        data.forEach(newUser => {
            createOrUpdateUser(newUser)
        })
        res.status(201).send({ message: 'Usuários importados com sucesso', data: data })
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

module.exports = {
    index,
    show,
    createUser,
    updateUser,
    deleteUser,
    importUsers
}