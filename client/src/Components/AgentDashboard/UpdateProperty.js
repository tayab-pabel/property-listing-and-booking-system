import React from 'react'
import UpdatePropertyDetails from './AddPropertySetps/UpdatePropertyDetails'
import PropertyImagesUpload from './AddPropertySetps/PropertyImagesUpload'

const UpdateProperty = ({ property, closeModal }) => {
  return (
    <div>
      <div className='space-y-8 divide-y divide-y-blue-gray-200'>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <PropertyImagesUpload property={property} />
        </div>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <UpdatePropertyDetails property={property} closeModal={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default UpdateProperty
