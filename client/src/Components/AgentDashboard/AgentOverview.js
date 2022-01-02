import {
  CheckCircleIcon,
  ClockIcon,
  CurrencyBangladeshiIcon,
  FireIcon,
  HomeIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import React from 'react'
import axios from 'axios'
import Loader from './../Elements/Loader'

const AgentOverview = () => {
  const agent = {
    role: 'Agent',
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
  const { token } = JSON.parse(localStorage.getItem('loggedInUser'))
  const [currentAgent, setCurrentAgent] = React.useState({})

  React.useEffect(async () => {
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
  }, [])
  console.log(currentAgent)
  return (
    <div>
      {currentAgent ? (
        <div>
          <div className='px-4 sm:px-6 py-6 xl:py-6 bg-white xl:shadow lg:rounded-lg'>
            <div className='xl:flex xl:items-center xl:justify-between'>
              <div className='flex-1 min-w-0'>
                {/* Profile */}
                <div className='xl:flex xl:items-center'>
                  <img
                    className='w-32'
                    src={`https://propertymarketbd.herokuapp.com/uploads/avatars/${currentAgent.avatar}`}
                    alt='Agent Logo'
                  />
                  <div>
                    <div className='flex items-center'>
                      <h1 className='xl:ml-3 mt-3 xl:mt-0 text-2xl font-bold leading-7 text-blue-dark xl:leading-9 xl:truncate'>
                        Good morning, {currentAgent.name}
                      </h1>
                    </div>
                    <dl className='mt-3 flex flex-col xl:ml-3 xl:mt-0 xl:flex-row xl:flex-wrap'>
                      <dt className='sr-only'>Company</dt>
                      <dd className='flex items-center text-sm text-blue-dark font-medium capitalize xl:mr-6'>
                        <LocationMarkerIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                          aria-hidden='true'
                        />
                        {currentAgent.address &&
                          currentAgent.address.addressLine1}
                        , {currentAgent.address && currentAgent.address.city}{' '}
                        {currentAgent.address &&
                          currentAgent.address.postalCode}
                      </dd>
                      <dt className='sr-only'>Account status</dt>
                      <dd className='mt-2 flex items-center text-sm text-blue-dark font-medium xl:mr-6 xl:mt-0 capitalize'>
                        <CheckCircleIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                          aria-hidden='true'
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className='mt-4 flex space-x-3 xl:mt-0 xl:ml-4'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-blue-dark text-sm font-medium rounded-lg text-blue-dark bg-white'
                >
                  Add Property
                </button>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='text-lg leading-6 font-medium text-blue-dark'>
              Property overview for sale
            </h2>
            <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-white overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <HomeIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Number of property
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[0].totalProperty}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <CurrencyBangladeshiIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Avg. asking price
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[0].avgAskingPrice}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <ClockIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Avg. listing time
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[0].avgListingTime} weeks
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='text-lg leading-6 font-medium text-blue-dark'>
              Property overview for rent
            </h2>
            <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-white backdrop-blur-md overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <HomeIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Number of property
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[1].totalProperty}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <CurrencyBangladeshiIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Avg. asking price
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[1].avgAskingPrice}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white overflow-hidden shadow rounded-lg'>
                <div className='p-5'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <ClockIcon
                        className='h-6 w-6 text-blue-dark'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-5 w-0 flex-1'>
                      <dl>
                        <dt className='text-sm font-medium text-blue-dark truncate'>
                          Avg. listing time
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {agent.property[1].avgListingTime} weeks
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AgentOverview
