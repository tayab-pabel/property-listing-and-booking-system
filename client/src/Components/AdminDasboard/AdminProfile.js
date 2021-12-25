import { Tab } from '@headlessui/react'
import React, { useState, Fragment } from 'react'

const AdminProfile = () => {

  const admin = {
    role: 'Admin',
    name: 'Tayab Pabel',
    email: 'tayabpabel@gmail.com',
    phoneNumber: '+880176148399',
    avatarUrl:'https://lh3.googleusercontent.com/ogw/ADea4I7i_O9dBQQjzubnT0o_Fo3eCIdRwGu1-rrZmmLOews=s83-c-mo',
    address: 'Mogbazar, Dhaka',
    postalCode: '1217',
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='px-4 sm:px-6 py-6 lg:py-6 bg-white lg:shadow lg:rounded-lg'>
        <Tab.Group as="div">
          <div className="">
            <div className="border-b border-gray-200">
              <Tab.List className="-mb-px flex space-x-8">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-blue-light text-blue-light'
                        : 'border-transparent text-blue-dark hover:border-gray-300',
                      'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                    )
                  }
                >
                  Profile Information
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-blue-light text-blue-light'
                        : 'border-transparent text-blue-dark hover:border-gray-300',
                      'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                    )
                  }
                >
                  Email
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-blue-light text-blue-light'
                        : 'border-transparent text-blue-dark hover:border-gray-300',
                      'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                    )
                  }
                >
                  Password
                </Tab>
              </Tab.List>
            </div>
          </div>

          <Tab.Panels as={Fragment}>
            <Tab.Panel className="mt-5">
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
                    <div className='sm:col-span-6'>
                      <div className='flex items-center'>
                        <img
                          className='inline-block w-20 rounded-full'
                          src={admin.avatarUrl}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-3'>
                      <p className='block font-medium text-blue-dark'>Name</p>
                      <p className='mt-1 text-blue-dark'>{admin.name}</p>
                    </div>
                    <div className='sm:col-span-3'>
                      <p className='block font-medium text-blue-dark'>Phone Number</p>
                      <p className='mt-1 text-blue-dark'>{admin.phoneNumber}</p>
                    </div>
                    <div className='sm:col-span-3'>
                      <p className='block font-medium text-blue-dark'>Address</p>
                      <p className='mt-1 text-blue-dark'>{admin.address}</p>
                    </div>
                    <div className='sm:col-span-3'>
                      <p className='block font-medium text-blue-dark'>Postal Code</p>
                      <p className='mt-1 text-blue-dark'>{admin.postalCode}</p>
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
                          className='inline-block w-20 rounded-full'
                          src={admin.avatarUrl}
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
                        htmlFor='name'
                        className='block font-medium text-blue-dark'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
                      />
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
                        Address
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
            </Tab.Panel>

            <Tab.Panel className="mt-5">
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
                <p className='text-blue-dark'>{admin.email}</p>
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
            </Tab.Panel>

            <Tab.Panel className="mt-5">
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
    </div>
  )
}

export default AdminProfile
