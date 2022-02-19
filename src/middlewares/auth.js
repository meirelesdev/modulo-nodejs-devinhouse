import  { verify } from 'jsonwebtoken'
const auth = (req, res, next) =>{
    const { authorization } = req.headers
    if(!authorization) res.status(401).send({message:"Acesso não autorizado."})

    const isAuth = verify(authorization, process.env.SECRET)
    if(!isAuth) res.status(401).send({message:"Acesso não autorizado."})
    next()
}
export default auth