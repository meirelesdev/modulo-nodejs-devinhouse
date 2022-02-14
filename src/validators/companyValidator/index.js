import * as Yup from 'yup'

export default Yup.object().shape({
    cnpj: Yup.string().required(),
    company_name: Yup.string().required(),
    contact: Yup.string().required(),
    rh_analyst_name: Yup.string().required(),
    supervisor_name: Yup.string().required(),
    address_id: Yup.number().required(),
})