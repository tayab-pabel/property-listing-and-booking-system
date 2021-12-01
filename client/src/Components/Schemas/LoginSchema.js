import * as yup from 'yup';

const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

const LoginSchema = yup.object().shape({

  email: yup
    .string()
    .email('Enter a vaid email')
    .required('Email is required'),

  password: yup
    .string()
    .required('Enter your password')
    .matches(PasswordRegEx, 'Uppercase, lowercase and, special character are required.')
    .min(8, 'Password should be minimum 8 character')
    .max(50, 'Too long'),
    
})

export default LoginSchema;