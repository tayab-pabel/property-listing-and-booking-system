import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Loader from './../Elements/Loader'
import axios from 'axios'
import UpdateProperty from './UpdateProperty'

const AgentProperties = () => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  let [property, setProperty] = useState({})

  // Properties Fucntionalities
  const [currentAgentProperties, setCurrentAgentProperties] = React.useState([])
  const { _id, token } = JSON.parse(localStorage.getItem('loggedInUser'))
  React.useEffect(async () => {
    try {
      const { data: property } = await axios.get(
        `https://propertymarketbd.herokuapp.com/api/property?agentId=${_id}`
      )
      setCurrentAgentProperties(property)
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const addNewProperty = async () => {
    try {
      var config = {
        method: 'post',
        url: 'https://propertymarketbd.herokuapp.com/api/property',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const { data } = await axios(config)
      setProperty(data)
      setIsOpen(true)
    } catch (error) {
      alert(error)
    }
  }

  const editPropertyHandler = async (id) => {
    try {
      const { data } = await axios.get(
        'https://propertymarketbd.herokuapp.com/api/property/' + id
      )
      setProperty(data)
      setIsOpen(true)
    } catch (error) {
      alert('Error Occured')
    }
  }

  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden sm:rounded-lg'>
              {/* All Properties Table */}
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-6 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Title & Address
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-6 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Info & Type
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-6 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Purpose
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-6 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Status
                    </th>
                    <th scope='col' className='relative px-6 py-6'>
                      <button
                        onClick={addNewProperty}
                        className='ml-5 bg-blue-light rounded-lg py-2 px-5 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
                      >
                        Add Property
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {currentAgentProperties.length ? (
                    currentAgentProperties.map((property) => (
                      <tr key={property._id}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                className='h-10 w-10 rounded-lg'
                                src={property.propertyFeaturedImage}
                                alt=''
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-blue-dark'>
                                {property.propertyTitle}
                              </div>
                              <div className='text-sm text-blue-dark'>
                                {property.propertyAddress.addressLine1},{' '}
                                {property.propertyAddress.city} -{' '}
                                {property.propertyAddress.postCode}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium text-blue-dark'>
                            {property.propertyPrice} BDT
                          </div>
                          <div className='text-sm text-blue-dark'>
                            {property.propertyBedrooms} Beds,{' '}
                            {property.propertyBathrooms} Baths,{' '}
                            {property.propertySqft} Sqft
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-blue-dark'>
                          {property.purpose}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                            Active
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <button
                            onClick={() => editPropertyHandler(property._id)}
                            className='text-blue-light hover:text-blue-light'
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className='w-full bg-white mx-auto'>
                      <Loader />
                    </div>
                  )}
                </tbody>
              </table>

              {/* Edit Property Modal */}
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as='div'
                  className='fixed z-10 inset-0 overflow-y-auto'
                  onClose={setIsOpen}
                >
                  <div className='flex items-end justify-center min-h-screen pt-4 px-4 '>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>
                    <span
                      className='inline-block h-screen align-middle'
                      aria-hidden='true'
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0 scale-95'
                      enterTo='opacity-100 scale-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-95'
                    >
                      <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-3/4 '>
                        {property && (
                          <UpdateProperty
                            property={property}
                            closeModal={closeModal}
                          />
                        )}
                        <div className='mt-5'>
                          <button
                            type='button'
                            className='inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-dark text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light sm:text-sm'
                            onClick={() => setIsOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentProperties
