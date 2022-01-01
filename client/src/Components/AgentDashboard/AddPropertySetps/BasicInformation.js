import React from 'react'

const BasicInformation = () => {
  return (
    <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
      <div className='sm:col-span-3'>
        <label
          htmlFor='post-type'
          className='block font-medium text-blue-dark'
        >
          Post Type
        </label>
        <select
          id='post-type'
          name='post-type'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option selected disabled>Select</option>
          <option value='Basic'>
            Basic
          </option>
          <option value='Featured'>
            Featured
          </option>
        </select>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='purpose'
          className='block font-medium text-blue-dark'
        >
          Purpose
        </label>
        <select
          id='purpose'
          name='purpose'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option selected disabled>Select</option>
          <option value='Sale'>
            Sale
          </option>
          <option value='Rent'>
            Rent
          </option>
        </select>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='property-type'
          className='block font-medium text-blue-dark'
        >
          Property Type
        </label>
        <select
          id='property-type'
          name='property-type'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark focus:ring-blue-light focus:border-blue-light'
        >
          <option disabled selected>Select</option>
          <optgroup label="Residential">
            <option value="Apartment">Apartment</option>
            <option value="Plaza">Plaza</option>
            <option value="Plot">Plot</option>
            <option value="Room">Room</option>
            <option value="Duplex">Duplex</option>
            <option value="Building">Building</option>
          </optgroup>
          <optgroup label="Commercial">
            <option value="Apartment">Apartment</option>
            <option value="Plaza">Plaza</option>
            <option value="Plot">Plot</option>
            <option value="Room">Room</option>
            <option value="Duplex">Duplex</option>
            <option value="Building">Building</option>
          </optgroup>
        </select>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='available-date'
          className='block font-medium text-blue-dark'
        >
          Available Date
        </label>
        <input
          type='date'
          name='available-date'
          id='available-date'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-6'>
        <label
          htmlFor='title'
          className='block font-medium text-blue-dark'
        >
          Title
        </label>
        <input
          type='text'
          name='title'
          id='title'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-6'>
        <label
          htmlFor='address'
          className='block font-medium text-blue-dark'
        >
          Address
        </label>
        <input
          type='text'
          name='address'
          id='address'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='city'
          className='block font-medium text-blue-dark'
        >
          City
        </label>
        <input
          type='text'
          name='city'
          id='city'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='postcode'
          className='block font-medium text-blue-dark'
        >
          Postcode
        </label>
        <input
          type='text'
          name='postcode'
          id='postcode'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='size'
          className='block font-medium text-blue-dark'
        >
          Size
        </label>
        <input
          type='number'
          min="1" 
          max="100000"
          name='size'
          id='size'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='price'
          className='block font-medium text-blue-dark'
        >
          Price
        </label>
        <input
          type='number'
          min="1" 
          max="100000000"
          name='price'
          id='price'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='beds'
          className='block font-medium text-blue-dark'
        >
          Beds
        </label>
        <input
          type='number'
          min="1" 
          max="20"
          name='beds'
          id='beds'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='baths'
          className='block font-medium text-blue-dark'
        >
          Baths
        </label>
        <input
          type='number'
          min="1" 
          max="20"
          name='baths'
          id='baths'
          className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
        />
      </div>  
      <div className='sm:col-span-6'>
        <label
          htmlFor='description'
          className='block font-medium text-blue-dark'
        >
          Description
        </label>
        <div className='mt-1'>
          <textarea
            id='description'
            name='description'
            rows={4}
            className='block w-full border border-blue-dark rounded-lg sm:text-sm focus:ring-blue-light focus:border-blue-light'
            defaultValue={''}
          />
        </div>
      </div> 
    </div>
  )
}

export default BasicInformation
