import React from 'react'
import UpdatePropertyDetails from './AddPropertySetps/UpdatePropertyDetails'
import PropertyImagesUpload from './AddPropertySetps/PropertyImagesUpload'

const AddProperty = () => {
  return (
    <div>
      <div className='space-y-8 divide-y divide-y-blue-gray-200'>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <PropertyImagesUpload />
        </div>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <UpdatePropertyDetails />
        </div>
      </div>
    </div>
  )
}

export default AddProperty
