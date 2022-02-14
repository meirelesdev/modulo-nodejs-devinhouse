import * as Yup from 'yup'

export default Yup.object().shape({
  title: Yup.string().required(),
  content: Yup.string().required(),
  url_cover: Yup.string(),
  category_id: Yup.number().required(),
  user_id: Yup.number().required(),
});

