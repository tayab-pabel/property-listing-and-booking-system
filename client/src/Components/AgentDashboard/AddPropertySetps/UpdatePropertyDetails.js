import { useFormik } from 'formik'
import React from 'react'
import { propertyFeatures } from '../../../Data/Property'

const UpdatePropertyDetails = () => {
  const formik = useFormik({
    initialValues: {
      postType: 'basic',
      purpose: 'rent',
      propertyStatus: 'active',
      propertyCategory: 'residential',
      propertyType: 'apartment',
      propertyTitle: 'Two bedrooms apartment',
      propertyAvailability: Date.now(),
      propertyDescription: 'Recognize the best when youre in Dhanmondi',
      propertyPrice: 25000,
      propertyBedrooms: 2,
      propertyBathrooms: 2,
      propertyFloorNumber: 1,
      propertySqft: 1000,
      propertyFurnished: true,
      addressLine1: 'Kadamtala',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1201',
      propertyFeatures: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const { values, handleChange, handleSubmit } = formik
  console.log(values)
  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-6 gap-6'>
      <div className='col-span-3'>
        <label htmlFor='postType' className='block font-medium text-blue-dark'>
          Post Type
        </label>
        <select
          id='postType'
          name='postType'
          value={values.postType}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option value='basic'>Basic</option>
          <option value='featured'>Featured</option>
        </select>
      </div>
      <div className='col-span-3'>
        <label htmlFor='purpose' className='block font-medium text-blue-dark'>
          Purpose
        </label>
        <select
          id='purpose'
          name='purpose'
          value={values.purpose}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option value='rent'>Rent</option>
          <option value='buy'>Buy</option>
        </select>
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='propertyCategory'
          className='block font-medium text-blue-dark'
        >
          Property Category
        </label>
        <select
          id='propertyCategory'
          name='propertyCategory'
          value={values.propertyCategory}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option value='resindential'>Resindential</option>
          <option value='commercial'>Commercial</option>
        </select>
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='propertyType'
          className='block font-medium text-blue-dark'
        >
          Property Type
        </label>
        <select
          id='propertyType'
          name='propertyType'
          value={values.propertyType}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <optgroup label='Residential'>
            <option value='apartment'>Apartment</option>
            <option value='plaza'>Plaza</option>
            <option value='plot'>Plot</option>
            <option value='room'>Room</option>
            <option value='duplex'>Duplex</option>
            <option value='building'>Building</option>
          </optgroup>
          <optgroup label='Commercial'>
            <option value='office'>Office</option>
            <option value='shop'>Shop</option>
            <option value='factory'>Factory</option>
            <option value='warehouse'>Warehouse</option>
            <option value='garage'>Garage</option>
            <option value='floor'>Floor</option>
          </optgroup>
        </select>
      </div>
      <div className='col-span-6'>
        <label
          htmlFor='propertyTitle'
          className='block font-medium text-blue-dark'
        >
          propertyTitle
        </label>
        <input
          type='text'
          name='propertyTitle'
          id='propertyTitle'
          value={values.propertyTitle}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='addressLine1'
          className='block font-medium text-blue-dark'
        >
          Address Line
        </label>
        <input
          type='text'
          name='addressLine1'
          id='addressLine1'
          value={values.addressLine1}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='propertyAvailability'
          className='block font-medium text-blue-dark'
        >
          Available Date
        </label>
        <input
          type='date'
          name='propertyAvailability'
          id='propertyAvailability'
          value={values.propertyAvailability}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>

      <div className='col-span-3'>
        <label htmlFor='city' className='block font-medium text-blue-dark'>
          City
        </label>
        <input
          type='text'
          name='city'
          id='city'
          value={values.city}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-3'>
        <label htmlFor='postCode' className='block font-medium text-blue-dark'>
          Post Code
        </label>
        <input
          type='text'
          name='postCode'
          id='postCode'
          value={values.postCode}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>

      <div className='col-span-3'>
        <label
          htmlFor='propertySqft'
          className='block font-medium text-blue-dark'
        >
          Square Feet
        </label>
        <input
          type='number'
          name='propertySqft'
          id='propertySqft'
          value={values.propertySqft}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>

      <div className='col-span-3'>
        <label
          htmlFor='propertyPrice'
          className='block font-medium text-blue-dark'
        >
          Property Price
        </label>
        <input
          type='number'
          name='propertyPrice'
          id='propertyPrice'
          value={values.propertyPrice}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='propertyBedrooms'
          className='block font-medium text-blue-dark'
        >
          Number of Bedrooms
        </label>
        <input
          type='number'
          name='propertyBedrooms'
          id='propertyBedrooms'
          value={values.propertyBedrooms}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-3'>
        <label
          htmlFor='propertyBathrooms'
          className='block font-medium text-blue-dark'
        >
          Number of Bathrooms
        </label>
        <input
          type='number'
          name='propertyBathrooms'
          id='propertyBathrooms'
          value={values.propertyBathrooms}
          onChange={handleChange}
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='col-span-6'>
        <label
          htmlFor='propertyDescription'
          className='block font-medium text-blue-dark'
        >
          Property Details
        </label>
        <div className='mt-1'>
          <textarea
            id='propertyDescription'
            name='propertyDescription'
            rows={4}
            value={values.propertyDescription}
            onChange={handleChange}
            className='block w-full border border-blue-dark rounded-lg sm:text-sm focus:ring-blue-light focus:border-blue-light'
            defaultValue={''}
          />
        </div>
      </div>
      <div className='col-span-6'>
        <label className='block font-medium text-blue-dark '>
          Check Features
        </label>
        <div className='grid grid-cols-2'>
          {propertyFeatures.map((feature, featureIdx) => (
            <label
              htmlFor={`feature-${feature.id}`}
              key={featureIdx}
              className='py-1 text-blue-dark cursor-pointer'
            >
              <input
                id={`feature-${feature.id}`}
                name='propertyFeatures'
                onChange={handleChange}
                value={feature.value}
                type='checkbox'
                className='focus:ring-blue-light h-4 w-4 border-gray-300 rounded cursor-pointer mr-2'
              />
              {feature.name}
            </label>
          ))}
        </div>
      </div>
      <div className='col-span-6 ml-auto '>
        <button
          type='submit'
          className='ml-5 bg-blue-light rounded-lg py-2 px-5 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
        >
          Update Property
        </button>
      </div>
    </form>
  )
}

export default UpdatePropertyDetails
