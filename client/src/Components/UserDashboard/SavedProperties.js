import { LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'

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
  return (
    <div className=''>
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-none">
          {savedProperties.map((savedProperty) => (
            <div key={savedProperty.id} className="rounded-lg shadow-lg overflow-hidden">
              <img className="h-40 w-full object-cover" src={savedProperty.featuredImage} alt="" />
              <div className="bg-white p-5 justify-between">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-blue-dark">
                      {savedProperty.price} BDT
                    </h2>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-blue-light rounded-full">
                      {savedProperty.propertType}
                    </span>
                  </div>
                  <p className='text-xs text-blue-dark mt-1'>
                    {savedProperty.beds} Beds | {savedProperty.beds} Baths | {savedProperty.size} Sqft
                  </p>
                  <p className="text-sm leading-3 font-bold text-blue-dark mt-1">
                    {savedProperty.name}
                  </p>
                  <p className='text-xs text-blue-dark mt-1'>
                    {savedProperty.address.location}, {savedProperty.address.city} - {savedProperty.address.postalCode}
                  </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SavedProperties
