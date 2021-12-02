const fileSystem = require('fs')

const createFolder = (folderName) => {

    if(!fileSystem.existsSync(folderName)) {
        fileSystem.mkdirSync(folderName)
        return `Pasta ${folderName} criada com sucesso.`
    }
    return `Pasta ${folderName} ja existe.`
}

module.exports = {
    createFolder
}