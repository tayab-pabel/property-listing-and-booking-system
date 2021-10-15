import React from 'react';

const Hero = () => {
  return (
    <div className="container m-auto">
      <div className="relative">
          <div className="max-w-full mx-auto sm:px-6 lg:px-6">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                    className="h-full w-full bg-center object-cover"
                    src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="People working on laptops"
                  />
                <div className="absolute inset-0 bg-blue-dark bg-opacity-60 mix-blend-multiply" />
              </div>
              <div className="relative px-4 sm:px-6  lg:px-8 py-28 sm:py-38 lg:py-48">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Discover a place</span>
                  <span className="block text-white">you'll love to live</span>
                </h1>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-light bg-white  sm:px-8"
                    >
                      For Sale
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-light sm:px-8"
                    >
                      To Rent
                    </a>
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