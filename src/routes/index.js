const User = require('../app/models/User')
const routes = require('express').Router()

routes.get('/', async(req, res)=>{
    const users = await User.findAll();
    res.json({message: 'tudo ok', users})
})

module.exports = routes