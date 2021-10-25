import { LocationMarkerIcon, SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [redirect, setRedirect] = useState('rent')
  
  const tabs = [
    { 
      name: 'For Sale', 
      path: 'sale', 
    },
    {
      name: 'To Rent',
      path: 'rent', 
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <div className="">
      <div className="relative">
        <div className="max-w-full mx-auto sm:px-6 lg:px-6">
          <div className="relative rounded-lg sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full bg-center object-cover"
                src="https://images.pexels.com/photos/7078661/pexels-photo-7078661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="People working on laptops"
              />
              <div className="absolute bg-blue-dark bg-opacity-100 inset-0 mix-blend-multiply" />
            </div>
            <div className="relative px-4 sm:px-6  lg:px-8 py-36 sm:py-44 lg:py-52">
              <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Find a place</span>
                <span className="block text-white">you'll love to live</span>
              </h1>
              <div className="mt-10">
                <div className="max-w-xs mx-auto">
                  <nav className="relative p-1 rounded-lg flex bg-white" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <Link
                        key={tab.name}
                        onClick={() => setRedirect(tab.path)}
                        to= ""
                        className={classNames(
                          redirect && redirect === tab.path 
                          ? 'text-white bg-blue-light' 
                          : 'text-blue-dark ',
                          'group relative min-w-0 flex-1 overflow-hidden p-2 font-medium text-center focus:z-10 rounded-lg'
                        )}
                        // aria-current={
                        //   redirect && redirect === tab.path ? 'page' : undefined
                        // }
                      >
                        <span>{tab.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="max-w-md mx-auto">
                <div className="mt-2 flex rounded-lg bg-white">
                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LocationMarkerIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                      </div>
                      <input
                        type="search"
                        name="email"
                        id="email"
                        className="placeholder-blue-dark text-blue-dark focus:ring-0 block w-full border-0 rounded-lg pl-10"
                        placeholder="Location or Postcode"
                      />
                    </div>
                    <button
                      type="button"
                      className="space-x-2 whitespace-nowrap inline-flex items-center justify-center p-3 m-1 border border-transparent rounded-lg font-medium text-white bg-blue-light"
                    >
                      <SearchIcon className="h-5 w-5 text-white" aria-hidden="true"></SearchIcon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;