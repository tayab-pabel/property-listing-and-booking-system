import { Tab } from '@headlessui/react'
import axios from 'axios'
import React, { useState, Fragment, useEffect } from 'react'
import AgentDetailsEdit from './AgentDetailsEdit'
import Loader from './../Elements/Loader'

const AgentProfile = () => {
  const agent = {
    role: 'Agent',
    agentType: 'Residential and Commercial Agent',
    name: 'Benham and Reeves',
    branch: 'Hampstead',
    email: 'info@benhams.com',
    phoneNumber: '+44 20 3463 7502',
    logoUrl: 'https://st.zoocdn.com/zoopla_static_agent_logo_(634289).png',
    address: {
      location: 'Dhanmondi R/A',
      city: 'Dhaka',
      postalCode: '1209',
      map:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.614033009866!2d90.37326543776177!3d23.741904695242088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d3068e8a1%3A0xcbebaedd39043ca6!2sUniversity%20of%20Development%20Alternative!5e0!3m2!1sen!2sbd!4v1638872109573!5m2!1sen!2sbd',
    },
    overview:
      'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
    about: {
      photos: [
        'https://st.zoocdn.com/zpg_agent_static_agent_profile_images_(62759558).jpg',
        'https://st.zoocdn.com/zpg_agent_static_agent_profile_images_(62759558).jpg',
      ],
      teamMembers: [
        {
          id: '01',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '02',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '03',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '04',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    property: [
      {
        purpose: 'Sale',
        title: 'Property For Sale',
        totalProperty: '50',
        avgAskingPrice: '5,00,000',
        avgListingTime: '20',
      },
      {
        purpose: 'Rent',
        title: 'Property For Rent',
        totalProperty: '70',
        avgAskingPrice: '40,000',
        avgListingTime: '10',
      },
    ],
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

  const { token } = JSON.parse(localStorage.getItem('loggedInUser'))

  const [currentAgent, setCurrentAgent] = useState({})

  useEffect(async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const { data } = await axios.get(
        'https://propertymarketbd.herokuapp.com/api/user/profile',
        config
      )
      setCurrentAgent(data)
    } catch (error) {
      alert(error.message)
    }
  }, [edit])

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
                {currentAgent ? (
                  <div className='mt-4 space-y-8 divide-y divide-y-blue-gray-200'>
                    <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
                      <div className='sm:col-span-3'>
                        <div className='flex items-center'>
                          <img
                            className='inline-block w-32'
                            src={`https://propertymarketbd.herokuapp.com/uploads/avatars/${currentAgent.avatar}`}
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-3'>
                        <p className='block font-medium text-blue-dark'>Name</p>
                        <p className='mt-1 text-blue-dark'>
                          {currentAgent.name}
                        </p>
                      </div>

                      <div className='sm:col-span-3'>
                        <p className='block font-medium text-blue-dark'>
                          Phone Number
                        </p>
                        <p className='mt-1 text-blue-dark'>
                          {currentAgent.mobile}
                        </p>
                      </div>
                      <div className='sm:col-span-3'>
                        <p className='block font-medium text-blue-dark'>
                          Location
                        </p>
                        <p className='mt-1 text-blue-dark'>
                          {currentAgent.address &&
                          currentAgent.address.addressLine1
                            ? currentAgent.address.addressLine1
                            : ''}
                        </p>
                      </div>
                      <div className='sm:col-span-3'>
                        <p className='block font-medium text-blue-dark'>
                          Postal Code
                        </p>
                        <p className='mt-1 text-blue-dark'>
                          {currentAgent.address && currentAgent.address.postCode
                            ? currentAgent.address.postCode
                            : ''}
                        </p>
                      </div>
                      <div className='sm:col-span-6'>
                        <p className='block font-medium text-blue-dark'>
                          Overview
                        </p>
                        <p className='mt-1 text-blue-dark'>
                          {currentAgent.description
                            ? currentAgent.description
                            : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
            ) : (
              <AgentDetailsEdit
                agent={currentAgent}
                editPanelCloser={editPanelCloser}
                token={token}
              />
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
                <p className='text-blue-dark'>{agent.email}</p>
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
                  <div className='pt-4 flex justify-end'>
                    <button
                      onClick={() => editPanelCloser('email')}
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

export default AgentProfile
