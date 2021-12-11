import React from 'react';

const AddProperty = () => {
  return (
    <div className='px-4 sm:px-6 py-6 xl:py-6 bg-white xl:shadow lg:rounded-lg'>
      <nav aria-label="Progress">
        <ol role="list" class="border border-blue-dark rounded-md divide-y divide-blue-dark md:flex md:divide-y-0">
          <li class="relative md:flex-1 md:flex">
            
            <a href="#" class="group flex items-center w-full">
              <span class="px-6 py-4 flex items-center text-sm font-medium">
                <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-light rounded-full group-hover:bg-indigo-800">
                  
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="ml-4 text-sm font-medium text-gray-900">Basic Information</span>
              </span>
            </a>

            
            <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
              <svg class="h-full w-full text-blue-dark" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </li>

          <li class="relative md:flex-1 md:flex">
            
            <a href="#" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
              <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-light rounded-full">
                <span class="text-blue-light">02</span>
              </span>
              <span class="ml-4 text-sm font-medium text-blue-light">Photo</span>
            </a>

            
            <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
              <svg class="h-full w-full text-blue-dark" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </li>

          <li class="relative md:flex-1 md:flex">
            <a href="#" class="group flex items-center">
              <span class="px-6 py-4 flex items-center text-sm font-medium">
                <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-dark rounded-full group-hover:border-blue-dark">
                  <span class="text-gray-500 group-hover:text-gray-900">03</span>
                </span>
                <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Features</span>
              </span>
            </a>
          </li>
        </ol>
      </nav>
      <div className='mt-10'>
        <form className='space-y-8 divide-y divide-y-blue-gray-200'>
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
            <div className='sm:col-span-3'>
              <label
                htmlFor='floor-plan'
                className='block font-medium text-blue-dark '
              >
                Floor Plan
              </label>
              <div className="mt-1">
                <div className="max-w-xs flex justify-center px-6 pt-5 pb-6 border-2 border-blue-dark border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-blue-dark"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-blue-dark">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-light hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-blue-dark">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;