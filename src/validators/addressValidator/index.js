import * as Yup from 'yup'

export default Yup.object().shape({
      cep: Yup.string().required(),
      street: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().required()
})