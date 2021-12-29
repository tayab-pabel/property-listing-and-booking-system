import * as yup from 'yup'

const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a vaid email.')
    .required('Required!'),
})

export default ForgotPasswordSchema
