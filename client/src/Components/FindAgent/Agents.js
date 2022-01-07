import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Agents = () => {
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
    },
    overview:
      'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
    totalPropertyForSale: '50',
    avgAskingPriceForSale: '5,00,000',
    avgListingTimeForSale: '20',
    totalPropertyForRent: '70',
    avgAskingPriceForRent: '40,000',
    avgListingTimeForRent: '10',
  }

  const [properties, setProperties] = React.useState([])

  React.useEffect(async () => {
    try {
      const result = await axios.get(
        `https://propertymarketbd.herokuapp.com/api/user/agents`
      )
      setProperties(result.data)
    } catch (error) {
      alert(error.message)
    }
  }, [])

  console.log(properties)

  return (
    <div>
      <div class='max-w-screen-xl mx-auto px-5 py-10 lg:py-10'>
        <div className='bg-white border border-blue-dark lg:grid lg:grid-cols-10 shadow p-5 rounded-lg'>
          <div className='lg:col-span-1'>
            <img className='w-28' src={agent.logoUrl} alt='Agent Logo' />
          </div>

          <div className='lg:col-span-4 mt-5 lg:mt-0 lg:ml-4'>
            <Link
              to='/agent-details'
              className='text-2xl font-bold text-blue-dark'
            >
              {agent.name} - {agent.branch}
            </Link>
            <div className='mt-1 flex items-center font-medium text-blue-dark capitalize'>
              <LocationMarkerIcon
                className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                aria-hidden='true'
              />
              {agent.address.location}, {agent.address.city} -{' '}
              {agent.address.postalCode}
            </div>
            <p className='mt-2 text-sm text-blue-dark'>
              {agent.overview
                .split(' ')
                .slice(0, 25)
                .join(' ')}
            </p>
          </div>

          <div className='lg:col-span-3 mt-5 lg:mt-0 lg:ml-4'>
            <h3 className='text-lg font-bold text-blue-dark'>
              Properties on Property Market
            </h3>

            <div className='mt-2 flex'>
              <div className=''>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.totalPropertyForRent}
                </h1>
                <p className='text-sm text-blue-dark font-medium'>For Rent</p>
              </div>
              <div className='ml-5'>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.avgAskingPriceForRent}
                </h1>
                <p className='text-sm text-blue-dark font-medium'>
                  Avg. asking price
                </p>
              </div>
              <div className='ml-5'>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.avgListingTimeForRent} weeks
                </h1>
                <p className='text-sm text-blue-dark font-medium'>
                  Avg. posting time
                </p>
              </div>
            </div>

            <div className='mt-2 flex'>
              <div className=''>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.totalPropertyForSale}
                </h1>
                <p className='text-sm text-blue-dark font-medium'>For Rent</p>
              </div>
              <div className='ml-5'>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.avgAskingPriceForSale}
                </h1>
                <p className='text-sm text-blue-dark font-medium'>
                  Avg. asking price
                </p>
              </div>
              <div className='ml-5'>
                <h1 className='text-lg font-semibold text-blue-light'>
                  {agent.avgListingTimeForSale} weeks
                </h1>
                <p className='text-sm text-blue-dark font-medium'>
                  Avg. posting time
                </p>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 mt-5 lg:mt-0 lg:ml-4'>
            <h3 className='text-lg font-bold text-blue-dark'>
              Contact Information
            </h3>
            <div className='mt-2 flex text-blue-dark'>
              <button
                type='button'
                className='w-full inline-flex items-center px-3 py-2 shadow-sm leading-4 font-medium rounded-full text-white bg-blue-light'
              >
                <PhoneIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                {agent.phoneNumber}
              </button>
            </div>
            <div className='mt-1 items-center flex text-blue-dark'>
              <button
                type='button'
                className='w-full inline-flex items-center px-3 py-2 shadow-sm leading-4 font-medium rounded-full text-white bg-blue-light'
              >
                <MailIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                {agent.email}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents
