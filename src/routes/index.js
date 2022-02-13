import express from "express"

const router = express.Router()
const teste = (req, res)=>{
    res.send({message: 'Funcionando'})
}
router.get('/', teste)

export default router
