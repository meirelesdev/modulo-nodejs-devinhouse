const fileSystem = require('fs')

const createFolder = (folderName) => {

    if(!fileSystem.existsSync(folderName)) {
        fileSystem.mkdirSync(folderName)
        return `Pasta ${folderName} criada com sucesso.`
    }
    return `Pasta ${folderName} ja existe.`
}
const orderData = (nameToChange, data ) =>{
    
}
const readUsers = ()=>{
    return JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'));
}
function getDaysOfMonth(month, year) {
    month--;
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
       days.push(date.getDate());
       date.setDate(date.getDate() + 1);
    }
    return days;
}

const getArrayDaysOfMonth = (month) => {
    let response = [] 
    let options = getDaysOfMonth(month, (new Date()).getFullYear())
    for(let i= 0; i < options.length ; i++){
        const date = new Date( (new Date()).getFullYear(), (month-1),options[i])
        response.push(date.toLocaleString('pt-BR', {dateStyle: 'short'}))
    }
    return response
}
module.exports = {
    createFolder,
    readUsers,
    orderData,
    getArrayDaysOfMonth
}
