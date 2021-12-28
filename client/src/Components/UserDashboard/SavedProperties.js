import { LocationMarkerIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { getSavedProperties } from '../../utilities/localStorage'

const SavedProperties = () => {
  const savedProperties = [
    {
      id: '001',
      savedPropertyType: 'Basic',
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
    {
      id: '002',
      savedPropertyType: 'Basic',
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

  const [properties, setProperties] = useState([])
  console.log(properties)

  useEffect(() => {
    let properties = getSavedProperties()
    setProperties(properties)
  }, [])
  return (
    <div className=''>
      <div className='max-w-lg mx-auto grid gap-5 xl:grid-cols-4 lg:max-w-none'>
        {savedProperties.map((savedProperty) => (
          <div
            key={savedProperty.id}
            className='rounded-lg shadow-lg overflow-hidden'
          >
            <img
              className='h-48 w-full object-cover'
              src={savedProperty.featuredImage}
              alt=''
            />
            <div className='bg-white p-5 justify-between'>
              <div className=''>
                <span className='px-2 py-0.5 text-white text-xs bg-blue-light rounded-full'>
                  {savedProperty.propertType}
                </span>
                <h2 className='mt-1 text-2xl font-bold text-blue-dark'>
                  {savedProperty.price} BDT
                </h2>
                <div className='flex'>
                  <div className='flex flex-wrap content-center h-8'>
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
                      {savedProperty.beds} Beds
                    </p>
                  </div>
                  <div className='flex flex-wrap content-center ml-3 h-8'>
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
                      {savedProperty.beds} Baths
                    </p>
                  </div>
                  <div className='flex flex-wrap content-center ml-3 h-8'>
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
                      {savedProperty.size} Sqft
                    </p>
                  </div>
                </div>
                <h3 className='text-lg font-bold text-blue-dark'>
                  {savedProperty.name}
                </h3>
                <div className='flex flex-wrap content-center text-sm text-blue-dark capitalize'>
                  <LocationMarkerIcon
                    className='w-5 h-5 text-blue-dark'
                    aria-hidden='true'
                  />
                  <p className='text-sm text-blue-dark ml-1'>
                    {savedProperty.address.location},{' '}
                    {savedProperty.address.city} -{' '}
                    {savedProperty.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedProperties
