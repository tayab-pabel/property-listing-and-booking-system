import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { getSavedProperties } from '../../utilities/localStorage'

const SavedProperties = () => {

  const [properties, setProperties] = useState([])
  console.log(properties)

  useEffect(() => {
    let properties = getSavedProperties()
    setProperties(properties)
  }, [])
  return (
    <div className=''>
      <div className='max-w-lg mx-auto grid gap-5 lg:grid-cols-2 xl:grid-cols-4 lg:max-w-none'>
        {properties.map((property) => (
          <div
            key={property._id}
            className='rounded-lg shadow-lg overflow-hidden'
          >
            <img
              className='h-32 w-full object-cover'
              src={property.propertyFeaturedImage}
              alt=''
            />
            <div className='bg-white p-5 justify-between'>
              <span className='px-2 py-0.5 text-white text-xs bg-blue-light rounded-full capitalize'>
                {property.propertyType}
              </span>
              <h2 className='text-xl font-bold text-blue-dark'>
                {property.propertyPrice} BDT
              </h2>
              <p className='text-xs text-blue-dark font-medium'>
                {property.propertyBedrooms} Beds, {property.propertyBathrooms} Baths, {property.propertySqft} Sqft
              </p>
              <h3 className='text-sm font-bold text-blue-dark'>
                {property.propertyTitle}
              </h3>
              <p className='text-xs text-blue-dark'>
                {property.propertyAddress.addressLine1}, {property.propertyAddress.city} - {property.propertyAddress.postCode}
              </p>
              <div className='flex justify-between mt-3'>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-lg text-white bg-blue-light"
                >
                  See Details
                  <ArrowRightIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-lg text-white bg-blue-light"
                >
                  <TrashIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedProperties
