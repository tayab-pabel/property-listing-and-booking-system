import * as yup from 'yup'

const PasswordRegEx = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
const phoneNumberRegEx = /^[0-1]{2}[0-9]{9}/

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

  email: yup
    .string()
    .email('Enter a vaid email.')
    .required('Required!'),

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

export const ProfileUpdateSchema = yup.object().shape({
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
  phoneNumber: yup
    .string()
    .matches(phoneNumberRegEx, 'Invalid Phone Number')
    .max(11, 'Invalid Phone Number')
    .required('Required !'),
})
