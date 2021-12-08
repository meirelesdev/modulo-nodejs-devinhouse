const { getAll } = require('../utils/UserRepositoryMemory')

const index = async (req, res)=>{
    const users = getAll()
    return res.status(200).json({message: "sucesso", data: users})
}
const indexOne = async (req, res ) => {
    const { id } = req.params
    const users = getAll()
    const user = users.find(u => u.id === parseInt(id))    
    return res.status(200).json({message: "sucesso", data: user})
}

module.exports = {
    index,
    indexOne
}