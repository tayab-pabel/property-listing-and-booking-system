import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInformation from './AddPropertySetps/BasicInformation';
import Features from './AddPropertySetps/Features';
import Photos from './AddPropertySetps/Photos';

const AddProperty = () => {

  return (
    <div >
      <form className='space-y-8 divide-y divide-y-blue-gray-200'>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <BasicInformation/>
        </div>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <Photos/>
        </div>
        <div className='p-5 bg-white xl:shadow lg:rounded-lg'>
          <Features/>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-5 bg-blue-light rounded-lg py-2 px-5 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
            >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;