import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'

const AgentDetailsEdit = ({ agent, editPanelCloser, token }) => {
  const [proview, setPreview] = React.useState(agent.logoUrl)
  console.log(agent)

  const initialFromData = {
    name: agent.name || '',
    email: agent.email || '',
    mobile: agent.mobile || '',
    website: agent.website || '',
    avatar: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postCode: '',
    description: '',
  }

  return (
    <Formik
      initialValues={initialFromData}
      onSubmit={async (values) => {
        try {
          let formData = new FormData()
          formData.append('avatar', values.avatar)
          formData.append('name', values.name)
          formData.append('email', values.email)
          formData.append('mobile', values.mobile)
          formData.append('website', values.website)
          formData.append('facebook', values.facebook)
          formData.append('twitter', values.twitter)
          formData.append('instagram', values.instagram)
          formData.append('linkedin', values.linkedin)
          formData.append('addressLine1', values.addressLine1)
          formData.append('addressLine2', values.addressLine2)
          formData.append('city', values.city)
          formData.append('postCode', values.postCode)
          formData.append('description', values.description)

          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
          const res = await axios.put(
            'https://propertymarketbd.herokuapp.com/uploads/avatars/api/user/profile/update',
            formData,
            config
          )
          console.log(res.data)
        } catch (error) {
          alert('Something went wrong')
        }
      }}
    >
      {({ handleChange, handleSubmit, setFieldValue, values }) => (
        <form
          onSubmit={handleSubmit}
          className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'
        >
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='photo'
                className='block font-medium text-blue-dark'
              >
                Photo
              </label>
              <div className='mt-1 flex items-center'>
                <img
                  className='inline-block w-32'
                  src={
                    proview ||
                    `https://propertymarketbd.herokuapp.com/uploads/avatars/${agent.avatar}`
                  }
                  alt='Agent Photo'
                />
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
                      onChange={handleChange}
                      id='avatar'
                      name='avatar'
                      type='file'
                      onChange={(e) => {
                        setPreview(URL.createObjectURL(e.target.files[0]))
                        setFieldValue('avatar', e.target.files[0])
                      }}
                      className='absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-lg'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='name'
                className='block font-medium text-blue-dark'
              >
                Name
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='name'
                value={values.name}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='email'
                className='block font-medium text-blue-dark'
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='email'
                value={values.email}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='user-type'
                className='block font-medium text-blue-dark'
              >
                Mobile Number
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='mobile'
                value={values.mobile}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='phone-number'
                className='block font-medium text-blue-dark'
              >
                Website
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='website'
                value={values.website}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='location'
                className='block font-medium text-blue-dark'
              >
                Address Line 1
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='addressLine1'
                value={values.addressLine1}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='location'
                className='block font-medium text-blue-dark'
              >
                Address Line 2
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='addressLine2'
                value={values.addressLine2}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='city'
                className='block font-medium text-blue-dark'
              >
                City
              </label>
              <input
                onChange={handleChange}
                id='city'
                type='text'
                name='city'
                value={values.city}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='postCode'
                className='block font-medium text-blue-dark'
              >
                PostCode
              </label>
              <input
                onChange={handleChange}
                id='postCode'
                type='text'
                name='postCode'
                value={values.postCode}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='facebook'
                className='block font-medium text-blue-dark'
              >
                Facebook Profile
              </label>
              <input
                onChange={handleChange}
                id='facebook'
                type='text'
                name='facebook'
                placeholder='https://www.facebook.com/xxxxx'
                value={values.facebook}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='linkedin'
                className='block font-medium text-blue-dark'
              >
                Linkedin Profile
              </label>
              <input
                onChange={handleChange}
                id='linkedin'
                type='text'
                name='linkedin'
                placeholder='https://www.linkedin.com/in/xxxxx/'
                value={values.linkedin}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='instagram'
                className='block font-medium text-blue-dark'
              >
                Instagram Profile
              </label>
              <input
                onChange={handleChange}
                id='instagram'
                type='text'
                name='instagram'
                placeholder='https://www.instagram.com/xxxxx/'
                value={values.instagram}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='twitter'
                className='block font-medium text-blue-dark'
              >
                Twitter Profile
              </label>
              <input
                onChange={handleChange}
                id='twitter'
                type='text'
                name='twitter'
                placeholder='https://www.twitter.com/xxxxx/'
                value={values.twitter}
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            <div className='sm:col-span-6'>
              <label
                htmlFor='description'
                className='block font-medium text-blue-dark'
              >
                Overview
              </label>
              <div className='mt-1'>
                <textarea
                  onChange={handleChange}
                  id='description'
                  name='description'
                  value={values.description}
                  rows={4}
                  className='block w-full border border-blue-dark rounded-lg sm:text-sm focus:ring-blue-light focus:border-blue-light'
                />
              </div>
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
      )}
    </Formik>
  )
}

export default AgentDetailsEdit

// const initialFromData = {
//   name: agent.name || '',
//   email: agent.email || '',
//   mobile: agent.mobile || '',
//   website: agent.website || '',
//   avatar: '',
//   social: {
//     facebook: '',
//     twitter: '',
//     instagram: '',
//     linkedin: '',
//   },
//   address: {
//     addressLine1: agent.address.addressLine1 || '',
//     addressLine2: agent.address.addressLine2 || '',
//     city: agent.address.city || '',
//     postCode: agent.address.postCode || '',
//   },

//   description: agent.description || '',
// }
