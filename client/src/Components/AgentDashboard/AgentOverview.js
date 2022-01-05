import {
  CheckCircleIcon,
  ClockIcon,
  CurrencyBangladeshiIcon,
  HomeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'
import React from 'react'
import axios from 'axios'
import Loader from './../Elements/Loader'
import { agentProertiesOverview } from '../../utilities/helperFunctions'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

const AgentOverview = () => {
  const history = useHistory()
  const { token, _id } = JSON.parse(localStorage.getItem('loggedInUser'))
  const [currentAgent, setCurrentAgent] = React.useState({})
  const [currentAgentProperties, setCurrentAgentProperties] = React.useState([])

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
      const { data: property } = await axios.get(
        `https://propertymarketbd.herokuapp.com/api/property?agentId=${_id}`
      )
      setCurrentAgent(data)
      setCurrentAgentProperties(property)
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const {
    forSale,
    avgAskingPriceSale,
    lastUploadedSale,
    forRent,
    avgAskingPriceRent,
    lastUploadedRent,
  } = agentProertiesOverview(currentAgentProperties)

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
                            {forSale}
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
                            {avgAskingPriceSale}
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
                          Last listing time
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {moment(lastUploadedSale).fromNow()}
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
                            {forRent}
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
                            {avgAskingPriceRent}
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
                          Last listing time
                        </dt>
                        <dd>
                          <div className='text-lg font-medium text-blue-light'>
                            {moment(lastUploadedRent).fromNow()}
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
