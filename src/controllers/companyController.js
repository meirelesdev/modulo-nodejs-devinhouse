const { getAll } = require('../utils/UserRepositoryMemory')

const index = async (req, res)=>{
    const users = getAll()
    return res.status(200).json({message: "sucesso", data: users})
}
const show = async (req, res ) => {
    const { id } = req.params
    const users = getAll()
    const user = users.find(u => u.id === parseInt(id))    
    return res.status(200).json({message: "sucesso", data: user})
}
const createUser = async (req, res) => {

}
const updateUser = async (req, res) => {
    
}
const deleteUser = async (req, res ) => {

}

module.exports = {
    index,
    show,
    createUser,
    updateUser,
    deleteUser
}