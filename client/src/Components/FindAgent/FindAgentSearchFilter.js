import React from 'react';

const FindAgentSearchFilter = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-10">
        <h2 className="text-3xl leading-6 font-bold text-blue-dark">Find an Agent</h2>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full mt-5 sm:mt-0">
            <label
              htmlFor="location" 
              className="block text-left text-sm font-medium text-blue-dark"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 focus:ring-blue-light focus:border-blue-light block w-full sm:text-sm border-blue-dark rounded-lg placeholder-blue-dark"
              placeholder="Location"
            />
          </div>

          <div className="w-full mt-5 sm:mt-0 sm:ml-3">
            <label 
              htmlFor="name" 
              className="block text-left text-sm font-medium text-blue-dark"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 focus:ring-blue-light focus:border-blue-light block w-full sm:text-sm border-blue-dark rounded-lg placeholder-blue-dark"
              placeholder="XYZ Agent"
            />
          </div>

          <div className='w-full mt-5 sm:mt-0 sm:ml-3'>
            <label
              htmlFor='radius'
              className='block text-left text-sm font-medium text-blue-dark'
            >
              Radius
            </label>
            <select
              id='searchRadius'
              name='searchRadius'
              className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-dark focus:outline-none focus:ring-blue-light focus:border-blue-light text-blue-dark placeholder-blue-dark sm:text-sm rounded-lg'
              defaultValue='Rent'
            >
              <option value='0'>This area only</option>
              <option value='0.25'>+ ¼ mile</option>
              <option value='0.5'>+ ½ mile</option>
              <option value='1'>+ 1 mile</option>
              <option value='3'>+ 3 miles</option>
              <option value='5'>+ 5 miles</option>
              <option value='10'>+ 10 miles</option>
              <option value='15'>+ 15 miles</option>
              <option value='20'>+ 20 miles</option>
              <option value='30'>+ 30 miles</option>
              <option value='40'>+ 40 miles</option>
            </select>
          </div>                  

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-lg text-white bg-blue-light hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light  sm:ml-3 sm:w-auto sm:text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindAgentSearchFilter;