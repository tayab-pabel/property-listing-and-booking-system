import * as yup from 'yup'

const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

const RegistrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required!'),

  lastName: yup
    .string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required!'),

  postCode: yup
    .string()
    .min(4, 'Pastcode should be minimum 4 number (ex-1215).')
    .max(10, 'Too Long!')
    .required('Required!'),

  email: yup.string().email('Enter a vaid email.').required('Required!'),

  password: yup
    .string()
    .required('Required!')
    .matches(
      PasswordRegEx,
      'Uppercase, lowercase and, special character are required.'
    )
    .min(8, 'Password should be minimum 8 character.')
    .max(50, 'Too long!'),
})

export default RegistrationSchema
