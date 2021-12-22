import { MailIcon } from '@heroicons/react/outline'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import ForgotPasswordSchema from '../Schemas/ForgotPasswordSchema'

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik

  return (
    <div>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <h2 className='mb-6 text-center text-2xl font-black text-blue-dark'>
              Forgot your password?
            </h2>
            <div className='mb-6'>
              <p className='mt-6 text-center text-base text-blue-dark'>
                Enter your email and we’ll send you a code you can use to update
                your password
              </p>
            </div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <MailIcon
                      className='h-5 w-5 text-blue-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className='focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark'
                    required
                  />
                </div>
                {values.email.length !== 0 && errors.email && (
                  <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
                )}
              </div>

              <div>
                <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-light hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'>
                  Reset my password
                </button>
              </div>

              <div>
                <p className='text-center text-base text-blue-dark'>
                  <Link to='/login' className='text-blue-light'>
                    Go back to log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
