import React from 'react';

const PropertyEdit = () => {
  const features = [
    { id: 1, name: 'Reception Area' },
    { id: 2, name: 'Lobby in Building' },
    { id: 3, name: 'Tiled Floor' },
    { id: 4, name: 'Flooring' },
    { id: 5, name: 'Balcony' },
    { id: 6, name: 'Terrace' },
    { id: 7, name: 'Elevator' },
    { id: 8, name: 'Parking' },
    { id: 9, name: 'Guest Parking' },
    { id: 10, name: 'Fire Exit' },
    { id: 11, name: 'Fire Protection' },
    { id: 12, name: 'Gas' },
    { id: 13, name: 'Cylinder Gas' },
    { id: 14, name: 'Water' },
    { id: 15, name: 'Hot Water' },
    { id: 16, name: 'Electricity' },
    { id: 17, name: 'Electricity Backup' },
    { id: 18, name: 'Pool' },
    { id: 19, name: 'Gymnasium' },
    { id: 20, name: 'Solar Panels' },
    { id: 21, name: 'Servant Room' },
    { id: 22, name: 'Servant Toilet' },
    { id: 23, name: 'Well Ventilated' },
    { id: 24, name: 'Conference Room' },
    { id: 25, name: 'Stuff Watch Station' },
    { id: 26, name: 'Manager Room' },
    { id: 27, name: 'Executive Room' },
    { id: 28, name: 'Supervisor Room' },
    { id: 29, name: 'Cafeteria' },
    { id: 30, name: 'File Cabinet' },
    { id: 31, name: 'Coffee Table' },
    { id: 32, name: 'Office Sofa' },
    { id: 33, name: 'Training Chair' },
    { id: 34, name: 'Storage Cabinet' },
    { id: 35, name: 'Maintenance Staff' },
    { id: 36, name: 'Cleaning Service' },
  ]
  return (
    <div>
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
        <div className='sm:col-span-6'>
          <label
            htmlFor='floor-plan'
            className='block font-medium text-blue-dark '
          >
            Floor Plan
          </label>
          <div className="mt-1">
            <div className="w-44 flex justify-center px-6 pt-5 pb-6 border border-blue-dark rounded-lg">
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
                    className="relative mx-auto cursor-pointer bg-white rounded-md font-medium text-blue-light hover:text-blue-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-light"
                  >
                    <span>Upload floor plan</span>
                    <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" />
                  </label>
                </div>
                <p className="text-xs text-blue-dark">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:col-span-6'>
          <label
            htmlFor='floor-plan'
            className='block font-medium text-blue-dark '
          >
            Featured Photo
          </label>
          <div className="mt-1">
            <div className="w-44 flex justify-center px-6 pt-5 pb-6 border border-blue-dark rounded-lg">
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
                    className="relative mx-auto cursor-pointer bg-white rounded-md font-medium text-blue-light hover:text-blue-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-light"
                  >
                    <span>Upload Featured Photo</span>
                    <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" />
                  </label>
                </div>
                <p className="text-xs text-blue-dark">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:col-span-6'>
          <label
            htmlFor='floor-plan'
            className='block font-medium text-blue-dark '
          >
            Upload Image Gallery
          </label>
          <div className="mt-1">
            <div className="w-44 flex justify-center px-6 pt-5 pb-6 border border-blue-dark rounded-lg">
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
                    className="relative mx-auto cursor-pointer bg-white rounded-md font-medium text-blue-light hover:text-blue-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-light"
                  >
                    <span>Upload Image Gallery</span>
                    <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" />
                  </label>
                </div>
                <p className="text-xs text-blue-dark">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:col-span-6'>
          <label
            htmlFor='floor-plan'
            className='block font-medium text-blue-dark '
          >
            Check Features
          </label>
          <div className="mt-1">
            <div>
              <div>
                {features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="relative flex py-1">
                    <div className="mr-3 flex items-center h-5">
                      <input
                        id={`feature-${feature.id}`}
                        name={`feature-${feature.id}`}
                        type="checkbox"
                        className="focus:ring-blue-light h-4 w-4 text-blue-light border-gray-300 rounded"
                      />
                    </div>
                    <div className="text-sm">
                      <label 
                      htmlFor={`feature-${feature.id}`}className="font-medium text-blue-dark select-none"
                      >
                        {feature.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyEdit;