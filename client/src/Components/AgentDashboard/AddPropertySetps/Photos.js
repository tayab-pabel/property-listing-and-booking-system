import React from 'react'

const Photos = () => {
  return (
    <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
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
    </div>
  )
}

export default Photos
