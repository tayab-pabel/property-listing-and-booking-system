import { Tab } from '@headlessui/react'
import React, { useState, Fragment } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import UpdateEmail from './UpdateEmail'
import UpdateProfile from './UpdateProfile'

const Profile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  const user = {
    name:
      currentUser && currentUser.displayName
        ? currentUser.displayName
        : 'Chelsea Hagon',
    userType: 'I am a first-time buyer',
    username: 'chelsea.hagon',
    email:
      currentUser && currentUser.email
        ? currentUser.email
        : 'chelseahagon@gmail.com',
    phoneNumber: '0123456789',
    location: 'Dhanmondi, Dhaka',
    postalCode: '1215',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.',
    imageUrl:
      currentUser && currentUser.photoURL
        ? currentUser.photoURL
        : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      <Tab.Group as='div'>
        <div className=''>
          <div className='border-b border-gray-200'>
            <Tab.List className='-mb-px flex space-x-8'>
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
                Personal Information
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
          <Tab.Panel className='mt-5'>
            <div className='w-full flex justify-between'>
              <h2 className='text-xl font-medium text-blue-dark'>
                Personal Information
              </h2>
              {!edit.personal && (
                <button
                  onClick={() => editPanelOpener('personal')}
                  type='button'
                  className='bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
                >
                  Edit
                </button>
              )}
            </div>

            {!edit.personal ? (
              <div className=''>
                <div className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
                  <div className='grid gap-y-6'>
                    <div className=''>
                      <div className='flex items-center'>
                        <img
                          className='inline-block h-12 w-12 rounded-full'
                          src={user.imageUrl}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className=''>
                      <p className='block font-medium text-blue-dark'>Name</p>
                      <p className='mt-1 text-blue-dark'>{user.name}</p>
                    </div>
                    <div className=''>
                      <p className='block font-medium text-blue-dark'>
                        Phone Number
                      </p>
                      <p className='mt-1 text-blue-dark'>{user.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=''>
                <UpdateProfile editPanelCloser={editPanelCloser} />
              </div>
            )}
          </Tab.Panel>

          <Tab.Panel className='mt-5'>
            <div className='w-full flex justify-between'>
              <h2 className='text-xl font-medium text-blue-dark'>Email</h2>
              {!edit.email && (
                <button
                  onClick={() => editPanelOpener('email')}
                  type='button'
                  className='bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
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
              <div>
                <UpdateEmail editPanelCloser={editPanelCloser} />
              </div>
            )}
          </Tab.Panel>

          <Tab.Panel className='mt-5'>
            <div className='w-full flex justify-between'>
              <h2 className='text-xl font-medium text-blue-dark'>Password</h2>
              {!edit.password && (
                <button
                  onClick={() => editPanelOpener('password')}
                  type='button'
                  className='bg-white border border-blue-dark rounded-lg py-2 px-4 inline-flex justify-center font-medium text-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
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

export default Profile
