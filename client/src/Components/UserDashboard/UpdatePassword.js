import { useFormik } from 'formik'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import ForgotPasswordSchema from '../Schemas/ForgotPasswordSchema'

const UpdatePassword = ({ editPanelCloser }) => {
  const { resetPassword, currentUser } = useAuth()
  const formik = useFormik({
    initialValues: {
      email: currentUser && currentUser.email ? currentUser.email : '',
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      try {
        await resetPassword(values.email)
        alert('Password reset email sent')
      } catch (error) {
        alert(error.message)
      }
    },
  })

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik

  return (
    <div>
      <form
        className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
          <div className='sm:col-span-6'>
            <label
              htmlFor='confirm-new-password'
              className='block font-medium text-blue-dark'
            >
              Password Reset Mail
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
          </div>
          {values.email.length !== 0 && errors.email && (
            <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
          )}
        </div>
        <div className='pt-4 flex justify-end'>
          <button
            onClick={() => editPanelCloser('password')}
            type='button'
            className='bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
          >
            Send Password Reset Link
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword
