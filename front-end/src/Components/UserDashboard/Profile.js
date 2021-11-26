import React, { useState } from 'react'

const Profile = () => {

  const user = {
    name: 'Chelsea Hagon',
    userType: 'I am a first-time buyer',
    username: 'chelsea.hagon',
    email: 'chelseahagon@gmail.com',
    phoneNumber: '0123456789',
    location: 'Dhanmondi, Dhaka',
    postalCode: '1215',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

  const [edit, setEdit] = useState({
    profile: false,
    email: false,
    password: false,
  })

  const editPanelOpener = (item) => {
    setEdit({ ...edit, [item]: true })
  }

  const editPanelCloser = (item) => {
    setEdit({ ...edit, [item]: false })
  }

  return (
    <div className=''>
      <div className='px-4 sm:px-6 py-6 lg:py-6 bg-white shadow lg:rounded-lg'>
        <h2 className='text-2xl font-extrabold text-blue-dark'>Profile</h2>
      </div>

    {/* Personal Information */}
    <div className='lg:mt-5 px-4 sm:px-6 py-6 lg:py-6 bg-white shadow lg:rounded-lg'>

      <div className='w-full flex justify-between'>
        <h2 className='text-xl font-medium text-blue-dark'>
            Personal Information
        </h2>
        {!edit.personal && (
          <button
              onClick={() => editPanelOpener('personal')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
            Edit
          </button>
        )}
      </div>

      {!edit.personal ? (
      <div className=''>
        <div className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            <div className='sm:col-span-3'>
              <div className='flex items-center'>
                <img
                  className='inline-block h-12 w-12 rounded-full'
                  src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                  alt=''
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <p className='block font-medium text-blue-dark'>Name</p>
              <p className='mt-1 text-blue-dark'>{user.name}</p>
            </div>
            <div className='sm:col-span-3'>
              <p className='block font-medium text-blue-dark'>User Type</p>
              <p className='mt-1 text-blue-dark'>{user.userType}</p>
            </div>
            <div className='sm:col-span-3'>
              <p className='block font-medium text-blue-dark'>Phone Number</p>
              <p className='mt-1 text-blue-dark'>{user.phoneNumber}</p>
            </div>
            <div className='sm:col-span-3'>
              <p className='block font-medium text-blue-dark'>Location</p>
              <p className='mt-1 text-blue-dark'>{user.location}</p>
            </div>
            <div className='sm:col-span-3'>
              <p className='block font-medium text-blue-dark'>Postal Code</p>
              <p className='mt-1 text-blue-dark'>{user.postalCode}</p>
            </div>
            <div className='sm:col-span-6'>
              <p className='block font-medium text-blue-dark'>About Me</p>
              <p className='mt-1 text-blue-dark'>{user.about}</p>
            </div>
          </div>
        </div>
      </div>
      ) : (

      <div className='' editPanelCloser={editPanelCloser}>
        <form className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
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
                  className='inline-block h-12 w-12 rounded-full'
                  src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
                  alt=''
                />
                <div className='ml-4 flex'>
                  <div className='relative bg-white py-2 px-3 border border-blue-dark rounded-lg flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-light'>
                    <label
                      htmlFor='user-photo'
                      className='relative font-medium text-blue-dark pointer-events-none'
                    >
                      <span>Change</span>
                      <span className='sr-only'>user photo</span>
                    </label>
                    <input
                      id='user-photo'
                      name='user-photo'
                      type='file'
                      className='absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-lg'
                    />
                  </div>
                  <button
                    type='button'
                    className='ml-3 bg-transparent py-2 px-3 border border-transparent rounded-lg font-medium text-blue-dark hover:text-blue-gray-700 focus:outline-none focus:border-blue-dark focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-light'
                  >
                    Remove
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
                User Type
              </label>
              <select
                id='user-type'
                name='user-type'
                autoComplete='user-type'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
              >
                <option />
                <option value='first_time_buyer'>
                  I am a first-time buyer
                </option>
                <option value='buyer_not_first_time'>
                  I am a buyer (not first-time)
                </option>
                <option value='property_to_sell'>
                  I have a property to sell
                </option>
                <option value='property_to_let'>
                  I have a property to let
                </option>
                <option value='offer_on_own_property'>
                  I have an offer on my property
                </option>
                <option value='recently_sold'>I have recently sold</option>
                <option value='looking_to_invest'>
                  I am an investor/I'm hoping to invest
                </option>
                <option value='looking_to_rent' selected='selected'>
                  I am looking to rent
                </option>
                <option value='curious_having_a_look'>
                  I am interested in property
                </option>
                <option value='agent'>I am an agent</option>
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
                About Me
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
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => editPanelCloser('personal')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Update
            </button>
          </div>
        </form>
      </div>
      )}

    </div>

    {/* Change Email */}
    <div className='lg:mt-5 px-4 sm:px-6 py-6 lg:py-6 bg-white shadow lg:rounded-lg'>

      <div className='w-full flex justify-between'>
        <h2 className='text-xl font-medium text-blue-dark'>
          Email
        </h2>
        {!edit.email && (
          <button
              onClick={() => editPanelOpener('email')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
            Edit
          </button>
        )}
      </div>

      {!edit.email ? (
      <div className=''>
        <p className='text-blue-dark'>{user.email}</p>
      </div>
      ) : (

      <div className='' editPanelCloser={editPanelCloser}>
        <form className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            
            <div className='sm:col-span-6'>
              <label
                htmlFor='email'
                className='block font-medium text-blue-dark'
              >
                New Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='given-name'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            
          </div>
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => editPanelCloser('email')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Update
            </button>
          </div>
        </form>
      </div>
      )}

    </div>

    {/* Change Password */}
    <div className='lg:mt-5 px-4 sm:px-6 py-6 lg:py-6 bg-white shadow lg:rounded-lg'>

      <div className='w-full flex justify-between'>
        <h2 className='text-xl font-medium text-blue-dark'>
          Password
        </h2>
        {!edit.password && (
          <button
              onClick={() => editPanelOpener('password')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
            Edit
          </button>
        )}
      </div>

      {!edit.password ? (
      <div className=''>
        <p className='text-blue-dark'>**********</p>
      </div>
      ) : (

      <div className='' editPanelCloser={editPanelCloser}>
        <form className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            
            <div className='sm:col-span-6'>
              <label
                htmlFor='current-password'
                className='block font-medium text-blue-dark'
              >
                Current Password
              </label>
              <input
                type='email'
                name='current-password'
                id='current-password'
                autoComplete='current-password'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='new-password'
                className='block font-medium text-blue-dark'
              >
                New Password
              </label>
              <input
                type='email'
                name='new-password'
                id='new-password'
                autoComplete='new-password'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>

            <div className='sm:col-span-6'>
              <label
                htmlFor='confirm-new-password'
                className='block font-medium text-blue-dark'
              >
                Confirm New Password
              </label>
              <input
                type='email'
                name='confirm-new-password'
                id='confirm-new-password'
                autoComplete='confirm-new-password'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>
            
          </div>
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => editPanelCloser('password')}
              type="button"
              className="bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Update
            </button>
          </div>
        </form>
      </div>
      )}

    </div>

    </div>
  )
}

export default Profile
