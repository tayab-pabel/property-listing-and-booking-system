import { useFormik } from 'formik'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { ProfileUpdateSchema } from '../Schemas/RegistrationSchema'

const UpdateProfile = ({ editPanelCloser }) => {
  const { currentUser, updateName, updateCurrentPhoneNumber } = useAuth()
  const [profile, setProfile] = React.useState(
    (currentUser && currentUser.photoURL) ||
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  )

  const formik = useFormik({
    initialValues: {
      firstName:
        currentUser && currentUser.displayName
          ? currentUser.displayName.split(' ')[0]
          : '',
      lastName:
        currentUser && currentUser.displayName
          ? currentUser.displayName.split(' ')[1]
          : '',
      phoneNumber:
        currentUser && currentUser.phoneNumber ? currentUser.phoneNumber : '',
    },
    validationSchema: ProfileUpdateSchema,
    onSubmit: async (values) => {
      try {
        let fullName = `${values.firstName} ${values.lastName}`
        await updateName(currentUser, fullName)
        await updateCurrentPhoneNumber(currentUser, values.phoneNumber)
        editPanelCloser('personal')
      } catch (error) {
        alert(error.message)
      }
    },
  })

  const handleImageUpload = () => {
    alert('uploaded')
  }

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik
  return (
    <div>
      <form
        className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
          <div className='sm:col-span-6'>
            <label htmlFor='photo' className='block font-medium text-blue-dark'>
              Photo
            </label>
            <div className='mt-1 flex items-center'>
              {profile ? (
                <img
                  className='inline-block h-12 w-12 rounded-full'
                  src={profile}
                  alt='User Profile'
                />
              ) : (
                <span className='inline-block h-10 w-10 rounded-full overflow-hidden bg-blue-soft'>
                  <svg
                    className='h-full w-full text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                  </svg>
                </span>
              )}
              <div className='ml-4 flex'>
                <div className='relative bg-white py-2 px-3 border border-blue-dark rounded-lg flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-light'>
                  <label
                    htmlFor='avatar'
                    className='relative font-medium text-blue-dark pointer-events-none'
                  >
                    <span>Change</span>
                    <span className='sr-only'>user photo</span>
                  </label>
                  <input
                    id='avatar'
                    name='avatar'
                    type='file'
                    onChange={(e) => {
                      setProfile(URL.createObjectURL(e.target.files[0]))
                    }}
                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-lg'
                  />
                </div>
                <button
                  onClick={handleImageUpload}
                  className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className='sm:col-span-6'>
            <label
              htmlFor='first-name'
              className='block font-medium text-blue-dark'
            >
              First Name
            </label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              placeholder='First Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
            {values.firstName.length !== 0 && errors.firstName && (
              <p className='mt-1 text-xs text-red-500'>{errors.firstName}</p>
            )}
          </div>
          <div className='sm:col-span-6'>
            <label
              htmlFor='last-name'
              className='block font-medium text-blue-dark'
            >
              Last Name
            </label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Last Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
            {values.lastName.length !== 0 && errors.lastName && (
              <p className='mt-1 text-xs text-red-500'>{errors.lastName}</p>
            )}
          </div>

          <div className='sm:col-span-6'>
            <label
              htmlFor='phone-number'
              className='block font-medium text-blue-dark'
            >
              Phone Number
            </label>
            <input
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              placeholder='Phone Number'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
            {values.phoneNumber.length !== 0 && errors.phoneNumber && (
              <p className='mt-1 text-xs text-red-500'>{errors.phoneNumber}</p>
            )}
          </div>
        </div>
        <div className='pt-4 flex justify-end'>
          <button
            onClick={() => editPanelCloser('personal')}
            type='button'
            className='bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
