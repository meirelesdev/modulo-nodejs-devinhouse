import * as Yup from 'yup'

export default Yup.object().shape({
    start_validity: Yup.date('dd/mm/yyy').required(),
    end_validity: Yup.date('dd/mm/yyy').required(),
    remuneration: Yup.number().required(),
    extra: Yup.number().required()
})