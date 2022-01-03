import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import PropertyEdit from './PropertyEdit'
import Loader from './../Elements/Loader'
import axios from 'axios'

const AgentProperties = () => {
  const properties = [
    {
      id: '001',
      postType: 'Basic',
      purpose: 'Rent',
      name: 'Two bedrooms appertment',
      propertType: 'Apartment',
      address: {
        location: 'Dhanmondi',
        city: 'Dhaka',
        postalCode: '1215',
      },
      size: '1200',
      price: '25,000',
      beds: '3',
      baths: '3',
      floor: '4',
      featuredImage:
        'https://lid.zoocdn.com/u/2400/1800/c447789c6cf4ab231b224a751c3eba3c91b2ba77.jpg:p',
    },
  ]

  // Modal Functionalities
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  // Properties Fucntionalities
  const [currentAgentProperties, setCurrentAgentProperties] = React.useState([])
  const { _id } = JSON.parse(localStorage.getItem('loggedInUser'))
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
                      className='px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Title & Address
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Info & Type
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Purpose
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue-dark uppercase tracking-wider'
                    >
                      Status
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
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
                          <a
                            onClick={openModal}
                            href='#'
                            className='text-blue-light hover:text-blue-light'
                          >
                            Edit
                          </a>
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
                  <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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
                      <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6'>
                        <PropertyEdit />
                        <div className='mt-5'>
                          <button
                            type='button'
                            className='inline-flex justify-center w-full rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-light text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light sm:text-sm'
                            onClick={() => setIsOpen(false)}
                          >
                            Update
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
