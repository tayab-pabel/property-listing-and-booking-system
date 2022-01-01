import { Formik } from 'formik'
import React from 'react'

const AgentDetailsEdit = ({ agent, editPanelCloser }) => {
  const [logo, setLogo] = React.useState(agent.logoUrl)
  const handleImageUpload = () => {
    alert('uploaded')
  }

  return (
    <Formik>
      <form className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
          <div className='sm:col-span-6'>
            <label htmlFor='photo' className='block font-medium text-blue-dark'>
              Photo
            </label>
            <div className='mt-1 flex items-center'>
              <img
                className='inline-block w-32'
                src={`https://propertymarketbd.herokuapp.com/uploads/avatars/${agent.avatar}`}
                alt=''
              />
              <div className='ml-4 flex'>
                <div className='relative bg-white py-2 px-3 border border-blue-dark rounded-lg flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-light'>
                  <label
                    htmlFor='logo'
                    className='relative font-medium text-blue-dark pointer-events-none'
                  >
                    <span>Change</span>
                    <span className='sr-only'>user photo</span>
                  </label>
                  <input
                    id='logo'
                    name='logo'
                    type='file'
                    onChange={(e) =>
                      setLogo(URL.createObjectURL(e.target.files[0]))
                    }
                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-lg'
                  />
                </div>
                <button
                  onClick={handleImageUpload}
                  type='button'
                  className='ml-3 bg-transparent py-2 px-3 border border-transparent rounded-lg font-medium text-blue-dark hover:text-blue-gray-700 focus:outline-none border-blue-dark ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-light'
                >
                  Update Photo
                </button>
              </div>
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='first-name'
              className='block font-medium text-blue-dark'
            >
              First Name
            </label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='last-name'
              className='block font-medium text-blue-dark'
            >
              Last Name
            </label>
            <input
              type='text'
              name='last-name'
              id='last-name'
              autoComplete='family-name'
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='user-type'
              className='block font-medium text-blue-dark'
            >
              Agent Type
            </label>
            <select
              id='user-type'
              name='user-type'
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
            >
              <option />
              <option value='first_time_buyer'>Residential Agent</option>
              <option value='buyer_not_first_time'>Commercial Agent</option>
              <option value='property_to_sell'>
                Residential and Commercial Agent
              </option>
            </select>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='phone-number'
              className='block font-medium text-blue-dark'
            >
              Phone Number
            </label>
            <input
              type='text'
              name='phone-number'
              id='phone-number'
              autoComplete='tel'
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='location'
              className='block font-medium text-blue-dark'
            >
              Location
            </label>
            <input
              type='text'
              name='location'
              id='location'
              autoComplete='location'
              className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
            />
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='postcode'
              className='block font-medium text-blue-dark'
            >
              Postcode
            </label>
            <input
              type='text'
              name='postcode'
              id='postcode'
              autoComplete='postcode'
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
                id='description'
                name='description'
                rows={4}
                className='block w-full border border-blue-dark rounded-lg sm:text-sm focus:ring-blue-light focus:border-blue-light'
                defaultValue={''}
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
    </Formik>
  )
}

export default AgentDetailsEdit
