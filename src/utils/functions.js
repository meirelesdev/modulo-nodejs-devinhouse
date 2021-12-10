const fs = require('fs')

const getAll = (fileName) => {
    return JSON.parse(fs.readFileSync(`src/database/${fileName}.json`), 'utf8')
}
const save = (data, fileName) => {
    fs.writeFileSync(`src/database/${fileName}.json`, JSON.stringify(data))
}
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
}
const getPosition = (base, dataToFind ) => {
    return base.findIndex((item) => item.id === dataToFind)
}
module.exports = {
    getAll,
    save,
    isEmpty,
    getPosition
}