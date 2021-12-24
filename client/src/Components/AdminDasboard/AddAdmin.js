import React from 'react';

const AddAdmin = () => {
  return (
    <div className=''>
      <div className='px-4 sm:px-6 py-6 lg:py-6 bg-white lg:shadow lg:rounded-lg'>
        <form className="space-y-8 divide-y divide-y-blue-gray-200">
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='email'
                className='block font-medium text-blue-dark'
              >
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='given-name'
                className='mt-1 block w-full border-blue-dark rounded-lg text-blue-dark sm:text-sm focus:ring-blue-light focus:border-blue-light'
              />
            </div>      
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
              >
              Add Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;