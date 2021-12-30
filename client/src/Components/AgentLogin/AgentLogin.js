import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  MailIcon,
} from '@heroicons/react/outline'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const AgentLogin = () => {
  const [show, setShow] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        let url = 'https://propertymarketbd.herokuapp.com/api/user/signin'
        let loginData = JSON.stringify({
          email: values.email,
          password: values.password,
        })

        const configuration = {
          headers: {
            'content-type': 'application/json',
          },
        }
        const { data } = await axios.post(url, loginData, configuration)
        alert(JSON.stringify(data, null, 2))
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
              Log in to your account
            </h2>
            <div className='mb-6'>
              <p className='mt-6 text-center text-base  text-blue-dark'>
                Don’t have an account?{' '}
                <Link to='/agent-signup' className='text-blue-light'>
                  Sign Up
                </Link>
              </p>
            </div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
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
                    placeholder='Email'
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
                    placeholder='Password'
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
                Log In
              </button>
            </form>

            <div className='mt-6 text-center'>
              <Link to='/agent-forgot-password' className='text-blue-light'>
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentLogin
