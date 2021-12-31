import {
  DeviceMobileIcon,
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { AgentSignupSchema } from '../Schemas/RegistrationSchema'

const AgentSignup = () => {
  const [show, setShow] = useState(false)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: AgentSignupSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let fullName = `${values.firstName} ${values.lastName}`
        let mobileNumebr = `+88${values.mobile}`
        let url = 'https://propertymarketbd.herokuapp.com/api/user/signup'
        let formData = new FormData()
        formData.append('name', fullName)
        formData.append('email', values.email)
        formData.append('mobile', mobileNumebr)
        formData.append('password', values.password)

        const configuration = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
        const { data } = await axios.post(url, formData, configuration)
        alert(JSON.stringify(data, null, 2))
        resetForm()
      } catch (error) {
        console.log(error)
      }
    },
  })

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik

  return (
    <div>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='mb-6'>
            <Link to='/'>
              <img className='mx-auto h-12 w-auto' src={logo} alt='' />
            </Link>
          </div>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <h2 className='mb-6 text-center text-2xl font-black text-blue-dark'>
              Create agent account
            </h2>
            <div className='mb-6'>
              <p className='mt-6 text-center text-base text-blue-dark'>
                Already have an account?{' '}
                <Link to='/agent-login' className='text-blue-light'>
                  Log In
                </Link>
              </p>
            </div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <UserIcon
                      className='h-5 w-5 text-blue-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className='focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark'
                    placeholder='First Name'
                  />
                </div>
                {values.firstName.length !== 0 && errors.firstName && (
                  <p className='mt-1 text-xs text-red-500'>
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <UserIcon
                      className='h-5 w-5 text-blue-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className='focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark'
                    placeholder='Last Name'
                  />
                </div>
                {values.lastName.length !== 0 && errors.lastName && (
                  <p className='mt-1 text-xs text-red-500'>{errors.lastName}</p>
                )}
              </div>

              <div>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <DeviceMobileIcon
                      className='h-5 w-5 text-blue-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    name='mobile'
                    type='text'
                    placeholder='Mobile Number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    className='focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark'
                  />
                </div>
                {values.mobile.length !== 0 && errors.mobile && (
                  <p className='mt-1 text-xs text-red-500'>{errors.mobile}</p>
                )}
              </div>

              <div>
                <label htmlFor='email' className='sr-only'>
                  Email Address
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
                    placeholder='Email Address'
                  />
                </div>
                {values.email.length !== 0 && errors.email && (
                  <p className='mt-1 text-xs text-red-500'>{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <LockClosedIcon
                      className='h-5 w-5 text-blue-dark'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    id='password'
                    name='password'
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className='focus:ring-blue-light focus:border-blue-light block w-full pl-10 border-2 border-blue-dark rounded-md text-blue-dark placeholder-blue-dark'
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
                  >
                    {show ? (
                      <EyeOffIcon
                        className='h-5 w-5 text-blue-dark'
                        aria-hidden='true'
                      />
                    ) : (
                      <EyeIcon
                        className='h-5 w-5 text-blue-dark'
                        aria-hidden='true'
                      />
                    )}
                  </div>
                  {values.password.length !== 0 && errors.password && (
                    <p className='mt-1 text-xs text-red-500'>
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-light hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentSignup
