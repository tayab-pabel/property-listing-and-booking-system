import { LocationMarkerIcon } from '@heroicons/react/outline'
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
      <div className='max-w-lg mx-auto grid gap-5 xl:grid-cols-4 lg:max-w-none'>
        {properties.map((property) => (
          <div
            key={property._id}
            className='rounded-lg shadow-lg overflow-hidden'
          >
            <img
              className='h-40 w-full object-cover'
              src={property.propertyFeaturedImage}
              alt=''
            />
            <div className='bg-white p-5 justify-between'>
              <div className=''>
                <span className='px-2 py-0.5 text-white text-xs bg-blue-light rounded-full capitalize'>
                  {property.propertyType}
                </span>
                <h2 className='mt-1 text-xl font-bold text-blue-dark'>
                  {property.propertyPrice} BDT
                </h2>
                <p className='text-xs text-blue-dark mt-1 font-medium'>
                  {property.propertyBedrooms} Beds, {property.propertyBathrooms} Baths, {property.propertySqft} Sqft
                </p>
                <h3 className='text-sm mt-1 font-bold text-blue-dark'>
                  {property.propertyTitle}
                </h3>
                <p className='text-xs text-blue-dark mt-1'>
                  {property.propertyAddress.addressLine1}, {property.propertyAddress.city} - {property.propertyAddress.postCode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedProperties
