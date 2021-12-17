import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicInformation from './AddPropertySetps/BasicInformation';
import Features from './AddPropertySetps/Features';
import Photos from './AddPropertySetps/Photos';

const AddProperty = () => {

  const [step, setStep] = useState(1)

  function goNextStep() {
    setStep((step) => step + 1)
  }

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
          <div>
            {step === 1 && <BasicInformation/>} 
            {step === 2 && <Photos/>} 
            {step === 3 && <Features/>} 
          </div>
          <div className="pt-4 flex justify-end">
            {step !== 3 &&
              <Link
                onClick={goNextStep}
                className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                >
                Next
              </Link>
            }
            {step === 3 &&
              <button
                type="submit"
                onClick={goNextStep}
                className="ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light"
                >
                Submit
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;