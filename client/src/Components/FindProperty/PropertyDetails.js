import React, { Fragment, useEffect, useState } from 'react'
import AgentContact from '../Sections/AgentContact'
import ImageGallery from 'react-image-gallery'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  HeartIcon,
  PhoneIcon,
  ShareIcon,
} from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import Loader from './../Elements/Loader'
import moment from 'moment'
import { propertySavetoLocalStorage } from './../../utilities/localStorage'
import { trythyValueArrayFromObject } from '../../utilities/helperFunctions'

const PropertyDetails = () => {
  const { id } = useParams()
  const [property, setProperty] = useState({})
  const [propertyGallery, setPropertyGallery] = useState([])
  const [features, setFeatures] = useState([])

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        'https://propertymarketbd.herokuapp.com/api/property/' + id
      )
      setProperty(data)
      setPropertyGallery(
        data.propertyImages.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      )
      setFeatures(trythyValueArrayFromObject(data.propertyFeatures))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  return (
    <div>
      <div className='relative bg-gray-100 pb-10'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='py-4'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-blue-dark hover:border-blue-light hover:bg-blue-light hover:text-white shadow-sm text-sm leading-4 font-medium rounded-md text-blue-dark bg-transparent'
            >
              <ArrowLeftIcon
                className='-ml-1 mr-2 h-5 w-5'
                aria-hidden='true'
              />
              Back to search results
            </button>
          </div>
          <div className='bg-white rounded-lg shadow py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
            {property && propertyGallery ? (
              <div className='lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10 xl:gap-x-8'>
                <div className='lg:col-span-8'>
                  <div className=''>
                    <ImageGallery items={propertyGallery} showIndex={true} />
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div>
                      <h1 className='text-3xl font-bold text-blue-dark'>
                        {property.propertyPrice} BDT
                      </h1>
                    </div>
                    <div className='flex'>
                      <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-light'
                        onClick={() => propertySavetoLocalStorage(property)}
                      >
                        <HeartIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        Save
                      </button>
                      <button
                        type='button'
                        className='ml-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-light'
                      >
                        <ShareIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        Share
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-blue-dark'>
                      {property.propertyTitle}
                    </h3>
                    <div className='flex'>
                      <div className='flex flex-wrap content-center h-7'>
                        <span>
                          <svg
                            class='w-5 h-5 fill-current text-blue-dark'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='%23222'
                          >
                            <path d='M5.56 10.2a1.83 1.83 0 011.77-1.86 1.87 1.87 0 010 3.73 1.83 1.83 0 01-1.77-1.87zm16 2.8H4.66V6.47A.46.46 0 004.23 6H2.44a.46.46 0 00-.44.47v11.21h2.67v-1.87h14.66v1.87H22v-4.2a.46.46 0 00-.44-.47zm-3.12-4.2h-8a.46.46 0 00-.44.47v2.8h11.56a3.2 3.2 0 00-3.12-3.27z' />
                          </svg>
                        </span>
                        <p className='text-sm text-blue-dark ml-1 font-medium'>
                          {property.propertyBedrooms} Beds
                        </p>
                      </div>
                      <div className='flex flex-wrap content-center ml-3 h-7'>
                        <span>
                          <svg
                            className='w-5 h-5 fill-current text-blue-dark'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='%23222'
                          >
                            <path d='M2 14c0-.5.5-1 1-1h18c.5 0 1 .5 1 1s-.5 1-1 1H3a1 1 0 01-1-1z' />
                            <path d='M3 13h18v4.4a1.6 1.6 0 01-1.6 1.6H4.7A1.6 1.6 0 013 17.4V13zm3 6h2v1.4a.6.6 0 01-.5.6h-1a.6.6 0 01-.5-.6zm10 0h2v1.4a.6.6 0 01-.5.6h-1a.6.6 0 01-.5-.6zM5.8 4.7l2.6-1.5a.6.6 0 01.7.2l.7 1.3-3.4 2-.8-1.3a.6.6 0 01.2-.7z' />
                            <path d='M2.5 13.5V4.8A2.5 2.5 0 014.8 2a2.6 2.6 0 01.4 0c2.9 0 3 1.6 3 1.7a11 11 0 01-.6 1s-.9.5-1 0S6 4 5.4 4s-.9.4-.9 1.2v8.3z' />
                          </svg>
                        </span>
                        <p className='text-sm text-blue-dark ml-1 font-medium'>
                          {property.propertyBathrooms} Baths
                        </p>
                      </div>
                      <div className='flex flex-wrap content-center ml-3 h-7'>
                        <span className=''>
                          <svg
                            className='w-5 h-5 fill-current text-blue-dark'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='%23222'
                          >
                            <path d='M20.1 3H3.9a.9.9 0 00-.9.9v16.2a.9.9 0 00.9.9h16.2a.9.9 0 00.9-.9V3.9a.9.9 0 00-.9-.9zm-.9 8.1h-6.3V4.8h6.3zm-8.1-6.3v6.3H4.8V4.8zm-6.3 8.1h6.3v6.3H4.8zm8.1 6.3v-6.3h6.3v6.3z' />
                          </svg>
                        </span>
                        <p className='text-sm text-blue-dark ml-1 font-medium'>
                          {property.propertySqft} Sqft
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h3 className='text-lg text-blue-dark font-bold'>
                      Property Informations
                    </h3>
                    <div className='flex justify-between items-center mt-2 border-t border-b py-2 border-blue-soft'>
                      <div>
                        <div>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Purpose
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {property.purpose}
                          </p>
                        </div>
                        <div className='mt-2'>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Post Date
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {moment(property.postedDate).fromNow()}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Property Type
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {property.propertyType}
                          </p>
                        </div>
                        <div className='mt-2'>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Available Date
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {moment(property.propertyAvailability).fromNow()}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Furnish Type
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {property.propertyFurnished
                              ? 'Furnished'
                              : 'Unfurnished'}
                          </p>
                        </div>
                        <div className='mt-2'>
                          <h4 className='text-base text-blue-dark font-bold'>
                            Floor Number
                          </h4>
                          <p className='text-sm text-blue-dark'>
                            {property.propertyFloorNumber}th
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h3 className='text-lg text-blue-dark font-bold'>
                      Floor Plan
                    </h3>
                    <div>
                      <div
                        onClick={openModal}
                        className='mt-2 p-5 rounded-lg max-w-sm mx-auto border border-blue-light shadow cursor-pointer'
                      >
                        <img
                          className='w-80 mx-auto'
                          src={property.propertyFloorPlanImage}
                          alt=''
                        />
                        <button
                          type='button'
                          className='px-4 mt-4 py-2 mx-auto flex text-sm font-medium text-white bg-blue-light rounded-lg'
                        >
                          <svg
                            className='h-5 w-5 mr-1.5'
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            data-testid='floorplans-icon'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M1.875.125a1.75 1.75 0 00-1.75 1.75v16.25c0 .967.784 1.75 1.75 1.75h16.25a1.75 1.75 0 001.75-1.75v-6.517a1.75 1.75 0 00-1.75-1.75h-7.283V7.24a.75.75 0 00-1.5 0v2.62h-2.33a.75.75 0 000 1.5h2.33v.531l-1.607 1.62A.75.75 0 008.8 14.567l1.829-1.844a.749.749 0 00.213-.605v-.76h7.283a.25.25 0 01.25.25v6.517a.25.25 0 01-.25.25h-7.3c.011-.082.017-.165.017-.25V16.13a.75.75 0 00-1.5 0v1.995a.25.25 0 01-.25.25H1.875a.25.25 0 01-.25-.25v-6.517a.25.25 0 01.25-.25h1.318a.75.75 0 000-1.5H1.875c-.085 0-.168.006-.25.018V1.875a.25.25 0 01.25-.25h7.217a.25.25 0 01.25.25v1.276l-1.607 1.62A.75.75 0 008.8 5.828l1.671-1.685a.75.75 0 00.37-.593.752.752 0 00.001-.171V1.875a1.75 1.75 0 00-1.75-1.75H1.875z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                          See Floor Plan
                        </button>
                      </div>

                      <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                          as='div'
                          className='fixed inset-0 z-10 bg-gray-900 bg-opacity-80 transition-opacity'
                          onClose={closeModal}
                        >
                          <div className='min-h-screen px-4 text-center'>
                            <Transition.Child
                              as={Fragment}
                              enter='ease-out duration-300'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='ease-in duration-200'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Dialog.Overlay className='fixed inset-0' />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
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
                              <div className='inline-block max-w-xl p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-lg'>
                                <div className=''>
                                  <img
                                    className='h-full w-full'
                                    src={property.propertyFloorPlanImage}
                                    alt=''
                                  />
                                </div>

                                <div className='mt-4 max-w-full mx-auto'>
                                  <button
                                    type='button'
                                    className='px-4 py-2 text-sm font-medium text-white bg-blue-light rounded-lg'
                                    onClick={closeModal}
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

                  <div className='mt-10'>
                    <h3 className='text-lg text-blue-dark font-bold'>
                      Features & Amenities
                    </h3>
                    <div className='grid grid-cols-2 text-base text-blue-dark mt-3'>
                      {features.map((feature, index) => (
                        <div
                          className='flex text-base items-center capitalize'
                          key={index}
                        >
                          <CheckCircleIcon className='w-5 h-5 text-blue-light mr-1.5 '></CheckCircleIcon>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h3 className='text-lg text-blue-dark font-bold'>
                      Description
                    </h3>
                    <p className='text-base text-justify text-blue-dark mt-3'>
                      {property.propertyDescription}
                    </p>
                  </div>
                </div>
                <div className='lg:col-span-4'>
                  <div className='p-5 mb-5 bg-white border border-blue-dark rounded-lg shadow'>
                    <img
                      className='w-28'
                      src={property.agentLogo}
                      alt='Agent Logo'
                    />
                    <div className='mt-2'>
                      <Link
                        to='/agent-details'
                        className='text-xl font-bold text-blue-dark hover:text-blue-light'
                      >
                        {property.agentName}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/'
                        className='text-base font-medium text-blue-light'
                      >
                        See Agent Properties
                      </Link>
                    </div>
                    <div className='mt-1 flex items-center'>
                      <PhoneIcon
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                        aria-hidden='true'
                      />
                      <p className='text-sm text-blue-dark capitalize'>
                        {property.agentPhoneNumber}
                      </p>
                    </div>
                  </div>
                  <AgentContact />
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
