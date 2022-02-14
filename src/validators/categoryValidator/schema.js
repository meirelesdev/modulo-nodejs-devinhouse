import * as Ypu from 'yup'

export default Ypu.object().shape({
    name: Ypu.string().required()
})