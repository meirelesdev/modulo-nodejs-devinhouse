const fileSystem = require('fs')

const express = require('express')
const cors = require('cors')
const multer = require('multer')

const { createFolder, createFile, readUsers, orderData, getArrayDaysOfMonth } = require('./utils')

const app = express()
const upload = multer()

app.use(express.json())
app.use(cors())

// [M2S02] Ex 1 - Ordenando a posição de itens
app.patch('/users', (req, res)=>{
    const data = req.body    
    if(Object.keys(data).length === 0) {
        res.status(404).json({message:'Sem dados para processar.', })
        return
    }
    console.log(data)
    const orderedData = orderData(data)
    res.status(200).json({message:'sucesso', data: orderedData})
})

// [M2S02] Ex 2 - Gerando datas
app.get('/daysofmonth/:mes', (req, res)=>{
    const { mes } = req.params;
    if(!mes) {
        res.status(404).json({message:'Informe um mes'})
        return
    }
    const daysOfMonth = getArrayDaysOfMonth(mes)
    if(daysOfMonth.length === 0 ) {
        res.status(404).json({message:'Mês informado invalido.'})
        return
    }
    res.status(200).json({message:'sucesso', data: daysOfMonth})
})
// [M2S02] Ex 3 - Salvando dados JSON
app.post('/:name', (req, res)=>{
    const { name } = req.params
    createFolder(`src/${name}`)
    
    const result = createFile(`src/${name}/data.json`)
    console.log(result)
    
    // res.status(200).json({message: 'Sucesso', data:JSON.stringify(data)})
})

app.get('/users', (req, res)=>{
    const users = readUsers();
    res.status(200).json({message:'sucesso', data: users})
})

app.post('/', upload.single('file'), (req, res)=>{
    const { folder, item } = req.body
    const { job } = req.query
    const existFolder = createFolder(folder)
    delete req.body.folder

    //Este if verifica se existe o arquivo user.json
    if (fileSystem.lstatSync('src/'+'user.json').isFile()) {
        //Neste result, retorna os dados do JSON de dentro do user
        const result = JSON.parse(fileSystem.readFileSync('src/'+'user.json', 'utf8'));
        console.log(result)
        return res.status(201).json({message: 'Caiu aqui'})
    }
    //Nesta Linha de baixo, é criado o user.json e preenche o arquivo JSON de acordo com o que foi enviado no req.body
    fileSystem.writeFileSync('src/'+'user.json', JSON.stringify(req.body));

    return res.status(201).json({message: 'Hello world'})
})

app.post('/save', (req, res)=>{
    const { name } = req.body
    console.log(req.body)
    const msg = createFolder(`src/${name}`)

    res.status(201).json({message:msg})
})
const port = 5000
app.listen(port,()=>console.log('Server rodando na porta '+ port))