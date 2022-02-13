import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    rg: Yup.string().required(),
    cpf: Yup.string().required(),
    primary_phone_contact: Yup.string().required(),
    secondary_phone_contact: Yup.string().required(),
    data_birth: Yup.date().required(),
    father_name: Yup.string().required(),
    mother_name: Yup.string().required(),
    have_special_needs: Yup.boolean().required()
})