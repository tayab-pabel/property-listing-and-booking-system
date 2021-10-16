import { LocationMarkerIcon, SortAscendingIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const tabs = [
    { name: 'For Rent', href: '#', current: true },
    { name: 'To Sale', href: '#', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="">
      <div className="relative">
        <div className="max-w-full mx-auto sm:px-6 lg:px-6">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full bg-center object-cover"
                src="https://images.pexels.com/photos/7078661/pexels-photo-7078661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 mix-blend-multiply" />
            </div>
            <div className="relative px-4 sm:px-6  lg:px-8 py-28 sm:py-38 lg:py-48">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Discover a place</span>
                <span className="block text-white">you'll love to live</span>
              </h1>
              <div className="mt-10">
                <div className="max-w-sm mx-auto">
                  <nav className="relative z-0 border-2 border-white rounded-lg shadow flex backdrop-filter backdrop-blur" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current ? 'text-white bg-blue-light rounded-lg' : 'text-white',
                          'group relative min-w-0 flex-1 overflow-hidden p-2 m-0.5 font-medium text-center focus:z-10'
                        )}
                        aria-current={tab.current ? 'page' : undefined}
                      >
                        <span>{tab.name}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LocationMarkerIcon className="h-5 w-5 text-blue-dark" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="focus:ring-blue-light block w-full rounded-none border-0 rounded-l-md pl-10 placeholder-blue-dark"
                        placeholder="Search"
                      />
                    </div>
                    {/* <button
                      type="button"
                      className="space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Sort</span>
                    </button> */}
                    <button
                      type="button"
                      className="space-x-2 px-2 ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-light"
                    >
                      
                      <span>Search</span>
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